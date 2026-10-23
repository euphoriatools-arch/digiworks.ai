import type { BodyLink, CopyPage } from './types';

export const caseStudiesCopy: CopyPage & {
  h1Line1: string;
  h1Line2: string;
  hero: string;
  bodyLinks: BodyLink[];
} = {
  title: 'AI Development Case Studies We Shipped | DigiWorks AI',
  description:
    'AI development case studies from DigiWorks AI: products we actually shipped. No invented metrics. Read Drive Guard, then book a free discovery call.',
  h1Line1: 'AI development',
  h1Line2: 'case studies.',
  hero:
    'Eighteen platforms in this library that we designed and engineered through launch, each a real product like Drive Guard, not a deck of invented metrics.',
  bodyLinks: [
    { phrase: 'like Drive Guard', href: '/case-studies/drive-guard' },
    { phrase: 'invented metrics', href: '/contact' },
  ],
  faqs: [],
};
