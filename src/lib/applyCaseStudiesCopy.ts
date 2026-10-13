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
  return applyCtas(fileHrefs(out));
}
