import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { site } from '../data/site.ts';

export type ListedStudy = {
  slug: string;
  name: string;
  tagline: string;
  category: string;
};

const CARD_IMAGE: Record<string, string> = {
  'lead-scout': '/case/lead-scout/lead-scout-01.webp',
  'orange-ruler': '/case/orange-ruler/orange-ruler-01.webp',
  'person-care': '/case/person-care/person-care-01.webp',
  checkmate: '/case/checkmate/checkmate-01.webp',
};

/** Browser-window card used on the home and case-study hub. Matches CaseCard's web frame. */
export function listingCard(study: ListedStudy, image?: string): string {
  const img = image
    ? `<img width="1024" height="576" src="${image}" alt="${study.name}" loading="lazy" class="block h-[155px] w-full object-cover object-top">`
    : '';
  const frame = `<div class="absolute inset-x-0 top-10 mx-auto w-[86%] overflow-hidden rounded-xl border border-black/40 bg-[#080e18] shadow-[0_28px_55px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.03]"><div class="flex h-5 items-center gap-1.5 px-2.5"><span class="h-1.5 w-1.5 rounded-full bg-white/25"></span><span class="h-1.5 w-1.5 rounded-full bg-white/25"></span><span class="h-1.5 w-1.5 rounded-full bg-white/25"></span></div>${img}</div>`;
  return `<div class="h-full" style="opacity:0;transform:translateY(36px)"><a class="group block h-full" href="/case-studies/${study.slug}"><article class="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a121e] transition-colors duration-300 hover:border-white/20"><div class="relative h-64 overflow-hidden bg-gradient-to-b from-[#12182a] to-[#080e18]"><div class="absolute -top-20 left-1/2 h-60 w-80 -translate-x-1/2 rounded-full blur-[90px]" style="background:#308eff;opacity:0.3" aria-hidden="true"></div><div class="absolute inset-0 opacity-[0.07]" style="background-image:linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px);background-size:30px 30px;mask-image:radial-gradient(circle at 50% 25%, black, transparent 78%)" aria-hidden="true"></div>${frame}<div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a121e] to-transparent" aria-hidden="true"></div></div><div class="relative flex flex-1 flex-col border-t border-white/5 p-6"><span class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#308eff">${study.category}</span><h3 class="mt-2 font-display text-xl font-bold text-dusk">${study.name}</h3><p class="mt-1.5 line-clamp-2 text-sm text-dusk/60">${study.tagline}</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style="color:#308eff">View case study <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></span></div><div class="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="box-shadow:inset 0 0 0 1px #308eff55, 0 24px 60px #308eff22" aria-hidden="true"></div></article></a></div>`;
}

export function readCatalog(): Map<string, ListedStudy> {
  const text = readFileSync(join(process.cwd(), 'public/assets/caseStudies-3DQGQmTb.js'), 'utf8');
  const re = /\{slug:`([^`]+)`,name:`([^`]+)`,tagline:`([^`]+)`,category:`([^`]+)`/g;
  const map = new Map<string, ListedStudy>();
  for (const match of text.matchAll(re)) {
    map.set(match[1], { slug: match[1], name: match[2], tagline: match[3], category: match[4] });
  }
  return map;
}

export function visibleStudies(): ListedStudy[] {
  const catalog = readCatalog();
  return site.visibleCaseStudies.map((slug) => {
    const study = catalog.get(slug);
    if (!study) throw new Error(`visibleCaseStudies: catalog is missing ${slug}`);
    return study;
  });
}

/** Hub and home show each study's main image inside the browser window. */
export function visibleListingCards(): string {
  return visibleStudies()
    .map((study) => listingCard(study, CARD_IMAGE[study.slug]))
    .join('');
}

function exploreCard(study: ListedStudy): string {
  const src = CARD_IMAGE[study.slug];
  const shot = src
    ? `<div class="relative h-36 overflow-hidden"><img width="1200" height="675" src="${src}" alt="${study.name}" loading="lazy" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-cyan to-electric opacity-25 mix-blend-multiply"></div></div>`
    : '';
  return `<div class="dw-rise"><a class="group block" href="/case-studies/${study.slug}"><div class="glass h-full overflow-hidden transition-colors hover:!border-cyan/40">${shot}<div class="p-6"><div class="h-1 w-12 rounded-full bg-gradient-to-r from-cyan to-electric"></div><h3 class="cm-lg mt-3 font-display font-bold text-white">${study.name}</h3><p class="mt-1 text-sm text-white/70">${study.tagline}</p></div></div></a></div>`;
}

export function visibleExploreHtml(currentSlug: string): string {
  const cards = visibleStudies()
    .filter((study) => study.slug !== currentSlug)
    .map(exploreCard)
    .join('');
  return `<section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mx-auto max-w-3xl text-center"><h2 class="cm-h2 mt-5 font-display font-extrabold leading-[1.08] text-white">Keep exploring</h2></div><div class="mt-12 grid gap-6 md:grid-cols-3">${cards}</div></div></section>`;
}
