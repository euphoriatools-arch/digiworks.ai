#!/usr/bin/env node
/** Phase 8: title/H1/meta/JSON-LD/alt/robots/sitemap checks on dist. */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

function walkHtml(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'cdn-cgi' || name === 'assets') continue;
      walkHtml(p, acc);
    } else if (name.endsWith('.html') && !name.startsWith('.')) acc.push(p);
  }
  return acc;
}

function toUrl(file) {
  const rel = relative(dist, file).replace(/\\/g, '/');
  return rel === 'index.html' ? '/' : `/${rel}`;
}

function isOwnerSkip(url) {
  if (url === '/team.html') return true;
  if (url.startsWith('/blog/') && url !== '/blog.html') return true;
  if (url.startsWith('/case-studies/')) return true;
  return false;
}

function attr(html, name) {
  const m = html.match(new RegExp(`<meta name="${name}" content="([^"]*)"`, 'i'));
  return m ? m[1] : '';
}

function title(html) {
  const m = html.match(/<title>([^<]*)<\/title>/i);
  return m ? m[1].trim() : '';
}

function h1s(html) {
  return [...html.matchAll(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi)];
}

const files = walkHtml(dist);
const issues = [];
let skipNoindex = 0;
let hubIndex = 0;

for (const file of files) {
  const url = toUrl(file);
  if (url === '/404.html') continue;
  const html = readFileSync(file, 'utf8');
  const robots = attr(html, 'robots');
  const t = title(html);
  const desc = attr(html, 'description');
  const hs = h1s(html);
  const json = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)];
  const imgs = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0]);

  if (url.includes('custom-app-development-meta')) {
    if (!robots.startsWith('noindex')) issues.push(`${url} campaign should be noindex`);
    continue;
  }

  if (isOwnerSkip(url)) {
    if (robots !== 'noindex, follow') issues.push(`${url} skip robots=${robots}`);
    else skipNoindex += 1;
  } else if (!robots.startsWith('index')) {
    issues.push(`${url} expected index, got ${robots}`);
  } else hubIndex += 1;

  if (hs.length !== 1) issues.push(`${url} h1 count=${hs.length}`);
  if (t.length < 40 || t.length > 70) issues.push(`${url} title len=${t.length} "${t}"`);
  if (desc.length < 120 || desc.length > 165) issues.push(`${url} desc len=${desc.length}`);
  if (!json.length) issues.push(`${url} missing JSON-LD`);
  for (const block of json) {
    try {
      JSON.parse(block[1]);
    } catch {
      issues.push(`${url} invalid JSON-LD`);
    }
  }
  for (const img of imgs) {
    if (!/\balt=/.test(img)) issues.push(`${url} img missing alt`);
  }
}

const smFile = existsSync(join(dist, 'sitemap-0.xml'))
  ? join(dist, 'sitemap-0.xml')
  : join(dist, 'sitemap.xml');
const sm = readFileSync(smFile, 'utf8');
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const badSm = locs.filter(
  (u) =>
    u.includes('/team') ||
    /\/blog\/.+/.test(u) ||
    /\/case-studies\/.+/.test(u),
);
if (badSm.length) issues.push(`sitemap still lists skip URLs: ${badSm.slice(0, 5).join(', ')}`);
if (!locs.some((u) => u.endsWith('/blog.html'))) issues.push('sitemap missing blog hub');
if (!locs.some((u) => u.endsWith('/case-studies.html'))) issues.push('sitemap missing case-studies hub');

console.log(`Skip noindex,follow: ${skipNoindex}`);
console.log(`Indexable (non-campaign): ${hubIndex}`);
console.log(`Sitemap locs: ${locs.length}`);
console.log(`Issues: ${issues.length}`);
issues.slice(0, 80).forEach((i) => console.log('  ', i));
if (issues.length > 80) console.log(`  ... ${issues.length - 80} more`);
process.exit(issues.some((i) => i.includes('skip robots') || i.includes('sitemap')) ? 1 : 0);
