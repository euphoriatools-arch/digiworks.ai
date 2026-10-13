import { blogCopy } from '../data/copy/blog';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

export function applyBlogCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    'Fueling Growth through<!-- --> </span><span class="text-gradient">Innovation and Creativity</span>',
    `${blogCopy.h1Lead}<!-- --> </span><span class="text-gradient">${blogCopy.h1Gradient}</span>`,
  );
  out = mustReplace(
    out,
    'Stay in touch with the latest industry trends, market insights, and news shaping the world of tomorrow.',
    blogCopy.hero,
  );
  return applyCtas(fileHrefs(injectBodyLinks(out, blogCopy.bodyLinks)));
}
