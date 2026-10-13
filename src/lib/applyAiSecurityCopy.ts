import { aiSecurityCopy } from '../data/copy/ai-security';
import { applyServiceFromAgent } from './applyServiceFromAgent';

export { aiSecurityCopy };

export function applyAiSecurityCopy(html: string): string {
  return applyServiceFromAgent(html, aiSecurityCopy);
}
