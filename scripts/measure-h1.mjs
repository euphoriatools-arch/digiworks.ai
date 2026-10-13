import { chromium } from '@playwright/test';
import { createServer } from 'node:http';
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const PORT = 8877;
const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const pages = [
  { path: '/industries/ai-for-healthcare.html', orig: '_html_source/industries/ai-for-healthcare.html', name: 'ai-for-healthcare' },
  { path: '/industries/ai-for-fintech.html', orig: '_html_source/industries/ai-for-fintech.html', name: 'ai-for-fintech' },
  { path: '/industries/ai-for-retail-and-ecommerce.html', orig: '_html_source/industries/ai-for-retail-and-ecommerce.html', name: 'ai-for-retail-and-ecommerce' },
  { path: '/industries/ai-for-manufacturing.html', orig: '_html_source/industries/ai-for-manufacturing.html', name: 'ai-for-manufacturing' },
  { path: '/industries/ai-for-logistics-and-supply-chain.html', orig: '_html_source/industries/ai-for-logistics-and-supply-chain.html', name: 'ai-for-logistics-and-supply-chain' },
  { path: '/industries/ai-for-real-estate.html', orig: '_html_source/industries/ai-for-real-estate.html', name: 'ai-for-real-estate' },
  { path: '/industries/ai-for-education.html', orig: '_html_source/industries/ai-for-education.html', name: 'ai-for-education' },
  { path: '/hire/dedicated-ai-pods.html', orig: '_html_source/hire/dedicated-ai-pods.html', name: 'dedicated-ai-pods' },
];

const MIME = {
  '.css': 'text/css',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
};

function extractH1(file) {
  const html = readFileSync(join(root, file), 'utf8');
  const m = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/);
  if (!m) return null;
  return m[0];
}

function textOf(h1) {
  return h1
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function headingFor(p, h1html, isOrig) {
  if (!h1html) return '<h1>missing</h1>';
  if (p.home) return h1html;
  if (isOrig && /<br/i.test(h1html)) return h1html;
  return spaH1(textOf(h1html), false);
}

function spaH1(text, home) {
  const cls = home
    ? 'mt-6 font-display text-4xl font-bold leading-[1.06] text-dusk sm:text-5xl md:text-6xl'
    : 'mt-6 font-display text-3xl font-bold leading-[1.18] text-dusk sm:text-4xl md:text-5xl';
  if (home) return null;
  const words = text.split(/\s+/).filter(Boolean);
  const gradient = words.slice(-3).join(' ');
  const lead = words.slice(0, -3).join(' ');
  return `<h1 class="${cls}"><span class="text-dusk">${lead}<!-- --> </span><span class="text-gradient">${gradient}</span></h1>`;
}

function wrap(h1, home) {
  const box = home ? 'max-w-5xl' : 'max-w-4xl';
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><base href="http://127.0.0.1:${PORT}/"><meta name="viewport" content="width=device-width">
<link rel="stylesheet" href="/assets/app-K_eQ08L-.css">
<link rel="stylesheet" href="/fonts/fonts.css">
<style>h1,h1 *{opacity:1!important;transform:none!important;visibility:visible!important;animation:none!important}</style>
</head><body class="bg-void text-dusk">
<section class="relative overflow-hidden px-5 pb-24 pt-40 sm:px-8 md:pb-32 md:pt-48">
<div class="relative z-10 mx-auto ${box} text-center">${h1}</div>
</section>
</body></html>`;
}

function resolveFile(urlPath) {
  let rel = urlPath.replace(/^\//, '');
  const tries = [
    join(root, 'public', rel),
    join(root, 'dist', rel),
    join(root, 'public/assets', rel.replace(/^assets\//, '')),
    join(root, rel),
  ];
  for (const file of tries) {
    if (existsSync(file) && !file.endsWith('/')) return file;
  }
  return null;
}

async function measure(page, html) {
  await page.setContent(html, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(250);
  return page.locator('h1').first().evaluate((h1) => {
    const cs = getComputedStyle(h1);
    const lh = parseFloat(cs.lineHeight) || parseFloat(cs.fontSize) * 1.06;
    return {
      lines: Math.round(h1.getBoundingClientRect().height / lh),
      family: cs.fontFamily,
      text: (h1.innerText || '').replace(/\s+/g, ' ').trim(),
    };
  });
}

const server = createServer((req, res) => {
  const url = decodeURIComponent((req.url || '/').split('?')[0]);
  const file = resolveFile(url);
  if (!file) {
    res.writeHead(404);
    res.end('missing ' + url);
    return;
  }
  res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
  res.end(readFileSync(file));
});

await new Promise((r) => server.listen(PORT, r));
const browser = await chromium.launch();
const ctx = await browser.newContext({ javaScriptEnabled: false, baseURL: `http://127.0.0.1:${PORT}` });
const page = await ctx.newPage();
const rows = [];
for (const p of pages) {
  const origH1 = extractH1(p.orig);
  const newFile = p.path === '/' ? 'dist/index.html' : `dist${p.path}`;
  const newH1 = extractH1(newFile);
  const row = { name: p.name, path: p.path };
  for (const [key, width] of [
    ['d', 1440],
    ['m', 390],
  ]) {
    const origMarkup = headingFor(p, origH1, true);
    const newMarkup = headingFor(p, newH1, false);
    await page.setViewportSize({ width, height: 900 });
    row[`orig_${key}`] = await measure(page, wrap(origMarkup, p.home || /<br/i.test(origH1)));
    row[`new_${key}`] = await measure(page, wrap(newMarkup, p.home));
  }
  rows.push(row);
  const o = `${row.orig_d.lines}/${row.orig_m.lines}`;
  const n = `${row.new_d.lines}/${row.new_m.lines}`;
  const flag = row.new_d.lines > row.orig_d.lines || row.new_m.lines > row.orig_m.lines ? ' OVER' : '';
  console.log(`${p.name}\torig ${o} (${row.orig_d.text.slice(0, 48)})\tnew ${n} (${row.new_d.text.slice(0, 48)})${flag}`);
}
writeFileSync('/tmp/h1-measure.json', JSON.stringify(rows, null, 2));
await browser.close();
server.close();
