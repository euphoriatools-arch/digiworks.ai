import { existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { checkmateCopy } from '../data/copy/checkmate.ts';

const DIR = join(process.cwd(), 'public', 'case', 'checkmate');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function checkmateImageFile(name: string): string | null {
  const abs = join(DIR, name);
  return existsSync(abs) ? `/case/checkmate/${name}` : null;
}

export function checkmateGalleryFiles(): string[] {
  if (!existsSync(DIR)) return [];
  return readdirSync(DIR)
    .filter((name) => /^checkmate-(0[4-9]|[1-9]\d)\.webp$/i.test(name))
    .sort();
}

export function missingCheckmateImages(): string[] {
  const required = ['checkmate-logo.webp', 'checkmate-01.webp', 'checkmate-02.webp', 'checkmate-03.webp'];
  const missing = required.filter((name) => !checkmateImageFile(name));
  if (checkmateGalleryFiles().length === 0) missing.push('checkmate-04.webp and later gallery files');
  return missing;
}

function placeholderSvg(w: number, h: number): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#101826"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function figure(opts: {
  file: string;
  width: number;
  height: number;
  alt: string;
  eager?: boolean;
  frame?: string;
  imgClass?: string;
}): string {
  const src = checkmateImageFile(opts.file) ?? placeholderSvg(opts.width, opts.height);
  const loading = opts.eager ? '' : ' loading="lazy"';
  const imgClass = opts.imgClass ?? 'block h-auto w-full max-w-full bg-[#101826] object-contain';
  const img = `<img width="${opts.width}" height="${opts.height}" src="${src}" alt="${esc(opts.alt)}"${loading} decoding="async" class="${imgClass}">`;
  const frame =
    opts.frame ??
    'overflow-hidden rounded-3xl border border-dusk/10 bg-[#101826] shadow-[0_30px_70px_rgba(0,0,0,0.45)]';
  return `<div class="${frame}">${img}</div>`;
}

function h2(lead: string, gradient?: string): string {
  const title = gradient
    ? `<span class="text-dusk">${esc(lead)}<!-- --> </span><span class="text-gradient">${esc(gradient)}</span>`
    : `<span class="text-gradient">${esc(lead)}</span>`;
  return `<div class="mx-auto max-w-3xl"><div class="dw-rise"><h2 class="mt-5 font-display text-2xl font-bold leading-snug text-dusk sm:text-3xl md:text-4xl lg:text-5xl">${title}</h2></div><div class="dw-bar mt-5 h-[3px] w-24 rounded-full bg-gradient-to-r from-cyan via-electric to-violet shadow-[0_0_12px_rgba(26,130,255,0.8)]" aria-hidden="true"></div></div>`;
}

function resultCard(stat: string, title: string, detail: string): string {
  return `<div class="dw-rise h-full"><div class="glass glare relative flex h-full flex-col overflow-hidden p-7"><p class="font-display text-3xl font-extrabold text-gradient sm:text-4xl">${esc(stat)}</p><h3 class="mt-3 font-display text-lg font-bold text-dusk">${esc(title)}</h3><p class="mt-2 text-sm leading-relaxed text-dusk/70">${esc(detail)}</p></div></div>`;
}

const results: [string, string, string][] = [
  ['2x', 'Peak-hour phone-order capacity', 'Without doubling the staff answering calls'],
  ['22 → 12', 'Missed calls per week', 'At a representative location, about 45% fewer'],
  ['60-70%', 'Less manual order entry', 'Orders flow into the POS automatically'],
  ['30-40%', 'Faster order processing', 'Shorter path from call to kitchen'],
  ['25-35%', 'Fewer order-entry errors', 'Less re-typing, fewer mistakes'],
  ['1 view', 'Calls, orders and locations', 'One centralized dashboard'],
];

const comparison: [string, string, string, string][] = [
  ['Peak-Hour Capacity', 'Limited by available staff', 'Roughly 2x higher', 'More demand handled during rush periods'],
  ['Missed Calls', 'Roughly 22/week at a representative location', 'Around 12/week', '~45% fewer missed order opportunities'],
  ['Manual Entry', 'Staff re-entered phone orders', '~60-70% lower', 'Less repetitive work'],
  ['Order Processing', 'Slower during peak demand', '~30-40% faster', 'Faster order flow'],
  ['Order Accuracy', 'More manual-entry risk', '~25-35% fewer errors', 'More accurate orders'],
  ['Operational Visibility', 'Split across calls and systems', 'Centralized dashboard', 'Faster operational decisions'],
];

