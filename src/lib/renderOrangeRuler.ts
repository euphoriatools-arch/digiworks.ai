import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { orangeRulerCopy } from '../data/copy/orange-ruler.ts';
import { visibleExploreHtml } from './visibleCaseStudies.ts';

const DIR = join(process.cwd(), 'public', 'case', 'orange-ruler');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function orangeRulerImageFile(name: string): string | null {
  const abs = join(DIR, name);
  return existsSync(abs) ? `/case/orange-ruler/${name}` : null;
}

function placeholderBox(w: number, h: number, alt: string): string {
  return `<div class="bg-ink" style="aspect-ratio:${w}/${h}" role="img" aria-label="${esc(alt)}"></div>`;
}

function figure(opts: {
  file: string;
  width: number;
  height: number;
  alt: string;
  eager?: boolean;
  frame?: string;
  imgClass?: string;
}): string {
  const file = orangeRulerImageFile(opts.file);
  const loading = opts.eager ? '' : ' loading="lazy"';
  const imgClass = opts.imgClass ?? 'block h-auto w-full max-w-full bg-ink object-contain';
  const inner = file
    ? `<img width="${opts.width}" height="${opts.height}" src="${file}" alt="${esc(opts.alt)}"${loading} decoding="async" class="${imgClass}">`
    : placeholderBox(opts.width, opts.height, opts.alt);
  const frame = opts.frame ?? 'overflow-hidden rounded-3xl border border-white/10 bg-ink';
  return `<div class="${frame}">${inner}</div>`;
}

function h2(lead: string): string {
  return `<h2 class="cm-h2 mt-5 font-display font-extrabold leading-[1.08] text-white">${esc(lead)}</h2>`;
}

function resultCard(stat: string, title: string, detail: string): string {
  return `<div class="dw-rise h-full"><div class="glass glare relative flex h-full flex-col overflow-hidden p-7"><p class="font-display text-3xl font-extrabold text-white sm:text-4xl">${esc(stat)}</p><h3 class="cm-lg mt-3 font-display font-bold text-white">${esc(title)}</h3><p class="mt-2 text-sm leading-relaxed text-white/70">${esc(detail)}</p></div></div>`;
}

const results: [string, string, string][] = [
  ['~80%', 'Faster campaign setup', 'Preparation dropped from around 2 days to 3–4 hours'],
  ['~55–60%', 'Less weekly admin work', 'Weekly coordination dropped from roughly 12 hours to about 5 hours'],
  ['~85%', 'Faster campaign reporting', 'Reports dropped from around 3 hours to 20–30 minutes'],
  ['15–20', 'Active campaigns at once', 'More room to scale without the same increase in admin work'],
  ['1,000+', 'Peak donation transactions', 'Supported during busy fundraising periods'],
  ['25–30%', 'Higher participant engagement', 'Clearer campaign activity and easier management'],
];

const comparison: [string, string, string, string][] = [
  ['Campaign Setup', 'Around 2 days', 'Around 3–4 hours', '~80% faster'],
  ['Weekly Admin Work', 'Roughly 12 hours', 'About 5 hours', '~55–60% less admin time'],
  ['Campaign Reporting', 'Around 3 hours', 'Around 20–30 minutes', '~85% faster'],
  ['Campaign Capacity', 'Limited by manual admin', 'Around 15–20 active campaigns', 'More room to scale'],
  ['Peak Donation Activity', 'Harder to manage manually', '1,000+ transactions supported', 'Better peak-period capacity'],
  ['Participant Engagement', 'Previous baseline', 'Around 25–30% higher', 'Stronger participation'],
  ['Campaign Visibility', 'More manual checking', 'Real-time dashboards', 'Faster decisions during campaigns'],
];

