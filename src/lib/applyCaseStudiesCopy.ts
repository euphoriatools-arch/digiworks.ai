import { caseStudiesCopy } from '../data/copy/case-studies';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';
import { visibleListingCards } from './visibleCaseStudies';

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
  const chipStart = out.indexOf('[scrollbar-width:none]');
  const buttonsStart = chipStart < 0 ? -1 : out.indexOf('<button', chipStart);
  const allEnd = buttonsStart < 0 ? -1 : out.indexOf('</button>', buttonsStart);
  const chipsEnd = allEnd < 0 ? -1 : out.indexOf('</div></div></section><section class="relative px-5 pb-20', allEnd);
  if (buttonsStart < 0 || allEnd < 0 || chipsEnd < 0) throw new Error('SSR copy: case-studies filter chips missing');
  out = out.slice(0, allEnd + '</button>'.length) + out.slice(chipsEnd);

  const gridClass = '<div class="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">';
  const gridAt = out.indexOf(gridClass);
  const gridEnd = gridAt < 0 ? -1 : out.indexOf('</div></section><section class="section-pad relative !py-16">', gridAt);
  if (gridAt < 0 || gridEnd < 0) throw new Error('SSR copy: case-studies grid missing');
  out = out.slice(0, gridAt + gridClass.length) + visibleListingCards() + out.slice(gridEnd);
  return applyCtas(fileHrefs(out));
}
