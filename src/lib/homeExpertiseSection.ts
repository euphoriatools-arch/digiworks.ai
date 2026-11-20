type ExpertiseCard = {
  title: string;
  desc: string;
  href: string;
  img: string;
  imgAlt: string;
  accent: string;
  glyph: string;
};

const cards: ExpertiseCard[] = [
  {
    title: 'Generative AI',
    desc: 'Generative AI solutions built for content, knowledge, search, and intelligent business workflows.',
    href: '/services/generative-ai-development.html',
    img: '/photos/photo-1639322537228-f710d846310a.webp',
    imgAlt: 'Abstract visual for generative AI',
    accent: 'from-electric to-cyan',
    glyph: 'M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M6 6h12v12H6zM9 9h6v6H9z',
  },
  {
    title: 'Artificial Intelligence & ML',
    desc: 'AI and machine learning systems designed to improve decisions, efficiency, and business performance.',
    href: '/services/artificial-intelligence.html',
    img: '/photos/photo-1633356122544-f134324a6cee.webp',
    imgAlt: 'Abstract data structure symbolizing machine learning',
    accent: 'from-violet to-electric',
    glyph: 'M3 17l5-5 4 4 9-9M14 7h7v7',
  },
  {
    title: 'Data Engineering',
    desc: 'Reliable data pipelines and infrastructure that keep your data accessible, scalable, and AI-ready.',
    href: '/services/data-engineering.html',
    img: '/photos/photo-1451187580459-43490279c0fa.webp',
    imgAlt: 'Earth from space representing data infrastructure',
    accent: 'from-electric to-violet',
    glyph: 'M6 16a4 4 0 0 1 0-8 5 5 0 0 1 9.6-1A4 4 0 0 1 18 16H6z',
  },
  {
    title: 'Software Development',
    desc: 'Scalable software solutions built around your workflows, users, and long-term business needs.',
    href: '/services/mobile-app-development.html',
    img: '/photos/photo-1535378917042-10a22c95931a.webp',
    imgAlt: 'Software product interface',
    accent: 'from-cyan to-electric',
    glyph: 'M4 6h16v12H4zM8 10h8M8 14h5',
  },
  {
    title: 'Hire Developers',
    desc: 'Experienced developers who integrate with your team and help accelerate product delivery.',
    href: '/hire/hire-ai-engineers.html',
    img: '/photos/photo-1522071820081-009f0129c71c.webp',
    imgAlt: 'Developers collaborating on a product',
    accent: 'from-coral to-violet',
    glyph: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
  },
  {
    title: 'AI Automation',
    desc: 'AI-powered automation that connects your systems, streamlines workflows, and reduces repetitive work.',
    href: '/solutions/ai-automation.html',
    img: '/photos/photo-1550751827-4bd374c3f58b.webp',
    imgAlt: 'Connected systems representing AI automation',
    accent: 'from-cyan to-coral',
    glyph: 'M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1',
  },
];

