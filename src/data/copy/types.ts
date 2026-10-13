export type FaqItem = { q: string; a: string };

export type CopyPage = {
  title: string;
  description: string;
  faqs: FaqItem[];
};

export type CopyCard = { title: string; desc: string };

export type RelatedLink = { href: string; label: string };

export type BodyLink = { phrase: string; href: string };

export type ServicePageCopy = CopyPage & {
  slug: string;
  name: string;
  h1: string;
  h1Lead: string;
  h1Gradient: string;
  hero: string;
  offeringsTitle: string;
  offeringsTitleLead: string;
  offeringsTitleGradient: string;
  offeringsSub: string;
  offerings: CopyCard[];
  edgeTitle: string;
  edgeTitleLead: string;
  edgeTitleGradient: string;
  processTitle: string;
  processTitleLead: string;
  processTitleGradient: string;
  faqTitle: string;
  edge: CopyCard[];
  process: CopyCard[];
  relatedServices: RelatedLink[];
  relatedSolutions: RelatedLink[];
  relatedIndustries: RelatedLink[];
  bodyLinks: BodyLink[];
  short?: string;
};
