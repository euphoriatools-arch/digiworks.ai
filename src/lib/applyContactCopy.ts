import { contactCopy } from '../data/copy/contact';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

export function applyContactCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    "Let's Talk About<!-- --> </span><span class=\"text-gradient\">Your AI Project</span>",
    `${contactCopy.h1Lead}<!-- --> </span><span class="text-gradient">${contactCopy.h1Gradient}</span>`,
  );
  out = mustReplace(
    out,
    "Our experts are ready to power your AI journey. Tell us what you're building and we'll map the fastest path to it.",
    contactCopy.hero,
  );
  out = mustReplace(out, 'Start a Conversation', contactCopy.formCta);
  out = mustReplace(
    out,
    'No spam, no obligation. Your details go straight to our solutions team.',
    contactCopy.formMicro,
  );
  return applyCtas(fileHrefs(injectBodyLinks(out, contactCopy.bodyLinks)));
}
