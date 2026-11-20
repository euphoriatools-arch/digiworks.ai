import type { CopyPage } from './types';

export const homeCopy: CopyPage & {
  kicker: string;
  hero: string;
  h1Lines: { words: string[]; className?: string }[];
  featuredSub: string;
  casesSub: string;
  roiCopy: string;
  blogSub: string;
  sectorsSub: string;
  bodyLinks: { phrase: string; href: string }[];
} = {
  title: 'AI Development Company for US Businesses | DigiWorks',
  description:
    'DigiWorks AI is an AI development company helping US businesses build production AI, automation, machine learning, and AI agents that deliver results.',
  kicker: 'Seven years of building, delivering, and improving',
  h1Lines: [
    { words: ['The', 'AI'] },
    { words: ['Development', 'Company'], className: 'text-gradient' },
    { words: ['For', 'US', 'Businesses'], className: 'text-gradient-hot' },
  ],
  hero:
    'We build intelligent, scalable AI solutions that help US businesses automate operations, improve efficiency, and accelerate growth.',
  featuredSub: 'Four services we are asked for first, with 150+ production AI deployments.',
  casesSub:
    'See how DigiWorks AI turns real business challenges into scalable digital products across sales, healthcare, education, HR, operations, and customer experience.',
  roiCopy:
    'Move the sliders for a directional estimate. Typical DigiWorks production delivery is 8–20 weeks. We confirm the real number in discovery first.',
  blogSub:
    'Engineering notes on LLMs, machine learning, evaluation, automation, and the systems behind production AI.',
  sectorsSub:
    'Every industry operates differently. The workflows, data, systems, regulations, and customer expectations are not the same, so the technology should not be either. DigiWorks AI develops practical AI solutions around how your business actually operates. From healthcare and fintech to retail, manufacturing, logistics, education, and beyond, we help teams automate complex work, uncover better insights, and make faster, more informed decisions.',
  bodyLinks: [
    { phrase: 'machine learning systems', href: '/services/machine-learning' },
    { phrase: 'AI automation', href: '/solutions/ai-automation' },
    { phrase: 'existing systems', href: '/services/automation-and-integration' },
  ],
  faqs: [
    {
      q: 'What AI development services does DigiWorks AI offer?',
      a: 'We build custom AI agents, generative AI applications, machine learning systems, AI automation, data solutions, and intelligent software tailored to real business workflows.',
    },
    {
      q: 'How do you identify the right AI solution for my business?',
      a: 'We start with your business goals, workflows, data, and existing systems. From there, we identify where AI can create practical value and recommend the right technical approach.',
    },
    {
      q: 'Can you integrate AI with our existing systems?',
      a: 'Yes. We can connect AI with your APIs, databases, CRMs, internal platforms, cloud infrastructure, and other business software so it works within the tools your team already uses.',
    },
    {
      q: 'How long does it take to develop an AI solution?',
      a: 'Timelines depend on complexity, data readiness, integrations, and technical requirements. A focused solution may take several weeks, while larger production systems can require a longer development cycle.',
    },
    {
      q: 'How do you approach AI security and data privacy?',
      a: 'We consider security from the start, including access controls, data handling, system permissions, logging, human oversight, and deployment requirements based on your environment.',
    },
    {
      q: 'How much does custom AI development cost?',
      a: 'Cost depends on the scope, integrations, data requirements, features, and delivery model. We review your needs first and recommend an approach that matches both the technical requirements and business goals.',
    },
    {
      q: 'What support do you provide after launch?',
      a: 'We can continue supporting your solution with monitoring, performance optimization, updates, new integrations, and ongoing improvements as your data, users, and business requirements evolve.',
    },
  ],
};
