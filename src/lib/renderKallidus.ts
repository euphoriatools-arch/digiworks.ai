import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { kallidusCopy } from '../data/copy/kallidus.ts';
import { visibleExploreHtml } from './visibleCaseStudies.ts';

const DIR = join(process.cwd(), 'public', 'case', 'kallidus');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function kallidusImageFile(name: string): string | null {
  const abs = join(DIR, name);
  return existsSync(abs) ? `/case/kallidus/${name}` : null;
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
  const file = kallidusImageFile(opts.file);
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
  ['40%', 'Faster employee onboarding', 'The onboarding cycle dropped from 10 business days to 6'],
  ['75%', 'Faster workforce reporting', 'Report preparation dropped from 2 hours to 30 minutes'],
  ['50%', 'Fewer overdue compliance items', 'Outstanding items fell from 18% to 9%'],
  ['200', 'International customers', 'When Kallidus acquired Sapling in 2021, Sapling served around 200 international customers'],
];

const comparison: [string, string, string, string][] = [
  ['HR Administration', 'Repeated coordination across disconnected steps', 'Repeatable workflow automation', '2 hours to 30 minutes per report (75% faster reporting)'],
  ['Onboarding', 'Documents, tasks, and approvals handled separately', 'Connected onboarding journey', '10 to 6 business days (40% faster onboarding)'],
  ['Compliance', 'Policy and certification follow-up handled manually', 'Centralized tracking and reminders', '18% to 9% overdue compliance items'],
  ['Workforce Data', 'Employee information spread across tools', 'Centralized dashboards and records', 'Faster access to operational HR information'],
  ['Integrations', 'Duplicate entry and disconnected lifecycle updates', 'Connected employee lifecycle integrations', 'Less re-keying and lower process friction'],
];

const platformSteps: [string, string][] = [
  [
    'Make Onboarding Repeatable',
    'Connected workflows bring documents, tasks, approvals, and employee setup into one repeatable journey. HR teams can reuse a defined process instead of rebuilding onboarding from scratch for each new hire.',
  ],
  [
    'Make Compliance Visible',
    'Policy acknowledgements, certifications, reminders, and outstanding requirements can be tracked in one place, giving HR teams clearer visibility into what is complete and what still needs attention.',
  ],
  [
    'Make Workforce Data Useful',
    'Centralized dashboards make employee information and operational activity easier for HR leaders and managers to find, review, and act on.',
  ],
  [
    'Connect the Employee Lifecycle',
    'The workflow model continues beyond the first day. Employee changes, transitions, offboarding, and related actions can follow structured processes rather than depending on disconnected manual follow-up.',
  ],
];

const delivered: [string, string][] = [
  ['Web application', 'An employee and HR experience for employees, managers, and administrators.'],
  ['Lifecycle workflows', 'Configurable onboarding and employee lifecycle workflows.'],
  ['Approvals and documents', 'Document, task, approval, and policy acknowledgement flows.'],
  ['Compliance and dashboards', 'Compliance tracking and workforce dashboards.'],
  ['Integrations', 'Enterprise integration support for connected HR processes.'],
  ['Cloud infrastructure', 'Scalable cloud infrastructure for growing workflow and workforce demands.'],
];

const chips = [
  'Onboarding',
  'Employee lifecycle',
  'Compliance tracking',
  'Policy acknowledgements',
  'Approvals',
  'Workforce dashboards',
  'Integrations',
  'Offboarding',
  'React.js',
  'Ruby on Rails',
  'AWS',
];

const techCards: [string, string][] = [
  ['React.js', 'The front end supports employees, managers, and HR administrators as they complete tasks, review information, and move through workforce workflows.'],
  ['Ruby on Rails', 'The backend supports employee records, lifecycle workflows, approvals, automation, and connected business processes.'],
  ['AWS', 'AWS provides the infrastructure foundation for application hosting, workflow execution, and growing usage.'],
];

const impact: [string, string][] = [
  ['75% Faster Workforce Reporting', 'Centralized workforce data and dashboards reduced recurring report preparation from 2 hours to 30 minutes, making reporting 75% faster.'],
  ['40% Faster Employee Onboarding', 'Repeatable onboarding workflows reduced the average onboarding cycle from 10 business days to 6, making the process 40% faster.'],
  ['50% Fewer Overdue Compliance Items', 'Centralized tracking, reminders, and clearer ownership reduced overdue compliance items from 18% to 9%, cutting the outstanding workload in half.'],
  ['Scalable Workforce Operations', 'Connected employee information, lifecycle workflows, and integrations give HR teams a more scalable operating model as organizational complexity grows.'],
];

