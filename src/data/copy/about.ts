import type { BodyLink, CopyPage, FaqItem } from './types';

export const aboutCopy: CopyPage & {
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  mission: string;
  decade: string;
  growth: string;
  bodyLinks: BodyLink[];
} = {
  title: 'About DigiWorks AI | AI Development Company',
  description:
    'We develop production-ready AI solutions, intelligent automation, and custom software that help businesses streamline operations and scale.',
  h1: 'We Build AI That Businesses Can Actually Run',
  h1Lead: 'We Build AI That Businesses',
  h1Gradient: 'Can Actually Run',
  hero:
    'DigiWorks AI is an Austin, Texas-based AI development company helping businesses turn complex challenges into production-ready AI solutions. With a presence in Austin and London, we combine technical expertise, practical engineering, and a business-first approach to build AI systems that deliver value beyond the initial launch.',
  mission:
    'Our mission is to make AI practical, reliable, and valuable for businesses. We combine engineering expertise with a clear understanding of business processes to develop solutions that fit existing workflows, solve real problems, and remain useful long after deployment.',
  decade:
    '150+ production AI deployments mean your system is built on shipped work, not a slide deck or a weekend demo.',
  growth:
    '150+ production AI deployments across 7+ sectors, from Austin HQ and London, with typical first production inside 8–20 weeks for named work.',
  bodyLinks: [
    { phrase: 'production-ready AI solutions', href: '/services/artificial-intelligence' },
    { phrase: 'intelligent automation', href: '/services/intelligent-automation' },
    { phrase: 'machine learning', href: '/services/machine-learning' },
  ],
  faqs: [
    {
      q: 'What makes DigiWorks AI different from other AI development companies?',
      a: 'At DigiWorks AI, we focus on what happens after development. Our approach goes beyond building AI models or prototypes to creating production-ready solutions that integrate with existing business systems and workflows. We begin by understanding your operational challenges, technical requirements, and business objectives. This allows us to recommend solutions that are practical to implement, maintain, and scale as your needs evolve.',
    },
    {
      q: 'Can DigiWorks AI integrate AI into our existing business systems?',
      a: 'Yes. We develop AI solutions designed to work with existing software, databases, APIs, and enterprise applications. Whether you want to automate internal processes, introduce AI-powered assistants, or improve how your teams access and use information, we assess your current technology environment before designing an integration approach. Our goal is to make AI a functional part of your operations rather than introduce another disconnected system.',
    },
    {
      q: 'How long does it take to develop and deploy a custom AI solution?',
      a: "Development timelines depend on the project's complexity, data availability, integration requirements, and expected functionality. For projects with a clearly defined scope, our typical timeline for initial production deployment is 8–20 weeks. During the discovery phase, we evaluate your requirements, identify technical dependencies, and establish a realistic development roadmap before work begins.",
    },
    {
      q: 'How does DigiWorks AI approach data security and confidentiality?',
      a: "Data protection is an important consideration throughout AI development, particularly when solutions involve sensitive business information or existing enterprise systems. We assess data access requirements, integration points, and security considerations during project planning. Depending on the engagement, we can discuss confidentiality agreements, access controls, and applicable regulatory requirements. Our objective is to develop AI solutions that account for your organization's security and operational responsibilities.",
    },
    {
      q: 'Which industries does DigiWorks AI work with?',
      a: "DigiWorks AI has experience delivering production AI solutions across more than seven industry sectors. Our capabilities support businesses looking to automate repetitive workflows, improve information processing, introduce intelligent customer interactions, and develop custom AI applications. Rather than applying the same solution to every industry, we evaluate each organization's processes, technical environment, and business requirements to determine the most suitable approach.",
    },
    {
      q: 'What happens after an AI solution is deployed?',
      a: 'Deployment is an important milestone, but it is not the only measure of a successful AI project. We consider how the solution will operate within your business, who will manage it, and what will be required to maintain its effectiveness over time. Support, monitoring, updates, and further optimization can be discussed as part of the project scope, depending on your operational needs and the nature of the solution.',
    },
  ] satisfies FaqItem[],
};
