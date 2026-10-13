export const CTA_HEADER = 'Book a Call';
export const CTA_PRIMARY = 'Book a Free Discovery Call';
export const CTA_SECONDARY = 'View Case Studies';
export const CTA_MICRO = 'Free discovery session - Reply within 1 business day';

const MICRO = `<p class="w-full text-center text-xs text-dusk/55">${CTA_MICRO}</p>`;

export function applyCtas(html: string): string {
  let out = html.replaceAll(
    '<button class="btn-primary whitespace-nowrap !px-5">Get in Touch</button>',
    `<a class="btn-primary whitespace-nowrap !px-5" href="/contact.html">${CTA_HEADER}</a>`,
  );
  out = out.replaceAll(
    '<a class="btn-primary whitespace-nowrap !px-5" href="/contact.html">Book a Free Discovery Call</a>',
    `<a class="btn-primary whitespace-nowrap !px-5" href="/contact.html">${CTA_HEADER}</a>`,
  );
  out = out.replaceAll(
    '<button class="btn-primary mt-4 w-full">Get in Touch</button>',
    `<a class="btn-primary mt-4 w-full" href="/contact.html">${CTA_HEADER}</a>`,
  );
  out = out.replaceAll(
    '<a class="btn-primary mt-4 w-full" href="/contact.html">Book a Free Discovery Call</a>',
    `<a class="btn-primary mt-4 w-full" href="/contact.html">${CTA_HEADER}</a>`,
  );
  out = out.split('Get in Touch').join(CTA_PRIMARY);
  out = out.split('See Our Work').join(CTA_SECONDARY);
  out = out.split('Explore Our Work').join(CTA_SECONDARY);
  out = out.split('Discover <span aria-hidden="true">→</span>').join(
    `${CTA_PRIMARY} <span aria-hidden="true">→</span>`,
  );

  const serviceHeroClose = `<a class="btn-ghost" href="/case-studies.html">${CTA_SECONDARY}</a></div></div>`;
  const serviceHeroWithMicro = `<a class="btn-ghost" href="/case-studies.html">${CTA_SECONDARY}</a></div>${MICRO}</div>`;
  if (out.includes(serviceHeroClose)) {
    out = out.split(serviceHeroClose).join(serviceHeroWithMicro);
  }

  const homeHeroClose = `href="/case-studies.html">${CTA_SECONDARY}</a></div></div>`;
  const homeHeroWithMicro = `href="/case-studies.html">${CTA_SECONDARY}</a></div>${MICRO}</div>`;
  if (out.includes(homeHeroClose) && !out.includes(`${MICRO}</div></div><button type="button"`)) {
    out = out.replace(homeHeroClose, homeHeroWithMicro);
  }

  return out;
}
