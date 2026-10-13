import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { cloudAndDevopsCopy } from '../src/data/copy/cloud-and-devops.ts';
import { dataEngineeringCopy } from '../src/data/copy/data-engineering.ts';
import { idpCopy } from '../src/data/copy/intelligent-document-processing.ts';
import { mlDevelopmentCopy } from '../src/data/copy/machine-learning-development.ts';
import { aiSecurityCopy } from '../src/data/copy/ai-security.ts';
import { agentCopy } from '../src/data/copy/ai-agent-development.ts';
import { homeCopy } from '../src/data/copy/home.ts';
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
import { aboutCopy } from '../src/data/copy/about.ts';
import { teamCopy } from '../src/data/copy/team.ts';
import { caseStudiesCopy } from '../src/data/copy/case-studies.ts';
import { aiReadinessCopy } from '../src/data/copy/ai-readiness.ts';
import { contactCopy } from '../src/data/copy/contact.ts';
import { blogCopy } from '../src/data/copy/blog.ts';
import { privacyPolicyCopy } from '../src/data/copy/privacy-policy.ts';
import { termsOfUseCopy } from '../src/data/copy/terms-of-use.ts';
import { HOME_SLOTS, checkHomeSlots, checkServiceSlots, wordCount, within } from './orig-slots.mjs';

const dist = join(process.cwd(), 'dist');
const srcPages = join(process.cwd(), 'src/pages');

function mustContain(file, needles, label) {
  const html = readFileSync(join(dist, file), 'utf8');
  const decoded = html
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');
  const stripped = decoded.replace(/<[^>]+>/g, '');
  for (const n of needles) {
    if (!html.includes(n) && !decoded.includes(n) && !stripped.includes(n)) {
      throw new Error(`dist ${label}: missing ${n.slice(0, 100)}`);
    }
  }
}

function relatedPagesExist(copy, label) {
  const links = [...copy.relatedServices, ...copy.relatedSolutions, ...copy.relatedIndustries];
  for (const l of links) {
    const astro = join(srcPages, `${l.href.replace(/^\//, '')}.astro`);
    if (!existsSync(astro)) {
      throw new Error(`related link missing page (${label}): ${l.href} -> ${astro}`);
    }
  }
}

function allFaqsInFile(file, faqs, label) {
  const html = readFileSync(join(dist, file), 'utf8');
  const decoded = html.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
  for (const f of faqs) {
    if (!html.includes(f.a) && !decoded.includes(f.a)) {
      throw new Error(`dist ${label}: FAQ answer missing from HTML: ${f.a.slice(0, 80)}`);
    }
    if (!html.includes(f.q) && !decoded.includes(f.q)) {
      throw new Error(`dist ${label}: FAQ question missing from HTML: ${f.q.slice(0, 80)}`);
    }
  }
}

function bodyLinksInFile(file, copy, label) {
  const html = readFileSync(join(dist, file), 'utf8');
  for (const l of copy.bodyLinks) {
    if (!html.includes(`>${l.phrase}</a>`)) {
      throw new Error(`dist ${label}: body link missing: ${l.phrase.slice(0, 80)}`);
    }
  }
}

function titleLen(title, label, min = 50, max = 60) {
  const n = title.length;
  if (n < min || n > max) {
    throw new Error(`title length ${label}: ${n} (${JSON.stringify(title)})`);
  }
}

mustContain(
  'index.html',
  [
    homeCopy.title,
    homeCopy.description,
    homeCopy.hero,
    homeCopy.kicker,
    homeCopy.featuredSub,
    homeCopy.casesSub,
    homeCopy.roiCopy,
    homeCopy.blogSub,
    homeCopy.sectorsSub,
    ...homeCopy.faqs.flatMap((f) => [f.q, f.a]),
  ],
  'home',
);
allFaqsInFile('index.html', homeCopy.faqs, 'home');
bodyLinksInFile('index.html', homeCopy, 'home');
mustContain(
  'services/ai-agent-development.html',
  [agentCopy.title, agentCopy.description, agentCopy.hero, ...agentCopy.faqs.flatMap((f) => [f.q, f.a]), agentCopy.h1Gradient],
  'agent',
);
allFaqsInFile('services/ai-agent-development.html', agentCopy.faqs, 'agent');
relatedPagesExist(agentCopy, 'agent');
bodyLinksInFile('services/ai-agent-development.html', agentCopy, 'agent');


