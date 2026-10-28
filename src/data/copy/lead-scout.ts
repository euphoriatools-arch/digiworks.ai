import type { CopyPage } from './types';

/** Indexable Lead Scout case study. Unknowns stay in seo/VERIFY.md, not on the page. */
export const leadScoutCopy = {
  title: 'Lead Scout AI Lead Generation Case Study | DigiWorks AI',
  description:
    'Lead Scout cut B2B prospect research about 35–40% and raised weekly lead volume. See how DigiWorks AI built the workflow, then book a call.',
  h1Line1: 'Lead Scout',
  h1Line2: 'About 35–40% Less Research Time',
  label: 'AI Lead Generation Platform',
  intro:
    'A sales rep should spend the day selling, not researching. DigiWorks AI built Lead Scout, an AI lead generation platform that brings lead discovery, enrichment, scoring, pipeline management, and B2B prospecting automation into one workflow.',
  primaryCta: 'Book a Free Discovery Call',
  secondaryCta: 'All Case Studies',
  microcopy: 'Free discovery session - Reply within 1 business day',
  quote:
    'We have really noticed an enhancement in the way our sales team prospects. Lead Scout has done a great job. A manual, time-consuming process has been designed into a structured, data-driven, and more efficient process.',
  quoteBy: 'Michael Anderson, Director of Sales Operations, B2B Software, USA',
  cardTagline: 'About 35–40% Less Research Time',
  faqs: [],
} satisfies CopyPage & Record<string, unknown>;
