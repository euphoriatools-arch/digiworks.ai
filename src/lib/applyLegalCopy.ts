import { privacyPolicyCopy } from '../data/copy/privacy-policy';
import { termsOfUseCopy } from '../data/copy/terms-of-use';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace } from './ssrCopy';

export function applyPrivacyCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    'DigiWorks AI delivers enterprise-grade AI solutions built on strong governance, transparent methodologies, and reliable engineering. That same standard applies to how we handle your data.',
    privacyPolicyCopy.intro,
  );
  return applyCtas(fileHrefs(injectBodyLinks(out, privacyPolicyCopy.bodyLinks)));
}

export function applyTermsCopy(html: string): string {
  let out = html;
  out = mustReplace(
    out,
    'These terms govern your use of the DigiWorks AI website and the materials published on it. By using this site, you agree to them.',
    termsOfUseCopy.intro,
  );
  return applyCtas(fileHrefs(injectBodyLinks(out, termsOfUseCopy.bodyLinks)));
}