const solutionSteps: [string, string][] = [
  [
    'Campaign Management',
    'Orange Ruler gives school admins one place to create and manage fundraising campaigns. Goals, participants, donations, and progress stay connected throughout the campaign. Organizers can see what is happening without checking several different systems. The new setup reduced campaign preparation from roughly 2 days to around 3–4 hours.',
  ],
  [
    'Donation Management',
    'Donations are tied to the right campaign and participant. This makes tracking easier and reduces manual reconciliation. Receipts, payment records, and campaign totals stay connected. During peak fundraising periods, the platform supported 1,000+ donation transactions without forcing organizers to manage payments manually.',
  ],
  [
    'Participant and Sponsor Management',
    'School fundraising involves students, parents, sponsors, and staff. Orange Ruler keeps that activity organized in one place. This helped reduce weekly admin work from roughly 12 hours to about 5 hours during active campaigns.',
  ],
  [
    'Real-Time Reporting',
    'Organizers can check fundraising progress while the campaign is still running. They can see donation totals, participant activity, and progress toward goals. Preparing campaign reports dropped from around 3 hours to roughly 20–30 minutes.',
  ],
  [
    'Event Management',
    'The platform also supports school fundraising events. Campaign data, participant details, and donation activity stay connected during the event. This helped the client support around 15–20 active campaigns at once without the same increase in admin work.',
  ],
];

const chips = [
  'Campaign setup workflows',
  'Participant registration',
  'Sponsor tracking',
  'Donation processing',
  'Fundraising goal tracking',
  'Automated donation records',
  'Real-time reporting dashboards',
  'Administrative controls',
  'Event management',
  'User roles and permissions',
];

const builtCards: [string, string][] = [
  [
    'React.js Frontend',
    'React.js was used for the user-facing experience.',
  ],
  [
    'Ruby on Rails Backend',
    'Ruby on Rails handled the backend logic and fundraising workflows.',
  ],
  [
    'AWS Cloud Infrastructure',
    'AWS provided the cloud infrastructure needed to support growth and heavier campaign traffic.',
  ],
];

const whyCards: [string, string][] = [
  [
    'Easier to Launch',
    'Campaigns became easier to launch. Schools could start fundraising activities much faster without repeating the same setup work.',
  ],
  [
    'Easier to Track',
    'Students and sponsors were easier to track. Donations stayed organized and linked to the right campaign and participant.',
  ],
  [
    'Faster to Report',
    'Reports became much faster to prepare, and busy fundraising events became easier to support.',
  ],
];

const outcomes = [
  'Campaign preparation dropped from roughly 2 days to 3–4 hours, about 80% faster.',
  'Weekly coordination dropped from around 12 hours to about 5 hours, around 55–60% less admin work.',
  'Reporting time dropped from roughly 3 hours to 20–30 minutes, around 85% faster.',
  'Participant engagement improved by approximately 25–30%.',
  'The platform supported around 15–20 active campaigns at once and 1,000+ donation transactions during peak periods.',
];

