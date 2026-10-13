/** Original visible slot word counts (agent template + home). FAQ answers excluded. */
export const SERVICE_SLOTS = {
  hero: 24, // also used for 19-word meta hero; keep 19–24
  offeringsSub: 9,
  offeringDescs: [14, 14, 13, 12],
  offeringTitles: [3, 2, 3, 2],
  edgeTitles: [2, 3, 2, 2, 2, 2],
  edgeDescs: [6, 6, 6, 7, 6, 6],
  processTitles: [4, 4, 4, 3, 3, 4],
  processDescs: [7, 6, 7, 7, 6, 5],
  h1Lead: 4,
  h1Gradient: 3,
  offeringsTitleLead: 3,
  offeringsTitleGradient: 2,
  edgeTitleLead: 2,
  edgeTitleGradient: 2,
  processTitleLead: 3,
  processTitleGradient: 2,
  faqTitle: 2,
};

export const HOME_SLOTS = {
  kicker: 7,
  hero: 22,
  featuredSub: 12,
  casesSub: 13,
  roi: 24,
  blogSub: 17,
  sectorsSub: 20,
  featuredDescs: [14, 12, 13, 10],
};

export function wordCount(s) {
  return String(s)
    .replace(/<!-- -->/g, ' ')
    .replace(/&amp;/g, '&')
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function within(actual, orig, delta = 5) {
  return Math.abs(actual - orig) <= delta;
}

export function checkServiceSlots(copy, label) {
  const fails = [];
  const push = (slot, actual, orig) => {
    if (!within(actual, orig)) fails.push(`${label} ${slot}: ${actual} vs orig ${orig}`);
  };
  const heroN = wordCount(copy.hero);
  if (heroN < 19 || heroN > 24) fails.push(`${label} hero: ${heroN} not in 19–24`);
  push('offeringsSub', wordCount(copy.offeringsSub), SERVICE_SLOTS.offeringsSub);
  copy.offerings.forEach((c, i) => {
    push(`offeringTitles[${i}]`, wordCount(c.title), SERVICE_SLOTS.offeringTitles[i]);
    push(`offeringDescs[${i}]`, wordCount(c.desc), SERVICE_SLOTS.offeringDescs[i]);
  });
  copy.edge.forEach((c, i) => {
    push(`edgeTitles[${i}]`, wordCount(c.title), SERVICE_SLOTS.edgeTitles[i]);
    push(`edgeDescs[${i}]`, wordCount(c.desc), SERVICE_SLOTS.edgeDescs[i]);
  });
  copy.process.forEach((c, i) => {
    push(`processTitles[${i}]`, wordCount(c.title), SERVICE_SLOTS.processTitles[i]);
    push(`processDescs[${i}]`, wordCount(c.desc), SERVICE_SLOTS.processDescs[i]);
  });
  push('h1Lead', wordCount(copy.h1Lead), SERVICE_SLOTS.h1Lead);
  push('h1Gradient', wordCount(copy.h1Gradient), SERVICE_SLOTS.h1Gradient);
  push('offeringsTitleLead', wordCount(copy.offeringsTitleLead), SERVICE_SLOTS.offeringsTitleLead);
  push('offeringsTitleGradient', wordCount(copy.offeringsTitleGradient), SERVICE_SLOTS.offeringsTitleGradient);
  push('edgeTitleLead', wordCount(copy.edgeTitleLead), SERVICE_SLOTS.edgeTitleLead);
  push('edgeTitleGradient', wordCount(copy.edgeTitleGradient), SERVICE_SLOTS.edgeTitleGradient);
  push('processTitleLead', wordCount(copy.processTitleLead), SERVICE_SLOTS.processTitleLead);
  push('processTitleGradient', wordCount(copy.processTitleGradient), SERVICE_SLOTS.processTitleGradient);
  push('faqTitle', wordCount(copy.faqTitle), SERVICE_SLOTS.faqTitle);
  if (copy.faqs.length < 6 || copy.faqs.length > 8) fails.push(`${label} FAQ count ${copy.faqs.length} not 6–8`);
  copy.faqs.forEach((f, i) => {
    const n = wordCount(f.a);
    if (n < 50 || n > 90) fails.push(`${label} FAQ[${i}] answer ${n} not 50–90`);
  });
  return fails;
}

export function checkHomeSlots(copy) {
  const fails = [];
  const push = (slot, actual, orig) => {
    if (!within(actual, orig)) fails.push(`home ${slot}: ${actual} vs orig ${orig}`);
  };
  push('kicker', wordCount(copy.kicker), HOME_SLOTS.kicker);
  push('hero', wordCount(copy.hero), HOME_SLOTS.hero);
  push('featuredSub', wordCount(copy.featuredSub), HOME_SLOTS.featuredSub);
  push('casesSub', wordCount(copy.casesSub), HOME_SLOTS.casesSub);
  push('roi', wordCount(copy.roiCopy), HOME_SLOTS.roi);
  push('blogSub', wordCount(copy.blogSub), HOME_SLOTS.blogSub);
  push('sectorsSub', wordCount(copy.sectorsSub), HOME_SLOTS.sectorsSub);
  if (copy.faqs.length < 6 || copy.faqs.length > 8) fails.push(`home FAQ count ${copy.faqs.length} not 6–8`);
  copy.faqs.forEach((f, i) => {
    const n = wordCount(f.a);
    if (n < 50 || n > 90) fails.push(`home FAQ[${i}] answer ${n} not 50–90`);
  });
  return fails;
}
