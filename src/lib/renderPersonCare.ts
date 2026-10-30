import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { personCareCopy } from '../data/copy/person-care.ts';
import { visibleExploreHtml } from './visibleCaseStudies.ts';

const DIR = join(process.cwd(), 'public', 'case', 'person-care');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function personCareImageFile(name: string): string | null {
  const abs = join(DIR, name);
  return existsSync(abs) ? `/case/person-care/${name}` : null;
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
  const file = personCareImageFile(opts.file);
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
  ['25–35%', 'Less administrative work', 'Repetitive manual coordination moved into centralized digital workflows'],
  ['30–40%', 'Less appointment coordination', 'A structured booking workflow replaced more of the manual scheduling'],
  ['2–3 hrs', 'Coaching program setup', 'Down from around 1 day with reusable program templates'],
  ['40–50%', 'Faster practitioner onboarding', 'A standardized workflow replaced a longer setup process'],
  ['20–30%', 'Less follow-up work', 'Communication and ongoing activity stayed in one platform'],
  ['3x', 'More active workflows', 'Teams could grow without the same increase in administrative effort'],
];

const comparison: [string, string, string, string][] = [
  ['Admin Work', 'Repetitive manual coordination', 'Centralized digital workflows', '~25–35% less admin effort'],
  ['Appointment Coordination', 'More manual scheduling', 'Structured booking workflow', '~30–40% less coordination time'],
  ['Program Setup', 'Around 1 day', 'Around 2–3 hours', 'Much faster setup'],
  ['Practitioner Onboarding', 'Longer setup process', 'Standardized workflow', '~40–50% faster'],
  ['Client Follow-Up', 'More manual tracking', 'Centralized communication', '~20–30% less follow-up work'],
  ['Workflow Capacity', 'Growth increased admin pressure', 'Up to 3x more active workflows', 'Growth without matching admin growth'],
];

const solutionSteps: [string, string][] = [
  [
    'Appointment Management',
    'Clients and practitioners needed a simpler way to manage appointments without relying on repeated manual coordination. A structured booking workflow brought more of that process into one place. This reduced the time spent arranging and managing appointments by approximately 30–40%.',
  ],
  [
    'Private Client Communication',
    'Care does not stop when a scheduled session ends. Person Care provided a dedicated environment for communication between clients and practitioners. Keeping communication inside the platform made ongoing client activity easier to manage instead of spreading conversations across disconnected channels.',
  ],
  [
    'Structured Coaching Programs',
    'Each new coaching program could mean rebuilding similar plans and structures by hand. Reusable coaching program templates reduced that repetition. A process that could take close to one working day could instead be completed in roughly 2–3 hours.',
  ],
  [
    'Clearer Workflow Visibility',
    'As more appointments, clients, and programs became active, practitioners needed a clearer picture of what required attention. Dashboards brought key activity into one place. That visibility helped teams manage more active workflows without increasing administrative work at the same rate.',
  ],
];

const chips = [
  'Appointment management',
  'Private client communication',
  'Structured coaching programs',
  'Reusable program templates',
  'Workflow dashboards',
  'Practitioner onboarding',
  'Client follow-up',
  'React.js frontend',
  'Ruby on Rails backend',
  'AWS cloud infrastructure',
];

const builtCards: [string, string][] = [
  [
    'React.js Frontend',
    'React.js supported the user-facing platform and responsive workflows for appointments, dashboards, and ongoing interaction.',
  ],
  [
    'Ruby on Rails Backend',
    'Ruby on Rails handled the backend logic behind booking, coaching programs, user workflows, and core application operations.',
  ],
  [
    'AWS Cloud Infrastructure',
    'AWS provided the cloud foundation needed to support increasing platform activity and continued product growth.',
  ],
];

const whyCards: [string, string][] = [
  [
    'Easier Appointments',
    'Appointments became easier to coordinate. Booking became more structured, so less of that work stayed manual.',
  ],
  [
    'Faster Programs',
    'Programs became faster to prepare. Reusable templates cut setup from around one working day to roughly 2–3 hours.',
  ],
  [
    'Organized Communication',
    'Client communication stayed organized, and ongoing workflows became easier to see from one place.',
  ],
];