export function orangeRulerSectionsHtml(): string {
  const logo = figure({
    file: 'orange-ruler-logo.webp',
    width: 352,
    height: 120,
    alt: 'Orange Ruler logo',
    frame: 'inline-flex items-center',
    imgClass: 'block h-12 w-auto max-w-[220px] object-contain',
  });
  const hero = figure({
    file: 'orange-ruler-01.webp',
    width: 960,
    height: 540,
    alt: 'Orange Ruler on a laptop, tablet, and phone',
    eager: true,
  });
  const solutionImg = figure({
    file: 'orange-ruler-02.webp',
    width: 1024,
    height: 576,
    alt: 'Orange Ruler phone screens for school fundraising programs',
  });
  const resultsImg = figure({
    file: 'orange-ruler-03.webp',
    width: 1024,
    height: 576,
    alt: 'Orange Ruler fundraising page on a laptop',
  });

  const snapshot: [string, string][] = [
    ['Industry', 'Fundraising · Education'],
    ['Market', 'United States'],
    ['Solution', 'School fundraising software'],
    ['Technology', 'Ruby on Rails · React.js · AWS'],
  ];

  const tableRows = comparison
    .map(
      ([area, before, after, impact]) =>
        `<tr class="border-t border-white/10"><th scope="row" class="whitespace-nowrap px-4 py-4 font-display text-sm font-bold text-white">${esc(area)}</th><td class="px-4 py-4 text-white/70">${esc(before)}</td><td class="px-4 py-4 text-white/70">${esc(after)}</td><td class="px-4 py-4 text-white/70">${esc(impact)}</td></tr>`,
    )
    .join('');

  const steps = solutionSteps
    .map(
      ([title, sentence], i) =>
        `<div class="dw-rise h-full"><div class="glass glare relative flex h-full flex-col p-7"><span class="font-display text-3xl font-extrabold text-cyan/40">${String(i + 1).padStart(2, '0')}</span><h3 class="cm-xl mt-3 font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(sentence)}</p></div></div>`,
    )
    .join('');

  return `<style>.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:26px}@media (min-width:768px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:30px}}@media (min-width:1024px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:36px}}.checkmate-copy h3.cm-lg{font-size:.945rem}.checkmate-copy h3.cm-xl{font-size:1.05rem}.checkmate-copy h3.cm-flow{font-size:.735rem}@media (min-width:640px){.checkmate-copy h3.cm-flow{font-size:.84rem}}@keyframes dw-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}.dw-rise{animation:dw-rise .6s cubic-bezier(.21,.65,.36,1) both}@media (prefers-reduced-motion:reduce){.dw-rise{animation:none;opacity:1;transform:none}}</style><div class="checkmate-copy"><section class="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pt-44"><div class="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true"></div><div class="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true"></div><div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0"><nav class="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70" aria-label="Breadcrumb"><a class="hover:text-cyan" href="/">Home</a><span>/</span><a class="hover:text-cyan" href="/case-studies">Case Studies</a><span>/</span><span class="text-white/70">Orange Ruler</span></nav><div class="mb-6 inline-flex rounded-2xl bg-white px-5 py-3 shadow-lg">${logo}</div><span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span> ${esc(orangeRulerCopy.label)}</span><h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-dusk sm:text-5xl">${esc(orangeRulerCopy.h1Line1)}<br><span class="text-gradient">${esc(orangeRulerCopy.h1Line2)}</span></h1><p class="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">${esc(orangeRulerCopy.intro)}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary !px-8 !py-3.5" href="/contact">${esc(orangeRulerCopy.primaryCta)} <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">${esc(orangeRulerCopy.secondaryCta)}</a></div><p class="mt-3 text-xs text-white/70">${esc(orangeRulerCopy.microcopy)}</p></div><div class="relative min-w-0">${hero}</div></div></section><section class="relative px-6 sm:px-10"><div class="dw-rise mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-dusk/10 md:grid-cols-4">${snapshot
    .map(
      ([k, v]) =>
        `<div class="min-w-0 bg-ink/80 p-5"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">${esc(k)}</p><p class="mt-1.5 text-sm font-semibold text-white">${esc(v)}</p></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('What Orange Ruler Changed for School Teams')}</div><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${results.map((row) => resultCard(...row)).join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mb-10">${h2('Before vs. After Orange Ruler')}</div><div class="overflow-x-auto"><table class="w-full min-w-[44rem] border-collapse text-left text-sm"><thead><tr class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"><th scope="col" class="px-4 py-3">Area</th><th scope="col" class="px-4 py-3">Before</th><th scope="col" class="px-4 py-3">After</th><th scope="col" class="px-4 py-3">Business Impact</th></tr></thead><tbody>${tableRows}</tbody></table></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The Main Challenge')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">The real challenge was not collecting donations. It was managing everything around them. A school fundraiser can involve hundreds of participants and many moving parts. Without one central system, organizers had to spend too much time checking records, updating spreadsheets, matching donations, and preparing reports. Before Orange Ruler, campaign setup could take close to 2 days once admin work, participant records, and fundraising details were included. Weekly coordination could also take around 12 hours during active fundraising periods. That workload became even harder when several campaigns were running at once.</p></div><div class="min-w-0">${h2('Why a Basic Donation Tool Was Not Enough')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">A basic donation platform could collect money. Orange Ruler needed to do much more. It had to manage campaigns, track students and sponsors, connect donations with the right participant, show progress toward fundraising goals, support school events, and give administrators useful reports. Using separate tools for all of this would have kept the same problem. Someone would still have to connect everything manually. That is why the client needed custom fundraising software.</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The School Fundraising Solution')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">DigiWorks AI developed a custom school fundraising platform that brought campaigns, participants, donations, reporting, and event management into one place. The result was a much cleaner fundraising process for schools and a stronger platform for future growth. The project is a strong example of how custom software development services can replace disconnected tools with one system built around the way a business actually works.</p></div><div class="min-w-0">${solutionImg}</div></div><div class="relative mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10"><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${steps}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10">${h2('What DigiWorks AI Custom Built')}<p class="mt-6 max-w-3xl text-[15px] leading-relaxed text-white/70">DigiWorks AI developed the platform around the full fundraising process rather than a generic donation page. React.js handled the user-facing experience. Ruby on Rails handled the backend logic and fundraising workflows. AWS provided the cloud infrastructure for growth and heavier campaign traffic.</p><div class="mt-8 flex flex-wrap gap-2.5">${chips.map((chip) => `<span class="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">${esc(chip)}</span>`).join('')}</div><div class="mt-10 grid gap-6 md:grid-cols-3">${builtCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${resultsImg}</div><div class="min-w-0">${h2('Preparing for Busy Campaign Days')}<ul class="mt-6 space-y-3.5">${outcomes.map((item) => `<li class="relative pl-7 text-[15px] leading-relaxed text-white/70"><span class="absolute left-0 top-[9px] h-2 w-2 rounded-sm bg-cyan" aria-hidden="true"></span>${esc(item)}</li>`).join('')}</ul></div></div></section><section class="relative px-6 py-16 sm:px-10"><div class="dw-rise mx-auto max-w-4xl"><div class="glass-strong relative overflow-hidden p-10 text-center md:p-14"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Client feedback</p><p class="relative mt-4 font-display text-xl font-bold leading-relaxed text-white">“${esc(orangeRulerCopy.quote)}”</p><p class="relative mt-6 text-sm font-semibold text-white/70">${esc(orangeRulerCopy.quoteBy)}</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mx-auto max-w-3xl text-center">${h2('Why Custom Software Made Sense')}</div><p class="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-white/70">The client could have used one tool for donations, another for reporting, and spreadsheets for participants. That would have kept the same gaps. Orange Ruler needed one system built around the full fundraising process, so campaigns, participants, sponsors, donations, reports, and events could stay connected.</p><div class="mt-12 grid gap-6 md:grid-cols-3">${whyCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section>${visibleExploreHtml('orange-ruler')}<section class="relative overflow-hidden px-6 py-16 sm:px-10"><div class="relative mx-auto max-w-3xl text-center"><h2 class="cm-cta font-display font-extrabold leading-[1.08] text-white">Need Custom Fundraising Software?</h2><p class="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">DigiWorks AI builds custom software for fundraising, education, payments, events, and other workflows that become difficult to manage through separate tools. If your team is still relying on spreadsheets, payment platforms, and manual reporting, we can build one system around the way your organization actually works.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a class="btn-primary !px-9 !py-4 !text-base" href="/contact">Build Custom Fundraising Software <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">All Case Studies</a></div><p class="mt-4 text-xs text-white/70">${esc(orangeRulerCopy.microcopy)}</p></div></section></div>`;
}
