import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { leadScoutCopy } from '../data/copy/lead-scout.ts';
import { visibleExploreHtml } from './visibleCaseStudies.ts';

const DIR = join(process.cwd(), 'public', 'case', 'lead-scout');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function leadScoutImageFile(name: string): string | null {
  const abs = join(DIR, name);
  return existsSync(abs) ? `/case/lead-scout/${name}` : null;
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
  const file = leadScoutImageFile(opts.file);
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
  ['35–40%', 'Less prospect research time', 'Weekly research fell from about 10 hours to 6–6.5 hours per rep'],
  ['3.5–4 hrs', 'Back for selling each week', 'Each rep gained that time for outreach, follow-up, and sales conversations'],
  ['200–250', 'Leads per rep each week', 'Up from roughly 120–150 leads per week'],
  ['20–25%', 'Higher qualified lead rate', 'More time spent on stronger opportunities'],
  ['10–12 wks', 'MVP launch', 'Discovery, enrichment, scoring, and pipeline in one product'],
  ['1 workflow', 'Discovery through pipeline', 'Lead discovery, enrichment, scoring, and pipeline management in one place'],
];

const comparison: [string, string, string, string][] = [
  ['Research Time', 'Around 10 hrs/week per rep', 'Around 6–6.5 hrs/week', '~35–40% less research time'],
  ['Prospect Volume', 'Roughly 120–150/week', 'Around 200–250/week', 'Higher prospecting capacity'],
  ['Qualified Lead Rate', 'Previous baseline', 'Around 20–25% higher', 'Better lead quality'],
  ['Lead Enrichment', 'Manual checking', 'Automated enrichment workflow', 'Faster lead preparation'],
  ['Lead Prioritization', 'Reps reviewed leads manually', 'AI-assisted lead scoring', 'More focus on stronger prospects'],
  ['Pipeline Management', 'Data spread across tools', 'Centralized pipeline', 'Clearer sales visibility'],
  ['MVP Launch', 'No unified platform', 'Approx. 10–12 weeks', 'Faster path to a working product'],
];

const solutionSteps: [string, string][] = [
  [
    'AI Lead Discovery',
    'Lead Scout helps identify relevant B2B prospects across different data sources. Instead of manually searching for companies and contacts, sales teams can build a more structured prospecting pipeline and handle a higher volume of opportunities.',
  ],
  [
    'Automated Lead Enrichment',
    'Finding a company is only the first step. Sales teams also need enough information to decide whether a lead is worth pursuing. Lead Scout enriches prospect records with additional business information so reps spend less time checking data manually.',
  ],
  [
    'AI Lead Scoring and Prioritization',
    'Not every prospect deserves the same amount of attention. Lead Scout uses AI-assisted scoring to help teams identify stronger opportunities. Instead of reviewing every lead in the same way, reps can focus their effort where it is more likely to create value.',
  ],
  [
    'Centralized Pipeline Management',
    'Lead discovery becomes less useful when the information still lives across several tools. Lead Scout brings prospect information and pipeline stages into one centralized view. Sales teams can organize leads, track progress, and manage follow-ups without constantly moving between separate systems.',
  ],
  [
    'B2B Prospecting Automation',
    'Lead Scout automates repetitive parts of discovery, enrichment, qualification, and pipeline management. The result is a more repeatable B2B prospecting automation workflow that supports higher lead volume without creating the same increase in manual work.',
  ],
];

const flow = ['Discover', 'Enrich', 'Score', 'Prioritize', 'Manage', 'Engage'];

const chips = [
  'AI-assisted B2B lead discovery',
  'Prospect data enrichment',
  'Lead scoring and prioritization',
  'Centralized lead management',
  'Sales pipeline tracking',
  'Prospecting workflow automation',
  'AI-generated sales insights',
  'High-intent lead identification',
  'SaaS-based workflow architecture',
  'Scalable cloud infrastructure',
];

const builtCards: [string, string][] = [
  [
    'Discovery Through Pipeline',
    'Lead discovery fed enrichment. Enrichment supported qualification. Qualification helped prioritization. Qualified prospects moved into one structured sales pipeline.',
  ],
  [
    'SaaS-Based Workflow Architecture',
    'The platform was built as a SaaS-based workflow around the client’s B2B prospecting process, not a generic lead database.',
  ],
  [
    'Scalable Cloud Infrastructure',
    'The custom scope included scalable cloud infrastructure for the prospecting workflow.',
  ],
];

