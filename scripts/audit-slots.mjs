import { agentCopy } from '../src/data/copy/ai-agent-development.ts';
import { homeCopy } from '../src/data/copy/home.ts';
import { cloudAndDevopsCopy } from '../src/data/copy/cloud-and-devops.ts';
import { dataEngineeringCopy } from '../src/data/copy/data-engineering.ts';
import { idpCopy } from '../src/data/copy/intelligent-document-processing.ts';
import { mlDevelopmentCopy } from '../src/data/copy/machine-learning-development.ts';
import { aiSecurityCopy } from '../src/data/copy/ai-security.ts';
import { artificialIntelligenceCopy } from '../src/data/copy/artificial-intelligence.ts';
import { machineLearningCopy } from '../src/data/copy/machine-learning.ts';
import { autonomousAiAgentsCopy } from '../src/data/copy/autonomous-ai-agents.ts';
import { aiChatbotDevelopmentCopy } from '../src/data/copy/ai-chatbot-development.ts';
import { nlpCopy } from '../src/data/copy/natural-language-processing.ts';
import { generativeAiDevelopmentCopy } from '../src/data/copy/generative-ai-development.ts';
import { predictiveModelingCopy } from '../src/data/copy/predictive-modeling.ts';
import { automationAndIntegrationCopy } from '../src/data/copy/automation-and-integration.ts';
import { intelligentAutomationCopy } from '../src/data/copy/intelligent-automation.ts';
import { dataAndCloudCopy } from '../src/data/copy/data-and-cloud.ts';
import { realTimeDataStreamingCopy } from '../src/data/copy/real-time-data-streaming.ts';
import { cloudArchitectureCopy } from '../src/data/copy/cloud-architecture-and-deployment.ts';
import { mlopsSetupCopy } from '../src/data/copy/mlops-setup.ts';
import { securityAndComplianceCopy } from '../src/data/copy/security-and-compliance.ts';
import { aiRedTeamingCopy } from '../src/data/copy/ai-red-teaming.ts';
import { privacyPreservingAiCopy } from '../src/data/copy/privacy-preserving-ai.ts';
import { aiTrainingAndSupportCopy } from '../src/data/copy/ai-training-and-support.ts';
import { mobileAppDevelopmentCopy } from '../src/data/copy/mobile-app-development.ts';
import { aiAutomationCopy } from '../src/data/copy/ai-automation.ts';
import { predictiveAnalyticsCopy } from '../src/data/copy/predictive-analytics.ts';
import { conversationalAiCopy } from '../src/data/copy/conversational-ai.ts';
import { computerVisionCopy } from '../src/data/copy/computer-vision-image-recognition.ts';
import { generativeAiCopy } from '../src/data/copy/generative-ai.ts';
import { aiForCybersecurityCopy } from '../src/data/copy/ai-for-cybersecurity.ts';
import { aiForHealthcareCopy } from '../src/data/copy/ai-for-healthcare.ts';
import { aiForFintechCopy } from '../src/data/copy/ai-for-fintech.ts';
import { aiForRetailCopy } from '../src/data/copy/ai-for-retail-and-ecommerce.ts';
import { aiForManufacturingCopy } from '../src/data/copy/ai-for-manufacturing.ts';
import { aiForLogisticsCopy } from '../src/data/copy/ai-for-logistics-and-supply-chain.ts';
import { aiForRealEstateCopy } from '../src/data/copy/ai-for-real-estate.ts';
import { aiForEducationCopy } from '../src/data/copy/ai-for-education.ts';
import { dedicatedAiPodsCopy } from '../src/data/copy/dedicated-ai-pods.ts';
import { hireAiEngineersCopy } from '../src/data/copy/hire-ai-engineers.ts';
import { hireMlEngineersCopy } from '../src/data/copy/hire-ml-engineers.ts';
import { hireDataScientistsCopy } from '../src/data/copy/hire-data-scientists.ts';
import { hireNlpEngineersCopy } from '../src/data/copy/hire-nlp-engineers.ts';
import { hireComputerVisionCopy } from '../src/data/copy/hire-computer-vision-developers.ts';
import { HOME_SLOTS, checkHomeSlots, checkServiceSlots, wordCount, within } from './orig-slots.mjs';

const all = [
  ['agent', agentCopy],
  ['ai-security', aiSecurityCopy],
  ['cloud', cloudAndDevopsCopy],
  ['data', dataEngineeringCopy],
  ['idp', idpCopy],
  ['ml-dev', mlDevelopmentCopy],
  ['hub', artificialIntelligenceCopy],
  ['ml', machineLearningCopy],
  ['auto-agents', autonomousAiAgentsCopy],
  ['chatbot', aiChatbotDevelopmentCopy],
  ['nlp', nlpCopy],
  ['genai', generativeAiDevelopmentCopy],
  ['pred', predictiveModelingCopy],
  ['automation', automationAndIntegrationCopy],
  ['intelligent-automation', intelligentAutomationCopy],
  ['data-and-cloud', dataAndCloudCopy],
  ['streaming', realTimeDataStreamingCopy],
  ['cloud-arch', cloudArchitectureCopy],
  ['mlops', mlopsSetupCopy],
  ['sec-comp', securityAndComplianceCopy],
  ['red-team', aiRedTeamingCopy],
  ['privacy', privacyPreservingAiCopy],
  ['training', aiTrainingAndSupportCopy],
  ['mobile', mobileAppDevelopmentCopy],
  ['ai-automation', aiAutomationCopy],
  ['pred-analytics', predictiveAnalyticsCopy],
  ['conversational', conversationalAiCopy],
  ['cv', computerVisionCopy],
  ['genai-sol', generativeAiCopy],
  ['cyber-sol', aiForCybersecurityCopy],
  ['healthcare', aiForHealthcareCopy],
  ['fintech', aiForFintechCopy],
  ['retail', aiForRetailCopy],
  ['manufacturing', aiForManufacturingCopy],
  ['logistics', aiForLogisticsCopy],
  ['real-estate', aiForRealEstateCopy],
  ['education', aiForEducationCopy],
  ['pods', dedicatedAiPodsCopy],
  ['hire-ai', hireAiEngineersCopy],
  ['hire-ml', hireMlEngineersCopy],
  ['hire-ds', hireDataScientistsCopy],
  ['hire-nlp', hireNlpEngineersCopy],
  ['hire-cv', hireComputerVisionCopy],
];

const fails = [...checkHomeSlots(homeCopy)];
for (const [label, copy] of all) fails.push(...checkServiceSlots(copy, label));
const featured = [
  [agentCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[0], 'feat agent'],
  [generativeAiDevelopmentCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[1], 'feat genai'],
  [predictiveModelingCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[2], 'feat pred'],
  [aiChatbotDevelopmentCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[3], 'feat chatbot'],
];
for (const [text, orig, label] of featured) {
  const n = wordCount(text);
  if (!within(n, orig)) fails.push(`${label}: ${n} vs orig ${orig}`);
}
console.log(fails.length ? fails.join('\n') : 'ok');
process.exit(fails.length ? 1 : 0);
