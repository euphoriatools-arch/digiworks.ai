import { agentCopy } from '../data/copy/ai-agent-development';
import { applyServiceFromAgent } from './applyServiceFromAgent';

export { agentCopy };

export function applyAgentCopy(html: string): string {
  return applyServiceFromAgent(html, agentCopy);
}
