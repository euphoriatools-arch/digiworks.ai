import type { ServicePageCopy } from './types';

export const generativeAiDevelopmentCopy: ServicePageCopy = {
  slug: 'generative-ai-development',
  name: 'Generative AI Development',
  title: 'Generative AI Development Services in USA | DigiWorks AI',
  description:
    'Partner with DigiWorks AI for generative AI development services in the US, including custom AI solutions, agents, chatbots, RAG, LLM apps and consulting.',
  h1: 'Generative AI Development Services',
  h1Lead: 'Generative AI',
  h1Gradient: 'Development Services',
  hero:
    'Build AI applications that fit your business. DigiWorks AI helps US organizations turn complex workflows into tailored generative AI solutions.',
  offeringsTitle: 'Custom LLM apps we ship',
  offeringsTitleLead: 'Custom LLM apps',
  offeringsTitleGradient: 'we ship',
  offeringsSub: 'Generation on a named path, not a chat product by default.',
  offerings: [
    { title: 'Grounded drafts', desc: 'Cite the case file; chat UIs stay on AI chatbot development.' },
    { title: 'Never-invent rules', desc: 'Prices and medical advice stay off. Guards live on AI Application Security.' },
    { title: 'Write-back', desc: 'Drafts land in CRM you already run, not a second inbox.' },
    { title: 'Prompt traces', desc: 'Log retrieval and outputs. Outcome stories stay on Generative AI solutions.' },
  ],
  edgeTitle: 'What sets us apart',
  edgeTitleLead: 'What sets',
  edgeTitleGradient: 'us apart',
  processTitle: 'A process engineered for outcomes',
  processTitleLead: 'A process engineered',
  processTitleGradient: 'for outcomes',
  faqTitle: 'Frequently asked questions',
  edge: [
    { title: 'Build URL', desc: 'Use-cases stay on the generative solutions page.' },
    { title: 'Not a chatbot', desc: 'Chat UIs stay on AI chatbot development.' },
    { title: 'Your records', desc: 'We retrieve and write where you already work.' },
    { title: 'One window', desc: 'Scope, build, and ship in 8–20 weeks.' },
    { title: 'Human review', desc: 'People take high-risk drafts before they send.' },
    { title: 'After go-live', desc: 'Keep prompts and sources current as work changes.' },
  ],
  process: [
    { title: 'Discovery and Requirement Analysis', desc: 'Name the workflow, source of truth, and never-invent list.' },
    { title: 'Architecture Design and Planning', desc: 'Map retrieval, review gates, and the write-back tool.' },
    { title: 'Model Training and Simulation', desc: 'Ground on records and rehearse an empty retrieval miss.' },
    { title: 'Integration and Testing', desc: 'Wire the tool and test a draft the model must not invent.' },
    { title: 'Deployment and Monitoring', desc: 'Ship with traces on prompts and outputs in production.' },
    { title: 'Ongoing Support and Optimization', desc: 'Keep prompts current as the workflow changes.' },
  ],
  faqs: [
    {
      q: 'What are generative AI development services?',
      a: 'They are engineering and consulting services for creating applications that generate text, code, images or other outputs using AI models. They typically cover use-case discovery, model selection, integration, testing and deployment.',
    },
    {
      q: 'How much does a generative AI development project cost?',
      a: 'Pricing depends on workflow scope, data access, model usage, integrations, security requirements and support. A prototype generally has a smaller scope than a production application, and discovery establishes a tailored estimate.',
    },
    {
      q: 'How long does generative AI development take?',
      a: 'A narrowly scoped pilot may take weeks, whereas complex production deployments can take months. Data readiness, integration complexity, review and acceptance requirements determine the schedule.',
    },
    {
      q: 'Do we need to train a large language model from scratch?',
      a: 'Usually not. Existing foundation models can often meet requirements with prompt design, retrieval or selective fine-tuning. Training from scratch is resource-intensive and should be justified by a specific need.',
    },
    {
      q: 'What is RAG, and when should we use it?',
      a: 'Retrieval-augmented generation supplies relevant current information to a model at request time. It is useful when answers need to reference current or private business knowledge, but retrieval and citations still require testing.',
    },
    {
      q: 'Can generative AI integrate with existing CRM and ERP systems?',
      a: 'Yes, provided suitable APIs, authentication and permission controls exist. Integration design should account for read and write access, rate limits, failures and human review.',
    },
    {
      q: 'How do you protect sensitive business data?',
      a: 'A project should define data flows, access permissions, encryption, retention, vendor terms and monitoring before deployment. Regulated workloads require additional assessment and applicable agreements.',
    },
    {
      q: 'How can we measure return on investment?',
      a: 'Start with a baseline such as resolution time, manual processing error or cost per task. Compare pilot results with the baseline while accounting for model usage, review time, quality and maintenance costs.',
    },
    {
      q: 'Can you improve an existing AI application?',
      a: 'An assessment can identify problems with retrieval, prompts, integrations, evaluation, latency or operating cost. Improvements should be tested against representative workflows before rollout.',
    },
  ],
  relatedServices: [
    { href: '/services/natural-language-processing', label: 'Natural Language Processing' },
    { href: '/services/ai-chatbot-development', label: 'AI Chatbot Development' },
    { href: '/services/ai-agent-development', label: 'AI Agent Development' },
  ],
  relatedSolutions: [
    { href: '/solutions/generative-ai', label: 'Generative AI' },
    { href: '/solutions/conversational-ai', label: 'Conversational AI' },
    { href: '/solutions/ai-automation', label: 'AI Automation' },
  ],
  relatedIndustries: [
    { href: '/industries/ai-for-retail-and-ecommerce', label: 'AI for Retail & E-commerce' },
    { href: '/industries/ai-for-education', label: 'AI for Education' },
    { href: '/industries/ai-for-fintech', label: 'AI for Fintech' },
  ],
  bodyLinks: [
    { phrase: 'AI Chatbot Development', href: '/services/ai-chatbot-development' },
    { phrase: 'AI Agent Development', href: '/services/ai-agent-development' },
  ],
};
