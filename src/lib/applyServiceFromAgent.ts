import type { RelatedLink, ServicePageCopy } from '../data/copy/types';
import { applyCtas } from './applyCtas';
import { escapeHtml, fileHrefs, injectBodyLinks, mustReplace, replaceFaqBlock } from './ssrCopy';

const ORIG_RELATED: [string, string][] = [
  ['/services/autonomous-ai-agents', 'Autonomous AI Agents'],
  ['/services/ai-chatbot-development', 'AI Chatbot Development'],
  ['/services/natural-language-processing', 'Natural Language Processing'],
  ['/solutions/conversational-ai', 'Conversational AI'],
  ['/solutions/ai-automation', 'AI Automation'],
  ['/solutions/generative-ai', 'Generative AI'],
  ['/industries/ai-for-fintech', 'AI for Fintech'],
  ['/industries/ai-for-retail-and-ecommerce', 'AI for Retail &amp; E-commerce'],
  ['/industries/ai-for-logistics-and-supply-chain', 'AI for Logistics &amp; Supply Chain'],
];

function relatedAnchor(href: string, label: string): string {
  return `<a class="group inline-flex items-center gap-2 text-sm font-medium text-dusk/85 transition-colors hover:text-dusk" href="${href}"><span class="h-px w-3 bg-gradient-to-r from-coral to-violet transition-all duration-300 group-hover:w-6" aria-hidden="true"></span>${label}</a>`;
}

function relatedList(links: RelatedLink[]): string {
  return links.map((l) => `<li>${relatedAnchor(l.href, l.label)}</li>`).join('');
}

function origLinks(start: number): RelatedLink[] {
  return ORIG_RELATED.slice(start, start + 3).map(([href, label]) => ({ href, label }));
}

function aeoTakeawaysHtml(page: ServicePageCopy): string {
  const lines = [
    `${page.name} from DigiWorks AI is engineered for enterprise reliability, with strong governance and transparent methodology.`,
    ...page.offerings.slice(0, 3).map((o) => `${o.title}: ${o.desc.split('.')[0]}.`),
  ];
  return `<ul class="mt-3 space-y-2.5">${lines
    .map(
      (text, i) =>
        `<li class="flex items-start gap-3 text-sm leading-relaxed text-dusk/75 md:text-base"><span class="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-coral to-violet text-[10px] font-bold text-white" aria-hidden="true">${i + 1}</span><span>${escapeHtml(text)}</span></li>`,
    )
    .join('')}</ul>`;
}

function replaceAeoTakeaways(html: string, page: ServicePageCopy): string {
  const marker = 'Key takeaways</h3>';
  const h = html.indexOf(marker);
  if (h < 0) throw new Error('SSR copy: Key takeaways missing');
  const start = html.indexOf('<ul class="mt-3 space-y-2.5">', h);
  if (start < 0) throw new Error('SSR copy: Key takeaways list missing');
  const end = html.indexOf('</ul>', start) + 5;
  return html.slice(0, start) + aeoTakeawaysHtml(page) + html.slice(end);
}

function replaceRelated(html: string, page: ServicePageCopy): string {
  let out = html;
  out = mustReplace(out, relatedList(origLinks(0)), relatedList(page.relatedServices));
  out = mustReplace(out, relatedList(origLinks(3)), relatedList(page.relatedSolutions));
  out = mustReplace(out, relatedList(origLinks(6)), relatedList(page.relatedIndustries));
  return out;
}

