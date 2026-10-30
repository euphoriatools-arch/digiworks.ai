import { aiSecurityCopy } from '../data/copy/ai-security';
import { artificialIntelligenceCopy } from '../data/copy/artificial-intelligence';
import { cloudAndDevopsCopy } from '../data/copy/cloud-and-devops';
import { contactCopy } from '../data/copy/contact';
import { dataEngineeringCopy } from '../data/copy/data-engineering';
import { idpCopy } from '../data/copy/intelligent-document-processing';
import { mlDevelopmentCopy } from '../data/copy/machine-learning-development';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

const CAPABILITY_PILL =
  'rounded-full border border-dusk/12 bg-dusk/[0.03] px-4 py-2 text-xs text-dusk/70 transition-all duration-300 hover:border-violet/50 hover:bg-violet/10 hover:text-dusk';

function capabilityPill(slug: string, name: string): string {
  return `<a href="/services/${slug}" class="${CAPABILITY_PILL}">${name}</a>`;
}

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
  out = mustReplace(
    out,
    "Whatever you're building, there's a DigiWorks team for it.",
    contactCopy.capabilitiesSub,
  );
  out = mustReplace(
    out,
    'Present across 5 cities, one team, built to support you wherever you are.',
    contactCopy.officesSub,
  );
  out = mustReplace(
    out,
    'hover:bg-violet/10 hover:text-dusk">Artificial Intelligence</a>',
    `hover:bg-violet/10 hover:text-dusk">${artificialIntelligenceCopy.name}</a>`,
  );
  out = mustReplace(
    out,
    'AI Red Teaming</a></div>',
    `AI Red Teaming</a>${[
      capabilityPill(aiSecurityCopy.slug, aiSecurityCopy.name),
      capabilityPill(cloudAndDevopsCopy.slug, cloudAndDevopsCopy.name),
      capabilityPill(dataEngineeringCopy.slug, dataEngineeringCopy.name),
      capabilityPill(idpCopy.slug, idpCopy.name),
      capabilityPill(mlDevelopmentCopy.slug, mlDevelopmentCopy.name),
    ].join('')}</div>`,
  );
  return applyCtas(fileHrefs(injectBodyLinks(out, contactCopy.bodyLinks)));
}
