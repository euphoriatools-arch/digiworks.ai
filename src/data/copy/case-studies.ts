import type { BodyLink, CopyPage } from './types';

export const caseStudiesCopy: CopyPage & {
  h1Line1: string;
  h1Line2: string;
  hero: string;
  bodyLinks: BodyLink[];
} = {
  title: 'AI Development Case Studies We Shipped | DigiWorks AI',
  description:
    'AI development case studies from DigiWorks AI: Checkmate and Lead Scout, products we shipped. No invented metrics. Book a free discovery call.',
  h1Line1: 'AI development',
  h1Line2: 'case studies.',
  hero:
    'Checkmate and Lead Scout: platforms we designed and engineered through launch, each a real product, not a deck of invented metrics.',
  bodyLinks: [{ phrase: 'invented metrics', href: '/contact' }],
  faqs: [],
};
