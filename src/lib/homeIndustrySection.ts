import { site } from '../data/site.ts';

const starSvg = `<svg class="dw-ix-star" viewBox="0 0 20 20" aria-hidden="true"><path fill="currentColor" d="M10 1.4l2.35 4.76 5.25.76-3.8 3.7.9 5.24L10 13.5l-4.7 2.46.9-5.24-3.8-3.7 5.25-.76L10 1.4z"/></svg>`;

type Award = {
  name: string;
  rating: string;
  blurb: string;
  markClass: string;
  markHtml: string;
};

const awards: Award[] = [
  {
    name: 'Clutch',
    rating: '4.9',
    blurb: 'Acclaimed as a top AI and software development company 2026',
    markClass: 'dw-ix-mark-clutch',
    markHtml: 'Clutch',
  },
  {
    name: 'DesignRush',
    rating: '4.9',
    blurb: 'Recognized among top AI and mobile app development companies 2026',
    markClass: 'dw-ix-mark-designrush',
    markHtml: 'DESIGNRUSH',
  },
  {
    name: 'GoodFirms',
    rating: '5.0',
    blurb: 'Acknowledged among the top software and AI consulting experts 2026',
    markClass: 'dw-ix-mark-goodfirms',
    markHtml: 'Good<span>Firms</span>',
  },
  {
    name: 'techreviewer',
    rating: '5.0',
    blurb: 'Ranked among top software and AI development companies of 2026',
    markClass: 'dw-ix-mark-techreviewer',
    markHtml: '<i aria-hidden="true">T</i><span>techreviewer</span>',
  },
  {
    name: 'Trustpilot',
    rating: '4.9',
    blurb: 'Ranked among the leading AI and app development companies for 2026',
    markClass: 'dw-ix-mark-trustpilot',
    markHtml: `${starSvg}<span>Trustpilot</span>`,
  },
  {
    name: 'Business of Apps',
    rating: '4.9',
    blurb: 'Ranked among the top app development companies of 2026',
    markClass: 'dw-ix-mark-boa',
    markHtml:
      '<i aria-hidden="true"><b></b><b></b><b></b><b></b></i><span>Business of Apps</span>',
  },
];

const years = Math.max(1, new Date().getFullYear() - Number(site.foundingYear));

const stats = [
  { value: site.verified.deployments, label: 'Production AI deployments' },
  { value: site.verified.sectors, label: 'Industry sectors served' },
  { value: site.verified.offices, label: 'Offices across the USA & UK' },
  { value: `${years}+`, label: 'Years of experience' },
];

const yearWord =
  years === 9 ? 'Nine' : years === 8 ? 'Eight' : years === 10 ? 'Ten' : `${years}`;

