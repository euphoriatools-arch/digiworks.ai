import type { BodyLink, CopyPage } from './types';

export const blogCopy: CopyPage & {
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  bodyLinks: BodyLink[];
} = {
  title: 'Enterprise AI Blog | Production Guides | DigiWorks',
  description:
    'Enterprise AI blog from DigiWorks AI: production lessons on shipping, review, and named owners. Guides that feed the service catalog, not trend recaps.',
  h1: 'Enterprise AI Blog for production work',
  h1Lead: 'Enterprise AI Blog',
  h1Gradient: 'for production work',
  hero:
    'Enterprise AI blog posts on production work: how we ship, review, and keep named owners after go-live. Take the AI Readiness Assessment if you are still grading fit.',
  bodyLinks: [
    { phrase: 'how we ship', href: '/services/artificial-intelligence' },
    { phrase: 'named owners after go-live', href: '/contact' },
    { phrase: 'AI Readiness Assessment', href: '/ai-readiness' },
  ],
  faqs: [],
};
