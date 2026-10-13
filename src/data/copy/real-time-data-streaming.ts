import type { ServicePageCopy } from './types';

export const realTimeDataStreamingCopy: ServicePageCopy = {
  slug: 'real-time-data-streaming',
  name: 'Real-Time Data Streaming',
  title: 'Real-Time Data Streaming for US Teams | DigiWorks AI',
  description:
    'Real-time data streaming services: event paths models and agents can keep. Not a nightly job. Typical 8–20 weeks. Book a free discovery session.',
  h1: 'Real-Time Data Streaming Services',
  h1Lead: 'Real-Time',
  h1Gradient: 'Data Streaming Services',
  hero:
    'Real-time data streaming services from DigiWorks AI move events into the store a model or agent already reads for US teams.',
  offeringsTitle: 'Event paths we actually ship',
  offeringsTitleLead: 'Event paths we',
  offeringsTitleGradient: 'actually ship',
  offeringsSub: 'Event-time work, not a nightly batch into a warehouse.',
  offerings: [
    { title: 'Event to store', desc: 'Land events the consumer can keep. Batch jobs stay on Data Engineering.' },
    { title: 'Your buses', desc: 'Work in runners you already operate. Platforms stay on Data and Cloud.' },
    { title: 'Fail closed', desc: 'Stop when the next score would be poisoned by a late or bad event.' },
    { title: 'Not app CI/CD', desc: 'Promotes and rollback stay on Cloud and DevOps instead.' },
  ],
  edgeTitle: 'What sets us apart',
  edgeTitleLead: 'What sets',
  edgeTitleGradient: 'us apart',
  processTitle: 'A process engineered for outcomes',
  processTitleLead: 'A process engineered',
  processTitleGradient: 'for outcomes',
  faqTitle: 'Streaming FAQs',
  edge: [
    { title: 'Event-time', desc: 'Nightly CSV jobs stay on Data Engineering.' },
    { title: 'Not the platform', desc: 'Lakehouse programs stay on Data and Cloud.' },
    { title: 'Your buses', desc: 'We work in streaming runners you already run.' },
    { title: 'One window', desc: 'Scope, build, and ship in 8–20 weeks.' },
    { title: 'Named consumer', desc: 'A model or agent must read the event path.' },
    { title: 'After go-live', desc: 'Watch lag as producers and schemas change.' },
  ],
  process: [
    { title: 'Discovery and Requirement Analysis', desc: 'Name producers, the consumer, and how late is too late.' },
    { title: 'Architecture Design and Planning', desc: 'Map topics, keys, and the live store the model reads.' },
    { title: 'Model Training and Simulation', desc: 'Replay a slice and compare fields against batch truth.' },
    { title: 'Integration and Testing', desc: 'Wire producers and test a late or poison event.' },
    { title: 'Deployment and Monitoring', desc: 'Ship with lag alerts operations already staff.' },
    { title: 'Ongoing Support and Optimization', desc: 'Keep schemas current as producers change.' },
  ],
  faqs: [
    {
      q: 'What are real-time data streaming services here?',
      a: 'Event paths into the store a model or agent already reads—not a nightly warehouse job and not a lakehouse program. DigiWorks AI builds that for US teams from Austin. Typical production delivery is 8–20 weeks. Data Engineering is batch or micro-batch jobs. Data and Cloud is the platform. If you cannot name the producers, the consumer, and how late is too late, this is the wrong fit. Book a free discovery session with the stream owner in the room.',
    },
    {
      q: 'How is this different from data engineering?',
      a: 'Data Engineering is jobs on a clock. This page is event-time. Data and Cloud remains the platform URL. Cloud and DevOps remains app CI/CD. DigiWorks AI will not hide a nightly CSV inside a streaming statement of work. Typical windows stay 8–20 weeks after producers and the consumer are named. 150+ production AI deployments still need an honest lag number.',
    },
    {
      q: 'Do you invent lag SLAs?',
      a: 'No. We do not invent event-time you never measured. A nightly job is honest if you do not need event-time. Late events, missing keys, and missing owners are why dates move, and we put that on the table before you sign. Staff the lag alerts or do not call it live. Austin HQ. Dedicated AI Pods ready in 2–3 weeks apply when producers and the consumer are already named.',
    },
    {
      q: 'What buses do you work on?',
      a: 'Runners and topics you already operate. Access you cannot grant is work we cannot do. We connect with the permissions you give. Named vendor badges are not invented on this page. Typical first production period sits inside 8–20 weeks. Cost drivers are producer count, schema change rate, and whether serving must match event keys.',
    },
    {
      q: 'When is this the wrong fit?',
      a: 'You need a nightly job, a lakehouse program, or app runtime. Streaming without a consumer is bus theater. DigiWorks AI will say that before you sign. Book a free discovery call if the producers are already named. Work spans 7+ sectors when the consumer is real and named today for this stream.',
    },
    {
      q: 'Do you support streams after launch?',
      a: 'Yes. After go-live, schema changes and late producers are the operating reality. We watch this path, not an unnamed streaming department. New topics are change requests. Typical first production period sits with the 8–20 week delivery, then continues as producers change. US teams get Austin hours for discovery calls on this stream.',
    },
  ],
  relatedServices: [
    { href: '/services/data-and-cloud', label: 'Data and Cloud' },
    { href: '/services/cloud-architecture-and-deployment', label: 'Cloud Architecture' },
    { href: '/services/mlops-setup', label: 'MLOps Setup' },
  ],
  relatedSolutions: [
    { href: '/solutions/predictive-analytics', label: 'Predictive Analytics' },
    { href: '/solutions/ai-automation', label: 'AI Automation' },
    { href: '/solutions/conversational-ai', label: 'Conversational AI' },
  ],
  relatedIndustries: [
    { href: '/industries/ai-for-fintech', label: 'AI for Fintech' },
    { href: '/industries/ai-for-logistics-and-supply-chain', label: 'AI for Logistics & Supply Chain' },
    { href: '/industries/ai-for-manufacturing', label: 'AI for Manufacturing' },
  ],
  bodyLinks: [
    { phrase: 'Batch jobs stay on Data Engineering', href: '/services/data-engineering' },
    { phrase: 'Platforms stay on Data and Cloud', href: '/services/data-and-cloud' },
    { phrase: 'Promotes and rollback stay on Cloud and DevOps instead', href: '/services/cloud-and-devops' },
  ],
};