const css = `
.dw-ix{position:relative;overflow:hidden;isolation:isolate;padding:4.5rem 1.25rem;color:#eef0f4;background:transparent}
@media (min-width:640px){.dw-ix{padding-left:2rem;padding-right:2rem}}
@media (min-width:1024px){.dw-ix{padding-top:6rem;padding-bottom:6rem}}
.dw-ix::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;background:radial-gradient(55% 45% at 12% 18%,rgba(26,130,255,.16),transparent 70%),radial-gradient(50% 40% at 90% 75%,rgba(0,82,179,.14),transparent 72%)}
.dw-ix-wrap{position:relative;z-index:1;margin:0 auto;max-width:80rem;display:grid;gap:3.25rem;align-items:center}
@media (min-width:1024px){.dw-ix-wrap{grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:4.5rem}}
.dw-ix-grid{display:grid;grid-template-columns:1fr;gap:.85rem}
@media (min-width:640px){.dw-ix-grid{grid-template-columns:1fr 1fr}}
.dw-ix-card{border-radius:1.15rem;border:1px solid rgba(238,240,244,.12);background:rgba(12,22,40,.92);box-shadow:inset 0 1px 0 rgba(255,255,255,.06);padding:1.2rem 1.25rem 1.25rem;min-height:8.75rem;display:flex;flex-direction:column}
.dw-ix-card-top{display:flex;align-items:center;justify-content:space-between;gap:.75rem}
.dw-ix-mark{display:inline-flex;align-items:center;gap:.4rem;min-width:0;flex:1 1 auto;font-weight:700;font-size:1.02rem;line-height:1.1;color:#eef0f4;overflow:hidden}
.dw-ix-mark > span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.dw-ix-mark-clutch{font-family:Georgia,"Times New Roman",serif;font-size:1.4rem;letter-spacing:-.02em}
.dw-ix-mark-designrush{font-size:.9rem;font-weight:800;letter-spacing:.08em;color:#5ca6ff}
.dw-ix-mark-goodfirms{font-size:1.05rem;font-weight:800;color:#1a82ff}
.dw-ix-mark-goodfirms span{color:#5ca6ff}
.dw-ix-mark-techreviewer{font-size:.95rem}
.dw-ix-mark-techreviewer i{display:inline-flex;align-items:center;justify-content:center;width:1.15rem;height:1.15rem;border-radius:.2rem;background:linear-gradient(135deg,#308eff,#0052b3);color:#fff;font-style:normal;font-size:.7rem;font-weight:800;flex:0 0 auto}
.dw-ix-mark-trustpilot .dw-ix-star{width:1rem;height:1rem;color:#5ca6ff;flex:0 0 auto}
.dw-ix-mark-boa i{display:grid;grid-template-columns:1fr 1fr;gap:2px;width:1rem;height:1rem;flex:0 0 auto}
.dw-ix-mark-boa i b{display:block;border-radius:1px}
.dw-ix-mark-boa i b:nth-child(1){background:#5ca6ff}
.dw-ix-mark-boa i b:nth-child(2){background:#1a82ff}
.dw-ix-mark-boa i b:nth-child(3){background:#308eff}
.dw-ix-mark-boa i b:nth-child(4){background:#0052b3}
.dw-ix-rating{display:inline-flex;align-items:center;gap:.28rem;flex:0 0 auto;color:#5ca6ff;font-weight:700;font-size:1rem}
.dw-ix-rating .dw-ix-star{width:.95rem;height:.95rem}
.dw-ix-blurb{margin-top:.9rem;font-size:.86rem;line-height:1.5;color:rgba(238,240,244,.58)}
.dw-ix-foot{margin-top:1.4rem;font-size:.92rem;line-height:1.55;color:rgba(238,240,244,.48);max-width:34rem}
.dw-ix-right{padding-top:.25rem}
.dw-ix-kicker{margin:0;font-size:.72rem;font-weight:600;letter-spacing:.22em;text-transform:uppercase;color:rgba(238,240,244,.48)}
.dw-ix-title{margin:1rem 0 0;font-family:Unbounded,"Unbounded Fallback",sans-serif;font-size:clamp(1.9rem,3.4vw,2.85rem);font-weight:500;line-height:1.12;color:rgba(238,240,244,.72);max-width:16ch}
.dw-ix-title strong{font-weight:800;color:#eef0f4}
.dw-ix-rule{margin-top:1.35rem;height:2px;width:7rem;border-radius:999px;background:linear-gradient(90deg,#5ca6ff,#1a82ff,#0052b3)}
.dw-ix-stats{margin-top:2.1rem;display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(238,240,244,.14)}
.dw-ix-stat{padding:1.85rem 0 1.35rem}
.dw-ix-stat:nth-child(odd){padding-right:1.4rem;border-right:1px solid rgba(238,240,244,.14)}
.dw-ix-stat:nth-child(even){padding-left:1.4rem}
.dw-ix-stat:nth-child(n+3){border-top:1px solid rgba(238,240,244,.14)}
.dw-ix-num{margin:0;font-family:Unbounded,"Unbounded Fallback",sans-serif;font-size:clamp(2.35rem,4.2vw,3.35rem);font-weight:800;line-height:1;letter-spacing:-.03em;color:#eef0f4}
.dw-ix-num span{color:#eef0f4}
.dw-ix-label{margin:.65rem 0 0;font-size:.95rem;line-height:1.35;color:rgba(238,240,244,.55)}
@media (max-width:1023px){
  .dw-ix-wrap{gap:2.75rem}
  .dw-ix-right{order:-1}
}
`;

function awardCard(a: Award): string {
  return `<article class="dw-ix-card"><div class="dw-ix-card-top"><div class="dw-ix-mark ${a.markClass}">${a.markHtml}</div><div class="dw-ix-rating">${starSvg}<span>${a.rating}</span></div></div><p class="dw-ix-blurb">${a.blurb}</p></article>`;
}

/** Inner HTML for the homepage industry section (style + body). */
export const homeIndustryInnerHtml = `<style>${css.replace(/\s+/g, ' ').trim()}</style><div class="dw-ix-wrap"><div><div class="dw-ix-grid">${awards.map(awardCard).join('')}</div><p class="dw-ix-foot">Recognized globally for our industry-leading development expertise and innovative solutions.</p></div><div class="dw-ix-right"><p class="dw-ix-kicker">${yearWord} years of delivery, not just promises</p><h2 class="dw-ix-title">Industry Expertise <strong>That Shortens the Learning Curve</strong></h2><div class="dw-ix-rule" aria-hidden="true"></div><div class="dw-ix-stats">${stats
  .map(
    (s) =>
      `<div class="dw-ix-stat"><p class="dw-ix-num"><span>${s.value}</span></p><p class="dw-ix-label">${s.label}</p></div>`,
  )
  .join('')}</div></div></div>`;

/** Full homepage industry recognition section (replaces the old S3 counters). */
export function homeIndustrySectionHtml(): string {
  return `<section class="dw-ix" aria-label="Industry recognition">${homeIndustryInnerHtml}</section>`;
}
