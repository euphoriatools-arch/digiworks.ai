export type HomeSectorPill = {
  name: string;
  href: string;
};

/** Homepage industries chips — 15 total. Existing industry pages keep deep links; others go to contact. */
export const homeSectorPills: HomeSectorPill[] = [
  { name: 'AI for Healthcare', href: '/industries/ai-for-healthcare.html' },
  { name: 'AI for Fintech', href: '/industries/ai-for-fintech.html' },
  { name: 'AI for Retail & E-commerce', href: '/industries/ai-for-retail-and-ecommerce.html' },
  { name: 'AI for Manufacturing', href: '/industries/ai-for-manufacturing.html' },
  { name: 'AI for Logistics & Supply Chain', href: '/industries/ai-for-logistics-and-supply-chain.html' },
  { name: 'AI for Real Estate', href: '/industries/ai-for-real-estate.html' },
  { name: 'AI for Education', href: '/industries/ai-for-education.html' },
  { name: 'AI for Insurance', href: '/contact.html' },
  { name: 'AI for Automotive', href: '/contact.html' },
  { name: 'AI for Energy & Utilities', href: '/contact.html' },
  { name: 'AI for Travel & Hospitality', href: '/contact.html' },
  { name: 'AI for Media & Entertainment', href: '/contact.html' },
  { name: 'AI for Telecommunications', href: '/contact.html' },
  { name: 'AI for Legal Services', href: '/contact.html' },
  { name: 'AI for Government', href: '/contact.html' },
];

const pillClass =
  'block rounded-full border border-dusk/15 bg-dusk/[0.04] px-5 py-3 text-sm text-dusk/70 transition-all duration-300 hover:scale-105 hover:border-cyan/50 hover:bg-cyan/10 hover:text-dusk hover:shadow-[0_0_28px_rgba(92,166,255,0.3)]';

export function homeSectorPillsHtml(): string {
  return homeSectorPills
    .map(
      (p) =>
        `<div style="opacity:0;transform:scale(0.8)"><a class="${pillClass}" href="${p.href}">${escapeHtml(p.name)}</a></div>`,
    )
    .join('');
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** SPA Link `to` paths drop the .html suffix used in SSR file hrefs. */
export function homeSectorPillsSpaArrayLiteral(): string {
  const items = homeSectorPills
    .map((p) => {
      const to = p.href.replace(/\.html$/, '');
      return `{name:\`${p.name}\`,to:\`${to}\`}`;
    })
    .join(',');
  return `[${items}]`;
}
