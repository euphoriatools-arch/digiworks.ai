import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { heyeveCopy } from '../data/copy/heyeve.ts';
import { visibleExploreHtml } from './visibleCaseStudies.ts';

const DIR = join(process.cwd(), 'public', 'case', 'heyeve');

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function heyeveImageFile(name: string): string | null {
  const abs = join(DIR, name);
  return existsSync(abs) ? `/case/heyeve/${name}` : null;
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
  const file = heyeveImageFile(opts.file);
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
  ['50%', 'Less faculty grading time', 'An Oak Brook College of Law customer reported the reduction after HeyEve simulations and real-time AI feedback'],
  ['65%', 'More trial-team applications', 'A California School of Law customer reported the increase after students gained immersive legal practice'],
  ['30+', 'AI-enhanced legal roleplays', 'Mock trials, interviews, arguments, cross-examinations, and client consultations'],
  ['1K+', 'Active users', 'HeyEve reports more than 1,000 active users on the platform'],
  ['1 of 23', 'Meta accelerator selection', "Selected for Meta's Llama Design Drive, an AI Agent Accelerator for the MENA region with Startupbootcamp MENA"],
];

const comparison: [string, string, string, string][] = [
  ['Practice Access', 'Scheduled, instructor-dependent sessions', 'On-demand AI roleplays', '30+ legal scenarios'],
  ['Speaking Practice', 'Limited live opportunities', 'Voice-driven legal interaction', 'More repeatable verbal practice'],
  ['Feedback', 'Manual review after sessions', 'Real-time AI feedback', '50% less faculty grading time, customer-reported'],
  ['Student Participation', 'Limited repeat simulation', 'Immersive, repeatable training', '65% more trial-team applications, customer-reported'],
  ['Product Validation', 'Early AI training product', 'Meta MENA accelerator selection', '1 of 23 selected startups'],
];

const learnerSteps: [string, string][] = [
  [
    'Let Learners Speak',
    'Voice AI gives students a way to practice advocacy, interviews, and legal reasoning through spoken interaction rather than relying only on typed prompts.',
  ],
  [
    'Make the Conversation Responsive',
    'Conversational AI supports structured legal dialogue across courtroom exchanges, client consultations, interviews, and other professional situations.',
  ],
  [
    'Give Feedback While It Still Matters',
    'Real-time AI feedback reduces the delay between performance and improvement. Learners can identify weaknesses and try again while the experience is still fresh.',
  ],
  [
    'Make Practice Repeatable',
    'With browser access, immersive experiences, and more than 30 roleplays, students can practice more often instead of depending only on scheduled mock-trial sessions.',
  ],
];

const builtCards: [string, string][] = [
  ['Conversational AI', 'Built to support structured legal conversations and responsive training scenarios.'],
  ['Voice Interaction', 'Enabled spoken practice for advocacy, interviews, and courtroom-style exchanges.'],
  ['Simulation Workflows', 'Connected AI behavior to practical legal roleplays so the experience could react to learner input.'],
  ['Real-Time Feedback', 'Added an AI-driven feedback layer to help learners review performance and improve faster.'],
  [
    'Scalable AI Integration',
    'Connected the AI services with the wider web and immersive product experience so the platform could support growing usage and multiple training scenarios.',
  ],
];

const chips = [
  'AI-powered legal chatbot',
  'Voice interface',
  '30+ roleplay scenarios',
  'Mock-trial simulations',
  'Client consultations',
  'Real-time AI feedback',
  'Browser-based training',
  'Immersive training',
  'Python',
  'AWS',
  'GPT-4/4o',
  'Unity',
  'STT/TTS',
  'OpenSearch',
  'Pinecone',
];

