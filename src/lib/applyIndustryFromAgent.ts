import type { ServicePageCopy } from '../data/copy/types';
import { applyServiceFromAgent } from './applyServiceFromAgent';
import { mustReplace } from './ssrCopy';

function stripIndustryHub(html: string): string {
  const marker = 'text-gradient-hot">every industry';
  const m = html.indexOf(marker);
  if (m < 0) throw new Error('SSR copy: industry hub missing');
  const start = html.lastIndexOf('<section class="section-pad relative">', m);
  const end = html.indexOf('</section>', m);
  if (start < 0 || end < 0) throw new Error('SSR copy: industry hub bounds missing');
  return html.slice(0, start) + html.slice(end + '</section>'.length);
}

export function applyIndustryFromAgent(html: string, page: ServicePageCopy): string {
  let out = applyServiceFromAgent(html, page);
  out = mustReplace(out, '<span class="text-dusk/70">Services</span>', '<span class="text-dusk/70">Industries</span>');
  out = mustReplace(out, 'bg-coral"></span>Services</span>', 'bg-coral"></span>Industries</span>');
  return stripIndustryHub(out);
}

export function applyHireFromAgent(html: string, page: ServicePageCopy): string {
  let out = applyServiceFromAgent(html, page);
  out = mustReplace(out, '<span class="text-dusk/70">Services</span>', '<span class="text-dusk/70">Hire Developers</span>');
  out = mustReplace(out, 'bg-coral"></span>Services</span>', 'bg-coral"></span>Hire Developers</span>');
  return stripIndustryHub(out);
}
