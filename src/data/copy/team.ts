import type { BodyLink, CopyPage } from './types';

export const teamCopy: CopyPage & {
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  bodyLinks: BodyLink[];
} = {
  title: 'Meet the DigiWorks AI Team in Austin | DigiWorks AI',
  description:
    'Meet the DigiWorks AI team: leadership and engineers across Austin, Dubai, Guangzhou, and Karachi. Real names, no invented bios. Book a discovery call.',
  h1: 'The DigiWorks AI Team in Austin',
  h1Lead: 'The DigiWorks AI',
  h1Gradient: 'Team in Austin',
  hero:
    'We turn named business work into production AI and the software around it, from Austin HQ through Dubai, Guangzhou, Karachi, and Canada.',
  bodyLinks: [
    { phrase: 'from Austin HQ', href: '/about' },
    { phrase: 'production AI', href: '/services/artificial-intelligence' },
  ],
  faqs: [],
};
