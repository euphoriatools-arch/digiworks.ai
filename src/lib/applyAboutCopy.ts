import { aboutCopy } from '../data/copy/about';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace, replaceFaqBlock, replaceOnce } from './ssrCopy';

export function applyAboutCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    'We engineer<!-- --> </span><span class="text-gradient">intelligence that ships</span>',
    `${aboutCopy.h1Lead}<!-- --> </span><span class="text-gradient">${aboutCopy.h1Gradient}</span>`,
  );
  out = replaceOnce(
    out,
    "DigiWorks AI is the AI-native brand of DigiWorks Digital Inc. For 7+ years we've shipped products that move the metrics that matter — now we engineer intelligent systems built to reach production, not just demos.",
    aboutCopy.hero,
  );
  out = mustReplace(
    out,
    'Empower people and businesses to go beyond boundaries through AI-powered digital solutions. We combine innovation, collaboration, and technology to drive smarter growth, inspire creativity, and build a future where every idea turns into meaningful impact.',
    aboutCopy.mission,
  );
  out = replaceFaqBlock(out, aboutCopy.faqs, "Let's Turn Your AI Idea");
  out = injectBodyLinks(out, aboutCopy.bodyLinks);
  return applyCtas(fileHrefs(out));
}
