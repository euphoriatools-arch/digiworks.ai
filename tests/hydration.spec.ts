import { test, expect, type Page } from '@playwright/test';

/** Caps = original H1 line counts at 1440 / 390 with Unbounded (extracted original markup). */
const pages = [
  { path: '/', name: 'home', h1Max: [3, 5] },
  { path: '/services/ai-agent-development.html', name: 'ai-agent-development', h1Max: [2, 3] },
  { path: '/services/ai-security.html', name: 'ai-security', h1Max: [3, 5] },
  { path: '/services/cloud-and-devops.html', name: 'cloud-and-devops', h1Max: [3, 5] },
  { path: '/services/data-engineering.html', name: 'data-engineering', h1Max: [3, 5] },
  { path: '/services/intelligent-document-processing.html', name: 'intelligent-document-processing', h1Max: [3, 5] },
  { path: '/services/machine-learning-development.html', name: 'machine-learning-development', h1Max: [3, 5] },
  { path: '/services/artificial-intelligence.html', name: 'artificial-intelligence', h1Max: [3, 5] },
  { path: '/services/machine-learning.html', name: 'machine-learning', h1Max: [2, 3] },
  { path: '/services/autonomous-ai-agents.html', name: 'autonomous-ai-agents', h1Max: [2, 4] },
  { path: '/services/ai-chatbot-development.html', name: 'ai-chatbot-development', h1Max: [2, 3] },
  { path: '/services/natural-language-processing.html', name: 'natural-language-processing', h1Max: [2, 3] },
  { path: '/services/generative-ai-development.html', name: 'generative-ai-development', h1Max: [2, 3] },
  { path: '/services/predictive-modeling.html', name: 'predictive-modeling', h1Max: [2, 3] },
  { path: '/services/automation-and-integration.html', name: 'automation-and-integration', h1Max: [2, 3] },
  { path: '/services/intelligent-automation.html', name: 'intelligent-automation', h1Max: [2, 3] },
  { path: '/services/data-and-cloud.html', name: 'data-and-cloud', h1Max: [2, 2] },
  { path: '/services/real-time-data-streaming.html', name: 'real-time-data-streaming', h1Max: [2, 3] },
  { path: '/services/cloud-architecture-and-deployment.html', name: 'cloud-architecture-and-deployment', h1Max: [2, 3] },
  { path: '/services/mlops-setup.html', name: 'mlops-setup', h1Max: [2, 3] },
  { path: '/services/security-and-compliance.html', name: 'security-and-compliance', h1Max: [2, 3] },
  { path: '/services/ai-red-teaming.html', name: 'ai-red-teaming', h1Max: [2, 3] },
  { path: '/services/privacy-preserving-ai.html', name: 'privacy-preserving-ai', h1Max: [2, 3] },
  { path: '/services/ai-training-and-support.html', name: 'ai-training-and-support', h1Max: [2, 3] },
  { path: '/services/mobile-app-development.html', name: 'mobile-app-development', h1Max: [2, 3] },
  { path: '/solutions/ai-automation.html', name: 'ai-automation', h1Max: [2, 3] },
  { path: '/solutions/predictive-analytics.html', name: 'predictive-analytics', h1Max: [2, 4] },
  { path: '/solutions/conversational-ai.html', name: 'conversational-ai', h1Max: [2, 3] },
  { path: '/solutions/computer-vision-image-recognition.html', name: 'computer-vision-image-recognition', h1Max: [2, 4] },
  { path: '/solutions/generative-ai.html', name: 'generative-ai-solutions', h1Max: [2, 3] },
  { path: '/solutions/ai-for-cybersecurity.html', name: 'ai-for-cybersecurity', h1Max: [2, 3] },
  { path: '/industries/ai-for-healthcare.html', name: 'ai-for-healthcare', h1Max: [2, 3] },
  { path: '/industries/ai-for-fintech.html', name: 'ai-for-fintech', h1Max: [2, 3] },
  { path: '/industries/ai-for-retail-and-ecommerce.html', name: 'ai-for-retail-and-ecommerce', h1Max: [2, 4] },
  { path: '/industries/ai-for-manufacturing.html', name: 'ai-for-manufacturing', h1Max: [2, 3] },
  { path: '/industries/ai-for-logistics-and-supply-chain.html', name: 'ai-for-logistics-and-supply-chain', h1Max: [2, 3] },
  { path: '/industries/ai-for-real-estate.html', name: 'ai-for-real-estate', h1Max: [2, 3] },
  { path: '/industries/ai-for-education.html', name: 'ai-for-education', h1Max: [2, 2] },
  { path: '/hire/dedicated-ai-pods.html', name: 'dedicated-ai-pods', h1Max: [2, 3] },
  { path: '/hire/hire-ai-engineers.html', name: 'hire-ai-engineers', h1Max: [2, 3] },
  { path: '/hire/hire-ml-engineers.html', name: 'hire-ml-engineers', h1Max: [2, 3] },
  { path: '/hire/hire-data-scientists.html', name: 'hire-data-scientists', h1Max: [2, 3] },
  { path: '/hire/hire-nlp-engineers.html', name: 'hire-nlp-engineers', h1Max: [2, 3] },
  { path: '/hire/hire-computer-vision-developers.html', name: 'hire-computer-vision-developers', h1Max: [2, 3] },
  { path: '/about.html', name: 'about', h1Max: [2, 3] },
  { path: '/team.html', name: 'team', h1Max: [2, 3], skipFaq: true },
  { path: '/case-studies.html', name: 'case-studies', h1Max: [2, 2], skipFaq: true },
  { path: '/case-studies/checkmate.html', name: 'checkmate', h1Max: [3, 5], skipFaq: true },
  { path: '/ai-readiness.html', name: 'ai-readiness', h1Max: [2, 3], skipFaq: true },
  { path: '/contact.html', name: 'contact', h1Max: [2, 3], skipFaq: true },
  { path: '/blog.html', name: 'blog', h1Max: [2, 4], skipFaq: true },
  { path: '/privacy-policy.html', name: 'privacy-policy', h1Max: [1, 2], skipFaq: true },
  { path: '/terms-of-use.html', name: 'terms-of-use', h1Max: [1, 2], skipFaq: true },
];