const techCards: [string, string][] = [
  ['Python', 'Supports conversational AI, simulation logic, and intelligent services behind the assistant.'],
  ['AWS', 'Supports scalable cloud delivery as users and simultaneous AI-backed training sessions grow.'],
  ['Base Model Integration', 'Integrates GPT-4/4o via a unified orchestration API.'],
  ['Abstraction Layer', 'A custom AWS wrapper handles context routing and role-based logic.'],
  ['Multimodal Support', 'Combines voice, text, and 3D modules through Unity with speech-to-text and text-to-speech.'],
  ['Orchestration', 'AI switches between Judge, Lawyer, and Jury roles for simulations.'],
  ['Data Handling', 'A RAG pipeline with OpenSearch and Pinecone retrieves contextual cases.'],
  ['Evaluation', 'Monitors reasoning accuracy, fairness, and role performance.'],
  ['Deployment', 'Cloud-native and containerized on AWS ECS/EKS, with CI/CD and security controls.'],
];

const proofs: [string, string][] = [
  [
    '50% Less Faculty Grading Time',
    'An Oak Brook College of Law customer reported that grading hours were reduced by half after using HeyEve simulations and real-time AI feedback. This is a customer-reported HeyEve result, not a DigiWorks AI-specific uplift claim.',
  ],
  [
    '65% More Trial-Team Applications',
    'A California School of Law customer reported a 65% increase in trial-team applications after students gained access to immersive legal practice. This is also a customer-reported HeyEve outcome.',
  ],
  [
    '30+ Legal Roleplays',
    'HeyEve gives learners access to more than 30 AI-enhanced scenarios covering mock trials, judicial interviews, legal arguments, cross-examinations, and client consultations.',
  ],
  [
    '1K+ Active Users',
    'HeyEve reports more than 1,000 active users, showing adoption beyond an early product concept.',
  ],
  [
    'Selected by Meta and Startupbootcamp MENA',
    "HeyEve was selected as 1 of 23 startups for Meta's Llama Design Drive, an AI Agent Accelerator for the MENA region implemented with Startupbootcamp MENA. The selection provides external validation for HeyEve's AI-driven approach to practical legal training.",
  ],
];

