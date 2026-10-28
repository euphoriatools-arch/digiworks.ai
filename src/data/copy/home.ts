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
  title: 'Enterprise AI & ML Development Company | DigiWorks AI',
  description:
    'DigiWorks AI builds production AI in 8–20 weeks: agents, generative AI, predictive modeling, and automation for US businesses. Book a free discovery call.',
  kicker: 'Austin HQ · production AI for US businesses',
  h1Lines: [
    { words: ['The', 'AI'] },
    { words: ['Development', 'Company'], className: 'text-gradient' },
    { words: ['For', 'US', 'Businesses'], className: 'text-gradient-hot' },
  ],
  hero:
    'DigiWorks AI is an Austin AI development company that builds agents, generative AI, predictive models, and automation for US businesses.',
  featuredSub: 'Four services we are asked for first, with 150+ production AI deployments.',
  casesSub: 'Checkmate and Lead Scout, from 150+ production AI deployments, not invented metrics.',
  roiCopy:
    'Move the sliders for a directional estimate. Typical DigiWorks production delivery is 8–20 weeks. We confirm the real number in discovery first.',
  blogSub: 'Engineering notes from production LLM and ML work, plus how US teams ship and operate systems.',
  sectorsSub:
    '150+ production AI deployments across healthcare, fintech, retail, manufacturing, and more, from Austin HQ offices.',
  bodyLinks: [
    { phrase: 'generative AI', href: '/services/generative-ai-development' },
    { phrase: 'predictive models', href: '/services/predictive-modeling' },
    { phrase: 'automation for US businesses', href: '/services/automation-and-integration' },
    { phrase: 'About page', href: '/about' },
    { phrase: 'Contact page', href: '/contact' },
    { phrase: 'AI readiness assessment', href: '/ai-readiness' },
    { phrase: 'privacy policy', href: '/privacy-policy' },
    { phrase: 'terms of use', href: '/terms-of-use' },
  ],
  faqs: [
    {
      q: 'What does an AI development company in the USA actually deliver?',
      a: 'Production systems, not slide decks. DigiWorks AI is an AI development company in Austin that designs, builds, and scales agents, generative AI, predictive analytics, and intelligent automation, plus the web, mobile, and cloud software around them. Typical delivery is 8–20 weeks after scope is agreed. We have shipped 150+ production AI deployments across 7+ sectors. Home owns the company story. Scoped builds start on artificial intelligence development services when the job is already named. Book a free discovery call if you can name the system of record.',
    },
    {
      q: 'How do you determine if AI fits my business needs?',
      a: 'A discovery session covers the workflow, data you already have, and what done means. If a model or agent will not move a number you care about, we say so before a build. We also say when the work belongs on a hire page, a solutions outcome page, or a child service URL instead of a vague program. Dedicated AI Pods ready in 2–3 weeks are for problems already named. We do not invent ROI on this page. You leave with a clear yes, no, or not yet.',
    },
    {
      q: 'Do you work with existing systems or build from scratch?',
      a: 'Both. We connect to CRMs, ERPs, and internal APIs when that is the shortest path, and we build new services when the current stack cannot host the work. Closed access stops the work in discovery. Copy-paste between tools is usually an integration or agent engagement, not a new dashboard. Solutions pages stay outcomes; service pages stay the build. US teams get Austin hours. Typical windows stay 8–20 weeks once access and owners are real. About page, Contact page, and AI readiness assessment have their own URLs.',
    },
    {
      q: 'How long does it take to build an AI solution?',
      a: 'Typical production delivery is 8–20 weeks after scope is agreed. Shorter if the problem is narrow; longer if data or integrations are not ready. Dedicated AI Pods ready in 2–3 weeks are for problems already named. Embedded engineers onboard in 1–2 weeks. We do not quote a weekend cutover for a multi-system estate. Discovery is where the date becomes honest. 150+ production AI deployments is company-wide proof, not a promise that your path is simple.',
    },
    {
      q: 'How do you handle data privacy and security?',
      a: 'Access control, logging, and data-handling follow what you specify for the system. Named certifications (HIPAA, ISO, and similar) are confirmed in scoping—not assumed on this page. Application-path guards live on AI Application Security. Policy programs live on Security and Compliance. We work in the accounts and vendors you already run. If you cannot grant access, we stop. Austin HQ, five offices, US buyers. Book a free discovery session to walk the data path. See the privacy policy and terms of use.',
    },
    {
      q: 'What does it cost to work with DigiWorks?',
      a: 'Pricing follows the engagement: a scoped project, a dedicated pod (ready in 2–3 weeks), or embedded engineers (onboard in 1–2 weeks). We give a number after discovery, not a public rate card. Cost drivers are tool count, data readiness, and how many teams must approve a write. The home ROI slider is directional only. Unowned production AI is how last quarter’s demo becomes this quarter’s incident. Name the operator before you ask for a quote.',
    },
    {
      q: 'What happens after the AI solution goes live?',
      a: 'Monitoring, fixes, and model or prompt updates as live traffic changes. Launch is the first production version, not the last. Child URLs stay in force: an agent is not a chatbot, and a custom ML application is not the ML practice page. Support is scoped to what you bought. DigiWorks AI will not staff an unnamed department. Typical first production period sits with the 8–20 week delivery, then continues as the path changes.',
    },
  ],
};
