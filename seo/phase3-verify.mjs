#!/usr/bin/env node
/**
 * Phase 3: compare original HTML URLs vs dist/, check internal links.
 */
import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const htmlSource = join(root, '_html_source');
const dist = join(root, 'dist');

function walkHtml(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'cdn-cgi' || name === 'signals' || name === 'hts-cache') continue;
      walkHtml(p, acc);
    } else if (name.endsWith('.html') && !name.startsWith('.')) {
      acc.push(p);
    }
  }
  return acc;
}

function toUrl(file, base) {
  const rel = relative(base, file).replace(/\\/g, '/');
  if (rel === 'index.html') return '/index.html';
  return '/' + rel;
}

const original = walkHtml(htmlSource).map((f) => toUrl(f, htmlSource)).sort();
const built = walkHtml(dist).map((f) => toUrl(f, dist)).sort();

const origSet = new Set(original);
const builtSet = new Set(built);

const missing = original.filter((u) => !builtSet.has(u));
const extra = built.filter((u) => !origSet.has(u));

console.log(`Original HTML pages: ${original.length}`);
console.log(`Dist HTML pages:     ${built.length}`);
console.log(`Missing from dist:   ${missing.length}`);
if (missing.length) missing.forEach((u) => console.log('  MISSING', u));
console.log(`Extra in dist:       ${extra.length}`);
if (extra.length) extra.forEach((u) => console.log('  EXTRA', u));

const skipPrefixes = [
  'mailto:',
  'tel:',
  'javascript:',
  'data:',
  'blob:',
  '#',
];

function isExternal(href) {
  return /^(https?:)?\/\//i.test(href);
}

const distHtml = walkHtml(dist);
const broken = [];
const linkCount = { total: 0, internal: 0 };

const assetRoots = [dist, join(root, 'public')];

function resolveInternal(fromFile, href) {
  const stripped = href.split('#')[0].split('?')[0];
  if (!stripped) return null;
  let path = stripped;
  if (!path.startsWith('/')) {
    path = join(dirname(fromFile), path);
    path = '/' + relative(dist, path).replace(/\\/g, '/');
  }
  if (path === '/') path = '/index.html';
  const clean = path.replace(/\/+/g, '/');
  const candidates = [];
  if (clean.endsWith('.html')) {
    candidates.push(join(dist, clean.slice(1)));
  } else if (!clean.includes('.')) {
    candidates.push(join(dist, clean.slice(1) + '.html'));
    candidates.push(join(dist, clean.slice(1), 'index.html'));
  } else {
    candidates.push(join(dist, clean.slice(1)));
    candidates.push(join(root, 'public', clean.slice(1)));
  }
  for (const c of candidates) {
    if (existsSync(c) && statSync(c).isFile()) return true;
  }
  return false;
}

const hrefRe = /(?:href|src)=["']([^"']+)["']/gi;

for (const file of distHtml) {
  const html = readFileSync(file, 'utf8');
  let m;
  const re = new RegExp(hrefRe.source, 'gi');
  while ((m = re.exec(html))) {
    const href = m[1].trim();
    linkCount.total++;
    if (!href || skipPrefixes.some((p) => href.toLowerCase().startsWith(p))) continue;
    if (isExternal(href)) continue;
    linkCount.internal++;
    const ok = resolveInternal(file, href);
    if (!ok) {
      broken.push({
        from: '/' + relative(dist, file).replace(/\\/g, '/'),
        href,
      });
    }
  }
}

const uniqueBroken = [];
const seen = new Set();
for (const b of broken) {
  const k = b.from + ' -> ' + b.href;
  if (seen.has(k)) continue;
  seen.add(k);
  uniqueBroken.push(b);
}

console.log(`Href/src attrs scanned: ${linkCount.total}`);
console.log(`Internal checked:       ${linkCount.internal}`);
console.log(`Broken unique pairs:    ${uniqueBroken.length}`);
if (uniqueBroken.length) {
  uniqueBroken.slice(0, 80).forEach((b) => console.log(`  BROKEN ${b.from} -> ${b.href}`));
  if (uniqueBroken.length > 80) console.log(`  ... ${uniqueBroken.length - 80} more`);
}

const fail = missing.length > 0 || uniqueBroken.length > 0;
process.exit(fail ? 1 : 0);
