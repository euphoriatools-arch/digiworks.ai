import { homeCopy } from '../data/copy/home';
import { agentCopy } from '../data/copy/ai-agent-development';
import { generativeAiDevelopmentCopy } from '../data/copy/generative-ai-development';
import { predictiveModelingCopy } from '../data/copy/predictive-modeling';
import { aiChatbotDevelopmentCopy } from '../data/copy/ai-chatbot-development';
import { aiAutomationCopy } from '../data/copy/ai-automation';
import { applyCtas } from './applyCtas';
import { fileHrefs, injectBodyLinks, mustReplace, replaceFaqBlock, replaceOnce } from './ssrCopy';
import { visibleListingCards } from './visibleCaseStudies';
import { homeHeroSectionHtml } from './homeHero';
import { homeIndustrySectionHtml } from './homeIndustrySection';
import { homeExpertiseSectionHtml } from './homeExpertiseSection';
import { homeSectorPillsHtml } from './homeSectorsPills';

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
    ['Innovate, transform &amp; achieve<!-- --> </span><span class="text-gradient">real results</span>', 'Real Products.<!-- --> </span><span class="text-gradient">Real Business Impact.</span>'],
    [
      'Real-world impact through solutions designed for measurable performance and long-term value.',
      homeCopy.casesSub,
    ],
    [
      'Drag the sliders to estimate what intelligent automation could return in your organization. Most DigiWorks clients see production AI inside 8 to 20 weeks.',
      homeCopy.roiCopy,
    ],
    ['Fueling growth through innovation<!-- --> </span><span class="text-gradient">and creativity</span>', 'Insights From Production<!-- --> </span><span class="text-gradient">AI Work</span>'],
    [
      'Stay in touch with the latest industry trends, market insights, and news shaping the world of tomorrow.',
      homeCopy.blogSub,
    ],
    ['Questions, answered', 'AI Development Questions, Answered'],
    ['Intelligence for <span class="text-gradient">every sector</span>', 'AI Built for <span class="text-gradient">Every Industry</span>'],
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
  const gridClass = '<div class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">';
  const gridAt = out.indexOf(gridClass);
  const after = gridAt < 0 ? -1 : out.indexOf('<div class="mt-10 text-center"', gridAt);
  if (gridAt < 0 || after < 0) throw new Error('SSR copy: home case-study grid missing');
  out = out.slice(0, gridAt + gridClass.length) + visibleListingCards() + '</div>' + out.slice(after);
  out = applyCtas(fileHrefs(out));
  const heroStart = out.indexOf('<section class="relative flex min-h-screen items-center overflow-hidden');
  const heroNext = out.indexOf('<section class="relative px-5 py-10 sm:px-8" aria-label="Client brands">', heroStart);
  if (heroStart < 0 || heroNext < 0) throw new Error('SSR copy: home hero section missing');
  out = out.slice(0, heroStart) + homeHeroSectionHtml() + out.slice(heroNext);

  const countersStart = out.indexOf('<section class="relative px-5 sm:px-8"><div class="glass-strong glare hud');
  const countersEnd =
    countersStart < 0 ? -1 : out.indexOf('</section>', countersStart) + '</section>'.length;
  if (countersStart < 0 || countersEnd < '</section>'.length) {
    throw new Error('SSR copy: home counters section missing');
  }
  out = out.slice(0, countersStart) + homeIndustrySectionHtml() + out.slice(countersEnd);

  const expertiseStart = out.indexOf(
    '<section class="section-pad relative overflow-hidden"><canvas class="pointer-events-none absolute inset-0 h-full w-full " style="opacity:0.5"',
  );
  const expertiseMarker = out.indexOf('>Our Expertise</span>', expertiseStart);
  const expertiseEnd =
    expertiseMarker < 0
      ? -1
      : out.indexOf(
          '</section>',
          out.indexOf(
            'We streamline enterprise operations through intelligent automation systems that reduce manual effort',
            expertiseMarker,
          ),
        ) + '</section>'.length;
  if (expertiseStart < 0 || expertiseMarker < 0 || expertiseEnd < '</section>'.length) {
    throw new Error('SSR copy: home expertise section missing');
  }
  out = out.slice(0, expertiseStart) + homeExpertiseSectionHtml() + out.slice(expertiseEnd);

  out = removeHomeSection(out, '>Featured Capabilities</span>', 'featured capabilities');
  out = removeHomeSection(out, 'Solutions we ship around production', 'solutions');
  out = removeHomeSection(out, 'aria-label="ROI calculator"', 'roi calculator');
  out = patchHomeSectorPills(out);
  out = moveWaysAfterHowItWorks(out);
  return fileHrefs(injectBodyLinks(out, homeCopy.bodyLinks));
}

