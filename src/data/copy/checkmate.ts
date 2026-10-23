import type { CopyPage } from './types';

/** Indexable Checkmate case study. Unknowns stay in seo/VERIFY.md, not on the page. */
export const checkmateCopy = {
  title: 'AI Restaurant Ordering Platform Case Study | DigiWorks AI',
  description:
    'Checkmate doubled peak-hour phone-order capacity for restaurants. See how DigiWorks AI sent those calls into the POS, then book a free discovery call.',
  h1Line1: 'Checkmate',
  h1Line2: 'Doubled Peak-Hour Order Capacity',
  label: 'AI Restaurant Ordering Platform',
  intro:
    'A ringing phone should mean a new order. During a busy shift, it can easily mean a missed one. DigiWorks AI built Checkmate to answer phone orders with AI, send them straight into existing POS systems, and give restaurant teams a real-time view of every location.',
  primaryCta: 'Book a Free Discovery Call',
  secondaryCta: 'All Case Studies',
  microcopy: 'Free discovery session - Reply within 1 business day',
  quote:
    'Checkmate has reformed our Restaurant Order Management System Software procedure. The number of missed calls also went down, the accuracy of orders has been increased, and our staff has been able to see a real-time view of every location.',
  quoteBy: 'Luciano Santobuono, Principal Software Engineer at Checkmate',
  cardTagline: 'Doubled Peak-Hour Order Capacity',
  faqs: [],
} satisfies CopyPage & Record<string, unknown>;