const whyCards: [string, string][] = [
  [
    'It Did Not Automate the Sale',
    'Lead Scout automated the repetitive work that happened before and around the sale. The sales team still controlled outreach, relationships, and decision-making.',
  ],
  [
    'Research Moved Into One Workflow',
    'The platform handled more of the research, organization, enrichment, and qualification work.',
  ],
  [
    'More Time to Sell',
    'After more of that work moved into one structured workflow, each rep gained roughly 3.5–4 hours per week.',
  ],
];

const outcomes = [
  'Around 35–40% less prospect research time, from about 10 hours to 6–6.5 hours per rep per week.',
  'Prospect volume rose from roughly 120–150 to around 200–250 leads per rep each week.',
  'The qualified lead rate improved by about 20–25%.',
  'The MVP launched in about 10–12 weeks, covering discovery, enrichment, scoring, and pipeline management.',
  'Each rep gained roughly 3.5–4 hours per week for outreach, follow-up, and sales conversations.',
];

export function leadScoutSectionsHtml(): string {
  const logo = figure({
    file: 'lead-scout-logo.webp',
    width: 382,
    height: 132,
    alt: 'Lead Scout logo',
    frame: 'inline-flex items-center',
    imgClass: 'block h-10 w-auto max-w-[220px] object-contain',
  });
  const hero = figure({
    file: 'lead-scout-01.webp',
    width: 577,
    height: 433,
    alt: 'Lead Scout on a tablet, laptop, and phones',
    eager: true,
  });
  const solutionImg = figure({
    file: 'lead-scout-02.webp',
    width: 1024,
    height: 576,
    alt: 'Lead Scout phone screens for prospecting and sales',
  });
  const resultsImg = figure({
    file: 'lead-scout-03.webp',
    width: 1024,
    height: 576,
    alt: 'Lead Scout website on a laptop',
  });

  const snapshot: [string, string][] = [
    ['Industry', 'B2B software · United States'],
    ['Platform', 'AI lead generation'],
    ['Scope', 'Discovery, enrichment, scoring, pipeline'],
    ['Stack', 'SaaS workflow · Cloud infrastructure'],
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

  const flowHtml = flow
    .map((title, i) => {
      return `<div class="glass flex min-w-0 items-center gap-3 px-4 py-4"><span class="font-display text-2xl font-extrabold text-cyan/40">${String(i + 1).padStart(2, '0')}</span><h3 class="cm-flow font-display font-bold text-white">${esc(title)}</h3></div>`;
    })
    .join('');

  const link = `<a class="font-medium text-white underline decoration-coral/40 underline-offset-2 hover:text-coral" href="/services/automation-and-integration">AI integration services</a>`;

  return `<style>.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:26px}@media (min-width:768px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:30px}}@media (min-width:1024px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:36px}}.checkmate-copy h3.cm-lg{font-size:.945rem}.checkmate-copy h3.cm-xl{font-size:1.05rem}.checkmate-copy h3.cm-flow{font-size:.735rem}@media (min-width:640px){.checkmate-copy h3.cm-flow{font-size:.84rem}}@keyframes dw-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}.dw-rise{animation:dw-rise .6s cubic-bezier(.21,.65,.36,1) both}@media (prefers-reduced-motion:reduce){.dw-rise{animation:none;opacity:1;transform:none}}</style><div class="checkmate-copy"><section class="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pt-44"><div class="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true"></div><div class="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true"></div><div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0"><nav class="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70" aria-label="Breadcrumb"><a class="hover:text-cyan" href="/">Home</a><span>/</span><a class="hover:text-cyan" href="/case-studies">Case Studies</a><span>/</span><span class="text-white/70">Lead Scout</span></nav><div class="mb-6 inline-flex rounded-2xl bg-white px-5 py-3 shadow-lg">${logo}</div><span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span> ${esc(leadScoutCopy.label)}</span><h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-dusk sm:text-5xl">${esc(leadScoutCopy.h1Line1)}<br><span class="text-gradient">${esc(leadScoutCopy.h1Line2)}</span></h1><p class="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">${esc(leadScoutCopy.intro)}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary !px-8 !py-3.5" href="/contact">${esc(leadScoutCopy.primaryCta)} <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">${esc(leadScoutCopy.secondaryCta)}</a></div><p class="mt-3 text-xs text-white/70">${esc(leadScoutCopy.microcopy)}</p></div><div class="relative min-w-0">${hero}</div></div></section><section class="relative px-6 sm:px-10"><div class="dw-rise mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-dusk/10 md:grid-cols-4">${snapshot
    .map(
      ([k, v]) =>
        `<div class="min-w-0 bg-ink/80 p-5"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">${esc(k)}</p><p class="mt-1.5 text-sm font-semibold text-white">${esc(v)}</p></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('What Lead Scout Changed for Sales Teams')}</div><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${results.map((row) => resultCard(...row)).join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mb-10">${h2('Before vs. After Lead Scout')}</div><div class="overflow-x-auto"><table class="w-full min-w-[44rem] border-collapse text-left text-sm"><thead><tr class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"><th scope="col" class="px-4 py-3">Area</th><th scope="col" class="px-4 py-3">Before</th><th scope="col" class="px-4 py-3">After</th><th scope="col" class="px-4 py-3">Business Impact</th></tr></thead><tbody>${tableRows}</tbody></table></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The B2B Prospecting Problem Was the Workflow')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">The sales team did not have a lead shortage. They had a workflow problem. Finding useful B2B prospects required too much manual research. Lead information was spread across different sources, and reps had to review prospects one by one before deciding who was worth contacting. A rep could spend around 10 hours each week on research, enrichment, and qualification, which meant less time for actual sales conversations. As prospect volume increased, the process became even harder to manage.</p></div><div class="min-w-0">${h2('Why Another Lead Tool Was Not Enough')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">Sales teams already have access to tools such as Apollo, ZoomInfo, enrichment platforms, and CRM systems. Adding another standalone tool would not connect lead discovery, enrichment, qualification, scoring, and pipeline management. Reps would still switch between tools, copy data, check records, and decide the next step by hand. That is where AI automation services became useful. Lead Scout was built around the client’s actual B2B prospecting workflow. DigiWorks AI’s ${link} connect AI, business data, and existing sales systems into one process.</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('Discover, Enrich, Score, Prioritize, Manage, Engage')}</div><div class="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">${flowHtml}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The AI Lead Generation Solution')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">DigiWorks AI developed Lead Scout as an AI-assisted B2B prospecting platform. It helps sales teams find prospects, enrich lead information, prioritize opportunities, and manage the pipeline from one place. The purpose was not to replace the sales team. It was to remove the work around sales so reps could spend more time talking to the right prospects.</p></div><div class="min-w-0">${solutionImg}</div></div><div class="relative mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10"><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${steps}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10">${h2('What DigiWorks AI Custom Built')}<p class="mt-6 max-w-3xl text-[15px] leading-relaxed text-white/70">DigiWorks AI developed the platform around the client’s B2B prospecting workflow rather than relying on a generic lead database. For a broader custom solution, custom software development services can build systems around a specific sales workflow.</p><div class="mt-8 flex flex-wrap gap-2.5">${chips.map((chip) => `<span class="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">${esc(chip)}</span>`).join('')}</div><div class="mt-10 grid gap-6 md:grid-cols-3">${builtCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${resultsImg}</div><div class="min-w-0">${h2('From Manual Prospecting to One Sales Workflow')}<ul class="mt-6 space-y-3.5">${outcomes.map((item) => `<li class="relative pl-7 text-[15px] leading-relaxed text-white/70"><span class="absolute left-0 top-[9px] h-2 w-2 rounded-sm bg-cyan" aria-hidden="true"></span>${esc(item)}</li>`).join('')}</ul></div></div></section><section class="relative px-6 py-16 sm:px-10"><div class="dw-rise mx-auto max-w-4xl"><div class="glass-strong relative overflow-hidden p-10 text-center md:p-14"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">Client feedback</p><p class="relative mt-4 font-display text-xl font-bold leading-relaxed text-white">“${esc(leadScoutCopy.quote)}”</p><p class="relative mt-6 text-sm font-semibold text-white/70">${esc(leadScoutCopy.quoteBy)}</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('Why This Project Worked')}</div><div class="mt-12 grid gap-6 md:grid-cols-3">${whyCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section>${visibleExploreHtml('lead-scout')}<section class="relative overflow-hidden px-6 py-16 sm:px-10"><div class="relative mx-auto max-w-3xl text-center"><h2 class="cm-cta font-display font-extrabold leading-[1.08] text-white">Build an AI-Powered Sales Workflow</h2><p class="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">If your sales team is still spending hours researching prospects, checking lead information, qualifying opportunities, and moving data between disconnected tools, DigiWorks AI can help turn that process into one AI-powered workflow.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a class="btn-primary !px-9 !py-4 !text-base" href="/contact">Build Something Similar <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/services/automation-and-integration">Explore AI Integration Services</a></div><p class="mt-4 text-xs text-white/70">${esc(leadScoutCopy.microcopy)}</p></div></section></div>`;
}
