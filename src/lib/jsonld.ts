import { ORG_ID, WEBSITE_ID, absoluteUrl, site } from '../data/site';

export type PageKind =
  | 'home'
  | 'about'
  | 'contact'
  | 'blogPost'
  | 'blogIndex'
  | 'caseStudy'
  | 'caseIndex'
  | 'service'
  | 'solution'
  | 'industry'
  | 'hire'
  | 'legal'
  | 'page';

/** Option B: freeze-skipped URLs stay live but must not be indexed until rewritten. */
export function isOwnerSkipIndex(canonicalPath: string): boolean {
  const p = canonicalPath === '/' ? '/' : canonicalPath.replace(/\.html$/, '');
  if (p === '/team') return true;
  if (p.startsWith('/blog/')) return true;
  if (
    p.startsWith('/case-studies/') &&
    p !== '/case-studies/checkmate' &&
    p !== '/case-studies/lead-scout'
  ) {
    return true;
  }
  return false;
}

export function kindFromPath(canonicalPath: string): PageKind {
  const p = canonicalPath === '/' ? '/' : canonicalPath.replace(/\.html$/, '');
  if (p === '/') return 'home';
  if (p === '/about') return 'about';
  if (p === '/contact') return 'contact';
  if (p === '/blog') return 'blogIndex';
  if (p.startsWith('/blog/')) return 'blogPost';
  if (p === '/case-studies') return 'caseIndex';
  if (p.startsWith('/case-studies/')) return 'caseStudy';
  if (p.startsWith('/services/')) return 'service';
  if (p.startsWith('/solutions/')) return 'solution';
  if (p.startsWith('/industries/')) return 'industry';
  if (p.startsWith('/hire/')) return 'hire';
  if (p === '/privacy-policy' || p === '/terms-of-use') return 'legal';
  return 'page';
}

function crumbName(segment: string): string {
  return segment
    .replace(/\.html$/, '')
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

const HUB_HREF: Record<string, string> = {
  services: '/services/artificial-intelligence.html',
  solutions: '/solutions/ai-automation.html',
  industries: '/industries/ai-for-healthcare.html',
  hire: '/hire/hire-ai-engineers.html',
  blog: '/blog.html',
  'case-studies': '/case-studies.html',
};

export function breadcrumbs(canonicalPath: string, pageTitle: string) {
  const path = canonicalPath === '/' ? '/' : canonicalPath;
  const parts = path.split('/').filter(Boolean);
  const items: { name: string; item?: string }[] = [{ name: 'Home', item: `${site.url}/` }];
  let acc = '';
  parts.forEach((part, i) => {
    acc += `/${part}`;
    const isLast = i === parts.length - 1;
    const key = part.replace(/\.html$/, '');
    const href = HUB_HREF[key] ?? (acc.endsWith('.html') ? acc : `${acc}.html`);
    items.push({
      name: isLast ? pageTitle.replace(/\s*\|\s*DigiWorks AI\s*$/, '') : crumbName(key),
      ...(isLast ? {} : { item: absoluteUrl(href === '/index.html' ? '/' : href) }),
    });
  });
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((entry, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  };
}

export function organizationNode() {
  const sameAs = Object.values(site.social).filter((u) => Boolean(u));
  const org: Record<string, unknown> = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: `${site.url}/`,
    logo: absoluteUrl(site.logo),
    description: site.entityStatement,
    telephone: site.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    areaServed: ['United States', 'Worldwide'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phone,
      contactType: 'sales',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
  };
  if (site.email) org.email = site.email;
  if (sameAs.length) org.sameAs = sameAs;
  return org;
}

function webPageNode(kind: PageKind, title: string, description: string, canonical: string) {
  const extraType =
    kind === 'about'
      ? 'AboutPage'
      : kind === 'contact'
        ? 'ContactPage'
        : kind === 'blogIndex'
          ? 'CollectionPage'
          : 'WebPage';
  return {
    '@type': extraType,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    inLanguage: 'en-US',
  };
}

function serviceNode(title: string, description: string) {
  return {
    '@type': 'Service',
    name: title.replace(/\s*\|\s*DigiWorks AI\s*$/, ''),
    serviceType: title.replace(/\s*\|\s*DigiWorks AI\s*$/, ''),
    description,
    provider: { '@id': ORG_ID },
    areaServed: ['United States', 'Worldwide'],
  };
}

export function buildJsonLd(opts: {
  kind: PageKind;
  title: string;
  description: string;
  canonicalPath: string;
  datePublished?: string;
  dateModified?: string;
  faqs?: { q: string; a: string }[];
  image?: string;
}): string {
  const canonical = absoluteUrl(opts.canonicalPath === '/' ? '/' : opts.canonicalPath);
  const graph: Record<string, unknown>[] = [organizationNode()];

  if (opts.kind === 'home') {
    graph.push({
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${site.url}/`,
      name: site.name,
      description: site.entityStatement,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    });
  } else {
    graph.push({
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: `${site.url}/`,
      name: site.name,
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    });
    graph.push(breadcrumbs(opts.canonicalPath, opts.title));
    graph.push(webPageNode(opts.kind, opts.title, opts.description, canonical));
  }

  if (['service', 'solution', 'industry', 'hire'].includes(opts.kind)) {
    graph.push(serviceNode(opts.title, opts.description));
  }

  if (opts.kind === 'blogPost') {
    const post: Record<string, unknown> = {
      '@type': 'BlogPosting',
      headline: opts.title.replace(/\s*\|\s*DigiWorks AI\s*$/, ''),
      description: opts.description,
      url: canonical,
      image: absoluteUrl(opts.image || site.ogImage),
      author: { '@type': 'Person', name: site.name },
      publisher: { '@id': ORG_ID },
      mainEntityOfPage: canonical,
      inLanguage: 'en-US',
    };
    if (opts.datePublished) post.datePublished = opts.datePublished;
    if (opts.dateModified) post.dateModified = opts.dateModified;
    graph.push(post);
  }

  if (opts.kind === 'caseStudy') {
    graph.push({
      '@type': 'Article',
      headline: opts.title.replace(/\s*\|\s*DigiWorks AI\s*$/, ''),
      description: opts.description,
      url: canonical,
      image: absoluteUrl(opts.image || site.ogImage),
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-US',
    });
  }

  if (opts.kind === 'contact') {
    for (const office of site.offices) {
      if (!office.formatted && !('streetAddress' in office && office.streetAddress)) continue;
      const addr: Record<string, unknown> = {
        '@type': 'PostalAddress',
        addressLocality: office.addressLocality,
        addressCountry: office.addressCountry,
      };
      if ('streetAddress' in office && office.streetAddress) addr.streetAddress = office.streetAddress;
      if ('addressRegion' in office && office.addressRegion) addr.addressRegion = office.addressRegion;
      if ('postalCode' in office && office.postalCode) addr.postalCode = office.postalCode;
      graph.push(addr);
    }
  }

  if (opts.faqs?.length) {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: opts.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

/**
 * Staging vs production indexing.
 * Production (`VERCEL_ENV=production`, live host digiworksai.com) always indexes.
 * Preview and development builds are noindex. The ashy Vercel host is also noindex
 * via vercel.json X-Robots-Tag (host match only — not applied on digiworksai.com).
 */
export function isStagingBuild(): boolean {
  const env = import.meta.env.VERCEL_ENV;
  if (env === 'production') return false;
  if (env === 'preview' || env === 'development') return true;
  const vercelUrl = String(import.meta.env.VERCEL_URL || '');
  return vercelUrl.includes(site.stagingHost);
}