export function applyServiceFromAgent(html: string, page: ServicePageCopy): string {
  let out = html.split('AI Agent Development').join(page.name);

  out = mustReplace(out, 'that Drive Automation', page.h1Gradient);
  out = mustReplace(out, `${page.name} Services`, page.h1Lead);
  out = mustReplace(
    out,
    'DigiWorks AI empowers enterprises to build intelligent AI agents that automate operations, improve decision-making, and create adaptive business environments through scalable, high-performance agent-driven architectures.',
    page.hero,
  );
  out = mustReplace(
    out,
    'Build intelligent AI agents that automate operations, improve decision-making, and create adaptive business environments through scalable, high-performance agent-driven architectures.',
    page.hero,
  );

  out = replaceRelated(out, page);
  out = replaceAeoTakeaways(out, page);
  out = replaceFaqBlock(out, page.faqs, 'Our experts are ready');

  const pairs: [string, string][] = [
    ['Our AI Agent<!-- --> </span><span class="text-gradient">Development Services</span>', `${page.offeringsTitleLead}<!-- --> </span><span class="text-gradient">${page.offeringsTitleGradient}</span>`],
    ['Agents that think, decide, and act across your enterprise.', page.offeringsSub],
    [
      'Systems that learn from data, adapt to dynamic conditions, and make intelligent decisions independently.',
      page.offerings[0].desc,
    ],
    [
      'AI-powered systems engaging users naturally through text and voice interfaces for improved customer interaction.',
      page.offerings[1].desc,
    ],
    [
      'AI agents processing complex data to assist teams in making faster, data-backed decisions.',
      page.offerings[2].desc,
    ],
    [
      'Collaborative environments where multiple AI entities coordinate to achieve shared business goals.',
      page.offerings[3].desc,
    ],
    ['<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">Autonomous AI Agents</h3>', `<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">${page.offerings[0].title}</h3>`],
    ['<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">Conversational Agents</h3>', `<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">${page.offerings[1].title}</h3>`],
    ['<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">Decision Support Agents</h3>', `<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">${page.offerings[2].title}</h3>`],
    ['<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">Multi-Agent Systems</h3>', `<h3 class="relative mt-5 font-display text-xl font-bold text-dusk md:text-2xl">${page.offerings[3].title}</h3>`],
    ['>Autonomous AI Agents<span', `>${page.offerings[0].title}<span`],
    ['>Conversational Agents<span', `>${page.offerings[1].title}<span`],
    ['>Decision Support Agents<span', `>${page.offerings[2].title}<span`],
    ['>Multi-Agent Systems<span', `>${page.offerings[3].title}<span`],
    ['What sets<!-- --> </span><span class="text-gradient">us apart</span>', `${page.edgeTitleLead}<!-- --> </span><span class="text-gradient">${page.edgeTitleGradient}</span>`],
    ['Enterprise-Grade Engineering', page.edge[0].title],
    ['Robust systems optimized for mission-critical operations.', page.edge[0].desc],
    ['Adaptive Learning Capabilities', page.edge[1].title],
    ['Agents continuously improve from real-time data.', page.edge[1].desc],
    ['Human-Centric Design', page.edge[2].title],
    ['Systems enhancing productivity through intuitive collaboration.', page.edge[2].desc],
    ['Integration Flexibility', page.edge[3].title],
    ['Seamless connection with existing software and APIs.', page.edge[3].desc],
    ['End-to-End Development', page.edge[4].title],
    ['Complete management from ideation through deployment.', page.edge[4].desc],
    ['Continuous Optimization', page.edge[5].title],
    ['Post-deployment monitoring and refinement for consistency.', page.edge[5].desc],
    ['A process engineered<!-- --> </span><span class="text-gradient">for outcomes</span>', `${page.processTitleLead}<!-- --> </span><span class="text-gradient">${page.processTitleGradient}</span>`],
    ['Assess objectives and define optimal use cases.', page.process[0].desc],
    ['Create structural blueprints for agent logic.', page.process[1].desc],
    ['Train on domain-specific datasets and simulate scenarios.', page.process[2].desc],
    ['Connect with enterprise systems and conduct testing.', page.process[3].desc],
    ['Launch into production with performance tracking.', page.process[4].desc],
    ['Provide maintenance and scalability support.', page.process[5].desc],
    ['Discovery and Requirement Analysis', page.process[0].title],
    ['Architecture Design and Planning', page.process[1].title],
    ['Model Training and Simulation', page.process[2].title],
    ['Integration and Testing', page.process[3].title],
    ['Deployment and Monitoring', page.process[4].title],
    ['Ongoing Support and Optimization', page.process[5].title],
    ['Questions, answered', page.faqTitle],
    ['Pages related to AI<!-- --> </span><span class="text-gradient">Agent Development</span>', `Pages related to<!-- --> </span><span class="text-gradient">${page.name}</span>`],
  ];
  for (const [from, to] of pairs) {
    out = mustReplace(out, from, to);
  }

  out = injectBodyLinks(out, page.bodyLinks);
  return applyCtas(fileHrefs(out));
}
