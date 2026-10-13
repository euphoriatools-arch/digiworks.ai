import { teamCopy } from '../data/copy/team';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

export function applyTeamCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    'The minds engineering<!-- --> </span><span class="text-gradient">what comes next</span>',
    `${teamCopy.h1Lead}<!-- --> </span><span class="text-gradient">${teamCopy.h1Gradient}</span>`,
  );
  out = mustReplace(
    out,
    'We turn business challenges into practical AI systems, scalable products, and smarter digital solutions, from Austin to Dubai, Guangzhou, Karachi, and Canada.',
    teamCopy.hero,
  );
  out = injectBodyLinks(out, teamCopy.bodyLinks);
  return applyCtas(fileHrefs(out));
}
