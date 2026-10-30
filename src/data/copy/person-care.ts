import type { CopyPage } from './types';

/** Indexable Person Care case study. Unknowns stay in seo/VERIFY.md, not on the page. */
export const personCareCopy = {
  title: 'Person Care Health Platform Case Study | DigiWorks AI',
  description:
    'Person Care cut admin work about 25–35% and supported up to 3x more workflows. See how DigiWorks AI built the platform, then book a call.',
  h1Line1: 'Person Care',
  h1Line2: 'About 25–35% Less Admin Work',
  label: 'Digital Health Platform',
  intro:
    'A care professional should spend more time helping people, not managing software. DigiWorks AI built Person Care, a digital health platform for appointments, private communication, coaching programs, and workflow visibility.',
  primaryCta: 'Book a Free Discovery Call',
  secondaryCta: 'All Case Studies',
  microcopy: 'Free discovery session - Reply within 1 business day',
  cardTagline: 'About 25–35% Less Admin Work',
  faqs: [],
} satisfies CopyPage & Record<string, unknown>;
