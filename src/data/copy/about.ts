import type { BodyLink, CopyPage, FaqItem } from './types';

export const aboutCopy: CopyPage & {
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  mission: string;
  decade: string;
  growth: string;
  bodyLinks: BodyLink[];
} = {
  title: 'DigiWorks AI Company in Austin, Texas | DigiWorks AI',
  description:
    'DigiWorks AI is an Austin company that ships production AI for US teams: 150+ deployments, 5 offices. Not a demo shop. Book a free discovery call.',
  h1: 'DigiWorks AI Company in Austin',
  h1Lead: 'DigiWorks AI',
  h1Gradient: 'Company in Austin',
  hero:
    'DigiWorks AI is an Austin, Texas-based AI development company that ships production AI for US businesses from Austin HQ. 150+ deployments across five offices—not demo-only systems you cannot run on a Friday.',
  mission:
    'Help people and businesses ship production AI they can actually run. We combine engineering, review, and the systems you already own so named owners keep the work after we leave the room.',
  decade:
    '150+ production AI deployments mean your system is built on shipped work, not a slide deck or a weekend demo.',
  growth:
    'Five offices and 150+ production AI deployments across 7+ sectors, from Austin HQ, with typical first production inside 8–20 weeks for named work.',
  bodyLinks: [
    { phrase: '150+ production AI deployments', href: '/case-studies' },
    { phrase: 'typical first production inside 8–20 weeks', href: '/contact' },
    { phrase: 'Meet the full team', href: '/team' },
    { phrase: 'Machine Learning for the practice URL', href: '/services/machine-learning' },
    { phrase: 'Intelligent Automation is the outcome URL', href: '/services/intelligent-automation' },
    { phrase: 'Hire AI Engineers', href: '/hire/hire-ai-engineers' },
    { phrase: 'Dedicated AI Pods', href: '/hire/dedicated-ai-pods' },
    { phrase: 'the team page', href: '/team' },
    { phrase: 'Enterprise AI blog', href: '/blog' },
    { phrase: 'AI Readiness Assessment', href: '/ai-readiness' },
    { phrase: 'privacy policy', href: '/privacy-policy' },
  ],
  faqs: [
    {
      q: 'Who is DigiWorks AI and where is the company based?',
      a: 'DigiWorks AI is an Austin, Texas-based AI development company that helps US businesses design, build, and scale production AI. Headquarters is 716 Congress Ave #200, Austin, TX 78701. We also operate offices in Dubai, Karachi, Guangzhou, and Canada. 150+ production AI deployments across 7+ sectors. Typical delivery is 8–20 weeks after scope is agreed. Book a free discovery session if you can name the owner and the system.',
    },
    {
      q: 'How is the company different from the hire and service pages?',
      a: 'This page is the company story. Artificial Intelligence is the build catalog. Hire AI Engineers is one role. Dedicated AI Pods is a full team in 2–3 weeks. The Enterprise AI blog is shipped notes. The AI Readiness Assessment is the graded quiz. The privacy policy covers form data. DigiWorks AI will not hide a statement of work inside About. US teams get Austin hours.',
    },
    {
      q: 'What numbers can you actually stand behind?',
      a: '150+ production AI deployments, 7+ sectors, 5 offices, typical 8–20 weeks to production, pods ready in 2–3 weeks, embedded talent onboard in 1–2 weeks. We do not print peak headcount, app counts, or years in market that are not on the fact sheet. Canada and Guangzhou street lines are still missing. Bark, Trustpilot, and Clutch quotes stay word-for-word from the original page.',
    },
    {
      q: 'How do you work after we book a call?',
      a: 'A free discovery session maps the workflow, access, and who reviews. If we cannot name those, we stop. Then we staff a scoped build, a pod, or a seat. Typical first production sits in 8–20 weeks. You manage the work you already run; we do not invent an unnamed department. Reply within 1 business day is the verified promise on the form.',
    },
    {
      q: 'Do you keep leadership and offices on this page?',
      a: 'Yes. Leadership cards stay the people already listed, with LinkedIn as published. Full bios live on the team page. Office addresses stay as written: Austin, Dubai, and Karachi streets are in the HTML. Canada and Guangzhou streets are still missing. We do not invent titles. Book a free discovery call if you want those people in the room.',
    },
    {
      q: 'When is DigiWorks AI the wrong fit?',
      a: 'You need a rate card with no owner, a demo with no system, or a rewrite of reviews we did not publish. DigiWorks AI will say that before you sign. Work spans 7+ sectors when a person still reviews the hard cases. Austin-based DigiWorks AI keeps first production inside 8–20 weeks. Meet the team if you need names, not a slogan.',
    },
  ] satisfies FaqItem[],
};
