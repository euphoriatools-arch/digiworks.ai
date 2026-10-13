import { aiReadinessCopy } from '../data/copy/ai-readiness';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

export function applyAiReadinessCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    'How ready is your<!-- --> </span><span class="text-gradient">business for AI?</span>',
    `${aiReadinessCopy.h1Lead}<!-- --> </span><span class="text-gradient">${aiReadinessCopy.h1Gradient}</span>`,
  );
  out = mustReplace(
    out,
    'Five questions. Sixty seconds. A graded readiness score with the next step that actually fits where you are.',
    aiReadinessCopy.hero,
  );
  return applyCtas(fileHrefs(injectBodyLinks(out, aiReadinessCopy.bodyLinks)));
}
