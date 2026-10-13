#!/usr/bin/env node
/** Fill public/llms-full.txt from Phase 6 copy titles + descriptions. */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, acc);
    else if (name.endsWith('.astro')) acc.push(p);
  }
  return acc;
}

function isSkipped(url) {
  if (url === '/team.html') return true;
  if (url === '/case-studies.html' || url.startsWith('/case-studies/')) return true;
  if (url.startsWith('/blog/') && url !== '/blog.html') return true;
  return false;
}

function toUrl(file) {
  const rel = relative(join(root, 'src/pages'), file).replace(/\\/g, '/').replace(/\.astro$/, '');
  if (rel === 'index') return '/';
  return `/${rel}.html`;
}

function extractMeta(src) {
  const title = (src.match(/\btitle="([^"]*)"/) || src.match(/\btitle:\s*'([^']*)'/) || [, ''])[1];
  const desc = (src.match(/\bdescription="([^"]*)"/) || [, ''])[1];
  return { title, desc };
}

function extractCopy(src) {
  const title = (src.match(/\btitle:\s*'([^']*)'/) || src.match(/\btitle:\s*"([^"]*)"/) || [, ''])[1];
  const descM = src.match(/\bdescription:\s*\n?\s*'([^']*)'/) || src.match(/\bdescription:\s*\n?\s*"([^"]*)"/);
  return { title, desc: descM ? descM[1] : '' };
}

const copyDir = join(root, 'src/data/copy');
const copyByStem = new Map();
for (const name of readdirSync(copyDir)) {
  if (!name.endsWith('.ts') || name === 'types.ts') continue;
  const src = readFileSync(join(copyDir, name), 'utf8');
  copyByStem.set(name.replace(/\.ts$/, ''), extractCopy(src));
}

const lines = [
  '# DigiWorks AI — Phase 6 page summaries',
  '',
  'Austin HQ. Production AI for US businesses: agents, generative AI, predictive modeling, and automation. Typical first production 8–20 weeks. 150+ production AI deployments, 7+ sectors, 5 offices.',
  '',
  'Skipped pages (team, case studies, individual blog posts) are omitted here until the owner updates them.',
  '',
];

const pages = walk(join(root, 'src/pages'))
  .map((f) => ({ f, url: toUrl(f) }))
  .filter((p) => !p.url.includes('custom-app-development-meta') && !p.url.includes('/404'))
  .filter((p) => !isSkipped(p.url))
  .sort((a, b) => a.url.localeCompare(b.url));

for (const p of pages) {
  const stem = p.f.split('/').pop().replace(/\.astro$/, '');
  const astro = extractMeta(readFileSync(p.f, 'utf8'));
  const copy = copyByStem.get(stem === 'index' ? 'home' : stem) || {};
  const title = copy.title || astro.title || stem;
  const desc = copy.desc || astro.desc || '';
  const loc = p.url === '/' ? 'https://digiworksai.com/' : `https://digiworksai.com${p.url}`;
  lines.push(`## ${title}`);
  lines.push(loc);
  if (desc) lines.push(desc);
  lines.push('');
}

writeFileSync(join(root, 'public/llms-full.txt'), lines.join('\n'));
console.log(`llms-full.txt: ${pages.length} Phase 6 pages`);
