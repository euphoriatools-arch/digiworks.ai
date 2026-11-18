import type { CopyPage } from './types';

/** Indexable HeyEve case study. Outcomes stay labeled as customer-reported. */
export const heyeveCopy = {
  title: 'AI Voice Assistant Development Case Study | HeyEve',
  description:
    "View HeyEve's AI voice training: customer-reported outcomes include 50% less grading time and 65% more trial-team applications across two law schools.",
  h1Line1: 'HeyEve',
  h1Line2: '50% Less Grading Time',
  label: 'Legal Technology',
  intro:
    'A law student can know the case law and still feel unprepared when it is time to argue out loud. The gap is not always knowledge. It is practice. HeyEve set out to make that kind of legal practice available more often. DigiWorks AI worked on the AI side of the product: voice interaction, conversational AI, simulation workflows, and real-time feedback.',
  primaryCta: 'Book a Free Discovery Call',
  secondaryCta: 'All Case Studies',
  microcopy: 'Free discovery session - Reply within 1 business day',
  cardTagline: '50% Less Grading Time',
  faqs: [],
} satisfies CopyPage & Record<string, unknown>;