async function seoSnapshot(page: Page) {
  return page.evaluate(() => {
    const canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const jsonld = [...document.querySelectorAll('script[type="application/ld+json"]')]
      .map((s) => (s.textContent || '').replace(/\s+/g, ' ').trim())
      .sort()
      .join('\n---\n');
    return {
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') ?? '',
      canonical: canon?.href ?? '',
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.getAttribute('content') ?? '',
      ogDescription: document.querySelector('meta[property="og:description"]')?.getAttribute('content') ?? '',
      ogUrl: document.querySelector('meta[property="og:url"]')?.getAttribute('content') ?? '',
      jsonld,
    };
  });
}

async function copySnapshot(page: Page) {
  return page.evaluate(() => {
    const root = document.getElementById('root');
    if (!root) return '';
    const clone = root.cloneNode(true) as HTMLElement;
    clone.querySelectorAll('[aria-hidden="true"]').forEach((el) => el.remove());
    clone.querySelectorAll('script, style, noscript, canvas').forEach((el) => el.remove());
    clone.querySelectorAll('[class*="animate-marquee"]').forEach((el) => el.remove());
    clone.querySelectorAll('button[aria-expanded="false"]').forEach((btn) => {
      const next = btn.nextElementSibling;
      if (next) next.remove();
    });
    return (clone.innerText || '')
      .replace(/\[email\s*protected\]/gi, '[EMAIL]')
      .replace(/\s+/g, ' ')
      .trim();
  });
}

function firstDiff(a: string, b: string, size = 180) {
  const n = Math.min(a.length, b.length);
  let i = 0;
  while (i < n && a[i] === b[i]) i += 1;
  return {
    at: i,
    before: a.slice(Math.max(0, i - 40), i + size),
    after: b.slice(Math.max(0, i - 40), i + size),
  };
}

for (const p of [
  { path: '/', name: 'home' },
  { path: '/services/ai-security.html', name: 'ai-security' },
]) {
  test(`${p.name}: preloader appears then hides`, async ({ page, baseURL }) => {
    await page.addInitScript(() => {
      try {
        sessionStorage.removeItem('digiworks-intro');
      } catch {
        /* ignore */
      }
    });
    await page.goto(`${baseURL}${p.path}`, { waitUntil: 'domcontentloaded' });
    const intro = page.locator('#dw-intro');
    await expect(intro).toBeVisible({ timeout: 5_000 });
    await expect(intro).toBeHidden({ timeout: 15_000 });
  });
}

