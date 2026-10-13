#!/usr/bin/env node
/**
 * Phase 7: schema, uniqueness, internal links, skipped-page quality (report).
 */
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const ORG = 'https://digiworksai.com/#organization';

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

function isSkipped(url) {
  if (url === '/team.html') return true;
  if (url === '/case-studies.html' || url.startsWith('/case-studies/')) return true;
  if (url.startsWith('/blog/') && url !== '/blog.html') return true;
  return false;
}

function isIndexable(url) {
  if (url === '/404.html') return false;
  if (url.includes('custom-app-development-meta')) return false;
  return true;
}

function isPhase6(url) {
  return isIndexable(url) && !isSkipped(url);
}

function stripTags(html) {
  return html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ');
}

function mainInner(html) {
  const m = html.match(/<main\b[^>]*>([\s\S]*?)<footer\b/i);
  return m ? m[1] : html;
}

function h1Text(html) {
  const m = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return '';
  return m[1].replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
}

function paras(html) {
  const inner = mainInner(html);
  const out = [];
  const re = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  let m;
  while ((m = re.exec(inner))) {
    const t = m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    if (t.length >= 80) out.push(t);
  }
  return out;
}

function jsonBlocks(html) {
  const out = [];
  const re = /<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html))) out.push(m[1]);
  return out;
}

function normalizeHref(fromFile, href) {
  const stripped = href.split('#')[0].split('?')[0];
  if (!stripped) return null;
  let path = stripped;
  if (/^(https?:)?\/\/digiworksai\.com/i.test(path)) {
    path = path.replace(/^(https?:)?\/\/digiworksai\.com/i, '') || '/';
  }
  if (!path.startsWith('/')) {
    path = '/' + relative(dist, join(dirname(fromFile), path)).replace(/\\/g, '/');
  }
  if (path === '/') path = '/index.html';
  return path.replace(/\/+/g, '/');
}

const files = walkHtml(dist);
if (!files.length) {
  console.error('No dist HTML. Run npm run build first.');
  process.exit(1);
}

const pages = files.map((f) => {
  const html = readFileSync(f, 'utf8');
  const url = toUrl(f);
  const title = (html.match(/<title>([^<]*)<\/title>/i) || [, ''])[1].trim();
  const meta = (html.match(/<meta name="description" content="([^"]*)"/i) || [, ''])[1].trim();
  return { f, url, html, title, meta, h1: h1Text(html), skipped: isSkipped(url), indexable: isIndexable(url) };
});

const problems = [];
function note(kind, url, detail) {
  problems.push({ kind, url, detail });
}

let jsonFail = 0;
let orgMiss = 0;
for (const p of pages.filter((x) => x.indexable)) {
  const blocks = jsonBlocks(p.html);
  if (!blocks.length) {
    note('jsonld-missing', p.url, 'no JSON-LD');
    jsonFail += 1;
    continue;
  }
  let hasOrg = false;
  for (const raw of blocks) {
    try {
      const j = JSON.parse(raw);
      const nodes = Array.isArray(j['@graph']) ? j['@graph'] : [j];
      for (const n of nodes) {
        if (n['@type'] === 'Organization' && n['@id'] === ORG) hasOrg = true;
        if (n['@id'] === ORG) hasOrg = true;
      }
    } catch (e) {
      note('jsonld-invalid', p.url, String(e.message || e));
      jsonFail += 1;
    }
  }
  if (!hasOrg) {
    orgMiss += 1;
    note('org-id', p.url, 'missing Organization @id');
  }
}

function dupMap(key) {
  const m = new Map();
  for (const p of pages.filter((x) => x.indexable)) {
    const v = p[key];
    if (!v) continue;
    if (!m.has(v)) m.set(v, []);
    m.get(v).push(p.url);
  }
  return [...m.entries()].filter(([, urls]) => urls.length > 1);
}

const dupTitle = dupMap('title');
const dupMeta = dupMap('meta');
const dupH1 = dupMap('h1');

const paraMap = new Map();
for (const p of pages.filter((x) => x.indexable)) {
  for (const para of paras(p.html)) {
    if (!paraMap.has(para)) paraMap.set(para, []);
    paraMap.get(para).push(p.url);
  }
}
const dupPara = [...paraMap.entries()]
  .filter(([, urls]) => {
    const unique = new Set(urls);
    return unique.size > 1;
  })
  .filter(([t, urls]) => {
    const unique = [...new Set(urls)];
    if (unique.length >= 8) return false;
    return true;
  });

function destUrl(urlKey) {
  if (urlKey === '/index.html' || urlKey === '/') return '/';
  return urlKey;
}

const skipPrefixes = ['mailto:', 'tel:', 'javascript:', 'data:', 'blob:', '#'];
const broken = [];
const inbound = new Map();
const inboundCtx = new Map();
for (const p of pages) inbound.set(p.url, new Set());
inbound.set('/index.html', inbound.get('/') || new Set());

