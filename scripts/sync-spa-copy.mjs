/**
 * Copy pristine SPA bundles, then apply src/data/copy replacements.
 * Fails the process if any source string is missing.
 * Do not hand-edit public/assets/{Home,app-digi,Seo,sections,DetailRoutes}*.js
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cloudAndDevopsCopy } from '../src/data/copy/cloud-and-devops.ts';
import { dataEngineeringCopy } from '../src/data/copy/data-engineering.ts';
import { idpCopy } from '../src/data/copy/intelligent-document-processing.ts';
import { mlDevelopmentCopy } from '../src/data/copy/machine-learning-development.ts';
import { agentCopy } from '../src/data/copy/ai-agent-development.ts';
import { aiSecurityCopy } from '../src/data/copy/ai-security.ts';
import { homeCopy } from '../src/data/copy/home.ts';
import { homeHeroInnerHtml } from '../src/lib/homeHero.ts';
import { artificialIntelligenceCopy } from '../src/data/copy/artificial-intelligence.ts';
import { machineLearningCopy } from '../src/data/copy/machine-learning.ts';
import { autonomousAiAgentsCopy } from '../src/data/copy/autonomous-ai-agents.ts';
import { aiChatbotDevelopmentCopy } from '../src/data/copy/ai-chatbot-development.ts';
import { nlpCopy } from '../src/data/copy/natural-language-processing.ts';
import { generativeAiDevelopmentCopy } from '../src/data/copy/generative-ai-development.ts';
import { predictiveModelingCopy } from '../src/data/copy/predictive-modeling.ts';
import { automationAndIntegrationCopy } from '../src/data/copy/automation-and-integration.ts';
import { intelligentAutomationCopy } from '../src/data/copy/intelligent-automation.ts';
import { dataAndCloudCopy } from '../src/data/copy/data-and-cloud.ts';
import { realTimeDataStreamingCopy } from '../src/data/copy/real-time-data-streaming.ts';
import { cloudArchitectureCopy } from '../src/data/copy/cloud-architecture-and-deployment.ts';
import { mlopsSetupCopy } from '../src/data/copy/mlops-setup.ts';
import { securityAndComplianceCopy } from '../src/data/copy/security-and-compliance.ts';
import { aiRedTeamingCopy } from '../src/data/copy/ai-red-teaming.ts';
import { privacyPreservingAiCopy } from '../src/data/copy/privacy-preserving-ai.ts';
import { aiTrainingAndSupportCopy } from '../src/data/copy/ai-training-and-support.ts';
import { mobileAppDevelopmentCopy } from '../src/data/copy/mobile-app-development.ts';
import { aiAutomationCopy } from '../src/data/copy/ai-automation.ts';
import { predictiveAnalyticsCopy } from '../src/data/copy/predictive-analytics.ts';
import { conversationalAiCopy } from '../src/data/copy/conversational-ai.ts';
import { computerVisionCopy } from '../src/data/copy/computer-vision-image-recognition.ts';
import { generativeAiCopy } from '../src/data/copy/generative-ai.ts';
import { aiForCybersecurityCopy } from '../src/data/copy/ai-for-cybersecurity.ts';
import { aiForHealthcareCopy } from '../src/data/copy/ai-for-healthcare.ts';
import { aiForFintechCopy } from '../src/data/copy/ai-for-fintech.ts';
import { aiForRetailCopy } from '../src/data/copy/ai-for-retail-and-ecommerce.ts';
import { aiForManufacturingCopy } from '../src/data/copy/ai-for-manufacturing.ts';
import { aiForLogisticsCopy } from '../src/data/copy/ai-for-logistics-and-supply-chain.ts';
import { aiForRealEstateCopy } from '../src/data/copy/ai-for-real-estate.ts';
import { aiForEducationCopy } from '../src/data/copy/ai-for-education.ts';
import { dedicatedAiPodsCopy } from '../src/data/copy/dedicated-ai-pods.ts';
import { hireAiEngineersCopy } from '../src/data/copy/hire-ai-engineers.ts';
import { hireMlEngineersCopy } from '../src/data/copy/hire-ml-engineers.ts';
import { hireDataScientistsCopy } from '../src/data/copy/hire-data-scientists.ts';
import { hireNlpEngineersCopy } from '../src/data/copy/hire-nlp-engineers.ts';
import { hireComputerVisionCopy } from '../src/data/copy/hire-computer-vision-developers.ts';
import { aboutCopy } from '../src/data/copy/about.ts';
import { teamCopy } from '../src/data/copy/team.ts';
import { caseStudiesCopy } from '../src/data/copy/case-studies.ts';
import { checkmateSectionsHtml } from '../src/lib/renderCheckmate.ts';
import { leadScoutSectionsHtml } from '../src/lib/renderLeadScout.ts';
import { orangeRulerSectionsHtml } from '../src/lib/renderOrangeRuler.ts';
import { personCareSectionsHtml } from '../src/lib/renderPersonCare.ts';
import { site } from '../src/data/site.ts';
import { aiReadinessCopy } from '../src/data/copy/ai-readiness.ts';
import { contactCopy } from '../src/data/copy/contact.ts';
import { blogCopy } from '../src/data/copy/blog.ts';
import { privacyPolicyCopy } from '../src/data/copy/privacy-policy.ts';
import { termsOfUseCopy } from '../src/data/copy/terms-of-use.ts';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pristine = join(root, '_spa_pristine');
const destDir = join(root, 'public', 'assets');

const FILES = {
  home: 'Home-BrhUPNvh.js',
  app: 'app-digi.js',
  seo: 'Seo-B4SgXAPu.js',
  sections: 'sections-BJjI_WFB.js',
  detail: 'DetailRoutes-DVJjNh1V.js',
  pageHero: 'PageHero-CWNI5-Bi.js',
  about: 'About-LPiP26so.js',
  team: 'Team-C1WizCjK.js',
  caseStudies: 'CaseStudies-C1c2yYTp.js',
  readiness: 'Readiness-BD5AOZjE.js',
  contact: 'Contact-BBlLSXS6.js',
  blog: 'Blog-PwrxOL7i.js',
  legal: 'Legal-DPMXhQyi.js',
};

function mustReplace(haystack, from, to, label) {
  if (!from) throw new Error(`SPA copy sync: empty from (${label})`);
  if (!haystack.includes(from)) {
    throw new Error(`SPA copy sync failed (${label}): not found: ${from.slice(0, 120)}`);
  }
  return haystack.split(from).join(to);
}

function faqJs(faqs) {
  return faqs
    .map((f) => `{q:\`${f.q}\`,a:\`${f.a}\`}`)
    .join(',');
}

function cardsJs(items) {
  return items.map((c) => `{title:\`${c.title}\`,desc:\`${c.desc}\`}`).join(',');
}

function catalogObject(copy) {
  const shortBit = copy.short ? `short:\`${copy.short}\`,` : '';
  return `slug:\`${copy.slug}\`,name:\`${copy.name}\`,${shortBit}h1:\`${copy.h1}\`,sub:\`${copy.hero}\`,offeringsTitle:\`${copy.offeringsTitle}\`,offeringsSub:\`${copy.offeringsSub}\`,offerings:[${cardsJs(copy.offerings)}],edgeTitle:\`${copy.edgeTitle}\`,processTitle:\`${copy.processTitle}\`,edge:[${cardsJs(copy.edge)}],process:[${cardsJs(copy.process)}],faqTitle:\`${copy.faqTitle}\`,faqs:[${faqJs(copy.faqs)}]`;
}

function relatedEntry(copy) {
  const slugs = (links) => links.map((l) => `\`${l.href.split('/').pop()}\``).join(',');
  return `"${copy.slug}":{solutions:[${slugs(copy.relatedSolutions)}],industries:[${slugs(copy.relatedIndustries)}],services:[${slugs(copy.relatedServices)}]}`;
}

function relatedEntryIndustry(copy) {
  const slugs = (links) => links.map((l) => `\`${l.href.split('/').pop()}\``).join(',');
  return `"${copy.slug}":{services:[${slugs(copy.relatedServices)}],solutions:[${slugs(copy.relatedSolutions)}],industries:[${slugs(copy.relatedIndustries)}]}`;
}

function replaceCatalogPage(app, slug, nextSlug, copy, label) {
  const startTok = `slug:\`${slug}\``;
  const endTok = `slug:\`${nextSlug}\``;
  const start = app.indexOf(startTok);
  const end = app.indexOf(endTok, start + 1);
  if (start < 0 || end < 0) {
    throw new Error(`SPA copy sync: catalog slice missing (${label}) start=${start} end=${end}`);
  }
  return app.slice(0, start) + catalogObject(copy) + '},{' + app.slice(end);
}

function replaceLastHirePage(app, slug, copy, label) {
  const startTok = `slug:\`${slug}\``;
  const endMarker = '}],q=e=>K.find(t=>t.slug===e)';
  const start = app.indexOf(startTok);
  const end = app.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error(`SPA copy sync: last hire slice missing (${label}) start=${start} end=${end}`);
  }
  return app.slice(0, start) + catalogObject(copy) + endMarker + app.slice(end + endMarker.length);
}

function replaceLastIndustryPage(app, slug, copy, label) {
  const startTok = `slug:\`${slug}\``;
  const endMarker = '}],G=e=>W.find(t=>t.slug===e)';
  const start = app.indexOf(startTok);
  const end = app.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error(`SPA copy sync: last industry slice missing (${label}) start=${start} end=${end}`);
  }
  return app.slice(0, start) + catalogObject(copy) + endMarker + app.slice(end + endMarker.length);
}

function replaceLastSolutionPage(app, slug, copy, label) {
  const startTok = `slug:\`${slug}\``;
  const endMarker = '}],U=e=>H.find(t=>t.slug===e)';
  const start = app.indexOf(startTok);
  const end = app.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error(`SPA copy sync: last solution slice missing (${label}) start=${start} end=${end}`);
  }
  return app.slice(0, start) + catalogObject(copy) + endMarker + app.slice(end + endMarker.length);
}

function replaceLastCatalogPage(app, slug, copy, label) {
  const startTok = `slug:\`${slug}\``;
  const endMarker = '}],V=e=>B.find(t=>t.slug===e)';
  const start = app.indexOf(startTok);
  const end = app.indexOf(endMarker, start);
  if (start < 0 || end < 0) {
    throw new Error(`SPA copy sync: last catalog slice missing (${label}) start=${start} end=${end}`);
  }
  return app.slice(0, start) + catalogObject(copy) + endMarker + app.slice(end + endMarker.length);
}

function patchCompanyFacts({ app, about, contact, home }) {
  const feStart = app.indexOf('fe=[{city:`Austin`');
  const feEnd = app.indexOf('],pe=', feStart);
  if (feStart < 0 || feEnd < 0) throw new Error('SPA copy sync: office list missing');
  const feNext =
    'fe=[{city:`Austin`,country:`United States`,flag:`US`,address:`716 Congress Ave #200, Austin, TX 78701, USA`,footerAddress:`716 Congress Ave #200, Austin, TX 78701, USA`,hq:!0,lat:30.2692,lng:-97.7424},{city:`London`,country:`United Kingdom`,flag:`GB`,address:`London, United Kingdom`,footerAddress:`London, United Kingdom`,lat:51.5074,lng:-0.1278}]';
  app = app.slice(0, feStart) + feNext + app.slice(feEnd + 1);

  const etStart = app.indexOf('var et={');
  const etEnd = app.indexOf('},tt=', etStart);
  if (etStart < 0 || etEnd < 0) throw new Error('SPA copy sync: office photos missing');
  app =
    app.slice(0, etStart) +
    'var et={Austin:`https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=600&q=70&auto=format&fit=crop`,London:`https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=70&auto=format&fit=crop`}' +
    app.slice(etEnd + 1);

  app = mustReplace(
    app,
    'tt={US:`🇺🇸`,AE:`🇦🇪`,CA:`🇨🇦`,CN:`🇨🇳`,PK:`🇵🇰`}',
    'tt={US:`🇺🇸`,GB:`🇬🇧`,AE:`🇦🇪`,CA:`🇨🇦`,CN:`🇨🇳`,PK:`🇵🇰`}',
    'office flags',
  );
  app = mustReplace(
    app,
    '{year:`2017`,title:`It begins in Karachi`,desc:`DigiWorks is founded on one conviction: most projects fail in the gap between what clients ask for and what their business actually needs. Closing that gap is the whole idea.`}',
    '{year:`2017`,title:`Building software since 2017`,desc:`DigiWorks is founded on one conviction: most projects fail in the gap between what clients ask for and what their business actually needs. Closing that gap is the whole idea.`}',
    'about timeline start',
  );
  app = mustReplace(
    app,
    '{year:`2019`,title:`Across the globe`,desc:`Expansion beyond Pakistan into the USA (Austin HQ), the UAE, and Canada, registered and operating across four countries.`}',
    '{year:`Now`,title:`Two offices`,desc:`Headquarters in Austin, Texas, and an office in London, United Kingdom.`}',
    'about timeline offices',
  );
  app = mustReplace(app, 'Our Global Offices', 'Our Offices', 'footer offices heading');
  app = mustReplace(app, '· Since 2025', '· Since 2017', 'footer since');
  app = mustReplace(
    app,
    'grid gap-4 sm:grid-cols-2 lg:grid-cols-5',
    'grid gap-4 sm:grid-cols-2 lg:grid-cols-2',
    'footer office grid',
  );
  app = mustReplace(
    app,
    '{value:5,suffix:``,label:`Global offices`}',
    '{value:2,suffix:``,label:`Offices in the USA and UK`}',
    'office counter',
  );

  about = mustReplace(
    about,
    'M={Austin:{cx:39,cy:52},Canada:{cx:49,cy:43},Dubai:{cx:122,cy:56},Karachi:{cx:128,cy:56},Guangzhou:{cx:153,cy:57}}',
    'M={Austin:{cx:39,cy:52},London:{cx:92,cy:40}}',
    'about map dots',
  );
  about = mustReplace(about, 'Five time zones.', 'Two offices.', 'about offices heading');
  about = mustReplace(
    about,
    'Five offices across the globe, engineering around the clock so your momentum never stops.',
    'Offices in Austin and London, engineering around the clock so your momentum never stops.',
    'about offices sub',
  );
  about = mustReplace(
    about,
    'mx-auto mt-7 grid w-full max-w-5xl grid-cols-2 justify-center gap-3.5 sm:grid-cols-3 lg:grid-cols-5',
    'mx-auto mt-7 grid w-full max-w-5xl grid-cols-2 justify-center gap-3.5 sm:grid-cols-2 lg:grid-cols-2',
    'about office cards',
  );

  contact = mustReplace(contact, 'Our Global Offices', 'Our Offices', 'contact offices heading');
  contact = mustReplace(contact, '`Worldwide`', '`Two offices`', 'contact offices chip');
  contact = mustReplace(
    contact,
    'mx-auto grid max-w-[80rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
    'mx-auto grid max-w-[80rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2',
    'contact office grid',
  );
  contact = mustReplace(
    contact,
    '{v:`5`,l:`Global offices`}',
    '{v:`2`,l:`Offices in the USA and UK`}',
    'contact office counter',
  );
  const contactPhotos =
    'b={Austin:`https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=85&auto=format&fit=crop`,London:`https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1400&q=85&auto=format&fit=crop`}';
  const photoStart = contact.indexOf('b={Austin:`https://images.unsplash.com/photo-1531218150217');
  const photoEnd = contact.indexOf('},x=', photoStart);
  if (photoStart < 0 || photoEnd < 0) throw new Error('SPA copy sync: contact office photos missing');
  contact = contact.slice(0, photoStart) + contactPhotos + contact.slice(photoEnd + 1);
  contact = mustReplace(
    contact,
    'x={Austin:`#0e59b3`,Dubai:`#00c8ff`,Canada:`#7c3aed`,Guangzhou:`#22c55e`,Karachi:`#e11d48`}',
    'x={Austin:`#0e59b3`,London:`#1d4ed8`}',
    'contact office colors',
  );
  contact = mustReplace(
    contact,
    'S={US:`🇺🇸`,AE:`🇦🇪`,CA:`🇨🇦`,CN:`🇨🇳`,PK:`🇵🇰`}',
    'S={US:`🇺🇸`,GB:`🇬🇧`}',
    'contact office flags',
  );

  home = mustReplace(
    home,
    'children:`5`}),(0,L.jsx)(`p`,{className:`text-xs text-dusk/60`,children:`global offices`})',
    'children:`2`}),(0,L.jsx)(`p`,{className:`text-xs text-dusk/60`,children:`offices in the USA and UK`})',
    'home office counter',
  );

  return { app, about, contact, home };
}

function patchHomeHero(source) {
  const marker = 'function Q(){';
  const start = source.indexOf(marker);
  if (start < 0) throw new Error('SPA copy sync: home hero function missing');
  if (source.includes('id:`dw-hero`')) return source;
  let depth = 0;
  const brace = source.indexOf('{', start);
  let end = -1;
  for (let j = brace; j < source.length; j += 1) {
    const c = source[j];
    if (c === '{') depth += 1;
    else if (c === '}') {
      depth -= 1;
      if (depth === 0) {
        end = j;
        break;
      }
    }
  }
  if (end < 0) throw new Error('SPA copy sync: home hero function end missing');
  const html = JSON.stringify(homeHeroInnerHtml);
  const fn = `function Q(){let e=(0,I.useRef)(null);(0,I.useEffect)(()=>{let t=e.current;if(!t)return;let n=t.querySelector(\`[data-dw-scroll]\`);function r(){let e=window.innerHeight-8;window.__lenis?window.__lenis.scrollTo(e,{duration:1.2}):window.scrollTo({top:e,behavior:\`smooth\`})}n&&n.addEventListener(\`click\`,r);if(window.matchMedia(\`(prefers-reduced-motion: reduce)\`).matches)return()=>{n&&n.removeEventListener(\`click\`,r)};let i=t.querySelector(\`.dw-cursor\`),a=[...t.querySelectorAll(\`[data-depth]\`)],o=t.querySelector(\`[data-depth-el]\`),s=0,c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0;function g(e){let n=t.getBoundingClientRect(),r=e.clientX-n.left,i=e.clientY-n.top;s=r/n.width*2-1;c=i/n.height*2-1;d=r;f=i;t.classList.add(\`is-active\`);h||(h=requestAnimationFrame(v))}function y(){s=0;c=0;t.classList.remove(\`is-active\`);h||(h=requestAnimationFrame(v))}function v(){l+=(s-l)*.06;u+=(c-u)*.06;p+=(d-p)*.12;m+=(f-m)*.12;for(let e of a){let t=parseFloat(e.dataset.depth)||0;e.style.transform=\`translate(\${(l*t).toFixed(2)}px, \${(u*t).toFixed(2)}px)\`}if(o){let e=parseFloat(o.dataset.depthEl)||0;o.style.transform=\`translate(\${(l*e).toFixed(2)}px, \${(u*e).toFixed(2)}px)\`}if(i){i.style.left=p+\`px\`;i.style.top=m+\`px\`}let e=Math.abs(s-l)<.001&&Math.abs(c-u)<.001&&Math.abs(d-p)<.5&&Math.abs(f-m)<.5;h=e?0:requestAnimationFrame(v)}t.addEventListener(\`mousemove\`,g);t.addEventListener(\`mouseleave\`,y);return()=>{t.removeEventListener(\`mousemove\`,g);t.removeEventListener(\`mouseleave\`,y);n&&n.removeEventListener(\`click\`,r);h&&cancelAnimationFrame(h)}},[]);return(0,L.jsx)(\`section\`,{ref:e,id:\`dw-hero\`,className:\`dw-hero\`,dangerouslySetInnerHTML:{__html:${html}}})}`;
  return source.slice(0, start) + fn + source.slice(end + 1);
}

function sync() {
  mkdirSync(destDir, { recursive: true });
  const buffers = {};
  for (const name of Object.values(FILES)) {
    const src = join(pristine, name);
    const dest = join(destDir, name);
    copyFileSync(src, dest);
    buffers[name] = readFileSync(dest, 'utf8');
  }

  let home = buffers[FILES.home];
  home = mustReplace(home, 'Unlock the potential of AI with DigiWorks', homeCopy.kicker, 'home kicker');
  home = mustReplace(home, 'We Empower Enterprises With', 'The AI', 'home h1 l1');
  home = mustReplace(home, 'Intelligence Engineered', 'Development Company', 'home h1 l2');
  home = mustReplace(home, 'For The Future', 'For US Businesses', 'home h1 l3');
  home = mustReplace(
    home,
    'DigiWorks AI advances intelligent technologies to shape the future of business, driving innovation through smarter systems, data-driven strategies, and purposeful digital transformation.',
    homeCopy.hero,
    'home hero',
  );
  home = mustReplace(
    home,
    'Empowering Enterprises Through Smart, Ethical AI',
    'Where US teams usually start',
    'home featured title',
  );
  home = mustReplace(
    home,
    'Enterprise-grade AI solutions built on strong governance, transparent methodologies, and reliable engineering.',
    homeCopy.featuredSub,
    'home featured sub',
  );
  home = mustReplace(
    home,
    'Building Intelligent Systems that Transform Data into Action',
    'Solutions we ship around production AI',
    'home solutions title',
  );
  home = mustReplace(home, 'Innovate, transform & achieve real results', 'Work already in production', 'home cases title');
  home = mustReplace(
    home,
    'Real-world impact through solutions designed for measurable performance and long-term value.',
    homeCopy.casesSub,
    'home cases sub',
  );
  home = mustReplace(
    home,
    'Drag the sliders to estimate what intelligent automation could return in your organization. Most DigiWorks clients see production AI inside 8 to 20 weeks.',
    homeCopy.roiCopy,
    'home roi',
  );
  home = mustReplace(
    home,
    'Fueling growth through innovation and creativity',
    'From the DigiWorks AI blog',
    'home blog title',
  );
  home = mustReplace(
    home,
    'Stay in touch with the latest industry trends, market insights, and news shaping the world of tomorrow.',
    homeCopy.blogSub,
    'home blog sub',
  );
  home = mustReplace(
    home,
    'children:[`Intelligence for `,(0,L.jsx)(`span`,{className:`text-gradient`,children:`every sector`})',
    'children:[`AI for `,(0,L.jsx)(`span`,{className:`text-gradient`,children:`every sector`})',
    'home sectors h2',
  );
  home = mustReplace(
    home,
    'From hospital networks to global supply chains, we adapt AI to the unique challenges and operational environments of your industry.',
    homeCopy.sectorsSub,
    'home sectors sub',
  );
  home = mustReplace(home, '(0,L.jsx)(M,{faqs:f})', '(0,L.jsx)(M,{faqs:f,title:`AI development FAQs`})', 'home faq title');
  home = mustReplace(
    home,
    'children:[`Discover `,(0,L.jsx)(`span`,{"aria-hidden":!0,children:`→`})]})',
    'children:[`Book a Free Discovery Call `,(0,L.jsx)(`span`,{"aria-hidden":!0,children:`→`})]})',
    'home primary cta label',
  );
  home = mustReplace(
    home,
    'children:`Explore Our Work`})})]})]}),(0,L.jsx)(o.button',
    'children:`View Case Studies`})}),(0,L.jsx)(`p`,{className:`w-full text-center text-xs text-dusk/55`,children:`Free discovery session - Reply within 1 business day`})]})]}),(0,L.jsx)(o.button',
    'home secondary cta + microcopy',
  );

  let app = buffers[FILES.app];
  const homeFaqStart = app.indexOf('_e=[{q:`What types of AI solutions do you develop?`');
  const homeFaqEnd = app.indexOf('],ve=[{title:`Integrity`', homeFaqStart) + 1;
  const homeFaqFrom = app.slice(homeFaqStart, homeFaqEnd);
  const homeFaqTo = `_e=[${faqJs(homeCopy.faqs)}]`;
  app = mustReplace(app, homeFaqFrom, homeFaqTo, 'home faqs _e');

  const agentFrom = app.indexOf('slug:`ai-agent-development`');
  const agentEnd = app.indexOf('slug:`generative-ai-development`');
  app = app.slice(0, agentFrom) + catalogObject(agentCopy) + '},{' + app.slice(agentEnd);

  const batch2 = [
    [artificialIntelligenceCopy, 'mobile-app-development'],
    [mobileAppDevelopmentCopy, 'machine-learning'],
    [machineLearningCopy, 'automation-and-integration'],
    [automationAndIntegrationCopy, 'data-and-cloud'],
    [generativeAiDevelopmentCopy, 'predictive-modeling'],
    [predictiveModelingCopy, 'ai-chatbot-development'],
    [aiChatbotDevelopmentCopy, 'natural-language-processing'],
    [nlpCopy, 'intelligent-automation'],
    [intelligentAutomationCopy, 'autonomous-ai-agents'],
    [autonomousAiAgentsCopy, 'mlops-setup'],
    [mlopsSetupCopy, 'real-time-data-streaming'],
    [realTimeDataStreamingCopy, 'cloud-architecture-and-deployment'],
    [cloudArchitectureCopy, 'privacy-preserving-ai'],
    [privacyPreservingAiCopy, 'ai-red-teaming'],
    [dataAndCloudCopy, 'security-and-compliance'],
    [securityAndComplianceCopy, 'ai-training-and-support'],
    [aiTrainingAndSupportCopy, 'ai-agent-development'],
  ];
  for (const [copy, nextSlug] of batch2) {
    app = replaceCatalogPage(app, copy.slug, nextSlug, copy, copy.slug);
  }
  app = replaceLastCatalogPage(app, 'ai-red-teaming', aiRedTeamingCopy, 'ai-red-teaming');

  const solutions = [
    [aiAutomationCopy, 'predictive-analytics'],
    [predictiveAnalyticsCopy, 'conversational-ai'],
    [conversationalAiCopy, 'computer-vision-image-recognition'],
    [computerVisionCopy, 'generative-ai'],
    [generativeAiCopy, 'ai-for-cybersecurity'],
  ];
  for (const [copy, nextSlug] of solutions) {
    app = replaceCatalogPage(app, copy.slug, nextSlug, copy, copy.slug);
  }
  app = replaceLastSolutionPage(app, 'ai-for-cybersecurity', aiForCybersecurityCopy, 'ai-for-cybersecurity');

  const industries = [
    [aiForHealthcareCopy, 'ai-for-fintech'],
    [aiForFintechCopy, 'ai-for-retail-and-ecommerce'],
    [aiForRetailCopy, 'ai-for-manufacturing'],
    [aiForManufacturingCopy, 'ai-for-logistics-and-supply-chain'],
    [aiForLogisticsCopy, 'ai-for-real-estate'],
    [aiForRealEstateCopy, 'ai-for-education'],
  ];
  for (const [copy, nextSlug] of industries) {
    app = replaceCatalogPage(app, copy.slug, nextSlug, copy, copy.slug);
  }
  app = replaceLastIndustryPage(app, 'ai-for-education', aiForEducationCopy, 'ai-for-education');
  const hirePages = [
    [hireAiEngineersCopy, 'hire-ml-engineers'],
    [hireMlEngineersCopy, 'hire-data-scientists'],
    [hireDataScientistsCopy, 'hire-nlp-engineers'],
    [hireNlpEngineersCopy, 'hire-computer-vision-developers'],
    [hireComputerVisionCopy, 'dedicated-ai-pods'],
  ];
  for (const [copy, nextSlug] of hirePages) {
    app = replaceCatalogPage(app, copy.slug, nextSlug, copy, copy.slug);
  }
  app = replaceLastHirePage(app, 'dedicated-ai-pods', dedicatedAiPodsCopy, 'dedicated-ai-pods');

  const thinCopies = [aiSecurityCopy, cloudAndDevopsCopy, dataEngineeringCopy, idpCopy, mlDevelopmentCopy];
  const lastRedFaq = aiRedTeamingCopy.faqs.at(-1).a;
  const bEnd = `${lastRedFaq}\`}]}],V=e=>B.find(t=>t.slug===e)`;
  const bEndTo = `${lastRedFaq}\`}]},{${thinCopies.map(catalogObject).join('},{')}}],V=e=>B.find(t=>t.slug===e)`;
  app = mustReplace(app, bEnd, bEndTo, 'thin catalog objects');
  app = mustReplace(app, 'className:`btn-primary whitespace-nowrap !px-5`,children:`Get in Touch`', 'className:`btn-primary whitespace-nowrap !px-5`,children:`Book a Call`', 'header cta');
  app = mustReplace(app, 'className:`btn-primary mt-4 w-full`,children:`Get in Touch`', 'className:`btn-primary mt-4 w-full`,children:`Book a Call`', 'mobile header cta');
  app = mustReplace(
    app,
    'Empower people and businesses to go beyond boundaries through AI-powered digital solutions. We combine innovation, collaboration, and technology to drive smarter growth, inspire creativity, and build a future where every idea turns into meaningful impact.',
    aboutCopy.mission,
    'about mission',
  );
  app = mustReplace(
    app,
    '7+ years and 1,000+ shipped products mean your AI is built on hard-won engineering discipline, not experiments.',
    aboutCopy.decade,
    'about decade',
  );
  app = mustReplace(
    app,
    'Grew to a 350+ peak team and delivered 1,000+ apps & digital products and 10,000+ websites & branding projects across the US, UK, EU, Australia and UAE.',
    aboutCopy.growth,
    'about growth',
  );
  app = mustReplace(
    app,
    'We create intelligent ecosystems that combine automation, analytics, and decision intelligence to help enterprises streamline operations, enhance productivity, and accelerate digital transformation across industries.',
    'DigiWorks AI ships production AI from Austin HQ: agents, models, and automation US teams can run after we leave.',
    'about pillar AI',
  );
  app = mustReplace(
    app,
    'We design adaptive machine learning systems that analyze complex data, uncover insights, and continuously improve performance to empower enterprises with predictive, data-driven decision capabilities.',
    'Machine learning work here is a named model with an owner, not a lab demo. See Machine Learning for the practice URL.',
    'about pillar ML',
  );
  app = mustReplace(
    app,
    'We design secure, scalable cloud architectures and data ecosystems that empower enterprises to manage, analyze, and deploy intelligence seamlessly across platforms and business environments.',
    'Cloud and data work sits in your accounts. Cloud Architecture and Data and Cloud are the billed URLs when that is the job.',
    'about pillar cloud',
  );
  app = mustReplace(
    app,
    'We streamline enterprise operations through intelligent automation systems that reduce manual effort, improve workflow efficiency, and accelerate performance with AI-powered precision and reliability.',
    'Automation is a named workflow with a desk that already owns it. Intelligent Automation is the outcome URL; integration stays on Automation and Integration.',
    'about pillar automation',
  );

  let pageHero = buffers[FILES.pageHero];
  pageHero = mustReplace(
    pageHero,
    'children:[`Get in Touch `,(0,m.jsx)(`span`,{"aria-hidden":!0,children:`→`})]})}),(0,m.jsx)(f,{children:(0,m.jsx)(s,{to:`/case-studies`,className:`btn-ghost`,children:`See Our Work`})})]})]})]})}',
    'children:[`Book a Free Discovery Call `,(0,m.jsx)(`span`,{"aria-hidden":!0,children:`→`})]})}),(0,m.jsx)(f,{children:(0,m.jsx)(s,{to:`/case-studies`,className:`btn-ghost`,children:`View Case Studies`})}),(0,m.jsx)(`p`,{className:`w-full text-center text-xs text-dusk/55`,children:`Free discovery session - Reply within 1 business day`})]})]})]})}',
    'page hero ctas',
  );

  let seo = buffers[FILES.seo];
  const seoFn =
    'function _({title:e,description:r=g,keywords:o,path:s=`/`,image:c=i,faqs:l,organization:u=!1,schemaType:d,article:f,breadcrumbs:p=[],noindex:_=!1,pageData:v={}}){';
  seo = mustReplace(seo, seoFn, `${seoFn}return null;`, 'seo helmet noop');
  seo = mustReplace(
    seo,
    '"ai-agent-development":`AI Agent Development Services USA | DigiWorks AI`',
    `"ai-agent-development":\`${agentCopy.title}\``,
    'seo agent title map',
  );
  const seoTitlePairs = [
    ['"artificial-intelligence":`AI Development Company USA | Custom AI Solutions`', `"artificial-intelligence":\`${artificialIntelligenceCopy.title}\``],
    ['"machine-learning":`Machine Learning Development Services USA | DigiWorks AI`', `"machine-learning":\`${machineLearningCopy.title}\``],
    ['"automation-and-integration":`AI Automation & Integration Services USA`', `"automation-and-integration":\`${automationAndIntegrationCopy.title}\``],
    ['"generative-ai-development":`Generative AI Development Company USA`', `"generative-ai-development":\`${generativeAiDevelopmentCopy.title}\``],
    ['"predictive-modeling":`Predictive Modeling Services USA | DigiWorks AI`', `"predictive-modeling":\`${predictiveModelingCopy.title}\``],
    ['"ai-chatbot-development":`AI Chatbot Development Company USA`', `"ai-chatbot-development":\`${aiChatbotDevelopmentCopy.title}\``],
    ['"natural-language-processing":`NLP Development Services USA | DigiWorks AI`', `"natural-language-processing":\`${nlpCopy.title}\``],
    ['"autonomous-ai-agents":`Autonomous AI Agents Development USA`', `"autonomous-ai-agents":\`${autonomousAiAgentsCopy.title}\``],
    ['"intelligent-automation":`Intelligent Automation Services USA`', `"intelligent-automation":\`${intelligentAutomationCopy.title}\``],
    ['"data-and-cloud":`Enterprise Data & Cloud Services USA`', `"data-and-cloud":\`${dataAndCloudCopy.title}\``],
    ['"security-and-compliance":`AI Security & Compliance Services USA`', `"security-and-compliance":\`${securityAndComplianceCopy.title}\``],
    ['"mlops-setup":`MLOps Setup & Consulting Services USA`', `"mlops-setup":\`${mlopsSetupCopy.title}\``],
    ['"real-time-data-streaming":`Real-Time Data Streaming Services USA`', `"real-time-data-streaming":\`${realTimeDataStreamingCopy.title}\``],
    ['"cloud-architecture-and-deployment":`AI Cloud Architecture & Deployment USA`', `"cloud-architecture-and-deployment":\`${cloudArchitectureCopy.title}\``],
    ['"privacy-preserving-ai":`Privacy-Preserving AI Development USA`', `"privacy-preserving-ai":\`${privacyPreservingAiCopy.title}\``],
    ['"ai-training-and-support":`Enterprise AI Training & Support USA`', `"ai-training-and-support":\`${aiTrainingAndSupportCopy.title}\``],
    ['"mobile-app-development":`Custom Mobile App Development Company USA`', `"mobile-app-development":\`${mobileAppDevelopmentCopy.title}\``],
  ];
  for (const [from, to] of seoTitlePairs) {
    seo = mustReplace(seo, from, to, `seo ${from.slice(1, 40)}`);
  }
  seo = mustReplace(
    seo,
    '"ai-red-teaming":`AI Red Teaming Services USA | DigiWorks AI`}',
    `"ai-red-teaming":\`${aiRedTeamingCopy.title}\`${thinCopies.map((c) => `,"${c.slug}":\`${c.title}\``).join('')}${[...solutions.map(([c]) => c), aiForCybersecurityCopy, ...industries.map(([c]) => c), aiForEducationCopy, ...hirePages.map(([c]) => c), dedicatedAiPodsCopy].map((c) => `,"${c.slug}":\`${c.title}\``).join('')}}`,
    'seo thin title map',
  );

  let detail = buffers[FILES.detail];
  detail = mustReplace(detail, '(0,k.jsx)(T,{faqs:e.faqs})', '(0,k.jsx)(T,{faqs:e.faqs,title:e.faqTitle})', 'detail faq title');
  detail = mustReplace(detail, '(0,k.jsx)(w,{items:e.edge})', '(0,k.jsx)(w,{items:e.edge,title:e.edgeTitle})', 'detail edge title');
  detail = mustReplace(detail, '(0,k.jsx)(S,{steps:e.process})', '(0,k.jsx)(S,{steps:e.process,title:e.processTitle})', 'detail process title');
  detail = mustReplace(
    detail,
    '"ai-red-teaming":{solutions:[`ai-for-cybersecurity`,`predictive-analytics`,`ai-automation`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`],services:[`security-and-compliance`,`privacy-preserving-ai`,`machine-learning`]}},Solutions:',
    `"ai-red-teaming":{solutions:[\`ai-for-cybersecurity\`,\`predictive-analytics\`,\`ai-automation\`],industries:[\`ai-for-fintech\`,\`ai-for-healthcare\`,\`ai-for-manufacturing\`],services:[\`security-and-compliance\`,\`privacy-preserving-ai\`,\`machine-learning\`]}${thinCopies.map((c) => `,${relatedEntry(c)}`).join('')}},Solutions:`,
    'detail related thin pages',
  );
  const relatedOrig = [
    [
      '"artificial-intelligence":{solutions:[`ai-automation`,`generative-ai`,`predictive-analytics`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`],services:[`ai-agent-development`,`generative-ai-development`,`machine-learning`]}',
      relatedEntry(artificialIntelligenceCopy),
    ],
    [
      '"machine-learning":{solutions:[`predictive-analytics`,`computer-vision-image-recognition`,`ai-automation`],industries:[`ai-for-fintech`,`ai-for-manufacturing`,`ai-for-healthcare`],services:[`predictive-modeling`,`mlops-setup`,`data-and-cloud`]}',
      relatedEntry(machineLearningCopy),
    ],
    [
      '"automation-and-integration":{solutions:[`ai-automation`,`predictive-analytics`,`conversational-ai`],industries:[`ai-for-logistics-and-supply-chain`,`ai-for-manufacturing`,`ai-for-retail-and-ecommerce`],services:[`intelligent-automation`,`autonomous-ai-agents`,`real-time-data-streaming`]}',
      relatedEntry(automationAndIntegrationCopy),
    ],
    [
      '"generative-ai-development":{solutions:[`generative-ai`,`conversational-ai`,`ai-automation`],industries:[`ai-for-retail-and-ecommerce`,`ai-for-education`,`ai-for-fintech`],services:[`natural-language-processing`,`ai-chatbot-development`,`ai-agent-development`]}',
      relatedEntry(generativeAiDevelopmentCopy),
    ],
    [
      '"predictive-modeling":{solutions:[`predictive-analytics`,`ai-automation`,`ai-for-cybersecurity`],industries:[`ai-for-fintech`,`ai-for-manufacturing`,`ai-for-logistics-and-supply-chain`],services:[`machine-learning`,`mlops-setup`,`data-and-cloud`]}',
      relatedEntry(predictiveModelingCopy),
    ],
    [
      '"ai-chatbot-development":{solutions:[`conversational-ai`,`generative-ai`,`ai-automation`],industries:[`ai-for-retail-and-ecommerce`,`ai-for-fintech`,`ai-for-healthcare`],services:[`natural-language-processing`,`ai-agent-development`,`generative-ai-development`]}',
      relatedEntry(aiChatbotDevelopmentCopy),
    ],
    [
      '"natural-language-processing":{solutions:[`conversational-ai`,`generative-ai`,`ai-automation`],industries:[`ai-for-healthcare`,`ai-for-fintech`,`ai-for-education`],services:[`ai-chatbot-development`,`generative-ai-development`,`ai-agent-development`]}',
      relatedEntry(nlpCopy),
    ],
    [
      '"autonomous-ai-agents":{solutions:[`ai-automation`,`conversational-ai`,`generative-ai`],industries:[`ai-for-logistics-and-supply-chain`,`ai-for-fintech`,`ai-for-manufacturing`],services:[`ai-agent-development`,`intelligent-automation`,`natural-language-processing`]}',
      relatedEntry(autonomousAiAgentsCopy),
    ],
    [
      '"intelligent-automation":{solutions:[`ai-automation`,`predictive-analytics`,`conversational-ai`],industries:[`ai-for-manufacturing`,`ai-for-logistics-and-supply-chain`,`ai-for-retail-and-ecommerce`],services:[`automation-and-integration`,`autonomous-ai-agents`,`real-time-data-streaming`]}',
      relatedEntry(intelligentAutomationCopy),
    ],
    [
      '"data-and-cloud":{solutions:[`predictive-analytics`,`ai-automation`,`ai-for-cybersecurity`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`],services:[`cloud-architecture-and-deployment`,`mlops-setup`,`real-time-data-streaming`]}',
      relatedEntry(dataAndCloudCopy),
    ],
    [
      '"security-and-compliance":{solutions:[`ai-for-cybersecurity`,`predictive-analytics`,`ai-automation`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`],services:[`ai-red-teaming`,`privacy-preserving-ai`,`cloud-architecture-and-deployment`]}',
      relatedEntry(securityAndComplianceCopy),
    ],
    [
      '"mlops-setup":{solutions:[`predictive-analytics`,`ai-automation`,`ai-for-cybersecurity`],industries:[`ai-for-fintech`,`ai-for-manufacturing`,`ai-for-healthcare`],services:[`machine-learning`,`cloud-architecture-and-deployment`,`real-time-data-streaming`]}',
      relatedEntry(mlopsSetupCopy),
    ],
    [
      '"real-time-data-streaming":{solutions:[`predictive-analytics`,`ai-automation`,`conversational-ai`],industries:[`ai-for-fintech`,`ai-for-logistics-and-supply-chain`,`ai-for-manufacturing`],services:[`data-and-cloud`,`cloud-architecture-and-deployment`,`mlops-setup`]}',
      relatedEntry(realTimeDataStreamingCopy),
    ],
    [
      '"cloud-architecture-and-deployment":{solutions:[`ai-automation`,`predictive-analytics`,`ai-for-cybersecurity`],industries:[`ai-for-healthcare`,`ai-for-fintech`,`ai-for-manufacturing`],services:[`data-and-cloud`,`mlops-setup`,`security-and-compliance`]}',
      relatedEntry(cloudArchitectureCopy),
    ],
    [
      '"privacy-preserving-ai":{solutions:[`ai-for-cybersecurity`,`predictive-analytics`,`ai-automation`],industries:[`ai-for-healthcare`,`ai-for-fintech`,`ai-for-real-estate`],services:[`security-and-compliance`,`ai-red-teaming`,`data-and-cloud`]}',
      relatedEntry(privacyPreservingAiCopy),
    ],
    [
      '"ai-red-teaming":{solutions:[`ai-for-cybersecurity`,`predictive-analytics`,`ai-automation`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`],services:[`security-and-compliance`,`privacy-preserving-ai`,`machine-learning`]}',
      relatedEntry(aiRedTeamingCopy),
    ],
    [
      '"ai-training-and-support":{solutions:[`ai-automation`,`conversational-ai`,`generative-ai`],industries:[`ai-for-education`,`ai-for-healthcare`,`ai-for-retail-and-ecommerce`],services:[`artificial-intelligence`,`machine-learning`,`natural-language-processing`]}',
      relatedEntry(aiTrainingAndSupportCopy),
    ],
    [
      '"mobile-app-development":{solutions:[`conversational-ai`,`ai-automation`,`generative-ai`],industries:[`ai-for-retail-and-ecommerce`,`ai-for-education`,`ai-for-healthcare`],services:[`ai-chatbot-development`,`cloud-architecture-and-deployment`,`natural-language-processing`]}',
      relatedEntry(mobileAppDevelopmentCopy),
    ],
    [
      '"ai-automation":{services:[`intelligent-automation`,`automation-and-integration`,`ai-agent-development`],solutions:[`conversational-ai`,`generative-ai`,`predictive-analytics`],industries:[`ai-for-logistics-and-supply-chain`,`ai-for-manufacturing`,`ai-for-retail-and-ecommerce`]}',
      relatedEntry(aiAutomationCopy),
    ],
    [
      '"predictive-analytics":{services:[`predictive-modeling`,`machine-learning`,`mlops-setup`],solutions:[`ai-automation`,`generative-ai`,`ai-for-cybersecurity`],industries:[`ai-for-fintech`,`ai-for-retail-and-ecommerce`,`ai-for-healthcare`]}',
      relatedEntry(predictiveAnalyticsCopy),
    ],
    [
      '"conversational-ai":{services:[`ai-chatbot-development`,`natural-language-processing`,`ai-agent-development`],solutions:[`ai-automation`,`generative-ai`,`predictive-analytics`],industries:[`ai-for-retail-and-ecommerce`,`ai-for-healthcare`,`ai-for-fintech`]}',
      relatedEntry(conversationalAiCopy),
    ],
    [
      '"computer-vision-image-recognition":{services:[`machine-learning`,`autonomous-ai-agents`,`intelligent-automation`],solutions:[`ai-automation`,`generative-ai`,`predictive-analytics`],industries:[`ai-for-manufacturing`,`ai-for-retail-and-ecommerce`,`ai-for-logistics-and-supply-chain`]}',
      relatedEntry(computerVisionCopy),
    ],
    [
      '"generative-ai":{services:[`generative-ai-development`,`natural-language-processing`,`ai-chatbot-development`],solutions:[`ai-automation`,`conversational-ai`,`predictive-analytics`],industries:[`ai-for-retail-and-ecommerce`,`ai-for-education`,`ai-for-fintech`]}',
      relatedEntry(generativeAiCopy),
    ],
    [
      '"ai-for-cybersecurity":{services:[`ai-red-teaming`,`security-and-compliance`,`privacy-preserving-ai`],solutions:[`ai-automation`,`predictive-analytics`,`conversational-ai`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`]}',
      relatedEntry(aiForCybersecurityCopy),
    ],
    [
      '"ai-for-healthcare":{services:[`predictive-modeling`,`natural-language-processing`,`privacy-preserving-ai`],solutions:[`predictive-analytics`,`conversational-ai`,`ai-for-cybersecurity`],industries:[`ai-for-fintech`,`ai-for-education`,`ai-for-retail-and-ecommerce`]}',
      relatedEntryIndustry(aiForHealthcareCopy),
    ],
    [
      '"ai-for-fintech":{services:[`predictive-modeling`,`ai-red-teaming`,`security-and-compliance`],solutions:[`predictive-analytics`,`ai-for-cybersecurity`,`generative-ai`],industries:[`ai-for-healthcare`,`ai-for-real-estate`,`ai-for-logistics-and-supply-chain`]}',
      relatedEntryIndustry(aiForFintechCopy),
    ],
    [
      '"ai-for-retail-and-ecommerce":{services:[`ai-chatbot-development`,`generative-ai-development`,`predictive-modeling`],solutions:[`conversational-ai`,`predictive-analytics`,`generative-ai`],industries:[`ai-for-healthcare`,`ai-for-logistics-and-supply-chain`,`ai-for-education`]}',
      relatedEntryIndustry(aiForRetailCopy),
    ],
    [
      '"ai-for-manufacturing":{services:[`predictive-modeling`,`intelligent-automation`,`real-time-data-streaming`],solutions:[`predictive-analytics`,`computer-vision-image-recognition`,`ai-automation`],industries:[`ai-for-logistics-and-supply-chain`,`ai-for-fintech`,`ai-for-real-estate`]}',
      relatedEntryIndustry(aiForManufacturingCopy),
    ],
    [
      '"ai-for-logistics-and-supply-chain":{services:[`predictive-modeling`,`autonomous-ai-agents`,`real-time-data-streaming`],solutions:[`predictive-analytics`,`ai-automation`,`conversational-ai`],industries:[`ai-for-manufacturing`,`ai-for-retail-and-ecommerce`,`ai-for-fintech`]}',
      relatedEntryIndustry(aiForLogisticsCopy),
    ],
    [
      '"ai-for-real-estate":{services:[`predictive-modeling`,`ai-chatbot-development`,`machine-learning`],solutions:[`predictive-analytics`,`conversational-ai`,`generative-ai`],industries:[`ai-for-fintech`,`ai-for-retail-and-ecommerce`,`ai-for-education`]}',
      relatedEntryIndustry(aiForRealEstateCopy),
    ],
    [
      '"ai-for-education":{services:[`ai-training-and-support`,`natural-language-processing`,`ai-chatbot-development`],solutions:[`conversational-ai`,`generative-ai`,`predictive-analytics`],industries:[`ai-for-healthcare`,`ai-for-retail-and-ecommerce`,`ai-for-fintech`]}',
      relatedEntryIndustry(aiForEducationCopy),
    ],
    [
      '"hire-ai-engineers":{services:[`artificial-intelligence`,`ai-agent-development`,`generative-ai-development`],solutions:[`ai-automation`,`generative-ai`,`conversational-ai`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-retail-and-ecommerce`]}',
      relatedEntryIndustry(hireAiEngineersCopy),
    ],
    [
      '"hire-ml-engineers":{services:[`machine-learning`,`predictive-modeling`,`mlops-setup`],solutions:[`predictive-analytics`,`ai-automation`,`generative-ai`],industries:[`ai-for-fintech`,`ai-for-manufacturing`,`ai-for-logistics-and-supply-chain`]}',
      relatedEntryIndustry(hireMlEngineersCopy),
    ],
    [
      '"hire-data-scientists":{services:[`data-and-cloud`,`predictive-modeling`,`machine-learning`],solutions:[`predictive-analytics`,`ai-automation`,`ai-for-cybersecurity`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-retail-and-ecommerce`]}',
      relatedEntryIndustry(hireDataScientistsCopy),
    ],
    [
      '"hire-nlp-engineers":{services:[`natural-language-processing`,`ai-chatbot-development`,`generative-ai-development`],solutions:[`conversational-ai`,`generative-ai`,`ai-automation`],industries:[`ai-for-retail-and-ecommerce`,`ai-for-healthcare`,`ai-for-education`]}',
      relatedEntryIndustry(hireNlpEngineersCopy),
    ],
    [
      '"hire-computer-vision-developers":{services:[`machine-learning`,`autonomous-ai-agents`,`intelligent-automation`],solutions:[`computer-vision-image-recognition`,`ai-automation`,`predictive-analytics`],industries:[`ai-for-manufacturing`,`ai-for-retail-and-ecommerce`,`ai-for-logistics-and-supply-chain`]}',
      relatedEntryIndustry(hireComputerVisionCopy),
    ],
    [
      '"dedicated-ai-pods":{services:[`artificial-intelligence`,`machine-learning`,`ai-agent-development`],solutions:[`ai-automation`,`predictive-analytics`,`generative-ai`],industries:[`ai-for-fintech`,`ai-for-healthcare`,`ai-for-manufacturing`]}',
      relatedEntryIndustry(dedicatedAiPodsCopy),
    ],
  ];
  for (const [from, to] of relatedOrig) {
    detail = mustReplace(detail, from, to, `related ${from.slice(1, 32)}`);
  }

  let sections = buffers[FILES.sections];
  sections = mustReplace(
    sections,
    'i===t&&(0,y.jsx)(a.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{duration:.35,ease:[.21,.65,.36,1]},children:(0,y.jsx)(`p`,{className:`px-6 pb-6 pl-[4.2rem] text-sm leading-relaxed text-dusk/70 md:text-base`,children:e.a})})',
    '(0,y.jsx)(`div`,{style:i===t?{height:`auto`,opacity:1}:{display:`none`},children:(0,y.jsx)(`p`,{className:`px-6 pb-6 pl-[4.2rem] text-sm leading-relaxed text-dusk/70 md:text-base`,children:e.a})})',
    'faq answers always in DOM',
  );

  seo = mustReplace(seo, 'About DigiWorks AI | Enterprise AI Company in Austin, USA', aboutCopy.title, 'seo about title');
  seo = mustReplace(
    seo,
    'Learn about DigiWorks AI: an enterprise-grade AI development company headquartered in Austin, TX. Strong governance, transparent methodology, reliable engineering.',
    aboutCopy.description,
    'seo about desc',
  );
  seo = mustReplace(seo, 'Meet the DigiWorks AI Team | AI Engineers, Data Scientists', teamCopy.title, 'seo team title');
  seo = mustReplace(
    seo,
    'Meet the leadership and engineering minds behind DigiWorks AI across Austin, Dubai, Guangzhou, and Karachi. Senior AI engineers and data scientists.',
    teamCopy.description,
    'seo team desc',
  );
  seo = mustReplace(seo, 'Case Studies | AI Projects by DigiWorks AI | USA', caseStudiesCopy.title, 'seo cases title');
  seo = mustReplace(
    seo,
    'Explore real-world AI and mobile app case studies by DigiWorks AI. Production-grade solutions across social, sports, pet, gaming, and lifestyle products.',
    caseStudiesCopy.description,
    'seo cases desc',
  );
  seo = mustReplace(seo, 'Free AI Readiness Assessment | Score Your Business', aiReadinessCopy.title, 'seo readiness title');
  seo = mustReplace(
    seo,
    'Answer 5 questions, get a graded AI readiness score for your US business in 60 seconds — plus the next step that fits exactly where you are.',
    aiReadinessCopy.description,
    'seo readiness desc',
  );
  seo = mustReplace(seo, 'Contact DigiWorks AI | Talk to Enterprise AI Experts', contactCopy.title, 'seo contact title');
  seo = mustReplace(
    seo,
    'Contact DigiWorks AI: discuss your enterprise AI project with our experts. Offices in Austin, Dubai, Guangzhou, and Karachi. Call +1 737 394 5488.',
    contactCopy.description,
    'seo contact desc',
  );
  seo = mustReplace(seo, 'DigiWorks AI Blog | Enterprise AI Insights & Guides', blogCopy.title, 'seo blog title');
  seo = mustReplace(
    seo,
    'Industry trends, market insights, and engineering lessons from the DigiWorks AI team. Enterprise AI implementation, governance, and architecture.',
    blogCopy.description,
    'seo blog desc',
  );
  seo = mustReplace(seo, 'Privacy Policy | DigiWorks AI', privacyPolicyCopy.title, 'seo privacy title');
  seo = mustReplace(
    seo,
    'DigiWorks AI privacy policy. How we collect, use, secure, and retain your personal information. GDPR, CCPA, and HIPAA-aligned practices.',
    privacyPolicyCopy.description,
    'seo privacy desc',
  );
  seo = mustReplace(seo, 'Terms of Use | DigiWorks AI', termsOfUseCopy.title, 'seo terms title');
  seo = mustReplace(
    seo,
    'Terms of use for the DigiWorks AI website. Acceptable use, intellectual property, warranties, and limitation of liability.',
    termsOfUseCopy.description,
    'seo terms desc',
  );

  let about = buffers[FILES.about];
  about = mustReplace(about, 'We engineer intelligence that ships', aboutCopy.h1, 'about h1');
  about = mustReplace(
    about,
    "DigiWorks AI is the AI-native brand of DigiWorks Digital Inc. For 7+ years we've shipped products that move the metrics that matter — now we engineer intelligent systems built to reach production, not just demos.",
    aboutCopy.hero,
    'about hero',
  );
  about = mustReplace(about, '(0,A.jsx)(D,{faqs:i})', `(0,A.jsx)(D,{faqs:[${faqJs(aboutCopy.faqs)}]})`, 'about faqs');

  let team = buffers[FILES.team];
  team = mustReplace(team, 'The minds engineering what comes next', teamCopy.h1, 'team h1');
  team = mustReplace(
    team,
    'We turn business challenges into practical AI systems, scalable products, and smarter digital solutions, from Austin to Dubai, Guangzhou, Karachi, and Canada.',
    teamCopy.hero,
    'team hero',
  );

  let caseStudies = buffers[FILES.caseStudies];
  caseStudies = mustReplace(caseStudies, 'Real products.', caseStudiesCopy.h1Line1, 'cases h1 l1');
  caseStudies = mustReplace(caseStudies, 'Real outcomes.', caseStudiesCopy.h1Line2, 'cases h1 l2');
  caseStudies = mustReplace(
    caseStudies,
    'Twenty platforms we designed and engineered end to end, from first concept to launch, each powered by intelligent systems built for real-world impact.',
    caseStudiesCopy.hero,
    'cases hero',
  );

  let readiness = buffers[FILES.readiness];
  readiness = mustReplace(readiness, 'How ready is your business for AI?', aiReadinessCopy.h1, 'readiness h1');
  readiness = mustReplace(
    readiness,
    'Five questions. Sixty seconds. A graded readiness score with the next step that actually fits where you are.',
    aiReadinessCopy.hero,
    'readiness hero',
  );
  readiness = mustReplace(readiness, 'You’re earlier than you think, and that’s fine.', aiReadinessCopy.explorerHeadline, 'readiness explorer h');
  readiness = mustReplace(
    readiness,
    'Start with a discovery session to define one measurable problem and map your data readiness before any build. Most Explorers reach a credible AI roadmap in two weeks.',
    aiReadinessCopy.explorerAdvice,
    'readiness explorer a',
  );
  readiness = mustReplace(readiness, 'Book a Discovery Session', aiReadinessCopy.explorerCta, 'readiness explorer cta');
  readiness = mustReplace(readiness, 'You have real foundations. Time to pick the first win.', aiReadinessCopy.builderHeadline, 'readiness builder h');
  readiness = mustReplace(
    readiness,
    'You’re ready for a scoped pilot: one workflow, 8–12 weeks, measurable ROI. The risk now is choosing too many use cases at once, focus beats breadth.',
    aiReadinessCopy.builderAdvice,
    'readiness builder a',
  );
  readiness = mustReplace(readiness, 'Scope My Pilot', aiReadinessCopy.builderCta, 'readiness builder cta');
  readiness = mustReplace(readiness, 'You’re ready for production AI at scale.', aiReadinessCopy.leaderHeadline, 'readiness leader h');
  readiness = mustReplace(
    readiness,
    'With data, ownership, and governance in place, the conversation is architecture: agents, MLOps, and continuous optimization. You should be shipping within a quarter.',
    aiReadinessCopy.leaderAdvice,
    'readiness leader a',
  );
  readiness = mustReplace(readiness, 'Talk Architecture', aiReadinessCopy.leaderCta, 'readiness leader cta');

  let contact = buffers[FILES.contact];
  contact = mustReplace(contact, "Let's Talk About Your AI Project", contactCopy.h1, 'contact h1');
  contact = mustReplace(
    contact,
    "Our experts are ready to power your AI journey. Tell us what you're building and we'll map the fastest path to it.",
    contactCopy.hero,
    'contact hero',
  );
  contact = mustReplace(contact, 'Start a Conversation', contactCopy.formCta, 'contact form cta');
  contact = mustReplace(
    contact,
    'No spam, no obligation. Your details go straight to our solutions team.',
    contactCopy.formMicro,
    'contact form micro',
  );
  contact = mustReplace(
    contact,
    "Whatever you're building, there's a DigiWorks team for it.",
    contactCopy.capabilitiesSub,
    'contact capabilities sub',
  );
  contact = mustReplace(
    contact,
    'Present across 5 cities, one team, built to support you wherever you are.',
    contactCopy.officesSub,
    'contact offices sub',
  );

  let blog = buffers[FILES.blog];
  blog = mustReplace(blog, 'Fueling Growth through Innovation and Creativity', blogCopy.h1, 'blog h1');
  blog = mustReplace(
    blog,
    'Stay in touch with the latest industry trends, market insights, and news shaping the world of tomorrow.',
    blogCopy.hero,
    'blog hero',
  );

  app = mustReplace(
    app,
    'href:`mailto:${k.email}`,className:`group flex items-center gap-3 text-dusk/80 transition-colors hover:text-dusk`,children:[(0,D.jsx)(`span`,{className:`flex h-9 w-9 items-center justify-center rounded-xl border border-dusk/15 bg-dusk/[0.05] text-coral`,children:`@`}),k.email]',
    'href:`/contact.html`,className:`group flex items-center gap-3 text-dusk/80 transition-colors hover:text-dusk`,children:[(0,D.jsx)(`span`,{className:`flex h-9 w-9 items-center justify-center rounded-xl border border-dusk/15 bg-dusk/[0.05] text-coral`,children:`@`}),`Contact`]',
    'footer email widget',
  );

  let legal = buffers[FILES.legal];
  legal = mustReplace(
    legal,
    'DigiWorks AI delivers enterprise-grade AI solutions built on strong governance, transparent methodologies, and reliable engineering. That same standard applies to how we handle your data.',
    privacyPolicyCopy.intro,
    'privacy intro',
  );
  legal = mustReplace(
    legal,
    'These terms govern your use of the DigiWorks AI website and the materials published on it. By using this site, you agree to them.',
    termsOfUseCopy.intro,
    'terms intro',
  );

  const visibleJs = site.visibleCaseStudies.map((slug) => '`' + slug + '`').join(',');
  home = mustReplace(
    home,
    'u.slice(0,3).map((e,t)=>',
    `[${visibleJs}].map(s=>u.find(e=>e.slug===s)).filter(Boolean).map((e,t)=>`,
    'home visible case studies',
  );
  caseStudies = mustReplace(
    caseStudies,
    'function _(){let[e,t]=(0,m.useState)(`All`),n=[`All`,...g.filter(e=>i.some(t=>t.group===e))],_=e===`All`?i:i.filter(t=>t.group===e);',
    `function _(){let[e,t]=(0,m.useState)(\`All\`),VIS=new Set([${visibleJs}]),ii=i.filter(e=>VIS.has(e.slug)),n=[\`All\`,...g.filter(e=>ii.some(t=>t.group===e))],_=e===\`All\`?ii:ii.filter(t=>t.group===e);`,
    'case study grid filter',
  );
  app = mustReplace(
    app,
    '...i.caseStudies.map(e=>({to:`/case-studies/${e.slug}`',
    `...i.caseStudies.filter(e=>[${visibleJs}].includes(e.slug)).map(e=>({to:\`/case-studies/\${e.slug}\``,
    'search case studies',
  );

  home = patchHomeHero(home);
  ({ app, about, contact, home } = patchCompanyFacts({ app, about, contact, home }));

  const out = {
    [FILES.home]: home,
    [FILES.app]: app,
    [FILES.seo]: seo,
    [FILES.detail]: detail,
    [FILES.sections]: sections,
    [FILES.pageHero]: pageHero,
    [FILES.about]: about,
    [FILES.team]: team,
    [FILES.caseStudies]: caseStudies,
    [FILES.readiness]: readiness,
    [FILES.contact]: contact,
    [FILES.blog]: blog,
    [FILES.legal]: legal,
  };

  const required = [
    homeCopy.kicker,
    homeCopy.featuredSub,
    homeCopy.casesSub,
    homeCopy.roiCopy,
    homeCopy.blogSub,
    homeCopy.sectorsSub,
    homeCopy.hero,
    ...homeCopy.h1Lines.flatMap((l) => l.words),
    ...homeCopy.faqs.flatMap((f) => [f.q, f.a]),
    agentCopy.hero,
    agentCopy.title,
    ...agentCopy.faqs.flatMap((f) => [f.q, f.a]),
    'AI development FAQs',
    agentCopy.faqTitle,
    'Book a Call',
    'Book a Free Discovery Call',
    'View Case Studies',
    ...thinCopies.flatMap((c) => [c.hero, c.title, ...c.faqs.flatMap((f) => [f.q, f.a])]),
    ...batch2.flatMap(([c]) => [c.hero, c.title, ...c.faqs.flatMap((f) => [f.q, f.a])]),
    ...solutions.flatMap(([c]) => [c.hero, c.title, ...c.faqs.flatMap((f) => [f.q, f.a])]),
    aiForCybersecurityCopy.hero,
    aiForCybersecurityCopy.title,
    ...aiForCybersecurityCopy.faqs.flatMap((f) => [f.q, f.a]),
    ...industries.flatMap(([c]) => [c.hero, c.title, ...c.faqs.flatMap((f) => [f.q, f.a])]),
    aiForEducationCopy.hero,
    aiForEducationCopy.title,
    ...aiForEducationCopy.faqs.flatMap((f) => [f.q, f.a]),
    dedicatedAiPodsCopy.hero,
    dedicatedAiPodsCopy.title,
    ...dedicatedAiPodsCopy.faqs.flatMap((f) => [f.q, f.a]),
    ...hirePages.flatMap(([c]) => [c.hero, c.title, ...c.faqs.flatMap((f) => [f.q, f.a])]),
    aboutCopy.hero,
    aboutCopy.title,
    ...aboutCopy.faqs.flatMap((f) => [f.q, f.a]),
    teamCopy.hero,
    teamCopy.title,
    caseStudiesCopy.hero,
    caseStudiesCopy.title,
    aiReadinessCopy.hero,
    aiReadinessCopy.title,
    contactCopy.hero,
    contactCopy.title,
    blogCopy.hero,
    blogCopy.title,
    privacyPolicyCopy.intro,
    privacyPolicyCopy.title,
    termsOfUseCopy.intro,
    termsOfUseCopy.title,
    aiRedTeamingCopy.hero,
    aiRedTeamingCopy.title,
    ...aiRedTeamingCopy.faqs.flatMap((f) => [f.q, f.a]),
  ];
  const blob = Object.values(out).join('\n');
  for (const s of required) {
    if (!blob.includes(s)) {
      throw new Error(`SPA copy sync: copy string never landed in bundles: ${s.slice(0, 120)}`);
    }
  }

  mkdirSync(join(destDir, 'assets'), { recursive: true });
  for (const [name, text] of Object.entries(out)) {
    writeFileSync(join(destDir, name), text);
  }
  writeFileSync(join(destDir, 'assets', FILES.seo), out[FILES.seo]);

  const dataPath = join(destDir, 'caseStudies-3DQGQmTb.js');
  let data = readFileSync(dataPath, 'utf8');
  const dataMarker = '],r=[{phase:`Discovery & Alignment`';
  if (!data.includes('slug:`checkmate`')) {
    const at = data.indexOf(dataMarker);
    if (at < 0) throw new Error('SPA copy sync: case study catalog end missing');
    const entry =
      ',{slug:`checkmate`,name:`Checkmate`,tagline:`Doubled Peak-Hour Order Capacity`,category:`AI Restaurant Ordering Platform`,group:`Restaurants`,accent:`from-cyan to-electric`,brandBlue:`#29a3dc`,brandNavy:`#0d2745`,layout:`metrics`}';
    data = data.slice(0, at) + entry + data.slice(at);
  }
  if (!data.includes('slug:`lead-scout`')) {
    const at = data.indexOf(dataMarker);
    if (at < 0) throw new Error('SPA copy sync: case study catalog end missing');
    const entry =
      ',{slug:`lead-scout`,name:`Lead Scout`,tagline:`About 35–40% Less Research Time`,category:`AI Lead Generation Platform`,group:`Sales`,cover:`/case/lead-scout/lead-scout-01.webp`,accent:`from-electric to-cyan`,brandBlue:`#308eff`,brandNavy:`#0d2745`,layout:`metrics`}';
    data = data.slice(0, at) + entry + data.slice(at);
  }
  if (!data.includes('slug:`orange-ruler`')) {
    const at = data.indexOf(dataMarker);
    if (at < 0) throw new Error('SPA copy sync: case study catalog end missing');
    const entry =
      ',{slug:`orange-ruler`,name:`Orange Ruler`,tagline:`About 80% Faster Campaign Setup`,category:`School Fundraising Software`,group:`Education`,cover:`/case/orange-ruler/orange-ruler-01.webp`,accent:`from-coral to-violet`,brandBlue:`#f5a623`,brandNavy:`#1a2744`,layout:`metrics`}';
    data = data.slice(0, at) + entry + data.slice(at);
  }
  if (!data.includes('slug:`person-care`')) {
    const at = data.indexOf(dataMarker);
    if (at < 0) throw new Error('SPA copy sync: case study catalog end missing');
    const entry =
      ',{slug:`person-care`,name:`Person Care`,tagline:`About 25–35% Less Admin Work`,category:`Digital Health Platform`,group:`Healthcare`,cover:`/case/person-care/person-care-01.webp`,accent:`from-coral to-electric`,brandBlue:`#f47b20`,brandNavy:`#1a2744`,layout:`metrics`}';
    data = data.slice(0, at) + entry + data.slice(at);
  }
  writeFileSync(dataPath, data);

  writeFileSync(
    join(destDir, 'checkmate-body.js'),
    `export const html = ${JSON.stringify(checkmateSectionsHtml())};\n`,
  );
  writeFileSync(
    join(destDir, 'lead-scout-body.js'),
    `export const html = ${JSON.stringify(leadScoutSectionsHtml())};\n`,
  );
  writeFileSync(
    join(destDir, 'orange-ruler-body.js'),
    `export const html = ${JSON.stringify(orangeRulerSectionsHtml())};\n`,
  );
  writeFileSync(
    join(destDir, 'person-care-body.js'),
    `export const html = ${JSON.stringify(personCareSectionsHtml())};\n`,
  );

  const detailPath = join(destDir, 'CaseStudyDetail-r_3xQvln.js');
  let detailFile = readFileSync(detailPath, 'utf8');
  if (!detailFile.includes('checkmate-body.js')) {
    const importAt = detailFile.indexOf('import b from"./NotFound-Z1KVdJMv.js";');
    if (importAt < 0) throw new Error('SPA copy sync: CaseStudyDetail import anchor missing');
    const importEnd = importAt + 'import b from"./NotFound-Z1KVdJMv.js";'.length;
    detailFile =
      detailFile.slice(0, importEnd) +
      'import{html as CHECKMATE_HTML}from"./checkmate-body.js";' +
      detailFile.slice(importEnd);
    const branchFrom = '!t)return(0,S.jsx)(b,{});let i=h(t)';
    const branchTo =
      '!t)return(0,S.jsx)(b,{});if(t.slug===`checkmate`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:CHECKMATE_HTML}});let i=h(t)';
    if (!detailFile.includes(branchFrom)) throw new Error('SPA copy sync: CaseStudyDetail branch anchor missing');
    detailFile = detailFile.replace(branchFrom, branchTo);
    writeFileSync(detailPath, detailFile);
  }
  if (!detailFile.includes('lead-scout-body.js')) {
    detailFile = readFileSync(detailPath, 'utf8');
    const importMark = 'import{html as CHECKMATE_HTML}from"./checkmate-body.js";';
    const importAt = detailFile.indexOf(importMark);
    if (importAt < 0) throw new Error('SPA copy sync: Checkmate import anchor missing');
    const importEnd = importAt + importMark.length;
    detailFile =
      detailFile.slice(0, importEnd) +
      'import{html as LEAD_SCOUT_HTML}from"./lead-scout-body.js";' +
      detailFile.slice(importEnd);
    const leadFrom =
      'if(t.slug===`checkmate`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:CHECKMATE_HTML}});let i=h(t)';
    const leadTo =
      'if(t.slug===`checkmate`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:CHECKMATE_HTML}});if(t.slug===`lead-scout`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:LEAD_SCOUT_HTML}});let i=h(t)';
    if (!detailFile.includes(leadFrom)) throw new Error('SPA copy sync: Lead Scout branch anchor missing');
    detailFile = detailFile.replace(leadFrom, leadTo);
    writeFileSync(detailPath, detailFile);
  }
  if (!detailFile.includes('orange-ruler-body.js')) {
    detailFile = readFileSync(detailPath, 'utf8');
    const importMark = 'import{html as LEAD_SCOUT_HTML}from"./lead-scout-body.js";';
    const importAt = detailFile.indexOf(importMark);
    if (importAt < 0) throw new Error('SPA copy sync: Lead Scout import anchor missing');
    const importEnd = importAt + importMark.length;
    detailFile =
      detailFile.slice(0, importEnd) +
      'import{html as ORANGE_RULER_HTML}from"./orange-ruler-body.js";' +
      detailFile.slice(importEnd);
    const orangeFrom =
      'if(t.slug===`lead-scout`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:LEAD_SCOUT_HTML}});let i=h(t)';
    const orangeTo =
      'if(t.slug===`lead-scout`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:LEAD_SCOUT_HTML}});if(t.slug===`orange-ruler`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:ORANGE_RULER_HTML}});let i=h(t)';
    if (!detailFile.includes(orangeFrom)) throw new Error('SPA copy sync: Orange Ruler branch anchor missing');
    detailFile = detailFile.replace(orangeFrom, orangeTo);
    writeFileSync(detailPath, detailFile);
  }
  if (!detailFile.includes('person-care-body.js')) {
    detailFile = readFileSync(detailPath, 'utf8');
    const importMark = 'import{html as ORANGE_RULER_HTML}from"./orange-ruler-body.js";';
    const importAt = detailFile.indexOf(importMark);
    if (importAt < 0) throw new Error('SPA copy sync: Orange Ruler import anchor missing');
    const importEnd = importAt + importMark.length;
    detailFile =
      detailFile.slice(0, importEnd) +
      'import{html as PERSON_CARE_HTML}from"./person-care-body.js";' +
      detailFile.slice(importEnd);
    const personFrom =
      'if(t.slug===`orange-ruler`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:ORANGE_RULER_HTML}});let i=h(t)';
    const personTo =
      'if(t.slug===`orange-ruler`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:ORANGE_RULER_HTML}});if(t.slug===`person-care`)return(0,S.jsx)(`div`,{dangerouslySetInnerHTML:{__html:PERSON_CARE_HTML}});let i=h(t)';
    if (!detailFile.includes(personFrom)) throw new Error('SPA copy sync: Person Care branch anchor missing');
    detailFile = detailFile.replace(personFrom, personTo);
    writeFileSync(detailPath, detailFile);
  }
  detailFile = readFileSync(detailPath, 'utf8');
  const exploreTo = `let n=s.filter(t=>t.slug!==e&&[${visibleJs}].includes(t.slug)).slice(0,3);`;
  const exploreRe = /let n=s\.filter\(t=>t\.slug!==e(?:&&\[[^\]]*\]\.includes\(t\.slug\))?\)\.slice\(0,3\);/;
  if (!detailFile.includes(exploreTo)) {
    if (!exploreRe.test(detailFile)) throw new Error('SPA copy sync: Keep exploring anchor missing');
    detailFile = detailFile.replace(exploreRe, exploreTo);
    writeFileSync(detailPath, detailFile);
  }

  for (const file of ['CustomAppDevelopment-SQouYROq.js', 'CustomMobileAppDevelopment-lMpXbLO8.js']) {
    const showcasePath = join(destDir, file);
    let showcase = readFileSync(showcasePath, 'utf8');
    const start = showcase.indexOf('[{img:`driveguard-img1.png`');
    if (start >= 0) {
      const end = showcase.indexOf('];function', start);
      if (end < 0) throw new Error(`SPA copy sync: showcase end missing in ${file}`);
      const showcaseCards = {
        checkmate: {
          img: '/case/checkmate/checkmate-01.webp',
          alt: 'Checkmate',
          title: 'Checkmate',
          desc: 'Doubled Peak-Hour Order Capacity',
        },
        'lead-scout': {
          img: '/case/lead-scout/lead-scout-01.webp',
          alt: 'Lead Scout',
          title: 'Lead Scout',
          desc: 'About 35–40% Less Research Time',
        },
        'orange-ruler': {
          img: '/case/orange-ruler/orange-ruler-01.webp',
          alt: 'Orange Ruler',
          title: 'Orange Ruler',
          desc: 'About 80% Faster Campaign Setup',
        },
        'person-care': {
          img: '/case/person-care/person-care-01.webp',
          alt: 'Person Care',
          title: 'Person Care',
          desc: 'About 25–35% Less Admin Work',
        },
      };
      const items = site.visibleCaseStudies
        .map((slug) => {
          const card = showcaseCards[slug];
          if (!card) throw new Error(`SPA copy sync: showcase card missing for ${slug}`);
          return `{img:\`${card.img}\`,alt:\`${card.alt}\`,title:\`${card.title}\`,desc:\`${card.desc}\`,slug:\`${slug}\`}`;
        })
        .join(',');
      showcase = showcase.slice(0, start) + '[' + items + ']' + showcase.slice(end + 1);
    }
    const srcFrom = 'src:`/cad/${e.img}`';
    const srcTo = 'src:String(e.img).startsWith(`/`)?e.img:`/cad/${e.img}`';
    if (showcase.includes(srcFrom)) showcase = showcase.replaceAll(srcFrom, srcTo);
    writeFileSync(showcasePath, showcase);
  }

  const appPath = join(destDir, FILES.app);
  let appJs = readFileSync(appPath, 'utf8');
  const popupFrom = 'function Re(){let[e,t]=(0,S.useState)(!1)';
  const popupTo = 'function Re(){if(window.__DW_POPUP_ENABLED===false)return null;let[e,t]=(0,S.useState)(!1)';
  if (!appJs.includes(popupTo)) {
    if (!appJs.includes(popupFrom)) throw new Error('SPA copy sync: Get in touch popup anchor missing');
    appJs = appJs.replace(popupFrom, popupTo);
  }

  // Keep the header on screen while scrolling. The solid state is a full-width
  // bar (inline style beats the floating-pill utilities, which are not all in the CSS bundle).
  const scrollFrom =
    'g.pathname===`/`)f(!n&&t>r*.82),h(t>24);else if(e){let e=t>r*.85;f(!n&&e),h(!1)}else t<80?f(!1):!n&&i>4?f(!0):i<-4&&f(!1),h(t>24);';
  const scrollTo =
    'g.pathname===`/`)f(!1),h(t>24);else if(e){let e=t>r*.85;f(!n&&e),h(!1)}else f(!1),h(t>24);';
  if (!appJs.includes(scrollTo)) {
    if (!appJs.includes(scrollFrom)) throw new Error('SPA copy sync: header scroll anchor missing');
    appJs = appJs.replace(scrollFrom, scrollTo);
  }
  const barFrom = 'bg-transparent`}`,onMouseLeave:()=>t(null)';
  const barTo = 'bg-transparent`}`,style:p?{margin:0,maxWidth:`100%`,width:`100%`,borderRadius:0}:void 0,onMouseLeave:()=>t(null)';
  if (!appJs.includes(barTo)) {
    if (!appJs.includes(barFrom)) throw new Error('SPA copy sync: header bar anchor missing');
    appJs = appJs.replace(barFrom, barTo);
  }
  const standardsCall =
    '(0,D.jsx)(`div`,{className:`mt-10 border-t border-dusk/10 pt-8`,children:(0,D.jsx)($e,{})}),';
  if (appJs.includes(standardsCall)) appJs = appJs.replace(standardsCall, '');
  const standardsFn = 'function $e({className:e=``}){';
  if (!appJs.includes('function $e(){return null}')) {
    const fnStart = appJs.indexOf(standardsFn);
    const fnEnd = appJs.indexOf('var et=', fnStart);
    if (fnStart < 0 || fnEnd < 0) throw new Error('SPA copy sync: standards footer missing');
    appJs = appJs.slice(0, fnStart) + 'function $e(){return null}' + appJs.slice(fnEnd);
  }
  writeFileSync(appPath, appJs);

  const cardPath = join(destDir, 'CaseCard-Dxe-8ojB.js');
  let cardJs = readFileSync(cardPath, 'utf8');
  const webFrom = 's={"thrive-city":`web`,"draft-day":`web`,"milestone-truck":`web`}';
  const webTo =
    's={"thrive-city":`web`,"draft-day":`web`,"milestone-truck":`web`,checkmate:`web`,"lead-scout":`web`,"orange-ruler":`web`,"person-care":`web`}';
  if (!cardJs.includes(webTo)) {
    if (!cardJs.includes(webFrom)) throw new Error('SPA copy sync: CaseCard web-frame map missing');
    cardJs = cardJs.replace(webFrom, webTo);
  }
  const imgFrom = '"addiction-world":`/case/addiction-world/aw-customer-interface-splash.webp`}';
  const imgTo =
    '"addiction-world":`/case/addiction-world/aw-customer-interface-splash.webp`,checkmate:`/case/checkmate/checkmate-01.webp`,"lead-scout":`/case/lead-scout/lead-scout-01.webp`,"orange-ruler":`/case/orange-ruler/orange-ruler-01.webp`,"person-care":`/case/person-care/person-care-01.webp`}';
  if (!cardJs.includes('checkmate:`/case/checkmate/checkmate-01.webp`')) {
    if (!cardJs.includes(imgFrom)) throw new Error('SPA copy sync: CaseCard image map missing');
    cardJs = cardJs.replace(imgFrom, imgTo);
  }
  writeFileSync(cardPath, cardJs);

  const fridayPath = join(destDir, 'Friday-DI4w5Yvh.js');
  if (existsSync(fridayPath)) {
    let friday = readFileSync(fridayPath, 'utf8');
    const fridayFrom =
      'DigiWorks is headquartered in Austin, Texas, with engineering teams in Karachi, Dubai and Guangzhou, and that spread is exactly why five days is possible. When the US team signs off a screen at the end of the day, the next shift is already at their desks, so your build moves while you sleep. ';
    const fridayTo =
      'DigiWorks AI is headquartered in Austin, Texas, with an office in London, United Kingdom, and has been building software since 2017. ';
    if (friday.includes(fridayFrom)) friday = friday.replace(fridayFrom, fridayTo);
    writeFileSync(fridayPath, friday);
  }

  for (const file of ['CustomAppDevelopment-SQouYROq.js', 'CustomMobileAppDevelopment-lMpXbLO8.js']) {
    const extraPath = join(destDir, file);
    if (!existsSync(extraPath)) continue;
    let extra = readFileSync(extraPath, 'utf8');
    extra = extra.replaceAll('· Since 2025', '· Since 2017');
    extra = extra.replaceAll('{iso:`CA`,dial:`+1`,country:`Canada`,label:`CA +1`,flag:`ca`},', '');
    extra = extra.replaceAll('{iso:`CA`,dial:`+1`,country:`Canada`,label:`🇨🇦 +1`},', '');
    writeFileSync(extraPath, extra);
  }

  const staleApp = join(destDir, 'app-D-hvFJBY.js');
  if (existsSync(staleApp)) {
    let stale = readFileSync(staleApp, 'utf8');
    if (stale.includes('city:`Dubai`')) {
      const patched = patchCompanyFacts({
        app: stale,
        about:
          'M={Austin:{cx:39,cy:52},Canada:{cx:49,cy:43},Dubai:{cx:122,cy:56},Karachi:{cx:128,cy:56},Guangzhou:{cx:153,cy:57}}Five time zones.Five offices across the globe, engineering around the clock so your momentum never stops.mx-auto mt-7 grid w-full max-w-5xl grid-cols-2 justify-center gap-3.5 sm:grid-cols-3 lg:grid-cols-5',
        contact:
          'Our Global Offices`Worldwide`mx-auto grid max-w-[80rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5{v:`5`,l:`Global offices`}b={Austin:`https://images.unsplash.com/photo-1531218150217-54595bc2b934?w=1400&q=85&auto=format&fit=crop`,Dubai:`https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1400&q=85&auto=format&fit=crop`,Canada:`https://images.unsplash.com/photo-1517935706615-2717063c2225?w=1400&q=85&auto=format&fit=crop`,Guangzhou:`https://images.unsplash.com/photo-1584646098378-0874589d76b1?w=1400&q=85&auto=format&fit=crop`,Karachi:`https://images.unsplash.com/photo-1611068661807-c850d6a24f62?w=1400&q=85&auto=format&fit=crop`},x={Austin:`#0e59b3`,Dubai:`#00c8ff`,Canada:`#7c3aed`,Guangzhou:`#22c55e`,Karachi:`#e11d48`}S={US:`🇺🇸`,AE:`🇦🇪`,CA:`🇨🇦`,CN:`🇨🇳`,PK:`🇵🇰`}',
        home: 'children:`5`}),(0,L.jsx)(`p`,{className:`text-xs text-dusk/60`,children:`global offices`})',
      });
      stale = patched.app;
      writeFileSync(staleApp, stale);
    }
  }

  console.log('SPA copy sync: ok');
}

sync();
