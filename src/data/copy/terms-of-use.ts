import type { BodyLink, CopyPage } from './types';

export const termsOfUseCopy: CopyPage & {
  h1: string;
  intro: string;
  bodyLinks: BodyLink[];
} = {
  title: 'DigiWorks AI Terms of Use | Rules for This Website',
  description:
    'DigiWorks AI terms of use for this website: how you may use the pages, who owns the copy, and that signed contracts—not this page—set project duties.',
  h1: 'Terms of Use',
  intro:
    'These terms of use cover the DigiWorks AI website and the copy on it. Using the site means you accept them. Signed contracts set project duties, not this page.',
  bodyLinks: [{ phrase: 'Signed contracts set project duties', href: '/contact' }],
  faqs: [],
};