const solutionSteps: [string, string][] = [
  ['AI Phone Ordering', 'Checkmate answers the phone and captures the order while the team stays with guests.'],
  ['POS Integration', 'The captured order lands in the point-of-sale system the restaurant already runs.'],
  ['Automated Order Routing', 'A captured order moves into the kitchen flow without a second typing pass.'],
  ['Centralized Order Management', 'Calls, orders, and locations sit together on one dashboard.'],
  ['Multi-Location Visibility', 'Operators see each location’s calls and orders as they happen.'],
];

const flow = ['Customer Call', 'AI Order Capture', 'POS', 'Restaurant Workflow'];

const chips = [
  'AI-powered phone ordering',
  'POS system integration',
  'automated order routing',
  'centralized order management',
  'real-time order visibility',
  'call activity monitoring',
  'multi-location visibility',
  'peak-demand workflow support',
  'MERN Stack architecture',
  'AWS cloud infrastructure',
];

const builtCards: [string, string][] = [
  ['MERN Stack: Application and Operations', 'The application and the operations view run on a MERN stack.'],
  ['AWS: Peak-Demand Infrastructure', 'AWS carries lunch, dinner, weekend, and promotion spikes.'],
  ['POS Integration: Systems Stay Connected', 'Phone orders move into the POS so the systems the restaurant already uses stay connected.'],
];

const whyCards: [string, string][] = [
  ['AI Designed Around the Restaurant', 'The AI sits inside the phone and POS flow the restaurant already runs.'],
  ['Staff Stayed on Service', 'Teams kept serving guests instead of doubling the people answering calls.'],
  ['More Capacity When It Mattered', 'Peak-hour phone-order capacity roughly doubled when the rush hit.'],
];

const rush = [
  'Roughly twice the phone orders at peak without doubling call staff.',
  'Weekly missed calls from about 22 to 12.',
  'POS integration cut repetitive data entry.',
  'Faster, more accurate order flow.',
];

function gallerySection(): string {
  const files = checkmateGalleryFiles();
  if (!files.length) return '';
  const alts: Record<string, string> = {
    'checkmate-04.webp': 'Checkmate catering and kiosk pages shown on a laptop',
  };
  const slides = files
    .map((name, i) => {
      const alt = alts[name] ?? `Checkmate product screen ${i + 1} from the restaurant ordering dashboard`;
      return `<div class="snap-center shrink-0" style="width:min(100%,36rem)"><div class="overflow-hidden rounded-3xl border border-dusk/10 bg-[#101826]"><img width="1024" height="576" src="/case/checkmate/${name}" alt="${esc(alt)}" loading="lazy" decoding="async" class="block h-auto w-full max-w-full object-contain"></div></div>`;
    })
    .join('');
  return `<section class="relative py-16"><div class="mx-auto max-w-7xl px-5 sm:px-8">${h2('Every Checkmate Screen, Crafted')}</div><div class="mt-10 flex snap-x gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">${slides}</div></section>`;
}

function related(): string {
  const cards = [
    ['/case-studies/mvpedits', '/case/mvpedits/cover.webp', 'MVP Edits', 'A Smarter Way to Showcase Your Game', 'from-electric to-cyan'],
    ['/case-studies/thrive-city', '/case/thrive-city/cover.webp', 'Thrive City', 'Build a city, learn real skills', 'from-cyan to-electric'],
    ['/case-studies/arc-viva', '/case/arc-viva/cover.webp', 'Arc Viva', 'Play, compete, and win', 'from-violet to-neon'],
  ];
  const html = cards
    .map(
      ([href, src, name, tagline, accent]) =>
        `<div class="dw-rise"><a class="group block" href="${href}"><div class="glass h-full overflow-hidden transition-colors hover:!border-cyan/40"><div class="relative h-36 overflow-hidden"><img width="1200" height="675" src="${src}" alt="${esc(name)}" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t ${accent} opacity-25 mix-blend-multiply"></div></div><div class="p-6"><div class="h-1 w-12 rounded-full bg-gradient-to-r ${accent}"></div><h3 class="mt-3 font-display text-lg font-bold text-dusk">${esc(name)}</h3><p class="mt-1 text-sm text-dusk/60">${esc(tagline)}</p></div></div></a></div>`,
    )
    .join('');
  return `<section class="section-pad relative !pt-10"><div class="relative mx-auto max-w-6xl"><div class="mx-auto max-w-3xl text-center">${h2('Keep exploring')}</div><div class="mt-12 grid gap-6 md:grid-cols-3">${html}</div></div></section>`;
}