function patchHomeSectorPills(html: string): string {
  const wrapOpen = '<div class="flex flex-wrap gap-3">';
  const sectorH2 = 'AI Built for <span class="text-gradient">Every Industry</span>';
  const sectorAt = html.indexOf(sectorH2);
  if (sectorAt < 0) throw new Error('SSR copy: home sectors heading missing');
  const wrapAt = html.indexOf(wrapOpen, sectorAt);
  if (wrapAt < 0) throw new Error('SSR copy: home sectors pills missing');
  const wrapEnd = html.indexOf('</div><p class="text-sm text-dusk/60">', wrapAt);
  if (wrapEnd < 0) throw new Error('SSR copy: home sectors pills end missing');
  let out =
    html.slice(0, wrapAt + wrapOpen.length) + homeSectorPillsHtml() + html.slice(wrapEnd);

  out = mustReplace(
    out,
    'text-gradient">7+</p><p class="text-xs text-dusk/60">sectors served</p>',
    'text-gradient">15+</p><p class="text-xs text-dusk/60">Industries</p>',
  );

  out = mustReplace(
    out,
    'mt-4 max-w-md text-dusk/70',
    'mt-4 max-w-xl text-dusk/70 leading-relaxed',
  );
  out = mustReplace(
    out,
    'text-dusk/60">offices in the USA and UK</p>',
    'text-dusk/60">Offices Across the US and UK</p>',
  );
  out = mustReplace(
    out,
    'text-gradient">150+</p><p class="text-xs text-dusk/60">deployments</p>',
    'text-gradient">150+</p><p class="text-xs text-dusk/60">Deployments</p>',
  );
  out = mustReplace(out, 'Don’t see your sector?', 'Don’t see your industry?');
  out = mustReplace(
    out,
    'Pick the engagement model that fits where you are; switch as your roadmap grows.',
    'Choose the engagement model that fits your goals, timeline, and team.',
  );
  out = mustReplace(out, 'View All Case Studies', 'Explore All Case Studies');
  out = mustReplace(
    out,
    '<h3 class="mt-4 font-display text-xl font-bold text-dusk">Project Delivery</h3>',
    '<h3 class="mt-4 font-display text-xl font-bold text-dusk">Build and Launch Your AI Solution</h3>',
  );
  out = mustReplace(
    out,
    '<h3 class="mt-4 font-display text-xl font-bold text-dusk">Dedicated AI Pod</h3>',
    '<h3 class="mt-4 font-display text-xl font-bold text-dusk">Scale Faster With a Dedicated AI Team</h3>',
  );
  out = mustReplace(
    out,
    '<h3 class="mt-4 font-display text-xl font-bold text-dusk">Embedded Talent</h3>',
    '<h3 class="mt-4 font-display text-xl font-bold text-dusk">Add the Expertise Your Team Needs</h3>',
  );
  out = mustReplace(
    out,
    'Ready to engineer<!-- --> </span><span class="text-gradient">what comes next?</span>',
    'Ready to Build<!-- --> </span><span class="text-gradient">What Comes Next?</span>',
  );
  out = mustReplace(
    out,
    "Tell us about your business, the challenge you're facing, and what you're looking to build. We'll help you explore the right approach to move from your initial idea to a practical AI solution.",
    "Tell us what you want to improve, automate, or build. We'll help shape the right AI approach and turn your idea into a practical solution ready for real business use.",
  );
  out = mustReplace(out, 'Start the conversation', 'Start the Conversation');
  out = mustReplace(
    out,
    'We reply within 1 business day. By submitting you agree to our',
    'We reply within 1 business day. By submitting, you agree to our',
  );
  out = mustReplace(
    out,
    'From the start, DigiWorks AI has been professional and responsive. Aly has been nothing short of incredible to work with.',
    'From the start, DigiWorks AI has been professional and responsive. My team has had an incredible experience working with them.',
  );
  out = mustReplace(
    out,
    'DigiWorks AI is one of the few companies I fully trust for my projects. Recently, they worked on my new app project and offered complimentary marketing for the first 6 months!',
    'DigiWorks AI is one of the few companies I fully trust for my projects. They recently worked on my new app project and went above and beyond to support its launch.',
  );
  out = mustReplace(out, 'Niklas Nadal', 'Niklas Nodal');
  out = mustReplace(out, 'Dr. Marcus Vance', 'Dr. Marcus Vince');
  out = mustReplace(
    out,
    'Working with DigiWorks was very quick and very easy. Aly was very accommodating, the team knew exactly what they were talking about and how to improve my app.',
    'Working with DigiWorks was quick and easy. The team understood what they were doing and knew how to improve my app.',
  );
  out = mustReplace(
    out,
    'Simply amazing. I was in touch with at least four of their representatives and each and every one made sure I was at peace with the development of my mobile app.',
    'Simply amazing. I worked with several members of their team, and each one made sure I felt confident throughout the development of my mobile app.',
  );
  out = mustReplace(out, 'Travers Maheu', 'Travers Matheu');
  out = mustReplace(
    out,
    '<h3 class="mt-1 font-display text-lg font-bold text-dusk">Our Offices</h3>',
    '<h3 class="mt-1 font-display text-lg font-bold text-dusk">Our Offices</h3><p class="mt-2 max-w-xl text-sm leading-relaxed text-dusk/60">With teams in the US and UK, DigiWorks AI stays close to clients across key markets while supporting projects globally.</p>',
  );
  out = mustReplace(out, 'Fixed scope', 'Project Delivery');
  out = mustReplace(out, 'Most popular', 'Dedicated AI Team');
  out = mustReplace(out, 'Staff augmentation', 'Embedded Experts');
  out = mustReplace(
    out,
    'A defined AI solution, scoped, built, and shipped end-to-end. Best when the problem is clear and the outcome is measurable.',
    'Bring us the challenge. We handle strategy, development, integration, testing, and launch.',
  );
  out = mustReplace(
    out,
    'A complete cross-functional team, engineers, data scientists, and leads, working exclusively on your roadmap.',
    'Get a focused team of AI, ML, data, and software specialists working directly on your roadmap.',
  );
  out = mustReplace(
    out,
    'Senior AI, ML, and data engineers who join your team on demand and ship inside your processes from week one.',
    'Bring experienced AI, ML, data, and software specialists into your existing team and delivery process.',
  );
  return out;
}

