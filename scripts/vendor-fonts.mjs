/** Download latin/latin-ext woff2 from the original Google Fonts URL into public/fonts. */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'fonts');
const cssUrl =
  'https://fonts.googleapis.com/css2?family=Unbounded:wght@500;600;700;800&family=Sora:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap';
const ua =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

const FALLBACKS = `
@font-face {
  font-family: 'Sora Fallback';
  src: local('Arial');
  size-adjust: 100.64%;
  ascent-override: 102.34%;
  descent-override: 28.42%;
  line-gap-override: 0%;
}
@font-face {
  font-family: 'Unbounded Fallback';
  src: local('Arial');
  size-adjust: 100%;
  ascent-override: 90%;
  descent-override: 22%;
  line-gap-override: 0%;
}
@font-face {
  font-family: 'Inter Fallback';
  src: local('Arial');
  size-adjust: 107.64%;
  ascent-override: 90.2%;
  descent-override: 22.48%;
  line-gap-override: 0%;
}
@font-face {
  font-family: 'Space Grotesk Fallback';
  src: local('Arial');
  size-adjust: 106.4%;
  ascent-override: 94%;
  descent-override: 24%;
  line-gap-override: 0%;
}
.font-sans { font-family: Sora, 'Sora Fallback', sans-serif !important; }
.font-display { font-family: Unbounded, 'Unbounded Fallback', sans-serif !important; }
.font-inter { font-family: Inter, 'Inter Fallback', sans-serif !important; }
.font-grotesk { font-family: 'Space Grotesk', 'Space Grotesk Fallback', sans-serif !important; }
html { font-family: Sora, 'Sora Fallback', sans-serif; }
`;

function keepSubset(block) {
  const comment = block.match(/^\/\*\s*([^*]+)\s*\*\//);
  const label = comment ? comment[1].trim() : '';
  return label === 'latin' || label === 'latin-ext';
}

async function main() {
  mkdirSync(outDir, { recursive: true });
  const res = await fetch(cssUrl, { headers: { 'User-Agent': ua } });
  if (!res.ok) throw new Error(`fonts css ${res.status}`);
  const css = await res.text();
  const blocks = css.split(/(?=\/\*)/).filter((b) => b.includes('@font-face'));
  const kept = blocks.filter(keepSubset);
  if (!kept.length) throw new Error('no latin font faces');

  const used = new Map();
  let n = 0;
  let out = '';
  for (const block of kept) {
    const url = block.match(/url\((https:[^)]+)\)/)?.[1];
    if (!url) continue;
    let file = used.get(url);
    if (!file) {
      n += 1;
      file = `f${String(n).padStart(2, '0')}.woff2`;
      used.set(url, file);
      const bin = await fetch(url, { headers: { 'User-Agent': ua } });
      if (!bin.ok) throw new Error(`woff2 ${url} ${bin.status}`);
      writeFileSync(join(outDir, file), Buffer.from(await bin.arrayBuffer()));
    }
    out += `${block.replace(url, `/fonts/${file}`)}\n`;
  }
  writeFileSync(join(outDir, 'fonts.css'), `${out}\n${FALLBACKS}`);
  console.log(`vendor-fonts: ${used.size} woff2 files`);
}

main();
