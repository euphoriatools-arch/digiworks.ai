import type { BodyLink, CopyPage } from './types';

export const contactCopy: CopyPage & {
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  formCta: string;
  formMicro: string;
  officesSub: string;
  capabilitiesSub: string;
  bodyLinks: BodyLink[];
} = {
  title: 'Contact DigiWorks AI | Book a Discovery Call Today',
  description:
    'Contact DigiWorks AI for a production AI quote. Austin HQ, five offices, reply within 1 business day. Call +1 737 394 5488 to book a path.',
  h1: 'Contact DigiWorks AI for your quote',
  h1Lead: 'Contact DigiWorks AI',
  h1Gradient: 'for your quote',
  hero:
    'Contact DigiWorks AI with the owner and the system. We reply within 1 business day and map first production AI in 8–20 weeks. Privacy policy and terms of use apply to the form.',
  formCta: 'Book a Free Discovery Call',
  formMicro: 'Free discovery session - Reply within 1 business day',
  officesSub: 'Present across 5 cities, one team, built to support you wherever you are.',
  capabilitiesSub: 'Whatever you are building, start on the Enterprise AI blog or AI Readiness Assessment.',
  bodyLinks: [
    { phrase: '1 business day', href: '/about' },
    { phrase: '8–20 weeks', href: '/hire/dedicated-ai-pods' },
    { phrase: 'production AI', href: '/services/artificial-intelligence' },
    { phrase: 'Enterprise AI blog', href: '/blog' },
    { phrase: 'AI Readiness Assessment', href: '/ai-readiness' },
    { phrase: 'Privacy policy', href: '/privacy-policy' },
    { phrase: 'terms of use', href: '/terms-of-use' },
  ],
  faqs: [],
};