export function heyeveSectionsHtml(): string {
  const logo = figure({
    file: 'heyeve-logo.webp',
    width: 184,
    height: 78,
    alt: 'HeyEve logo',
    eager: true,
    frame: 'inline-flex items-center',
    imgClass: 'block h-12 w-auto max-w-[220px] object-contain',
  });
  const hero = figure({
    file: 'heyeve-01.webp',
    width: 1024,
    height: 576,
    alt: 'HeyEve AI-powered VR legal training on a laptop',
    eager: true,
  });
  const phone = figure({
    file: 'heyeve-02.webp',
    width: 1024,
    height: 576,
    alt: 'HeyEve legal training on a phone, with AI and VR practice features',
  });
  const tablet = figure({
    file: 'heyeve-03.webp',
    width: 1024,
    height: 576,
    alt: 'HeyEve immersive judiciary training on a tablet',
  });

  const snapshot: [string, string][] = [
    ['Industry', 'Legal technology'],
    ['Market', 'United States'],
    ['Solution', 'AI virtual assistant'],
    ['Timeline', '12 weeks · 5-person team'],
  ];

  const tableRows = comparison
    .map(
      ([area, before, after, impact]) =>
        `<tr class="border-t border-white/10"><th scope="row" class="whitespace-nowrap px-4 py-4 font-display text-sm font-bold text-white">${esc(area)}</th><td class="px-4 py-4 text-white/70">${esc(before)}</td><td class="px-4 py-4 text-white/70">${esc(after)}</td><td class="px-4 py-4 text-white/70">${esc(impact)}</td></tr>`,
    )
    .join('');

  const steps = learnerSteps
    .map(
      ([title, sentence], i) =>
        `<div class="dw-rise h-full"><div class="glass glare relative flex h-full flex-col p-7"><span class="font-display text-3xl font-extrabold text-cyan/40">${String(i + 1).padStart(2, '0')}</span><h3 class="cm-xl mt-3 font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(sentence)}</p></div></div>`,
    )
    .join('');

  const integration = `<a class="font-medium text-white underline decoration-coral/40 underline-offset-2 hover:text-coral" href="/services/automation-and-integration">AI Integration Services</a>`;

  return `<style>.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:26px}@media (min-width:768px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:30px}}@media (min-width:1024px){.checkmate-copy h2.cm-h2,.checkmate-copy h2.cm-cta{font-size:36px}}.checkmate-copy h3.cm-lg{font-size:.945rem}.checkmate-copy h3.cm-xl{font-size:1.05rem}.checkmate-copy h3.cm-flow{font-size:.735rem}@media (min-width:640px){.checkmate-copy h3.cm-flow{font-size:.84rem}}@keyframes dw-rise{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}.dw-rise{animation:dw-rise .6s cubic-bezier(.21,.65,.36,1) both}@media (prefers-reduced-motion:reduce){.dw-rise{animation:none;opacity:1;transform:none}}.checkmate-copy p.cm-quote{font-size:24px;line-height:30px;font-weight:500}</style><div class="checkmate-copy"><section class="relative overflow-hidden px-5 pb-16 pt-36 sm:px-8 md:pt-44"><div class="pointer-events-none absolute -right-32 -top-24 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-[140px]" aria-hidden="true"></div><div class="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-electric/10 blur-[120px]" aria-hidden="true"></div><div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2"><div class="min-w-0"><nav class="mb-6 flex flex-wrap items-center gap-2 text-xs text-white/70" aria-label="Breadcrumb"><a class="hover:text-cyan" href="/">Home</a><span>/</span><a class="hover:text-cyan" href="/case-studies">Case Studies</a><span>/</span><span class="text-white/70">HeyEve</span></nav><div class="mb-6 inline-flex">${logo}</div><span class="inline-flex items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white"><span class="h-1.5 w-1.5 rounded-full bg-cyan"></span> ${esc(heyeveCopy.label)}</span><h1 class="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-dusk sm:text-5xl">${esc(heyeveCopy.h1Line1)}<br><span class="text-gradient">${esc(heyeveCopy.h1Line2)}</span></h1><p class="mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">${esc(heyeveCopy.intro)}</p><div class="mt-8 flex flex-wrap gap-4"><a class="btn-primary !px-8 !py-3.5" href="/contact">${esc(heyeveCopy.primaryCta)} <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">${esc(heyeveCopy.secondaryCta)}</a></div><p class="mt-3 text-xs text-white/70">${esc(heyeveCopy.microcopy)}</p></div><div class="relative min-w-0">${hero}</div></div></section><section class="relative px-6 sm:px-10"><div class="dw-rise mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-dusk/10 md:grid-cols-4">${snapshot
    .map(
      ([k, v]) =>
        `<div class="min-w-0 bg-ink/80 p-5"><p class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70">${esc(k)}</p><p class="mt-1.5 text-sm font-semibold text-white">${esc(v)}</p></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="text-center">${h2('Results at a Glance')}</div><div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">${results.map((row) => resultCard(...row)).join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mb-10">${h2('Before vs. After')}</div><div class="overflow-x-auto"><table class="w-full min-w-[44rem] border-collapse text-left text-sm"><thead><tr class="font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-white/70"><th scope="col" class="px-4 py-3">Area</th><th scope="col" class="px-4 py-3">Before</th><th scope="col" class="px-4 py-3">With HeyEve</th><th scope="col" class="px-4 py-3">Impact</th></tr></thead><tbody>${tableRows}</tbody></table></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('The Problem Was Practice, Not Information')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">Law students already have access to lectures, books, case law, and online learning materials. What is harder to scale is practical experience. Real courtroom confidence comes from speaking, responding under pressure, making decisions, and learning from what happens next.</p></div><div class="min-w-0">${h2('A Normal LMS Could Not Simulate the Room')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">A normal LMS could host legal content. It could not simulate a responsive courtroom conversation. Mock trials, interviews, and courtroom exercises require students to speak, react, structure arguments, and defend their reasoning. Those sessions often depend on instructors, other participants, schedules, and manual review. For online or distributed learners, those limits become even more visible.</p><p class="mt-4 text-[15px] leading-relaxed text-white/70">The central question was simple: how can students practice realistic legal scenarios more often without requiring a faculty member to recreate every session manually?</p></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${h2('Building the AI Experience Around the Learner')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">DigiWorks AI provided AI services for HeyEve's intelligence layer. The work covered voice interaction, conversational AI, simulation workflows, real-time feedback, and the integration that lets those pieces sit inside the wider training product.</p></div><div class="min-w-0">${phone}</div></div><div class="relative mx-auto mt-14 w-full max-w-6xl px-6 sm:px-10"><div class="grid gap-6 sm:grid-cols-2">${steps}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10">${h2('What DigiWorks AI Built on the AI Side')}<p class="mt-6 max-w-3xl text-[15px] leading-relaxed text-white/70">The AI layer was built around a real training workflow. Students speak, the conversation responds, and feedback arrives while the attempt is still fresh. For teams adding conversation, voice, or intelligent feedback to a product they already have, ${integration} help connect that technology to a clear user need.</p><div class="mt-8 flex flex-wrap gap-2.5">${chips.map((chip) => `<span class="rounded-full border border-white/10 px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/80">${esc(chip)}</span>`).join('')}</div><div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">${builtCards
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto grid w-full max-w-6xl px-6 sm:px-10 items-center gap-12 lg:grid-cols-2"><div class="min-w-0">${tablet}</div><div class="min-w-0">${h2('Technical Setup')}<div class="mt-8 grid gap-6 sm:grid-cols-2">${techCards
    .map(
      ([title, desc]) =>
        `<div><h3 class="cm-lg font-display font-bold text-white">${esc(title)}</h3><p class="mt-2 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div>`,
    )
    .join('')}</div></div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-6xl px-6 sm:px-10"><div class="mx-auto max-w-3xl text-center">${h2('Proof in Real Use')}</div><div class="mt-12 grid gap-6 md:grid-cols-2">${proofs
    .map(
      ([title, desc]) =>
        `<div class="dw-rise h-full"><div class="glass glare relative h-full p-7"><h3 class="cm-xl font-display font-bold text-white">${esc(title)}</h3><p class="mt-3 text-sm leading-relaxed text-white/70">${esc(desc)}</p></div></div>`,
    )
    .join('')}</div></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-3xl px-6 sm:px-10 text-center">${h2('Client Perspective')}<blockquote class="mt-8"><p class="cm-quote font-display text-white">“Heyeve was a revolution in delivering legal training. The voice interface technology and AI virtual assistant platform developed courtroom simulations that were immersive, which enhanced the student engagement and confidence.”</p><footer class="mt-6 text-sm font-semibold text-white/80">Ali Ahmed <span class="font-normal text-white/55">— Chief Executive Officer (CEO), Heyeve</span></footer></blockquote></div></section><section class="relative w-full py-16"><div class="relative mx-auto w-full max-w-3xl px-6 sm:px-10 text-center">${h2('The Bigger Impact')}<p class="mt-6 text-[15px] leading-relaxed text-white/70">HeyEve shows that AI does not have to replace an instructor to improve training. It can make practice available more often, handle repeatable simulation work, and shorten the feedback loop between one attempt and the next. That is where DigiWorks AI added value: the AI layer was built around a real training workflow instead of being added as a disconnected feature.</p></div></section>${visibleExploreHtml('heyeve')}<section class="relative overflow-hidden px-6 py-16 sm:px-10"><div class="relative mx-auto max-w-3xl text-center"><h2 class="cm-cta font-display font-extrabold leading-[1.08] text-white">Turn Practice Into an AI-Powered Product Experience</h2><p class="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/70">If your product depends on conversation, voice, simulation, or intelligent feedback, DigiWorks AI can help design and build the AI layer around the workflow your users actually need.</p><div class="mt-10 flex flex-wrap items-center justify-center gap-4"><a class="btn-primary !px-9 !py-4 !text-base" href="/services/automation-and-integration">Explore AI Integration Services <span aria-hidden="true">→</span></a><a class="btn-ghost !px-8 !py-3.5" href="/case-studies">All Case Studies</a></div><p class="mt-4 text-xs text-white/70">${esc(heyeveCopy.microcopy)}</p></div></section></div>`;
}