const serviceCopies = [
  ['services/ai-security.html', aiSecurityCopy, 'ai-security'],
  ['services/cloud-and-devops.html', cloudAndDevopsCopy, 'cloud-and-devops'],
  ['services/data-engineering.html', dataEngineeringCopy, 'data-engineering'],
  ['services/intelligent-document-processing.html', idpCopy, 'idp'],
  ['services/machine-learning-development.html', mlDevelopmentCopy, 'ml-development'],
  ['services/artificial-intelligence.html', artificialIntelligenceCopy, 'artificial-intelligence'],
  ['services/machine-learning.html', machineLearningCopy, 'machine-learning'],
  ['services/autonomous-ai-agents.html', autonomousAiAgentsCopy, 'autonomous-ai-agents'],
  ['services/ai-chatbot-development.html', aiChatbotDevelopmentCopy, 'ai-chatbot-development'],
  ['services/natural-language-processing.html', nlpCopy, 'nlp'],
  ['services/generative-ai-development.html', generativeAiDevelopmentCopy, 'generative-ai-development'],
  ['services/predictive-modeling.html', predictiveModelingCopy, 'predictive-modeling'],
  ['services/automation-and-integration.html', automationAndIntegrationCopy, 'automation-and-integration'],
  ['services/intelligent-automation.html', intelligentAutomationCopy, 'intelligent-automation'],
  ['services/data-and-cloud.html', dataAndCloudCopy, 'data-and-cloud'],
  ['services/real-time-data-streaming.html', realTimeDataStreamingCopy, 'real-time-data-streaming'],
  ['services/cloud-architecture-and-deployment.html', cloudArchitectureCopy, 'cloud-architecture'],
  ['services/mlops-setup.html', mlopsSetupCopy, 'mlops-setup'],
  ['services/security-and-compliance.html', securityAndComplianceCopy, 'security-and-compliance'],
  ['services/ai-red-teaming.html', aiRedTeamingCopy, 'ai-red-teaming'],
  ['services/privacy-preserving-ai.html', privacyPreservingAiCopy, 'privacy-preserving-ai'],
  ['services/ai-training-and-support.html', aiTrainingAndSupportCopy, 'ai-training-and-support'],
  ['services/mobile-app-development.html', mobileAppDevelopmentCopy, 'mobile-app-development'],
  ['solutions/ai-automation.html', aiAutomationCopy, 'ai-automation'],
  ['solutions/predictive-analytics.html', predictiveAnalyticsCopy, 'predictive-analytics'],
  ['solutions/conversational-ai.html', conversationalAiCopy, 'conversational-ai'],
  ['solutions/computer-vision-image-recognition.html', computerVisionCopy, 'computer-vision'],
  ['solutions/generative-ai.html', generativeAiCopy, 'generative-ai-solutions'],
  ['solutions/ai-for-cybersecurity.html', aiForCybersecurityCopy, 'ai-for-cybersecurity'],
  ['industries/ai-for-healthcare.html', aiForHealthcareCopy, 'ai-for-healthcare'],
  ['industries/ai-for-fintech.html', aiForFintechCopy, 'ai-for-fintech'],
  ['industries/ai-for-retail-and-ecommerce.html', aiForRetailCopy, 'ai-for-retail'],
  ['industries/ai-for-manufacturing.html', aiForManufacturingCopy, 'ai-for-manufacturing'],
  ['industries/ai-for-logistics-and-supply-chain.html', aiForLogisticsCopy, 'ai-for-logistics'],
  ['industries/ai-for-real-estate.html', aiForRealEstateCopy, 'ai-for-real-estate'],
  ['industries/ai-for-education.html', aiForEducationCopy, 'ai-for-education'],
  ['hire/dedicated-ai-pods.html', dedicatedAiPodsCopy, 'dedicated-ai-pods'],
  ['hire/hire-ai-engineers.html', hireAiEngineersCopy, 'hire-ai-engineers'],
  ['hire/hire-ml-engineers.html', hireMlEngineersCopy, 'hire-ml-engineers'],
  ['hire/hire-data-scientists.html', hireDataScientistsCopy, 'hire-data-scientists'],
  ['hire/hire-nlp-engineers.html', hireNlpEngineersCopy, 'hire-nlp-engineers'],
  ['hire/hire-computer-vision-developers.html', hireComputerVisionCopy, 'hire-computer-vision'],
];

