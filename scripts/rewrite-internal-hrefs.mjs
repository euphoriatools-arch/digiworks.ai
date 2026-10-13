#!/usr/bin/env node
/** Rewrite internal hrefs on built HTML: add .html, point CF email stubs at /contact.html. */
import { existsSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) {
      if (name === 'assets' || name === 'cdn-cgi') continue;
      walk(p, acc);
    } else if (name.endsWith('.html')) acc.push(p);
  }
  return acc;
}

function rewrite(html) {
  let out = html.replace(/href="(\/[^"]*)"/g, (full, raw) => {
    const m = raw.match(/^([^?#]*)(.*)$/);
    const path = m[1];
    const rest = m[2];
    if (!path || path === '/') return full;
    if (path.includes('.')) return full;
    if (/^\/(assets|photos|team\/|mark|favicon)/.test(path)) return full;
    return `href="${path}.html${rest}"`;
  });
  out = out.replace(/href="[^"]*cdn-cgi\/l\/email-protection[^"]*"/g, 'href="/contact.html"');
  // Footer Cloudflare email widget only (shared @ icon + obfuscated span).
  out = out.replace(
    /(<span class="flex h-9 w-9 items-center justify-center rounded-xl border border-dusk\/15 bg-dusk\/\[0\.05\] text-coral">@<\/span>)<span class="__cf_email__"[^>]*>[\s\S]*?<\/span>/g,
    '$1Contact',
  );
  out = out.replace(/<img\b([^>]*?)>/gi, (full, attrs) => {
    if (/\bloading=/.test(attrs)) return full;
    if (/logo-white\.png|logo\.png|mark5e1f/i.test(attrs)) return full;
    if (/\/photos\/|\/case\/|unsplash\.com|\.webp|\.png|\.jpg|\.jpeg/i.test(attrs)) {
      return `<img loading="lazy" decoding="async"${attrs}>`;
    }
    return full;
  });
  return out;
}

if (!existsSync(dist)) process.exit(0);
let n = 0;
for (const f of walk(dist)) {
  const before = readFileSync(f, 'utf8');
  const after = rewrite(before);
  if (after !== before) {
    writeFileSync(f, after);
    n += 1;
  }
}
console.log(`internal href rewrite: ${n} html files`);
