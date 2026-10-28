/**
 * DigiWorks AI — site-wide configuration.
 * Analytics scripts only load when IDs are non-empty.
 */
export const ORG_ID = 'https://digiworksai.com/#organization';
export const WEBSITE_ID = 'https://digiworksai.com/#website';

export const site = {
  name: 'DigiWorks AI',
  legalName: 'DigiWorks AI',
  tagline: 'Enterprise AI & software development partner',
  entityStatement:
    'DigiWorks AI is an Austin, Texas-based AI development company that helps US businesses design, build, and scale production AI, including AI agents, generative AI, predictive analytics, and intelligent automation, along with the web, mobile, and cloud software around it.',
  description:
    'DigiWorks AI builds production AI, custom software, automation, and blockchain solutions for US startups, SMBs, and enterprises.',
  url: 'https://digiworksai.com',
  domain: 'digiworksai.com',
  stagingHost: 'digiworks-ashy.vercel.app',
  locale: 'en_US',
  language: 'en',
  themeColor: '#060a14',
  /** Exit-intent / timed "Get in touch" modal in app-digi.js. Set true to restore it. */
  popupEnabled: false,
  /**
   * Case-study cards and in-page links. Add a slug to show that study again.
   * Older studies stay noindex and out of the sitemap until their pages are rewritten.
   */
  visibleCaseStudies: ['checkmate', 'lead-scout'],
  email: '',
  phone: '+1-737-394-5488',
  phoneDisplay: '+1 737 394 5488',
  phoneTel: 'tel:+17373945488',
  whatsapp: '13468291047',
  whatsappUrl: 'https://wa.me/13468291047',
  logo: '/logo.png',
  logoWhite: '/logo-white.png',
  faviconSvg: '/favicon5e1f.svg?v=2',
  faviconPng: '/mark5e1f.png?v=2',
  appleTouchIcon: '/mark5e1f.png?v=2',
  ogImage: '/og-image.png',
  manifest: '/site.webmanifest',
  verified: {
    deployments: '150+',
    sectors: '7+',
    offices: '5',
    newsletterReaders: '2,000+',
    productionWeeks: '8-20 weeks',
    projectDelivery: '8-20 week delivery',
    podReady: '2-3 weeks',
    embedOnboard: '1-2 weeks',
  },
  heroCounters: [
    { value: 150, suffix: '+', label: 'Production AI deployments' },
    { value: 7, suffix: '+', label: 'Sectors served' },
    { value: 5, suffix: '', label: 'Global offices' },
    { value: 8, suffix: '–20 weeks', label: 'To production AI' },
  ],
  offices: [
    {
      name: 'Austin',
      isHq: true,
      streetAddress: '716 Congress Ave #200',
      addressLocality: 'Austin',
      addressRegion: 'TX',
      postalCode: '78701',
      addressCountry: 'US',
      formatted: '716 Congress Ave #200, Austin, TX 78701, USA',
    },
    {
      name: 'Dubai',
      streetAddress: 'Building A1, Dubai Digital Park, Dubai Silicon Oasis',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
      formatted: 'Building A1, Dubai Digital Park, Dubai Silicon Oasis, Dubai',
    },
    {
      name: 'Karachi',
      streetAddress: 'Suite No. 108, 1st Floor, Park Avenue, Shahra-e-Faisal, Block 6 PECHS',
      addressLocality: 'Karachi',
      postalCode: '75350',
      addressCountry: 'PK',
      formatted: 'Suite No. 108, 1st Floor, Park Avenue, Shahra-e-Faisal, Block 6 PECHS, Karachi 75350',
    },
    { name: 'Canada', addressLocality: 'Canada', addressCountry: 'CA', formatted: '' },
    { name: 'Guangzhou', addressLocality: 'Guangzhou', addressCountry: 'CN', formatted: '' },
  ],
  address: {
    streetAddress: '716 Congress Ave #200',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78701',
    addressCountry: 'US',
    formatted: '716 Congress Ave #200, Austin, TX 78701, USA',
  },
  social: {
    linkedin: '',
    twitter: '',
    facebook: '',
    instagram: '',
    youtube: '',
    threads: '',
  },
  analytics: {
    googleAnalyticsId: '',
    googleTagManagerId: '',
    microsoftClarityId: '',
    metaPixelId: '',
    tawkPropertyId: '',
    tawkWidgetId: '',
    openaiPixelId: '',
    cloudflareBeaconToken: '',
  },
  nav: {
    primary: [
      { label: 'Services', href: '/services/artificial-intelligence.html' },
      { label: 'Solutions', href: '/solutions/ai-automation.html' },
      { label: 'Industries', href: '/industries/ai-for-healthcare.html' },
      { label: 'Hire Developers', href: '/hire/hire-ai-engineers.html' },
      { label: 'Company', href: '/about.html' },
      { label: 'Case Studies', href: '/case-studies.html' },
    ],
  },
} as const;

export function absoluteUrl(path: string): string {
  if (!path || path === '/') return site.url + '/';
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${site.url}${p}`;
}
