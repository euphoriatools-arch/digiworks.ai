import type { ServicePageCopy } from '../data/copy/types';
import { applyServiceFromAgent } from './applyServiceFromAgent';
import { mustReplace } from './ssrCopy';

export function applySolutionFromAgent(html: string, page: ServicePageCopy): string {
  let out = applyServiceFromAgent(html, page);
  out = mustReplace(out, '<span class="text-dusk/70">Services</span>', '<span class="text-dusk/70">Solutions</span>');
  out = mustReplace(out, 'bg-coral"></span>Services</span>', 'bg-coral"></span>Solutions</span>');
  return out;
}
