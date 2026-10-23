import { caseStudiesCopy } from '../data/copy/case-studies';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

export function applyCaseStudiesCopy(html: string): string {
  let out = html;
  out = mustReplace(out, 'Real products.', caseStudiesCopy.h1Line1);
  out = mustReplace(out, 'Real outcomes.', caseStudiesCopy.h1Line2);
  out = mustReplace(
    out,
    'Twenty platforms we designed and engineered end to end, from first concept to launch, each powered by intelligent systems built for real-world impact.',
    caseStudiesCopy.hero,
  );
  out = injectBodyLinks(out, caseStudiesCopy.bodyLinks);
  const cardMarker = 'Behavior tracked. Outcomes improved.</p>';
  const cardAt = out.indexOf(cardMarker);
  if (cardAt < 0) throw new Error('SSR copy: Checkmate card anchor missing');
  const gridEnd = out.indexOf('</div></section><section class="section-pad relative !py-16">', cardAt);
  if (gridEnd < 0) throw new Error('SSR copy: case-studies grid end missing');
  const card = `<div class="h-full" style="opacity:0;transform:translateY(36px)"><a class="group block h-full" href="/case-studies/checkmate"><article class="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0a121e] transition-colors duration-300 hover:border-white/20"><div class="relative h-64 overflow-hidden bg-gradient-to-b from-[#12182a] to-[#080e18]"><div class="absolute -top-20 left-1/2 h-60 w-80 -translate-x-1/2 rounded-full blur-[90px]" style="background:#308eff;opacity:0.3" aria-hidden="true"></div><div class="absolute inset-0 opacity-[0.07]" style="background-image:linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px);background-size:30px 30px;mask-image:radial-gradient(circle at 50% 25%, black, transparent 78%)" aria-hidden="true"></div><div class="absolute left-1/2 top-9 h-[300px] w-[46%] -translate-x-1/2 overflow-hidden rounded-[1.7rem] border-[5px] border-[#080e18] bg-[#080e18] shadow-[0_28px_55px_rgba(0,0,0,0.6)] transition-transform duration-500 group-hover:-translate-y-1.5 group-hover:scale-[1.05]"></div><div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0a121e] to-transparent" aria-hidden="true"></div></div><div class="relative flex flex-1 flex-col border-t border-white/5 p-6"><span class="text-[10px] font-bold uppercase tracking-[0.2em]" style="color:#308eff">AI Restaurant Ordering Platform</span><h3 class="mt-2 font-display text-xl font-bold text-dusk">Checkmate</h3><p class="mt-1.5 line-clamp-2 text-sm text-dusk/60">Doubled Peak-Hour Order Capacity</p><span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold" style="color:#308eff">View case study <span class="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">→</span></span></div><div class="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style="box-shadow:inset 0 0 0 1px #308eff55, 0 24px 60px #308eff22" aria-hidden="true"></div></article></a></div>`;
  out = out.slice(0, gridEnd) + card + out.slice(gridEnd);
  return applyCtas(fileHrefs(out));
}