const outcomes = [
  'The increase in capacity did not come from asking practitioners to work faster.',
  'It came from reducing repeated work around care delivery.',
  'Booking became more structured, and program templates reduced repeated setup.',
  'Communication stayed inside the platform, and dashboards made ongoing activity easier to follow.',
  'Teams could manage up to 3x more active workflows without the same 3x increase in coordination and administrative effort.',
];

export function personCareSectionsHtml(): string {
  const logo = figure({
    file: 'person-care-logo.webp',
    width: 122,
    height: 53,
    alt: 'Person Care logo',
    frame: 'inline-flex items-center',
    imgClass: 'block h-10 w-auto max-w-[220px] object-contain',
  });
  const hero = figure({
    file: 'person-care-01.webp',
    width: 960,
    height: 540,
    alt: 'Person Care on a tablet, laptop, and phone',
    eager: true,
  });
  const solutionImg = figure({
    file: 'person-care-02.webp',
    width: 1024,
    height: 576,
    alt: 'Person Care counseling and health coaching screens on a tablet, laptop, and phone',
  });
  const resultsImg = figure({
    file: 'person-care-03.webp',
    width: 1024,
    height: 576,
    alt: 'Person Care on a laptop, tablet, and phone',
  });

  const snapshot: [string, string][] = [
    ['Focus', 'Counseling · Health coaching'],
    ['Platform', 'Digital health'],
    ['Scope', 'Appointments, programs, communication'],
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

  const mlops = `<a class="font-medium text-white underline decoration-coral/40 underline-offset-2 hover:text-coral" href="/services/mlops-setup">MLOps</a>`;

  return `<style>.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:26px}@media (min-width:768px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:30px}}@media (min-width:1024px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:36px}}.checkmate-copy h3.cm-lg{font-size:.945rem}.checkmate-copy h3.cm-xl{font-size:1.05rem}.checkmate-copy h3.cm-flow{font-size:.735rem}@media (min-width:640px){.checkmate-copy h3.cm-flow{font-size:.84rem}}@keyframes dw-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}.dw-rise{animation:dw-rise .6s cubic-bezier(.21,.65,.36,1) both}@media (prefers-reduced-motion:reduce){.dw-rise{animation:none;opacity:1;transform:none}}</style><div class="checkmate-copy"><section class="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pt-44"><div class="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true"></div><div class="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true"></div><div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0"><nav class="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70" aria-label="Breadcrumb"><a class="hover:text-cyan" href="/">Home</a><span>/</span><a class="hover:text-cyan" href="/case-studies">Case Studies</a><span>/</span><span class="text-white/70">Person Care</span></nav><div class="mb-6 inline-flex rounded-2xl bg-white px-5 py-3 shadow-lg">${logo}</div><span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span> ${esc(personCareCopy.label)}</span><h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-dusk sm:text-5xl">${esc(personCareCopy.h1Line1)}<br><span class="text-gradient">${esc(personCareCopy.h1Line2)}</span></h1><p class="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">${esc(personCareCopy.intro)}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary !px-8 !py-3.5" href="/contact">${esc(personCareCopy.primaryCta)} <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">${esc(personCareCopy.secondaryCta)}</a></div><p class="mt-3 text-xs text-white/70">${esc(personCareCopy.microcopy)}</p></div><div class="relative min-w-0">${hero}</div></div></section><section class="relative px-6 sm:px-10"><div class="dw-rise mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-dusk/10 md:grid-cols-4">${snapshot
    .map(
      ([k, v]) =>
        `<div class="min-w-0 bg-ink/80 p-5"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">${esc(k)}</p><p class="mt-1.5 text-sm font-semibold text-white">${esc(v)}</p></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('What Person Care Changed for Care Teams')}</div><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${results.map((row) => resultCard(...row)).join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mb-10">${h2('Before vs. After Person Care')}</div><div class="overflow-x-auto"><table class="w-full min-w-[44rem] border-collapse text-left text-sm"><thead><tr class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"><th scope="col" class="px-4 py-3">Area</th><th scope="col" class="px-4 py-3">Before</th><th scope="col" class="px-4 py-3">After</th><th scope="col" class="px-4 py-3">Business Impact</th></tr></thead><tbody>${tableRows}</tbody></table></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The Digital Health Platform Challenge')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">The problem was not one broken feature. It was the amount of repeated work around delivering care. Each new client meant appointments to coordinate. Each new coaching program could mean rebuilding the same structure again. Practitioners had to keep conversations organized and follow ongoing activity while still focusing on counseling and coaching. As the number of users and programs increased, those small administrative tasks started adding up.</p></div><div class="min-w-0">${h2('Not Another Standalone Tool')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">Online counseling and health coaching involve much more than booking an appointment. Practitioners need to manage schedules, communicate with clients, prepare coaching programs, follow ongoing activity, and keep each care journey organized. When those tasks are handled through separate processes, administration starts taking time away from care. The answer was not another standalone tool. Person Care needed the main care workflows to work together.</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The Digital Health Platform')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">DigiWorks AI developed one digital health platform for appointment management, private communication, structured coaching programs, and workflow visibility. Person Care needed one platform that could bring those workflows together and make growth easier to manage, without making the experience more complicated for practitioners or clients.</p></div><div class="min-w-0">${solutionImg}</div></div><div class="relative mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10"><div class="grid gap-6 sm:grid-cols-2">${steps}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10">${h2('What DigiWorks AI Custom Built')}<p class="mt-6 max-w-3xl text-[15px] leading-relaxed text-white/70">Each technology had a clear role. React.js supported the user-facing platform. Ruby on Rails handled the core workflows. AWS provided the cloud foundation. The stack was not the story by itself. Its value came from supporting a platform that could handle more activity without making everyday workflows harder to manage. For a broader build, custom software development services can shape a platform around a real care workflow.</p><div class="mt-8 flex flex-wrap gap-2.5">${chips.map((chip) => `<span class="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">${esc(chip)}</span>`).join('')}</div><div class="mt-10 grid gap-6 md:grid-cols-3">${builtCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${resultsImg}</div><div class="min-w-0">${h2('Why Person Care Could Support 3x More Workflows')}<ul class="mt-6 space-y-3.5">${outcomes.map((item) => `<li class="relative pl-7 text-[15px] leading-relaxed text-white/70"><span class="absolute left-0 top-[9px] h-2 w-2 rounded-sm bg-cyan" aria-hidden="true"></span>${esc(item)}</li>`).join('')}</ul></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mx-auto max-w-3xl text-center">${h2('Why This Project Worked')}</div><p class="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-white/70">Person Care did not try to solve every healthcare technology problem. It focused on the work practitioners had to repeat every day. Instead of adding more technology around care, the platform reduced the amount of technology practitioners had to think about.</p><div class="mt-12 grid gap-6 md:grid-cols-3">${whyCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-3xl px-6 sm:px-10 text-center">${h2('A Practical Approach to AI')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">AI should not be added just because it is available. Person Care’s immediate problem was workflow management, not machine learning. The right first step was building a stable digital health platform around real practitioner and client needs. If future features genuinely require machine learning, ${mlops} can support reliable deployment, monitoring, and operation at that stage. The technology should follow a real use case, not be forced into the product simply to claim an AI feature.</p></div></section>${visibleExploreHtml('person-care')}<section class="relative overflow-hidden px-6 py-16 sm:px-10"><div class="relative mx-auto max-w-3xl text-center"><h2 class="cm-cta font-display font-extrabold leading-[1.08] text-white">Build a Scalable Digital Health Platform</h2><p class="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">Digital health software should reduce work for care teams, not create another system they have to manage. DigiWorks AI’s custom software development services help businesses build scalable platforms around real workflows, users, and operational requirements. If your counseling, coaching, or digital health product is becoming harder to manage as usage grows, we can help turn disconnected workflows into one scalable platform.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a class="btn-primary !px-9 !py-4 !text-base" href="/contact">Build a Scalable Digital Health Platform <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">All Case Studies</a></div><p class="mt-4 text-xs text-white/70">${esc(personCareCopy.microcopy)}</p></div></section></div>`;
}
