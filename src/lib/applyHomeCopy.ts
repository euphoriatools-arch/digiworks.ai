import { homeCopy } from '../data/copy/home';
import { agentCopy } from '../data/copy/ai-agent-development';
import { generativeAiDevelopmentCopy } from '../data/copy/generative-ai-development';
import { predictiveModelingCopy } from '../data/copy/predictive-modeling';
import { aiChatbotDevelopmentCopy } from '../data/copy/ai-chatbot-development';
import { aiAutomationCopy } from '../data/copy/ai-automation';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace, replaceFaqBlock, replaceOnce } from './ssrCopy';
import { visibleListingCards } from './visibleCaseStudies';

export { homeCopy };

function homeH1(): string {
  const style = 'opacity:0;transform:translateY(0.6em) rotateX(-60deg)';
  const lines = homeCopy.h1Lines.map((line) => {
    const inner = line.words
      .map((w, i) => {
        const nbsp = i < line.words.length - 1 ? '<!-- -->&nbsp;' : '';
        return `<span class="inline-block" style="${style}">${w}${nbsp}</span>`;
      })
      .join('');
    const cls = line.className ? ` class="${line.className}"` : ' class=""';
    return `<span${cls} aria-label="${line.words.join(' ')}">${inner}</span>`;
  });
  return `<h1 class="mt-6 font-display text-4xl font-bold leading-[1.06] text-dusk sm:text-5xl lg:text-5xl xl:text-6xl">${lines.join('<br>')}</h1>`;
}

export function applyHomeCopy(html: string): string {
  let out = html;

  const h1Start = out.indexOf('<h1 class="mt-6 font-display text-4xl');
  const h1End = out.indexOf('</h1>', h1Start) + 5;
  if (h1Start < 0 || h1End < 5) throw new Error('home H1 missing');
  out = out.slice(0, h1Start) + homeH1() + out.slice(h1End);

  const pairs: [string, string][] = [
    ['Unlock the potential of AI with DigiWorks', homeCopy.kicker],
    [
      'Empowering Enterprises Through Smart,<!-- --> </span><span class="text-gradient">Ethical AI</span>',
      'Where US teams<!-- --> </span><span class="text-gradient">usually start</span>',
    ],
    [
      'Enterprise-grade AI solutions built on strong governance, transparent methodologies, and reliable engineering.',
      homeCopy.featuredSub,
    ],
    [
      'Building Intelligent Systems that Transform Data<!-- --> </span><span class="text-gradient-hot">into Action</span>',
      'Solutions we ship around production<!-- --> </span><span class="text-gradient-hot">AI</span>',
    ],
    ['Innovate, transform &amp; achieve<!-- --> </span><span class="text-gradient">real results</span>', 'Work already<!-- --> </span><span class="text-gradient">in production</span>'],
    [
      'Real-world impact through solutions designed for measurable performance and long-term value.',
      homeCopy.casesSub,
    ],
    [
      'Drag the sliders to estimate what intelligent automation could return in your organization. Most DigiWorks clients see production AI inside 8 to 20 weeks.',
      homeCopy.roiCopy,
    ],
    ['Fueling growth through innovation<!-- --> </span><span class="text-gradient">and creativity</span>', 'From the DigiWorks AI<!-- --> </span><span class="text-gradient">blog</span>'],
    [
      'Stay in touch with the latest industry trends, market insights, and news shaping the world of tomorrow.',
      homeCopy.blogSub,
    ],
    ['Questions, answered', 'AI development FAQs'],
    ['Intelligence for <span class="text-gradient">every sector</span>', 'AI for <span class="text-gradient">every sector</span>'],
    [
      'From hospital networks to global supply chains, we adapt AI to the unique challenges and operational environments of your industry.',
      homeCopy.sectorsSub,
    ],
  ];

  out = replaceOnce(
    out,
    'DigiWorks AI advances intelligent technologies to shape the future of business, driving innovation through smarter systems, data-driven strategies, and purposeful digital transformation.',
    homeCopy.hero,
  );

  out = replaceFaqBlock(out, homeCopy.faqs, 'Our experts are ready');

  for (const [from, to] of pairs) {
    out = mustReplace(out, from, to);
  }

  out = mustReplace(
    out,
    'Systems that learn from data, adapt to dynamic conditions, and make intelligent decisions independently.',
    agentCopy.offerings[0].desc,
  );
  out = mustReplace(
    out,
    'Automates writing, summarization, and report generation for business communication and content creation.',
    generativeAiDevelopmentCopy.offerings[0].desc,
  );
  out = mustReplace(
    out,
    'Build forecasting models tailored to your data environment, operational goals, and decision-making workflows.',
    predictiveModelingCopy.offerings[0].desc,
  );
  out = mustReplace(
    out,
    'Chatbots powered by natural language processing for context-aware, human-like communication.',
    aiChatbotDevelopmentCopy.offerings[0].desc,
  );
  out = mustReplace(
    out,
    'Automates repetitive workflows using AI models that improve speed, accuracy, and operational consistency.',
    aiAutomationCopy.offerings[0].desc,
  );
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

  out = injectBodyLinks(out, homeCopy.bodyLinks);
  const gridClass = '<div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">';
  const gridAt = out.indexOf(gridClass);
  const after = gridAt < 0 ? -1 : out.indexOf('<div class="mt-10 text-center"', gridAt);
  if (gridAt < 0 || after < 0) throw new Error('SSR copy: home case-study grid missing');
  out = out.slice(0, gridAt + gridClass.length) + visibleListingCards() + '</div>' + out.slice(after);
  return applyCtas(fileHrefs(out));
}