for (const p of pages) {
  const hrefs = [...p.html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  const body = mainInner(p.html);
  const ctxHrefs = new Set([...body.matchAll(/href="([^"]+)"/g)].map((m) => m[1]));

  for (const href of hrefs) {
    if (skipPrefixes.some((s) => href.startsWith(s))) continue;
    if (/^(https?:)?\/\//i.test(href) && !/digiworksai\.com/i.test(href)) continue;
    if (href.includes('cdn-cgi')) {
      broken.push({ from: p.url, href, reason: 'cloudflare-email' });
      continue;
    }
    const path = normalizeHref(p.f, href);
    if (!path || path.startsWith('/cdn-cgi')) continue;
    if (path.includes('/assets/') || path.includes('/photos/') || path.includes('/fonts/')) {
      const abs = join(dist, path.replace(/^\//, ''));
      const pub = join(root, 'public', path.replace(/^\//, ''));
      if (!existsSync(abs) && !existsSync(pub)) broken.push({ from: p.url, href, reason: 'missing-asset' });
      continue;
    }
    const urlKey = path === '/index.html' ? '/' : path;
    const targetExists = pages.some((x) => x.url === urlKey || (urlKey === '/index.html' && x.url === '/'));
    if (path.endsWith('.html') || path === '/') {
      if (!targetExists && path !== '/index.html') {
        const fileTry = join(dist, path.replace(/^\//, ''));
        if (!existsSync(fileTry)) broken.push({ from: p.url, href, reason: 'missing-page' });
      } else {
        const dest = destUrl(urlKey);
        if (dest !== p.url) {
          inbound.get(dest)?.add(p.url);
          const inMain =
            ctxHrefs.has(href) ||
            ctxHrefs.has(dest) ||
            ctxHrefs.has(href.replace(/\.html$/, '')) ||
            ctxHrefs.has(`${dest.replace(/\.html$/, '')}`);
          if (inMain) {
            if (!inboundCtx.has(dest)) inboundCtx.set(dest, new Set());
            inboundCtx.get(dest).add(p.url);
          }
        }
      }
    }
  }
}

const orphans = pages.filter((p) => p.indexable && p.url !== '/' && (inbound.get(p.url)?.size || 0) === 0);
const weakCtx = pages.filter((p) => p.indexable && isPhase6(p.url) && (inboundCtx.get(p.url)?.size || 0) < 3);

const dummyRe = /lorem ipsum|your name here|company name here|\bbinate\b|coming soon\b|tk tk/i;
const oldBrand = /binate/i;
const quality = [];
for (const p of pages.filter((x) => x.skipped)) {
  const flags = [];
  if (dummyRe.test(p.html)) flags.push('dummy-or-placeholder');
  if (oldBrand.test(p.html)) flags.push('old-branding');
  if (p.html.includes('[EMAIL]') || p.html.includes('__cf_email__')) flags.push('email-placeholder');
  const imgs = [...p.html.matchAll(/<img[^>]+src="([^"]+)"/g)].map((m) => m[1]);
  for (const src of imgs) {
    if (src.startsWith('http') || src.startsWith('data:')) continue;
    const abs = join(dist, src.replace(/^\//, ''));
    const pub = join(root, 'public', src.replace(/^\//, ''));
    if (!existsSync(abs) && !existsSync(pub)) flags.push(`broken-img:${src}`);
  }
  if (flags.length) quality.push({ url: p.url, flags });
}

console.log('=== Phase 7 audit ===');
console.log('pages', pages.length, 'indexable', pages.filter((p) => p.indexable).length);
console.log('JSON-LD parse/missing issues', jsonFail);
console.log('missing org @id', orgMiss);
console.log('duplicate titles', dupTitle.length);
for (const [t, urls] of dupTitle) console.log('  TITLE', urls.join(' | '), '::', t.slice(0, 80));
console.log('duplicate metas', dupMeta.length);
for (const [t, urls] of dupMeta) console.log('  META', urls.join(' | '), '::', t.slice(0, 90));
console.log('duplicate H1s', dupH1.length);
for (const [t, urls] of dupH1) console.log('  H1', urls.join(' | '), '::', t.slice(0, 80));
console.log('duplicate long paragraphs (sample)', dupPara.length);
for (const [t, urls] of dupPara.slice(0, 15)) {
  console.log('  P', [...new Set(urls)].join(' | '), '::', t.slice(0, 90));
}
console.log('broken hrefs', broken.length);
const brokenTypes = {};
for (const b of broken) brokenTypes[b.reason] = (brokenTypes[b.reason] || 0) + 1;
console.log('  by type', brokenTypes);
console.log('orphans', orphans.length, orphans.map((p) => p.url).join(' '));
console.log('phase6 with <3 contextual inbound', weakCtx.length);
for (const p of weakCtx) console.log('  CTX', p.url, inboundCtx.get(p.url)?.size || 0, [...(inboundCtx.get(p.url) || [])].join(','));
console.log('skipped quality flags', quality.length);
for (const q of quality) console.log('  Q', q.url, q.flags.join(','));

const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
const lastmods = (sitemap.match(/<lastmod>/g) || []).length;
const urls = (sitemap.match(/<url>/g) || []).length;
console.log('sitemap urls', urls, 'lastmod tags', lastmods);
