import type { BodyLink, CopyPage } from './types';

export const privacyPolicyCopy: CopyPage & {
  h1: string;
  intro: string;
  bodyLinks: BodyLink[];
} = {
  title: 'DigiWorks AI Privacy Policy | Data We Collect Here',
  description:
    'DigiWorks AI privacy policy in plain language: what we collect on this site, how we use it, how long we keep it, and how to ask for a copy or a delete.',
  h1: 'Privacy Policy',
  intro:
    'This DigiWorks AI privacy policy covers data you send through this site. We use it to reply, scope work, and send updates you asked for. We do not sell it.',
  bodyLinks: [{ phrase: 'scope work', href: '/contact' }],
  faqs: [],
};
