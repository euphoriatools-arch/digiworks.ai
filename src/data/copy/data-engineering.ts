import type { ServicePageCopy } from './types';

export const dataEngineeringCopy: ServicePageCopy = {
  slug: 'data-engineering',
  name: 'Data Engineering',
  title: 'Data Engineering Services for Production AI | DigiWorks AI',
  description:
    'Data engineering for production AI: pipelines and tables models can trust. Work spans 7+ sectors. Austin. Start with a free discovery session.',
  h1: 'Data Engineering Services for AI Pipelines',
  h1Lead: 'Data Engineering Services',
  h1Gradient: 'for AI Pipelines',
  hero:
    'Data engineering services from DigiWorks AI build pipelines and tables that production models and agents already read for US teams.',
  offeringsTitle: 'Pipelines and tables we ship',
  offeringsTitleLead: 'Pipelines and tables',
  offeringsTitleGradient: 'we ship',
  offeringsSub: 'Jobs into the store a model or agent already calls.',
  offerings: [
    { title: 'Scheduled jobs', desc: 'Land features on a clock. Hire Data Scientists if the seat is analysis.' },
    { title: 'Column contracts', desc: 'Training and serving honor the same fields on Data and Cloud stores.' },
    { title: 'Fail closed', desc: 'Stop the job when the next train would be poisoned. MLOps Setup is retrain ops.' },
    { title: 'Known consumer', desc: 'Write to the store the model calls. Streaming-only work is Real-Time Data Streaming.' },
  ],
  edgeTitle: 'What sets us apart',
  edgeTitleLead: 'What sets',
  edgeTitleGradient: 'us apart',
  processTitle: 'A process engineered for outcomes',
  processTitleLead: 'A process engineered',
  processTitleGradient: 'for outcomes',
  faqTitle: 'Data FAQs',
  edge: [
    { title: 'Jobs first', desc: 'We build pipelines, not a platform sales deck.' },
    { title: 'Not streaming-only', desc: 'Kafka-first products stay on streaming services.' },
    { title: 'Your warehouses', desc: 'We work in runners and stores you already run.' },
    { title: 'One window', desc: 'Scope, build, and ship in 8–20 weeks.' },
    { title: 'Quality gates', desc: 'Failed files do not silently train the model.' },
    { title: 'After go-live', desc: 'Watch failed runs as sources change.' },
  ],
  process: [
    { title: 'Discovery and Requirement Analysis', desc: 'Name sources, the AI consumer, and freshness needs.' },
    { title: 'Architecture Design and Planning', desc: 'Map extract, clean, load, and the live store.' },
    { title: 'Model Training and Simulation', desc: 'Run the pipeline on a slice and compare fields.' },
    { title: 'Integration and Testing', desc: 'Wire jobs to warehouses and test a bad file.' },
    { title: 'Deployment and Monitoring', desc: 'Ship with job alerts in production.' },
    { title: 'Ongoing Support and Optimization', desc: 'Keep contracts current as sources change.' },
  ],
  faqs: [
    {
      q: 'What are data engineering services here?',
      a: 'Pipelines, tables, and jobs that feed production AI: batch or micro-batch paths into the store a model or agent already reads. DigiWorks AI builds that for US teams from Austin. Typical production delivery is 8–20 weeks. This URL is not the full data-and-cloud platform page, and it is not a Kafka-first streaming product. If you cannot name the sources, the consumer, and what fresh enough means, this is the wrong fit. Book a free discovery session with the table owner in the room.',
    },
    {
      q: 'How is this different from Data and Cloud?',
      a: 'Data and Cloud is the platform. This page is jobs and contracts for a named AI consumer. We will not build a pipeline for its own sake. Lakehouse programs stay on the platform URL. Streaming-only buses stay on Real-Time Data Streaming. DigiWorks AI says so in discovery when the object is a platform, not a job. Typical windows stay 8–20 weeks after sources and the consumer are named. 150+ production AI deployments still need tables the model can trust.',
    },
    {
      q: 'Do you invent freshness SLAs?',
      a: 'No. We do not invent row counts or freshness you never measured. A nightly job is honest if you do not need event-time. Failed jobs, late files, and missing owners are why dates move, and we put that on the table before you sign. Column contracts between train and serve are cheaper than silent skew. Staff the alerts or do not call it production. Austin HQ.',
    },
    {
      q: 'What systems do you work in?',
      a: 'Warehouses and job runners you already operate. Access you cannot grant is work we cannot do. We connect with the permissions you give. This is not a vendor lock-in pitch. MLOps Setup is the URL if you need the organization around retrain, not the pipeline itself. Cost drivers are source count, file quality, and whether training and serving must honor the same columns.',
    },
    {
      q: 'When is this the wrong fit?',
      a: 'You need a lakehouse program, a streaming-only bus, or a one-off spreadsheet with no consumer. Pipelines without a consumer are warehouse theater. DigiWorks AI will say that before you sign. Dedicated AI Pods ready in 2–3 weeks apply when the consumer and the table owner are already named. We keep repeating it because statements of work still arrive that way.',
    },
    {
      q: 'Do you support jobs after launch?',
      a: 'Yes. After the first production job, failed files and late drops are the operating reality. We watch alerts on this pipeline, not an unnamed data department. New sources are change requests. Typical first production period sits inside the 8–20 week window. Book a free discovery call if you can name the model or agent that will read the table.',
    },
  ],
  relatedServices: [
    { href: '/services/data-and-cloud', label: 'Data and Cloud' },
    { href: '/services/real-time-data-streaming', label: 'Real-Time Data Streaming' },
    { href: '/services/mlops-setup', label: 'MLOps Setup' },
  ],
  relatedSolutions: [
    { href: '/solutions/predictive-analytics', label: 'Predictive Analytics' },
    { href: '/solutions/generative-ai', label: 'Generative AI' },
    { href: '/solutions/ai-automation', label: 'AI Automation' },
  ],
  relatedIndustries: [
    { href: '/industries/ai-for-fintech', label: 'AI for Fintech' },
    { href: '/industries/ai-for-healthcare', label: 'AI for Healthcare' },
    { href: '/industries/ai-for-manufacturing', label: 'AI for Manufacturing' },
  ],
  bodyLinks: [
    { phrase: 'Hire Data Scientists', href: '/hire/hire-data-scientists' },
    { phrase: 'on Data and Cloud stores', href: '/services/data-and-cloud' },
    { phrase: 'Streaming-only work is Real-Time Data Streaming', href: '/services/real-time-data-streaming' },
    { phrase: 'MLOps Setup is retrain ops', href: '/services/mlops-setup' },
  ],
};