export function checkmateSectionsHtml(): string {
  const logo = figure({
    file: 'checkmate-logo.webp',
    width: 410,
    height: 123,
    alt: 'Checkmate logo for the AI restaurant ordering platform',
    frame: 'inline-flex items-center',
    imgClass: 'block h-10 w-auto max-w-[220px] object-contain',
  });
  const hero = figure({
    file: 'checkmate-01.webp',
    width: 1024,
    height: 576,
    alt: 'Checkmate ordering homepage on a laptop for busy restaurants',
    eager: true,
  });
  const solutionImg = figure({
    file: 'checkmate-02.webp',
    width: 1024,
    height: 576,
    alt: 'Two Checkmate phones showing AI restaurant phone ordering',
  });
  const rushImg = figure({
    file: 'checkmate-03.webp',
    width: 1200,
    height: 900,
    alt: 'Checkmate results across restaurant locations at peak hour',
  });

  const snapshot: [string, string][] = [
    ['Industry', 'Restaurants · Food Service'],
    ['Platform', 'Web dashboard · Phone AI'],
    ['Scope', 'AI integration · Custom build'],
    ['Stack', 'MERN · AWS · POS integration'],
  ];

  const tableRows = comparison
    .map(
      ([area, before, after, impact]) =>
        `<tr class="border-t border-dusk/10"><th scope="row" class="whitespace-nowrap px-4 py-4 font-display text-sm font-bold text-dusk">${esc(area)}</th><td class="px-4 py-4 text-dusk/75">${esc(before)}</td><td class="px-4 py-4 text-dusk/75">${esc(after)}</td><td class="px-4 py-4 text-dusk/75">${esc(impact)}</td></tr>`,
    )
    .join('');

  const steps = solutionSteps
    .map(
      ([title, sentence], i) =>
        `<div class="flex gap-4"><span class="font-display text-3xl font-extrabold text-cyan/40">${String(i + 1).padStart(2, '0')}</span><div><h3 class="font-display text-xl font-bold text-dusk">${esc(title)}</h3><p class="mt-2 text-sm leading-relaxed text-dusk/75">${esc(sentence)}</p></div></div>`,
    )
    .join('');

  const flowHtml = flow
    .map((title, i) => {
      const card = `<div class="glass flex min-w-0 flex-1 items-center gap-3 px-4 py-4"><span class="font-display text-2xl font-extrabold text-cyan/40">${String(i + 1).padStart(2, '0')}</span><h3 class="font-display text-sm font-bold text-dusk sm:text-base">${esc(title)}</h3></div>`;
      const arrow = i < flow.length - 1 ? `<span class="hidden shrink-0 text-lg text-cyan/50 md:block" aria-hidden="true">→</span>` : '';
      return card + arrow;
    })
    .join('');

  return `<style>@keyframes dw-rise{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}@keyframes dw-bar{from{opacity:0;transform:scaleX(0)}to{opacity:1;transform:scaleX(1)}}.dw-rise{animation:dw-rise .7s cubic-bezier(.21,.65,.36,1) both}.dw-bar{transform-origin:left;animation:dw-bar .7s cubic-bezier(.21,.65,.36,1) .12s both}@media (prefers-reduced-motion:reduce){.dw-rise,.dw-bar{animation:none;opacity:1;transform:none}}</style><section class="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pt-44"><div class="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true"></div><div class="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true"></div><div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0"><nav class="mb-6 flex flex-wrap items-center gap-2 text-xs text-dusk/55" aria-label="Breadcrumb"><a class="hover:text-cyan" href="/">Home</a><span>/</span><a class="hover:text-cyan" href="/case-studies">Case Studies</a><span>/</span><span class="text-dusk/75">Checkmate</span></nav><div class="mb-6 inline-flex rounded-2xl bg-white px-5 py-3 shadow-lg">${logo}</div><span class="inline-flex items-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span> ${esc(checkmateCopy.label)}</span><h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-dusk sm:text-5xl">${esc(checkmateCopy.h1Line1)}<br><span class="text-gradient">${esc(checkmateCopy.h1Line2)}</span></h1><p class="mt-6 max-w-xl text-base leading-relaxed text-dusk/75">${esc(checkmateCopy.intro)}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary !px-8 !py-3.5" href="/contact">${esc(checkmateCopy.primaryCta)} <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">${esc(checkmateCopy.secondaryCta)}</a></div><p class="mt-3 text-xs text-dusk/55">${esc(checkmateCopy.microcopy)}</p></div><div class="relative min-w-0">${hero}</div></div></section><section class="relative px-5 sm:px-8"><div class="dw-rise mx-auto max-w-7xl"><div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-dusk/10 bg-dusk/10 md:grid-cols-4">${snapshot
    .map(
      ([k, v]) =>
        `<div class="min-w-0 bg-ink/80 p-5"><p class="text-[10px] font-bold uppercase tracking-[0.2em] text-dusk/45">${esc(k)}</p><p class="mt-1.5 text-sm font-semibold text-dusk">${esc(v)}</p></div>`,
    )
    .join('')}</div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto max-w-6xl"><div class="text-center">${h2('What Checkmate Changed for Restaurant Teams')}</div><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${results.map((row) => resultCard(...row)).join('')}</div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto max-w-6xl"><div class="mb-10">${h2('Before vs. After Checkmate')}</div><div class="overflow-x-auto"><table class="w-full min-w-[44rem] border-collapse text-left text-sm"><thead><tr class="text-[10px] font-bold uppercase tracking-[0.18em] text-dusk/45"><th scope="col" class="px-4 py-3">Area</th><th scope="col" class="px-4 py-3">Before</th><th scope="col" class="px-4 py-3">After</th><th scope="col" class="px-4 py-3">Business Impact</th></tr></thead><tbody>${tableRows}</tbody></table></div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The Restaurant Ordering Problem Was Fragmentation')}<p class="mt-6 text-base leading-relaxed text-dusk/75">Restaurants already had POS, online ordering, kitchen workflows, and trained staff, but phone orders sat outside that flow. During rushes the phone rang while staff served guests and took payments. At one representative location roughly 22 calls a week went unanswered, and answered calls still had to be re-typed into the POS.</p></div><div class="min-w-0">${h2('Why Another Ordering Tool Was Not Enough')}<p class="mt-6 text-base leading-relaxed text-dusk/75">Replacing the POS would disrupt the restaurant. A standalone dashboard adds one more screen. The answer was to put AI inside the existing workflow through <a class="font-medium text-dusk underline decoration-coral/40 underline-offset-2 hover:text-coral" href="/services/automation-and-integration">AI integration services</a>.</p></div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto max-w-6xl"><div class="text-center">${h2('From Customer Call to Restaurant Order')}</div><div class="mt-12 flex flex-col items-center gap-3 md:flex-row">${flowHtml}</div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The AI Restaurant Ordering Solution')}<div class="mt-10 space-y-8">${steps}</div></div><div class="min-w-0">${solutionImg}</div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto max-w-6xl">${h2('What DigiWorks AI Custom Built')}<p class="mt-6 max-w-3xl text-base leading-relaxed text-dusk/75">Checkmate is not a generic ordering tool. DigiWorks AI built it with custom software development services shaped around phone ordering, POS connectivity, and peak-hour demand.</p><div class="mt-8 flex flex-wrap gap-2.5">${chips.map((chip) => `<span class="rounded-full border border-cyan/30 bg-cyan/10 px-4 py-2 text-sm font-medium text-dusk/85">${esc(chip)}</span>`).join('')}</div><div class="mt-10 grid gap-6 md:grid-cols-3">${builtCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="font-display text-xl font-bold text-dusk">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-dusk/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${rushImg}</div><div class="min-w-0">${h2('Built for the Dinner Rush')}<ul class="mt-8 space-y-4">${rush.map((item) => `<li class="flex gap-3 text-base leading-relaxed text-dusk/75"><span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" aria-hidden="true"></span><span>${esc(item)}</span></li>`).join('')}</ul></div></div></section>${gallerySection()}<section class="relative px-5 py-16 sm:px-8"><div class="dw-rise mx-auto max-w-4xl"><div class="glass-strong relative overflow-hidden p-10 text-center md:p-14"><p class="text-[10px] font-bold uppercase tracking-[0.2em] text-dusk/45">Client feedback</p><p class="relative mt-4 font-display text-xl font-bold leading-relaxed text-dusk md:text-2xl">“${esc(checkmateCopy.quote)}”</p><p class="relative mt-6 text-sm font-semibold text-dusk/70">${esc(checkmateCopy.quoteBy)}</p></div></div></section><section class="section-pad relative !py-14"><div class="relative mx-auto max-w-6xl"><div class="text-center">${h2('Why This Project Worked')}</div><div class="mt-12 grid gap-6 md:grid-cols-3">${whyCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="font-display text-xl font-bold text-dusk">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-dusk/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section>${related()}<section class="relative overflow-hidden px-5 py-28 sm:px-8"><div class="relative mx-auto max-w-3xl text-center"><h2 class="font-display text-3xl font-extrabold leading-snug text-dusk sm:text-4xl md:text-5xl"><span class="text-gradient-hot">Turn More Calls Into Orders</span></h2><p class="mx-auto mt-6 max-w-xl text-dusk/75 md:text-lg">If busy hours bring missed calls, repeated order entry or stressed staff, DigiWorks AI can connect AI with the systems your restaurant already uses.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a class="btn-primary !px-9 !py-4 !text-base" href="/contact">Build Something Similar <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/services/automation-and-integration">Explore AI Integration Services</a></div><p class="mt-4 text-xs text-dusk/55">${esc(checkmateCopy.microcopy)}</p></div></section>`;
}