for (const p of pages) {
  test(`${p.name}: visible copy matches before and after JS`, async ({ browser, baseURL }) => {
    const url = `${baseURL}${p.path}`;
    const noJs = await browser.newContext({ javaScriptEnabled: false });
    const withJs = await browser.newContext({ javaScriptEnabled: true });
    const beforePage = await noJs.newPage();
    const afterPage = await withJs.newPage();
    await beforePage.goto(url, { waitUntil: 'domcontentloaded' });
    await afterPage.goto(url, { waitUntil: 'load' });
    await afterPage.waitForFunction(
      () => {
        const root = document.getElementById('root');
        return Boolean(root && (root.textContent || '').includes('Services'));
      },
      { timeout: 20_000 },
    );
    await afterPage.waitForTimeout(800);

    const before = await copySnapshot(beforePage);
    const after = await copySnapshot(afterPage);
    if (before !== after) {
      const d = firstDiff(before, after);
      throw new Error(
        `${p.name} copy mismatch at ${d.at}\nBEFORE: ${d.before}\nAFTER: ${d.after}\npage=${p.path} section=root`,
      );
    }
    expect(before.length).toBeGreaterThan(200);

    const seoBefore = await seoSnapshot(beforePage);
    const seoAfter = await seoSnapshot(afterPage);
    expect(seoAfter, `${p.name} SEO tags changed after JS`).toEqual(seoBefore);

    const faqCheck = async (target: Page) =>
      target.evaluate(() => {
        const buttons = [...document.querySelectorAll('.mt-12.space-y-4 button[aria-expanded]')];
        const htmlAnswers = buttons
          .map((btn) => {
            const p = btn.parentElement?.querySelector('p');
            return (p?.textContent || '').replace(/\s+/g, ' ').trim();
          })
          .filter(Boolean);
        const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].flatMap((s) => {
          try {
            const j = JSON.parse(s.textContent || '{}');
            const graph = Array.isArray(j['@graph']) ? j['@graph'] : [j];
            return graph.filter((n: { '@type'?: string }) => n['@type'] === 'FAQPage');
          } catch {
            return [];
          }
        });
        const jsonAnswers = ld.flatMap((n: { mainEntity?: { acceptedAnswer?: { text?: string } }[] }) =>
          (n.mainEntity || []).map((q) => (q.acceptedAnswer?.text || '').replace(/\s+/g, ' ').trim()),
        );
        return { htmlAnswers, jsonAnswers };
      });

    const beforeFaq = await faqCheck(beforePage);
    const afterFaq = await faqCheck(afterPage);
    if (beforeFaq.htmlAnswers.length < 2) {
      if (p.skipFaq) {
        await noJs.close();
        await withJs.close();
        return;
      }
      throw new Error(`${p.name}: expected all FAQ answers in HTML, got ${beforeFaq.htmlAnswers.length}`);
    }
    expect(beforeFaq.htmlAnswers, `${p.name} FAQ HTML changed after JS`).toEqual(afterFaq.htmlAnswers);
    expect(beforeFaq.jsonAnswers, `${p.name} FAQ JSON-LD missing or mismatch`).toEqual(beforeFaq.htmlAnswers);
    expect(afterFaq.jsonAnswers).toEqual(afterFaq.htmlAnswers);
  });
}

for (const p of pages) {
  for (const [label, viewport] of [
    ['desktop', { width: 1440, height: 900 }],
    ['mobile', { width: 390, height: 844 }],
  ] as const) {
    test(`${p.name}: H1 line count ${label}`, async ({ page, baseURL }) => {
      await page.addInitScript(() => {
        try {
          sessionStorage.setItem('digiworks-intro', '1');
        } catch {
          /* ignore */
        }
      });
      await page.setViewportSize(viewport);
      await page.goto(`${baseURL}${p.path}`, { waitUntil: 'load' });
      await page.evaluate(() => (document.fonts ? document.fonts.ready : Promise.resolve()).catch(() => undefined));
      const lines = await page.locator('h1').evaluate((h1) => {
        const cs = getComputedStyle(h1);
        const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.06;
        return Math.round(h1.getBoundingClientRect().height / lh);
      });
      const max = label === 'mobile' ? p.h1Max[1] : p.h1Max[0];
      expect(lines, `${p.name} ${label} H1 lines ${lines} > ${max}`).toBeLessThanOrEqual(max);
    });
  }
}