const css = `
.dw-ex{position:relative;overflow:hidden;isolation:isolate;padding:5rem 1.25rem}
@media (min-width:640px){.dw-ex{padding-left:2rem;padding-right:2rem}}
@media (min-width:1024px){.dw-ex{padding-top:6.5rem;padding-bottom:6.5rem}}
.dw-ex::before{content:"";position:absolute;inset:0;pointer-events:none;background:radial-gradient(50% 45% at 10% 20%,rgba(26,130,255,.14),transparent 70%),radial-gradient(45% 40% at 92% 80%,rgba(0,82,179,.12),transparent 70%)}
.dw-ex-wrap{position:relative;z-index:1;margin:0 auto;max-width:80rem}
.dw-ex-head{max-width:44rem;margin:0 auto;text-align:center}
.dw-ex-chip{display:inline-flex;align-items:center;gap:.45rem;border-radius:999px;border:1px solid rgba(238,240,244,.12);background:rgba(255,255,255,.04);padding:.45rem .9rem;font-size:.72rem;font-weight:600;letter-spacing:.18em;text-transform:uppercase;color:rgba(238,240,244,.72)}
.dw-ex-chip i{width:.4rem;height:.4rem;border-radius:999px;background:#1a82ff;box-shadow:0 0 10px rgba(26,130,255,.7)}
.dw-ex-title{margin:1.15rem 0 0;font-family:Unbounded,"Unbounded Fallback",sans-serif;font-size:clamp(1.75rem,3vw,2.6rem);font-weight:700;line-height:1.15;color:#eef0f4}
.dw-ex-sub{margin:1rem auto 0;max-width:36rem;font-size:1.05rem;line-height:1.65;color:rgba(238,240,244,.65)}
.dw-ex-grid{margin-top:3.25rem;display:grid;grid-template-columns:1fr;gap:1.1rem}
@media (min-width:640px){.dw-ex-grid{grid-template-columns:1fr 1fr}}
@media (min-width:1024px){.dw-ex-grid{grid-template-columns:1fr 1fr 1fr;gap:1.25rem}}
.dw-ex-card{position:relative;display:flex;flex-direction:column;overflow:hidden;border-radius:1.35rem;border:1px solid rgba(238,240,244,.1);background:rgba(12,22,40,.88);box-shadow:inset 0 1px 0 rgba(255,255,255,.05);text-decoration:none;color:inherit;transition:border-color .25s ease,transform .25s ease,background .25s ease}
.dw-ex-card:hover{border-color:rgba(26,130,255,.45);background:rgba(14,26,48,.96);transform:translateY(-3px)}
.dw-ex-media{position:relative;height:10.5rem;overflow:hidden}
.dw-ex-media img{width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .7s ease}
.dw-ex-card:hover .dw-ex-media img{transform:scale(1.05)}
.dw-ex-media-shade{position:absolute;inset:0;background:linear-gradient(to top,rgba(6,10,20,.92),rgba(6,10,20,.25) 55%,transparent)}
.dw-ex-icon{position:absolute;left:1.1rem;bottom:1.05rem;display:inline-flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border-radius:.85rem;background:linear-gradient(135deg,#5ca6ff,#1a82ff 55%,#0052b3);box-shadow:0 10px 28px rgba(26,130,255,.35)}
.dw-ex-icon svg{width:1.15rem;height:1.15rem;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.dw-ex-body{display:flex;flex:1;flex-direction:column;padding:1.2rem 1.25rem 1.3rem}
.dw-ex-card h3{margin:0;font-family:Unbounded,"Unbounded Fallback",sans-serif;font-size:1.08rem;font-weight:700;line-height:1.25;color:#eef0f4}
.dw-ex-card p{margin:.65rem 0 0;font-size:.9rem;line-height:1.55;color:rgba(238,240,244,.58);flex:1}
.dw-ex-link{margin-top:1.05rem;display:inline-flex;align-items:center;gap:.35rem;font-size:.82rem;font-weight:600;color:#5ca6ff}
.dw-ex-card:hover .dw-ex-link{color:#eef0f4}
.dw-ex-cta{margin-top:2.5rem;display:flex;justify-content:center}
.dw-ex-btn{display:inline-flex;align-items:center;gap:.45rem;border-radius:.9rem;padding:.9rem 1.55rem;font-size:.95rem;font-weight:700;letter-spacing:.01em;text-decoration:none;color:#fff;background:linear-gradient(135deg,#5ca6ff,#1a82ff 55%,#0052b3);box-shadow:0 14px 36px rgba(26,130,255,.35);transition:transform .2s ease,box-shadow .2s ease,filter .2s ease}
.dw-ex-btn:hover{transform:translateY(-2px);box-shadow:0 18px 44px rgba(26,130,255,.48);filter:brightness(1.05)}
.dw-ex-btn span{font-size:1.05em;line-height:1}
`;

function cardHtml(c: ExpertiseCard): string {
  return `<a class="dw-ex-card" href="${c.href}"><div class="dw-ex-media"><img src="${c.img}" alt="${c.imgAlt}" width="1200" height="675" loading="lazy"><div class="dw-ex-media-shade" aria-hidden="true"></div><span class="dw-ex-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${c.glyph}"></path></svg></span></div><div class="dw-ex-body"><h3>${c.title}</h3><p>${c.desc}</p><span class="dw-ex-link">Explore service →</span></div></a>`;
}

export const homeExpertiseInnerHtml = `<style>${css.replace(/\s+/g, ' ').trim()}</style><div class="dw-ex-wrap"><div class="dw-ex-head"><span class="dw-ex-chip"><i aria-hidden="true"></i>Our Expertise</span><h2 class="dw-ex-title">Our AI &amp; ML Development Expertise for Real-World Impact</h2><p class="dw-ex-sub">Building intelligent systems that turn complex data into measurable business outcomes.</p></div><div class="dw-ex-grid">${cards.map(cardHtml).join('')}</div><div class="dw-ex-cta"><a class="dw-ex-btn" href="/services/artificial-intelligence.html">Explore All Services <span aria-hidden="true">→</span></a></div></div>`;

export function homeExpertiseSectionHtml(): string {
  return `<section class="dw-ex" aria-label="Our Expertise">${homeExpertiseInnerHtml}</section>`;
}