for (const [file, copy, label] of serviceCopies) {
  mustContain(file, [copy.title, copy.description, copy.hero, ...copy.faqs.flatMap((f) => [f.q, f.a]), copy.h1Gradient], label);
  allFaqsInFile(file, copy.faqs, label);
  relatedPagesExist(copy, label);
  bodyLinksInFile(file, copy, label);
  titleLen(copy.title, label, copy.slug === 'generative-ai-development' ? 49 : 50, 60);
}

titleLen(homeCopy.title, 'home');
titleLen(agentCopy.title, 'agent');
titleLen(artificialIntelligenceCopy.title, 'ai-hub');
titleLen(autonomousAiAgentsCopy.title, 'autonomous');
titleLen(generativeAiDevelopmentCopy.title, 'generative', 49, 60);
titleLen(aboutCopy.title, 'about');
titleLen(teamCopy.title, 'team');
titleLen(caseStudiesCopy.title, 'case-studies');
titleLen(aiReadinessCopy.title, 'ai-readiness');
titleLen(contactCopy.title, 'contact');
titleLen(blogCopy.title, 'blog');
titleLen(privacyPolicyCopy.title, 'privacy');
titleLen(termsOfUseCopy.title, 'terms');

mustContain('about.html', [aboutCopy.title, aboutCopy.description, aboutCopy.hero, ...aboutCopy.faqs.flatMap((f) => [f.q, f.a])], 'about');
allFaqsInFile('about.html', aboutCopy.faqs, 'about');
bodyLinksInFile('about.html', aboutCopy, 'about');
mustContain('team.html', [teamCopy.title, teamCopy.description, teamCopy.hero], 'team');
bodyLinksInFile('team.html', teamCopy, 'team');
mustContain('case-studies.html', [caseStudiesCopy.title, caseStudiesCopy.description, caseStudiesCopy.hero], 'case-studies');
bodyLinksInFile('case-studies.html', caseStudiesCopy, 'case-studies');
mustContain('ai-readiness.html', [aiReadinessCopy.title, aiReadinessCopy.description, aiReadinessCopy.hero], 'ai-readiness');
bodyLinksInFile('ai-readiness.html', aiReadinessCopy, 'ai-readiness');
mustContain('contact.html', [contactCopy.title, contactCopy.description, contactCopy.hero, contactCopy.formCta], 'contact');
bodyLinksInFile('contact.html', contactCopy, 'contact');
mustContain('blog.html', [blogCopy.title, blogCopy.description, blogCopy.hero], 'blog');
bodyLinksInFile('blog.html', blogCopy, 'blog');
mustContain('privacy-policy.html', [privacyPolicyCopy.title, privacyPolicyCopy.description, privacyPolicyCopy.intro], 'privacy');
bodyLinksInFile('privacy-policy.html', privacyPolicyCopy, 'privacy');
mustContain('terms-of-use.html', [termsOfUseCopy.title, termsOfUseCopy.description, termsOfUseCopy.intro], 'terms');
bodyLinksInFile('terms-of-use.html', termsOfUseCopy, 'terms');

const slotFails = [
  ...checkHomeSlots(homeCopy),
  ...checkServiceSlots(agentCopy, 'agent'),
];
for (const [, copy, label] of serviceCopies) {
  slotFails.push(...checkServiceSlots(copy, label));
}
const featured = [
  [agentCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[0], 'home feat agent'],
  [generativeAiDevelopmentCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[1], 'home feat genai'],
  [predictiveModelingCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[2], 'home feat pred'],
  [aiChatbotDevelopmentCopy.offerings[0].desc, HOME_SLOTS.featuredDescs[3], 'home feat chatbot'],
];
for (const [text, orig, label] of featured) {
  const n = wordCount(text);
  if (!within(n, orig)) slotFails.push(`${label}: ${n} vs orig ${orig}`);
}
if (slotFails.length) {
  throw new Error(`slot ±5 / FAQ length:\n${slotFails.join('\n')}`);
}

console.log('dist copy check: ok');
console.log('related link check: ok');
console.log('slot ±5 and FAQ 50–90: ok');
