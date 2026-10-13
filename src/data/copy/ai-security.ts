import type { ServicePageCopy } from './types';

export const aiSecurityCopy: ServicePageCopy = {
  slug: 'ai-security',
  name: 'AI Application Security',
  title: 'Production AI Application Security Services | DigiWorks AI',
  description:
    'LLM and AI application security for production apps: prompt-injection defenses and tool permissions. 150+ AI deployments. Talk to our AI engineers.',
  h1: 'LLM and AI Application Security for Production Apps',
  h1Lead: 'LLM and AI Application Security',
  h1Gradient: 'for Production Apps',
  hero:
    'LLM and AI application security services from DigiWorks AI put guards on prompts, tools, and writes for US teams in Austin.',
  offeringsTitle: 'Controls on the LLM path',
  offeringsTitleLead: 'Controls on the',
  offeringsTitleGradient: 'LLM path',
  offeringsSub: 'Guards on the model path, not a SOC or a policy program.',
  offerings: [
    {
      title: 'Intake defenses',
      desc: 'Checks on tickets and files so untrusted text cannot rewrite what the app will do.',
    },
    {
      title: 'Tool permissions',
      desc: 'Limit tools and stores; policy programs stay on Security and Compliance instead.',
    },
    {
      title: 'Output review',
      desc: 'Review writes before they hit production; attack reports stay on AI Red Teaming.',
    },
    {
      title: 'Path traces',
      desc: 'Log prompts, tools, and failures. Privacy-preserving training is a different URL.',
    },
  ],
  edgeTitle: 'What sets us apart',
  edgeTitleLead: 'What sets',
  edgeTitleGradient: 'us apart',
  processTitle: 'A process engineered for outcomes',
  processTitleLead: 'A process engineered',
  processTitleGradient: 'for outcomes',
  faqTitle: 'Security FAQs',
  edge: [
    { title: 'App path', desc: 'We harden prompts, tools, outputs, and logs.' },
    { title: 'Permissions first', desc: 'Tool access is scoped before production wiring.' },
    { title: 'Human exceptions', desc: 'People take cases the policy cannot clear.' },
    { title: 'Your vendors', desc: 'We work in the LLM path you already run.' },
    { title: 'One window', desc: 'Scope, build, and ship in 8–20 weeks.' },
    { title: 'After go-live', desc: 'Update checks as prompts and tools change.' },
  ],
  process: [
    { title: 'Discovery and Requirement Analysis', desc: 'Name the prompt path, tools, and never-fail cases.' },
    { title: 'Architecture Design and Planning', desc: 'Map injection surfaces and permission boundaries.' },
    { title: 'Model Training and Simulation', desc: 'Rehearse jailbreaks and bad tool calls in staging.' },
    { title: 'Integration and Testing', desc: 'Wire checks on live APIs and test failures.' },
    { title: 'Deployment and Monitoring', desc: 'Launch with traces on in production traffic.' },
    { title: 'Ongoing Support and Optimization', desc: 'Watch traces and update policy as the app changes.' },
  ],
  faqs: [
    {
      q: 'What are LLM and AI application security services?',
      a: 'They are engineering on the application path: how prompts enter the model, which tools it may call, and what it may write. DigiWorks AI delivers that as production work for US teams, usually in 8–20 weeks, from Austin. It is not a compliance program, not a SOC, and not a red-team report. Across the company we have 150+ production AI deployments; this page is the security work on the apps themselves. Book a free discovery call if you can show the prompt path and the tools.',
    },
    {
      q: 'Is this the same as AI security and compliance?',
      a: 'No. Security and Compliance is the policy and control program. This page is the application: guards on the LLM path. Red teaming is a separate attack engagement. Use this URL when you need the product hardened. Use the compliance URL when you need the program. Use red teaming when you need people to attack a running system on purpose. DigiWorks AI will not hide a SOC inside an application-security statement of work. Typical windows stay 8–20 weeks after the path is in reach.',
    },
    {
      q: 'Do you run a security operations center?',
      a: 'No. SOC and detection-engineering programs are out of scope. We harden the AI application you are putting in production. If your RFP is for 24/7 monitoring of the whole estate, this is not the right fit and we will tell you in discovery. Privacy-preserving training is also a different URL. Cybersecurity operations use cases belong on AI in Cybersecurity. Austin HQ. Cost moves with tool count and how strict review must be on writes.',
    },
    {
      q: 'Can this sit on an app you already built?',
      a: 'Yes, when we can reach the prompt path, tools, and logs. If those are closed, we say so in discovery and we do not pretend a perimeter product will fix an unreachable model path. Cost is lower when the app already has clear tool boundaries; it is higher when tools were added ad hoc. Named certifications are confirmed in scoping. DigiWorks AI works in the vendor stack you already run. Typical first production period sits inside 8–20 weeks.',
    },
    {
      q: 'What stack do you use?',
      a: 'Whatever the app already uses: your LLM vendor, retrieval, and APIs. We do not lock this page to one vendor name. HIPAA, ISO, and similar attestations are confirmed in scoping—not assumed here. Application security still needs an owner for exceptions. If every token must be read by a person, you do not have an LLM product yet. Book a free discovery session and show the call path. 150+ production AI deployments is company-wide, not a claim that your app is simple.',
    },
    {
      q: 'Do you support the controls after launch?',
      a: 'Yes. Production LLM apps need traces, failed-tool handling, and policy updates as the live path changes. Support is scoped to this application, not an open-ended security department. Typical first production support sits with the 8–20 week delivery, then continues as you change the product. A new tool is a change request. Unowned guards rot. DigiWorks AI will name the operator before you ask for a go-live date.',
    },
  ],
  relatedServices: [
    { href: '/services/security-and-compliance', label: 'Security and Compliance' },
    { href: '/services/privacy-preserving-ai', label: 'Privacy-Preserving AI' },
    { href: '/services/ai-red-teaming', label: 'AI Red Teaming' },
  ],
  relatedSolutions: [
    { href: '/solutions/ai-for-cybersecurity', label: 'AI in Cybersecurity' },
    { href: '/solutions/generative-ai', label: 'Generative AI' },
    { href: '/solutions/conversational-ai', label: 'Conversational AI' },
  ],
  relatedIndustries: [
    { href: '/industries/ai-for-fintech', label: 'AI for Fintech' },
    { href: '/industries/ai-for-healthcare', label: 'AI for Healthcare' },
    { href: '/industries/ai-for-manufacturing', label: 'AI for Manufacturing' },
  ],
  bodyLinks: [
    { phrase: 'policy programs stay on Security and Compliance instead', href: '/services/security-and-compliance' },
    { phrase: 'attack reports stay on AI Red Teaming', href: '/services/ai-red-teaming' },
    { phrase: 'Privacy-preserving training is a different URL', href: '/services/privacy-preserving-ai' },
  ],
};