function moveWaysAfterHowItWorks(html: string): string {
  const engNeedle = '<section class="section-pad relative" aria-label="Engagement models">';
  const engStart = html.indexOf(engNeedle);
  if (engStart < 0) throw new Error('SSR copy: engagement section missing');
  const engEnd = html.indexOf('</section>', engStart) + '</section>'.length;
  if (engEnd < '</section>'.length) throw new Error('SSR copy: engagement section end missing');
  const engHtml = html.slice(engStart, engEnd);
  let out = html.slice(0, engStart) + html.slice(engEnd);

  const howPlaceholder = '<div style="min-height:100vh"></div>';
  const howAt = out.indexOf(howPlaceholder);
  if (howAt < 0) throw new Error('SSR copy: how it works placeholder missing');
  return out.slice(0, howAt + howPlaceholder.length) + engHtml + out.slice(howAt + howPlaceholder.length);
}

function removeHomeSection(html: string, needle: string, label: string): string {
  const i = html.indexOf(needle);
  if (i < 0) throw new Error(`SSR copy: home ${label} section missing`);
  const start = html.lastIndexOf('<section', i);
  const end = html.indexOf('</section>', i) + '</section>'.length;
  if (start < 0 || end < '</section>'.length) {
    throw new Error(`SSR copy: home ${label} section bounds`);
  }
  return html.slice(0, start) + html.slice(end);
}
