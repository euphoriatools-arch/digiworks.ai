import type { FaqItem } from '../data/copy/types';

export function mustReplace(html: string, from: string, to: string): string {
  if (!html.includes(from)) {
    throw new Error(`SSR copy: missing string: ${from.slice(0, 80)}`);
  }
  return html.split(from).join(to);
}

export function replaceOnce(html: string, from: string, to: string): string {
  const i = html.indexOf(from);
  if (i < 0) throw new Error(`SSR copy: missing once: ${from.slice(0, 80)}`);
  return html.slice(0, i) + to + html.slice(i + from.length);
}

export function wordSpanH1(lines: { words: string[]; className?: string }[]): string {
  const lineHtml = lines.map((line) => {
    const spans = line.words
      .map((w, i) => {
        const nbsp = i < line.words.length - 1 ? '<!-- -->&nbsp;' : '';
        return `<span class="inline-block">${w}${nbsp}</span>`;
      })
      .join('');
    const cls = line.className ? ` class="${line.className}"` : ' class=""';
    const label = line.words.join(' ');
    return `<span${cls} aria-label="${label}">${spans}</span>`;
  });
  return `<h1 class="mt-6 font-display text-4xl font-bold leading-[1.06] text-dusk sm:text-5xl lg:text-5xl xl:text-6xl">${lineHtml.join('<br>')}</h1>`;
}

export function faqListHtml(faqs: FaqItem[]): string {
  return faqs
    .map((f, i) => {
      const n = String(i + 1).padStart(2, '0');
      const expanded = i === 0;
      const accent = expanded ? ' !border-coral/40' : '';
      const rot = expanded ? ' rotate-45' : '';
      const answerWrap = expanded
        ? `<div style="height:auto;opacity:1"><p class="px-6 pb-6 pl-[4.2rem] text-sm leading-relaxed text-dusk/70 md:text-base">${escapeHtml(f.a)}</p></div>`
        : `<div style="display:none"><p class="px-6 pb-6 pl-[4.2rem] text-sm leading-relaxed text-dusk/70 md:text-base">${escapeHtml(f.a)}</p></div>`;
      return `<div class=""><div class="glass group relative overflow-hidden transition-colors${accent}"><div class="g-border absolute inset-0 rounded-3xl" aria-hidden="true"></div><button type="button" class="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded="${expanded}"><span class="flex items-baseline gap-4"><span class="font-display text-xs font-bold text-coral/70">${n}</span><span class="font-display text-base font-bold text-dusk md:text-lg">${escapeHtml(f.q)}</span></span><span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coral to-violet text-white${rot}">+</span></button>${answerWrap}</div></div>`;
    })
    .join('');
}

export function replaceFaqBlock(html: string, faqs: FaqItem[], beforeHeading: string, headingNeedle = 'Questions, answered'): string {
  const marker = '<div class="mt-12 space-y-4">';
  const h = html.indexOf(headingNeedle);
  if (h < 0) throw new Error(`SSR copy: FAQ heading missing: ${headingNeedle}`);
  const start = html.indexOf(marker, h);
  if (start < 0) throw new Error('SSR copy: FAQ list missing');
  const end = html.indexOf(beforeHeading, start);
  if (end < 0) throw new Error(`SSR copy: FAQ end marker missing: ${beforeHeading}`);
  const innerEnd = html.lastIndexOf('</div>', end);
  // close the space-y-4 wrapper only
  const wrapperEnd = findMatchingListEnd(html, start);
  return html.slice(0, start) + `<div class="mt-12 space-y-4">${faqListHtml(faqs)}</div>` + html.slice(wrapperEnd);
}

function findMatchingListEnd(html: string, start: number): number {
  // start points at <div class="mt-12 space-y-4">
  let i = start;
  let depth = 0;
  while (i < html.length) {
    const nextOpen = html.indexOf('<div', i);
    const nextClose = html.indexOf('</div>', i);
    if (nextClose < 0) throw new Error('SSR copy: FAQ list unclosed');
    if (nextOpen >= 0 && nextOpen < nextClose) {
      depth += 1;
      i = nextOpen + 4;
    } else {
      depth -= 1;
      i = nextClose + 6;
      if (depth === 0) return i;
    }
  }
  throw new Error('SSR copy: FAQ list end not found');
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function hubLinks(html: string): string {
  const items: [string, string][] = [
    ['Services', '/services/artificial-intelligence.html'],
    ['Solutions', '/solutions/ai-automation.html'],
    ['Industries', '/industries/ai-for-healthcare.html'],
    ['Hire Developers', '/hire/hire-ai-engineers.html'],
  ];
  let out = html;
  for (const [label, href] of items) {
    const from = `<button aria-expanded="false" aria-haspopup="true" class="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-3.5 text-dusk/70 hover:text-dusk">${label}<svg width="10" height="6" viewBox="0 0 10 6" fill="none" class="shrink-0 transition-transform " aria-hidden="true"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path></svg></button>`;
    const to = `<a href="${href}" class="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition-colors xl:px-3.5 text-dusk/70 hover:text-dusk">${label}</a>`;
    out = replaceOnce(out, from, to);
  }
  out = replaceOnce(
    out,
    '<button class="btn-primary whitespace-nowrap !px-5">Get in Touch</button>',
    '<a class="btn-primary whitespace-nowrap !px-5" href="/contact.html">Book a Call</a>',
  );
  return out;
}

export function mobileMenuFallback(html: string): string {
  const from = '<button aria-label="Menu" aria-expanded="false" class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-dusk/15 bg-panel/80 lg:hidden">';
  const to = `<details class="lg:hidden"><summary aria-label="Menu" class="flex h-11 w-11 shrink-0 cursor-pointer list-none items-center justify-center rounded-xl border border-dusk/15 bg-panel/80 [&::-webkit-details-marker]:hidden">`;
  let out = replaceOnce(html, from, to);
  const closeBtn = '</div></button></div></header>';
  const closeDet = `</div></summary><nav class="absolute right-4 top-16 z-[60] w-64 rounded-2xl border border-dusk/15 bg-void p-4 text-sm text-dusk shadow-xl"><a class="block py-2" href="/services/artificial-intelligence.html">Services</a><a class="block py-2" href="/solutions/ai-automation.html">Solutions</a><a class="block py-2" href="/industries/ai-for-healthcare.html">Industries</a><a class="block py-2" href="/hire/hire-ai-engineers.html">Hire</a><a class="block py-2" href="/case-studies.html">Case studies</a><a class="block py-2" href="/blog.html">Blog</a><a class="block py-2" href="/contact.html">Contact</a></nav></details></div></header>`;
  return replaceOnce(out, closeBtn, closeDet);
}

export function injectBodyLinks(html: string, links: { phrase: string; href: string }[]): string {
  let out = html;
  for (const l of links) {
    if (!l.phrase || out.includes(`>${l.phrase}</a>`)) continue;
    const i = out.indexOf(l.phrase);
    if (i < 0) throw new Error(`SSR copy: body link phrase missing: ${l.phrase.slice(0, 80)}`);
    const a = `<a class="font-medium text-dusk underline decoration-coral/40 underline-offset-2 hover:text-coral" href="${l.href}">${l.phrase}</a>`;
    out = out.slice(0, i) + a + out.slice(i + l.phrase.length);
  }
  return out;
}

export function fileHrefs(html: string): string {
  return html.replace(/href="\/([^"]+)"/g, (full, p: string) => {
    if (!p || p.includes('.')) return full;
    if (/^(assets|photos|team\/|mark|favicon)/.test(p)) return full;
    return `href="/${p}.html"`;
  });
}