export function kallidusSectionsHtml(): string {
  const logo = figure({
    file: 'kallidus-logo.webp',
    width: 364,
    height: 117,
    alt: 'Kallidus logo',
    eager: true,
    frame: 'inline-flex items-center',
    imgClass: 'block h-10 w-auto max-w-[220px] object-contain',
  });
  const hero = figure({
    file: 'kallidus-01.webp',
    width: 1024,
    height: 576,
    alt: 'Kallidus learning platform on a laptop, with the line Accelerate compliance, Build skills, Drive performance',
    eager: true,
  });
  const phones = figure({
    file: 'kallidus-02.webp',
    width: 1024,
    height: 576,
    alt: 'Kallidus on three phones, showing navigation, learning content, and compliance',
  });
  const devices = figure({
    file: 'kallidus-03.webp',
    width: 1024,
    height: 576,
    alt: 'Kallidus automated HR platform on a laptop, desktop, and tablets',
  });
  const growth = figure({
    file: 'kallidus-04.webp',
    width: 1024,
    height: 576,
    alt: 'Kallidus on a laptop and phone, with the line Empower Growth With Smarter Learning',
  });
  const skills = figure({
    file: 'kallidus-05.webp',
    width: 1024,
    height: 576,
    alt: 'Kallidus skills-gap screens on a laptop and phone',
  });

  const snapshot: [string, string][] = [
    ['Industry', 'HR tech / business SaaS'],
    ['Service', 'Custom web application'],
    ['Technology', 'React.js · Rails · AWS'],
    ['Scope', 'Onboarding through offboarding'],
  ];

  const tableRows = comparison
    .map(
      ([area, before, after, business]) =>
        `<tr class="border-t border-white/10"><th scope="row" class="whitespace-nowrap px-4 py-4 font-display text-sm font-bold text-white">${esc(area)}</th><td class="px-4 py-4 text-white/70">${esc(before)}</td><td class="px-4 py-4 text-white/70">${esc(after)}</td><td class="px-4 py-4 text-white/70">${esc(business)}</td></tr>`,
    )
    .join('');

  const steps = platformSteps
    .map(
      ([title, sentence], i) =>
        `<div class="dw-rise h-full"><div class="glass glare relative flex h-full flex-col p-7"><span class="font-display text-3xl font-extrabold text-cyan/40">${String(i + 1).padStart(2, '0')}</span><h3 class="cm-xl mt-3 font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(sentence)}</p></div></div>`,
    )
    .join('');

  const cloud = `<a class="font-medium text-white underline decoration-coral/40 underline-offset-2 hover:text-coral" href="/services/data-and-cloud">Data and Cloud Services</a>`;

  return `<style>.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:26px}@media (min-width:768px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:30px}}@media (min-width:1024px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:36px}}.checkmate-copy h3.cm-lg{font-size:.945rem}.checkmate-copy h3.cm-xl{font-size:1.05rem}.checkmate-copy h3.cm-flow{font-size:.735rem}@media (min-width:640px){.checkmate-copy h3.cm-flow{font-size:.84rem}}@keyframes dw-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}.dw-rise{animation:dw-rise .6s cubic-bezier(.21,.65,.36,1) both}@media (prefers-reduced-motion:reduce){.dw-rise{animation:none;opacity:1;transform:none}}.checkmate-copy p.cm-quote{font-size:24px;line-height:30px;font-weight:500}</style><div class="checkmate-copy"><section class="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pt-44"><div class="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true"></div><div class="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true"></div><div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0"><nav class="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70" aria-label="Breadcrumb"><a class="hover:text-cyan" href="/">Home</a><span>/</span><a class="hover:text-cyan" href="/case-studies">Case Studies</a><span>/</span><span class="text-white/70">Kallidus</span></nav><div class="mb-6 inline-flex rounded-2xl bg-white px-5 py-3 shadow-lg">${logo}</div><span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span> ${esc(kallidusCopy.label)}</span><h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-dusk sm:text-5xl">${esc(kallidusCopy.h1Line1)}<br><span class="text-gradient">${esc(kallidusCopy.h1Line2)}</span></h1><p class="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">${esc(kallidusCopy.intro)}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary !px-8 !py-3.5" href="/contact">${esc(kallidusCopy.primaryCta)} <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">${esc(kallidusCopy.secondaryCta)}</a></div><p class="mt-3 text-xs text-white/70">${esc(kallidusCopy.microcopy)}</p></div><div class="relative min-w-0">${hero}</div></div></section><section class="relative px-6 sm:px-10"><div class="dw-rise mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-dusk/10 md:grid-cols-4">${snapshot
    .map(
      ([k, v]) =>
        `<div class="min-w-0 bg-ink/80 p-5"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">${esc(k)}</p><p class="mt-1.5 text-sm font-semibold text-white">${esc(v)}</p></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('Results at a Glance')}</div><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">${results.map((row) => resultCard(...row)).join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mb-10">${h2('Before vs. After')}</div><div class="overflow-x-auto"><table class="w-full min-w-[44rem] border-collapse text-left text-sm"><thead><tr class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"><th scope="col" class="px-4 py-3">Area</th><th scope="col" class="px-4 py-3">Before</th><th scope="col" class="px-4 py-3">With Kallidus / Sapling</th><th scope="col" class="px-4 py-3">Business Impact</th></tr></thead><tbody>${tableRows}</tbody></table></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The HR Operations Challenge')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">The problem was not a lack of HR software. It was fragmented work. Employee information could live in one place while documents, approvals, policy tracking, manager actions, and other lifecycle steps moved through separate processes. As the workforce grows, every disconnected handoff adds more follow-up for HR and more opportunities for delays or inconsistent employee experiences.</p><p class="mt-4 text-[15px] leading-relaxed text-white/70">The challenge is not knowing what needs to happen. It is making those steps happen reliably without forcing HR to chase each one manually. Now repeat that process across teams, locations, and every stage of the employee lifecycle.</p></div><div class="min-w-0">${phones}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${skills}</div><div class="min-w-0">${h2('Why Custom Software Made Sense')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">A generic HR database can store employee records. It does not automatically coordinate the work surrounding those records. Kallidus/Sapling needed configurable workflows, employee data, dashboards, compliance processes, integrations, and scalable application architecture to work together around the real employee lifecycle. That made a custom software approach more valuable than adding another isolated checklist tool.</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10">${h2('Building the Platform Around HR Teams')}<div class="mt-12 grid gap-6 sm:grid-cols-2">${steps}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('What DigiWorks AI Delivered')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">Onboarding, compliance, employee changes, and offboarding sit in one scalable workflow model. The interface, workflow logic, integrations, and infrastructure work together around the employee lifecycle.</p><div class="mt-8 flex flex-wrap gap-2.5">${chips.map((chip) => `<span class="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">${esc(chip)}</span>`).join('')}</div></div><div class="min-w-0">${devices}</div></div><div class="relative mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10"><div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">${delivered
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${growth}</div><div class="min-w-0">${h2('Technical Setup')}<div class="mt-8 grid gap-6">${techCards
    .map(
      ([title, desc]) =>
        `<div><h3 class="cm-lg font-display font-bold text-white">${esc(title)}</h3><p class="mt-2 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div>`,
    )
    .join('')}</div><p class="mt-6 text-[15px] leading-relaxed text-white/70">${cloud} support the infrastructure and data foundations needed for connected business applications.</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mx-auto max-w-3xl text-center">${h2('Business Impact')}</div><div class="mt-12 grid gap-6 md:grid-cols-2">${impact
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-3xl px-6 sm:px-10 text-center">${h2('Customer Perspective')}<blockquote class="mt-8"><p class="cm-quote font-display text-white">Kallidus helped transform the company’s HR operations by automating recruitment workflows and bringing workforce information into one centralized platform. Compliance tracking became easier to manage and keep up to date, while leadership gained real-time visibility into employee performance metrics. Just as importantly, the platform provided a scalable foundation that could continue supporting the organization as it grew.</p><footer class="mt-6 text-sm font-semibold text-white/80">Daniel Thompson <span class="font-normal text-white/55">— VP, People Operations, Enterprise Technology Company (USA)</span></footer></blockquote></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-3xl px-6 sm:px-10 text-center">${h2('Why This Project Matters')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">Automation should remove repetitive work without replacing the decisions that still require human judgment. The value comes from choosing the right workflows to connect, not adding automation for its own sake. Good HR software should reduce administrative work. It should connect the routine steps around employee data so people teams can focus on the people involved.</p><p class="mt-4 text-[15px] leading-relaxed text-white/70">For organizations coordinating onboarding, compliance, approvals, workforce data, and employee changes across multiple tools, DigiWorks AI helps turn fragmented processes into a connected platform built around the way the business actually operates.</p></div></section>${visibleExploreHtml('kallidus')}<section class="relative overflow-hidden px-6 py-16 sm:px-10"><div class="relative mx-auto max-w-3xl text-center"><h2 class="cm-cta font-display font-extrabold leading-[1.08] text-white">Build HR Workflows That Scale Without More Admin</h2><p class="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">If your HR team is still coordinating critical employee processes across disconnected tools and manual follow-ups, DigiWorks AI can help design and build a custom platform around those workflows.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a class="btn-primary !px-9 !py-4 !text-base" href="/contact">Build Your HR Automation Platform <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">All Case Studies</a></div><p class="mt-4 text-xs text-white/70">${esc(kallidusCopy.microcopy)}</p></div></section></div>`;
}
