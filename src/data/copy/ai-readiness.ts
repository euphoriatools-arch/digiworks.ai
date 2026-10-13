import type { BodyLink, CopyPage } from './types';

export const aiReadinessCopy: CopyPage & {
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  explorerHeadline: string;
  explorerAdvice: string;
  explorerCta: string;
  builderHeadline: string;
  builderAdvice: string;
  builderCta: string;
  leaderHeadline: string;
  leaderAdvice: string;
  leaderCta: string;
  bodyLinks: BodyLink[];
} = {
  title: 'AI Readiness Assessment | Graded Scores, Next Plan',
  description:
    'Take a free AI readiness assessment: five questions, a graded score, and the next step that fits. Book a discovery call when you can name the owner.',
  h1: 'AI Readiness Assessment for your business',
  h1Lead: 'AI Readiness Assessment',
  h1Gradient: 'for your business',
  hero:
    'Five questions. A graded AI readiness assessment score, then the next step. Book a call if you can name the owner. Privacy policy applies. The Enterprise AI blog has shipped notes.',
  explorerHeadline: 'You are earlier than you think, and that is fine.',
  explorerAdvice:
    'Start with a free discovery session to name one problem and map data before any build. Typical first production sits in 8–20 weeks after scope is agreed.',
  explorerCta: 'Book a Free Discovery Call',
  builderHeadline: 'You have real foundations. Time to pick the first win.',
  builderAdvice:
    'You are ready for a scoped first system: one workflow, 8–20 weeks, a named owner. The risk now is choosing too many jobs at once; one path beats five.',
  builderCta: 'Get My AI Roadmap',
  leaderHeadline: 'You are ready for production AI at scale.',
  leaderAdvice:
    'With data, ownership, and review in place, talk architecture: agents, live models, and the systems you already run. Typical first production is 8–20 weeks.',
  leaderCta: 'Start Your AI Project',
  bodyLinks: [
    { phrase: 'Book a call', href: '/contact' },
    { phrase: 'Enterprise AI blog', href: '/blog' },
    { phrase: 'Privacy policy', href: '/privacy-policy' },
  ],
  faqs: [],
};
