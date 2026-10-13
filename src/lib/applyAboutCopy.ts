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
  out = mustReplace(
    out,
    '7+ years and 1,000+ shipped products mean your AI is built on hard-won engineering discipline, not experiments.',
    aboutCopy.decade,
  );
  out = mustReplace(
    out,
    'Grew to a 350+ peak team and delivered 1,000+ apps &amp; digital products and 10,000+ websites &amp; branding projects across the US, UK, EU, Australia and UAE.',
    aboutCopy.growth.replace(/&/g, '&amp;'),
  );
  out = replaceFaqBlock(out, aboutCopy.faqs, 'Our experts are ready');
  out = mustReplace(
    out,
    'We create intelligent ecosystems that combine automation, analytics, and decision intelligence to help enterprises streamline operations, enhance productivity, and accelerate digital transformation across industries.',
    'DigiWorks AI ships production AI from Austin HQ: agents, models, and automation US teams can run after we leave.',
  );
  out = mustReplace(
    out,
    'We design adaptive machine learning systems that analyze complex data, uncover insights, and continuously improve performance to empower enterprises with predictive, data-driven decision capabilities.',
    'Machine learning work here is a named model with an owner, not a lab demo. See Machine Learning for the practice URL.',
  );
  out = mustReplace(
    out,
    'We design secure, scalable cloud architectures and data ecosystems that empower enterprises to manage, analyze, and deploy intelligence seamlessly across platforms and business environments.',
    'Cloud and data work sits in your accounts. Cloud Architecture and Data and Cloud are the billed URLs when that is the job.',
  );
  out = mustReplace(
    out,
    'We streamline enterprise operations through intelligent automation systems that reduce manual effort, improve workflow efficiency, and accelerate performance with AI-powered precision and reliability.',
    'Automation is a named workflow with a desk that already owns it. Intelligent Automation is the outcome URL; integration stays on Automation and Integration.',
  );
  out = injectBodyLinks(out, aboutCopy.bodyLinks);
  return applyCtas(fileHrefs(out));
}
