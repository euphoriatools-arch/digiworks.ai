import { test, expect, type Page } from '@playwright/test';

export const SAMPLE_PAGES = [
  { path: '/', name: 'home' },
  { path: '/services/ai-agent-development.html', name: 'services-agent' },
  { path: '/services/data-and-cloud.html', name: 'services-data' },
  { path: '/solutions/ai-automation.html', name: 'solutions-automation' },
  { path: '/solutions/generative-ai.html', name: 'solutions-genai' },
  { path: '/industries/ai-for-healthcare.html', name: 'industries-health' },
  { path: '/industries/ai-for-fintech.html', name: 'industries-fintech' },
  { path: '/hire/hire-ai-engineers.html', name: 'hire-engineers' },
  { path: '/hire/dedicated-ai-pods.html', name: 'hire-pods' },
  { path: '/about.html', name: 'about' },
  { path: '/team.html', name: 'team' },
  { path: '/case-studies.html', name: 'case-studies' },
  { path: '/case-studies/drive-guard.html', name: 'case-drive-guard' },
  { path: '/blog.html', name: 'blog' },
  { path: '/blog/how-to-build-ai-agent-2026.html', name: 'blog-post' },
  { path: '/contact.html', name: 'contact' },
];

const DESKTOP_WIDTHS = [1280, 1366, 1440, 1920] as const;

async function disableCache(page: Page) {
  const session = await page.context().newCDPSession(page);
  await session.send('Network.setCacheDisabled', { cacheDisabled: true });
}

async function headerBox(page: Page) {
  return page.evaluate(() => {
    const header = document.querySelector('header');
    const bar = header?.querySelector(':scope > div') as HTMLElement | null;
      const cta = header?.querySelector('a.btn-primary.whitespace-nowrap, button.btn-primary.whitespace-nowrap') as HTMLElement | null;
    const menu = header?.querySelector('[aria-label="Menu"]') as HTMLElement | null;
    const vw = window.innerWidth;
    const br = (el: HTMLElement | null) => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { left: r.left, right: r.right, top: r.top, width: r.width, height: r.height };
    };
    const overflowing = [...(header?.querySelectorAll('*') || [])]
      .map((el) => {
        const r = (el as HTMLElement).getBoundingClientRect();
        if (r.width < 1 || r.right <= vw + 1) return null;
        return {
          tag: (el as HTMLElement).tagName,
          cls: ((el as HTMLElement).className || '').toString().slice(0, 80),
          text: ((el as HTMLElement).innerText || '').replace(/\s+/g, ' ').trim().slice(0, 40),
          right: Math.round(r.right),
        };
      })
      .filter(Boolean);
    return { vw, bar: br(bar), cta: br(cta), menu: br(menu), ctaText: (cta?.textContent || '').trim(), overflowing };
  });
}

test.describe('preloader session', () => {
  test('shows once then stays off on the next page', async ({ page, baseURL }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.removeItem('digiworks-intro');
      } catch {
        /* ignore */
      }
    });
    await disableCache(page);
    await page.goto(`${baseURL}/`, { waitUntil: 'domcontentloaded' });
    const intro = page.locator('#dw-intro');
    await expect(intro).toBeVisible({ timeout: 5_000 });
    await page.evaluate(() => document.fonts.ready.catch(() => undefined));
    await expect(intro).toBeHidden({ timeout: 15_000 });
    await page.goto(`${baseURL}/contact.html`, { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#dw-intro')).toBeHidden();
  });
});

for (const p of SAMPLE_PAGES) {
  for (const width of DESKTOP_WIDTHS) {
    test(`${p.name}: header CTA inside ${width}px after fonts`, async ({ page, baseURL }) => {
      await page.addInitScript(() => {
        try {
          sessionStorage.setItem('digiworks-intro', '1');
        } catch {
          /* ignore */
        }
      });
      await page.setViewportSize({ width, height: 900 });
      await disableCache(page);
      await page.goto(`${baseURL}${p.path}`, { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready.catch(() => undefined));
      await page.waitForTimeout(200);
      const m = await headerBox(page);
      expect(m.ctaText, `${p.name} header CTA`).toBe('Book a Call');
      expect(m.cta, `${p.name} missing header CTA`).toBeTruthy();
      expect(m.cta!.width).toBeGreaterThan(8);
      expect(m.cta!.right, JSON.stringify(m.overflowing)).toBeLessThanOrEqual(m.vw + 1);
      expect(m.cta!.left).toBeGreaterThanOrEqual(-1);
      expect(m.bar!.right, JSON.stringify(m.overflowing)).toBeLessThanOrEqual(m.vw + 1);
    });
  }

  test(`${p.name}: header CTA inside 390px after fonts`, async ({ page, baseURL }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.setItem('digiworks-intro', '1');
      } catch {
        /* ignore */
      }
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await disableCache(page);
    await page.goto(`${baseURL}${p.path}`, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready.catch(() => undefined));
    await page.waitForTimeout(200);
    const m = await headerBox(page);
    expect(m.bar!.right).toBeLessThanOrEqual(m.vw + 1);
    expect(m.bar!.left).toBeGreaterThanOrEqual(-1);
    expect(m.menu, `${p.name} missing menu`).toBeTruthy();
    expect(m.menu!.right).toBeLessThanOrEqual(m.vw + 1);
  });

  test(`${p.name}: header does not shift after fonts ready`, async ({ page, baseURL }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.setItem('digiworks-intro', '1');
      } catch {
        /* ignore */
      }
    });
    await page.setViewportSize({ width: 1280, height: 900 });
    await disableCache(page);
    await page.goto(`${baseURL}${p.path}`, { waitUntil: 'load' });
    await page.waitForSelector('header .btn-primary');
    const before = await headerBox(page);
    await page.evaluate(() => document.fonts.ready.catch(() => undefined));
    await page.waitForTimeout(100);
    const after = await headerBox(page);
    const keys = ['left', 'right', 'width', 'height'] as const;
    for (const k of keys) {
      expect(Math.abs((after.cta?.[k] ?? 0) - (before.cta?.[k] ?? 0)), `${p.name} cta ${k}`).toBeLessThanOrEqual(2);
      expect(Math.abs((after.bar?.[k] ?? 0) - (before.bar?.[k] ?? 0)), `${p.name} bar ${k}`).toBeLessThanOrEqual(2);
    }
  });
}
