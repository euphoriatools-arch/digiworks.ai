# DIGIWORKS AI — ASTRO MIGRATION + SEO / AEO / GEO CONTENT MASTER PROMPT
# (Continue from Phase 3)

Read this whole file before doing anything. It is your complete instruction set.
Save progress in /seo/PROGRESS.md. If you stop midway (usage or context limit),
I will send: "Continue from /seo/PROGRESS.md".

==========================================================================
0. CONTEXT: WHAT IS ALREADY DONE
==========================================================================
This project was started in a previous Cursor chat on another laptop. That chat
is gone, but all the work is saved in the project files. Do NOT redo Phase 1 or
Phase 2.

PHASE 1 (DONE) — Analysis of the original HTML website
- All 125 HTML pages were analyzed.
- migration/page-inventory.md lists every page: file path, URL, title, purpose.
- An internal link map, broken link list, list of repeated components, and a
  list of fonts/CSS/JS were created.

Decisions I already made after Phase 1:
- Migrate all 125 pages with the exact same file names and URLs.
- 5 "thin service fallback" pages (showing the home title/H1) are migrated
  as-is and marked "needs unique content" in migration/page-inventory.md.
  They must get their own unique title, H1 and content in the content phase.
- custom-app-development-meta.html is migrated but kept noindex and excluded
  from the sitemap until I confirm what it is.
- All Binate branding (binate.ai, @binateai, support@binate.ai) is replaced
  with values from src/data/site.ts. Missing values use clear placeholders.
- All third-party tracking/chat scripts (Tawk, Clarity, GA, Meta Pixel,
  OpenAI pixel) were removed. A central Analytics component loads them only
  when DigiWorks AI IDs are added in src/data/site.ts.

PHASE 2 (DONE) — HTML converted to Astro
- All pages converted to Astro with the same design, fonts, styles, file names
  and URLs (including .html URLs).
- Shared parts moved into components/layouts. Site config in src/data/site.ts.
- 404 issue fixed: .html URLs work in npm run dev and npm run preview.
- JavaScript issues (home page animations, navigation dropdowns) were fixed
  by loading the original scripts from /public with absolute paths and
  is:inline in the original order.

FIRST THING TO DO NOW
1. Read: migration/page-inventory.md, migration/progress.md (if it exists),
   astro.config.mjs, src/data/site.ts, the layouts and the components folder.
2. Run npm install (this is a new laptop).
3. Give me a short summary of the current state and anything that looks
   incomplete or broken. Then start Phase 3.

==========================================================================
1. YOUR ROLE
==========================================================================
You are a senior Astro developer plus four content experts working as one:
a senior SEO strategist, an AEO/GEO specialist (Google AI Overviews, ChatGPT,
Perplexity, Gemini, Claude), a B2B content researcher, and a conversion
copywriter. You have full access to the codebase and can edit files.

MISSION: Replace all dummy text on every page with original, human-sounding,
search-intent-driven content, implemented directly in the code, so each page can:
- rank on Google page one for its target keyword,
- be pulled into Google AI Overviews,
- be cited by LLMs (ChatGPT, Perplexity, Gemini, Claude),
- turn US B2B visitors into qualified leads.
The goal is not to "fill pages". The goal is to make every page the clearest,
most useful, most quotable answer for its topic.

==========================================================================
2. GOLDEN RULES (NON-NEGOTIABLE)
==========================================================================
1. DESIGN IS FROZEN. Do not change layout, CSS, colors, fonts, spacing, logo,
   images, animations or visual structure. You change text and SEO markup only.
   If a tag must change (e.g. a label from <h3> to <p>, or heading levels),
   keep the same CSS classes so it looks identical.
2. URLS ARE FROZEN. The source of truth for URLs is migration/page-inventory.md
   and the current src/pages structure (including .html). The URLs in the
   keyword map below are topic references only; match each topic to the real
   page file. If a URL "should" change, write it in /seo/REPORT.md as a
   recommendation with a 301 redirect. Never change it yourself.
3. Do not add, delete, rename, merge or split pages. Do not delete sections.
   SKIP CONTENT: do not write new copy for /team.html, /case-studies.html,
   any /case-studies/* page, or any individual blog post under /blog/.
   The blog hub /blog.html is already done — leave it. Owner will update
   skipped pages later. Freeze visible text as it is now; keep Phase 4
   technical SEO; do not add FAQs or headings. Keep inbound links working.
   You may add a missing section (like an FAQ) only by reusing a component that
   already exists on the site, so the design stays the same.
4. Rewritten text must fit the design: keep the same number of cards/items per
   section and roughly similar text length per block, so nothing breaks
   visually on desktop or mobile.
5. Do not invent contact details. Use the fact sheet. Anything missing goes in
   /seo/VERIFY.md.
6. After every page: the project must still build (npm run build).
7. Git: commit after each page ("content: <page name>") and after each phase.
8. Update /seo/PROGRESS.md after every completed step.
9. STOP POINTS: stop and wait for me to write "continue" at the end of
   Phase 3, Phase 4, Phase 5, after the first 2 pages of Phase 6, and after
   every batch of 8 pages in Phase 6.
10. If anything is unclear, ask me. Do not guess.

==========================================================================
3. BRAND FACT SHEET (SINGLE SOURCE OF TRUTH)
==========================================================================
Name: DigiWorks AI (always written exactly like this)
Canonical domain: https://digiworksai.com
- Use it in canonicals, sitemap and schema.
- Internal links use relative paths that match the real page URLs.
- Staging domain: https://digiworks-ashy.vercel.app — never mention it in
  content; it must be noindex (see Phase 4).

Entity statement (use on Home, About, footer and schema; light variations are
fine elsewhere):
"DigiWorks AI is an Austin, Texas-based AI development company that helps US
businesses design, build, and scale production AI, including AI agents,
generative AI, predictive analytics, and intelligent automation, along with
the web, mobile, and cloud software around it."

Positioning line (brand goal):
"A trusted AI development and software innovation partner helping businesses
automate operations, build intelligent products, and achieve digital
transformation."

Business type: B2B technology services
Market: USA first, global delivery
Language: US English
Audience: founders, CEOs, CTOs, CIOs, COOs, VPs of Engineering/Operations and
product leaders at startups, mid-market companies and enterprises
Customer needs: business automation, AI adoption, digital transformation,
custom software, operational efficiency, scalable technology
Main goals: qualified B2B leads, rankings for commercial keywords, AI Overview
visibility, LLM understandability, authority in AI development services,
more conversions through strategic CTAs

Core services: AI Development, AI Agents, Generative AI, Machine Learning,
Predictive Modeling, AI Chatbots, AI Automation and Integration, Data and Cloud,
Security and Compliance, AI Training and Support, Web App Development, Mobile
App Development, Blockchain Development, Custom Software Development

Engagement models:
- Project Delivery: fixed scope, 8-20 week delivery, outcome-based milestones,
  post-launch optimization
- Dedicated AI Pod: full cross-functional team in 2-3 weeks, end-to-end
  ownership, predictable release cadence
- Embedded Talent: senior AI/ML/data engineers, onboard in 1-2 weeks, scale up
  or down anytime

HQ: 716 Congress Ave #200, Austin, TX 78701, USA
Other offices:
- Dubai: Building A1, Dubai Digital Park, Dubai Silicon Oasis
- Karachi: Suite No. 108, 1st Floor, Park Avenue, Shahra-e-Faisal, Block 6
  PECHS, Karachi 75350
- Canada: [VERIFY address]
- Guangzhou: [VERIFY address]
Phone: +1 737 394 5488
WhatsApp: +1 346 829 1047
Email: [VERIFY]
Promises: reply within 1 business day; free discovery session

Standards (write "built to" or "aligned with" unless a certification is
verified): GDPR, ISO 27001, NIST, HIPAA-aligned, CCPA
Cloud platforms: AWS, Microsoft Azure, Google Cloud

Verified numbers: 150+ deployments, 7+ sectors served, 5 global offices,
2,000+ newsletter readers, 8-20 weeks to production AI
Unverified numbers (never guess): years in business, number of specialists,
apps launched, web experiences delivered -> [VERIFY]

Clients / case studies: Drive Guard (fleet safety), MVP Edits (sports tech),
Thrive City (educational game), Arc Viva, Draft Day, Coachd, Gas on the Go,
Curb Cream, Milestone Truck, Yum Runner, SiteIQ, Live Muse, Niro, Memor,
Bay World, Addiction World, TCMS
Review platforms: Bark, Trustpilot, Clutch

Tone: professional, innovative, trustworthy, business-first, plain-spoken.
Confident, never hype.

==========================================================================
4. EXECUTION PHASES (IN ORDER)
==========================================================================

PHASE 3 — VERIFY THE MIGRATION (design, URLs, JS)
--------------------------------------------------------------------------
1. npm run build with zero errors and warnings.
2. Script: compare the list of original HTML files with dist/. Every original
   URL must exist in the build. Report missing or extra files.
3. Check all internal links in the build. Zero broken links.
4. Test home + at least 15 pages from different folders at 360px, 768px,
   1024px and 1440px, in npm run dev and npm run preview. Animations,
   dropdowns, mobile menu, sliders and forms must work. Browser console:
   zero errors.
5. Search the whole project for "binate" — zero results.
6. Confirm the Analytics component loads nothing while IDs are empty.
7. Create /seo/PROGRESS.md with a checklist of every page and every phase.
STOP and report. I will test manually before you continue.

PHASE 4 — TECHNICAL SEO FOUNDATION (no visual changes)
--------------------------------------------------------------------------
1. SEO component (src/components/SEO.astro, used in BaseLayout) with props per
   page: title, meta description, canonical (https://digiworksai.com + real
   path), meta robots, Open Graph (title, description, image, url, type,
   site_name), Twitter card tags, favicon set, apple-touch-icon, theme-color,
   lang="en", viewport, charset. Remove any meta keywords tag.
2. Schema component (src/components/Schema.astro) following RULE 11.
   One shared Organization @id: https://digiworksai.com/#organization
3. Sitemap with @astrojs/sitemap: every indexable page with its real .html
   URL and lastmod. Exclude 404, thank-you, noindex pages and
   custom-app-development-meta.html.
4. robots.txt in /public: allow Googlebot, Bingbot, OAI-SearchBot, GPTBot,
   ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended. Reference
   https://digiworksai.com/sitemap-index.xml.
5. /public/llms.txt (llms.txt standard): H1 "DigiWorks AI", blockquote with the
   entity statement, then sections (Services, Solutions, Industries, Hire,
   Case Studies, Company, Blog, Contact) with markdown links and one-line
   descriptions. Also /public/llms-full.txt with a fuller plain-text summary
   of the main pages (fill it after Phase 6 content is written).
6. Staging noindex: the digiworks-ashy.vercel.app deployment must send
   noindex (e.g. a vercel.json header rule for that host, or a build-time
   check of VERCEL_ENV / the production URL). digiworksai.com stays
   index, follow.
7. Counters: if they render "0" or "0+" in the HTML, render the real final
   number in the HTML and animate from it. Use values from the code; list
   each in /seo/VERIFY.md.
8. Testimonial and client-logo marquees: keep one real copy; mark visual clones
   aria-hidden="true". No visual change.
9. Small labels above headings ("Our Expertise", "FAQ", etc.) must be <p> or
   <span>, not heading tags, with the same classes. Exactly one <h1> per page.
10. Images: width/height set, WebP where possible, lazy-load below the fold,
    hero image not lazy. No visual change. Do not rename image files.
11. Fonts: keep the exact same fonts, but load them efficiently (preload the
    main font files, font-display: swap). Do not add new JavaScript; keep the
    original scripts as they are (is:inline, original order).
    Also add a web manifest (site.webmanifest) with the DigiWorks AI name,
    theme color and existing favicon/logo icons.
12. Helpful custom 404 page in the existing design with links to main hubs.
13. Semantic HTML and accessibility (header, nav, main, section, footer, aria
    labels on icon buttons, visible focus) without visual changes.
STOP and report.

PHASE 5 — KEYWORD MAP (planning only, no text changes)
--------------------------------------------------------------------------
1. Start from the SITEMAP AND KEYWORD MAP in section 6. Match each topic to
   the real page from migration/page-inventory.md. Every one of the 125 pages
   must appear in the map, including pages not listed in section 6.
2. If you have web search, check the top 5 Google results and "People Also
   Ask" for each primary keyword and refine it. If not, keep the given
   keywords.
3. One page = one primary keyword = one search intent. No two pages target the
   same keyword. Follow the ANTI-CANNIBALIZATION RULES.
4. Save /seo/KEYWORD_MAP.md with columns: page name, real URL, primary keyword,
   3-6 secondary keywords, intent, angle, proposed title, proposed meta
   description, proposed H1, 5-10 internal link targets with anchor text.
5. Mark the 5 thin fallback pages and give each its own keyword and angle.
STOP and wait for my approval.

PHASE 6 — WRITE AND IMPLEMENT CONTENT (PAGE BY PAGE)
--------------------------------------------------------------------------
Order: Home -> Service hubs -> Service pages -> Solutions -> Industries ->
Hire -> About -> Team -> Case studies -> AI Readiness -> Contact -> Blog hub ->
Blog posts -> Legal pages (light touch only) -> any remaining pages.

SKIP (owner will update later) — never write new content for:
- /team.html
- /case-studies.html
- every page under /case-studies/
- every individual blog post under /blog/ (not the hub /blog.html)
Leave the visible text exactly as it is now. Keep Phase 4 technical SEO
already applied (meta tags, canonical, schema, sitemap entry). Do not add
new copy, FAQs, or headings. Other pages may still link to them (e.g.
"View Case Studies" or post cards on /blog.html); keep those links working.
When this order reaches Team or Case studies, skip straight to AI Readiness,
Contact, Blog hub, Legal. When it reaches Blog posts, skip them. Mark them
SKIPPED in /seo/PROGRESS.md. List them in a separate section of the final
/seo/REPORT.md.

Do Home and one service page first, then STOP so I can approve tone and
quality. After that work in batches of 8 pages and STOP after each batch.

For EACH page:
1. PLAN (silently): search intent, target reader, their top 5 questions,
   their objections, what competitor pages miss (information gain), internal
   link plan.
2. WRITE content for every existing section following the WRITING RULES.
   Use the PAGE BLUEPRINTS to spot missing sections (add only by reusing
   existing components).
3. IMPLEMENT in the code: text, headings, CTAs, links, meta tags, alt text,
   counters, JSON-LD.
4. SELF-CHECK with the PER-PAGE CHECKLIST and fix anything that fails.
5. Add every [VERIFY] / [SOURCE NEEDED] item to /seo/VERIFY.md (page + section).
6. Add image suggestions for the page to /seo/REPORT.md (see RULE 10).
7. Tick the page in /seo/PROGRESS.md, build, commit.

PHASE 7 — SITE-WIDE PASS
--------------------------------------------------------------------------
1. Organization schema with the shared @id on every page.
2. Internal link audit: no orphan pages; every page gets at least 3
   contextual links from other pages; no broken links.
3. Navigation and footer labels clear and descriptive (same design).
4. No two pages share a title, meta description, H1 or paragraph.
5. Fill /public/llms-full.txt with the final content summaries.

PHASE 8 — QA, REPORT, DEPLOY PREP
--------------------------------------------------------------------------
1. npm run build with zero errors; URL comparison and link check pass again.
2. Every page: one H1, title 50-60 characters, meta description 130-155
   characters, valid JSON-LD, all images have alt, no broken links.
3. Responsive re-test at 360 / 768 / 1024 / 1440px.
4. Aim for Lighthouse 90+ in Performance, SEO, Accessibility, Best Practices.
5. /seo/REPORT.md: what changed per page (short), technical fixes, image
   suggestions, recommended new pages (keyword + outline), off-site to-do.
6. /seo/VERIFY.md: final simple list for the owner to fill in.
7. Explain how to deploy on Vercel with https://digiworksai.com as the
   production domain and HTTPS.
When I later fill VERIFY.md, I will send "Apply /seo/VERIFY.md".

==========================================================================
5. WRITING RULES
==========================================================================

RULE 0 — TRUTH (highest priority, overrides everything)
- Never invent numbers, results, client names, certifications, awards, team
  size, years, prices, partnerships, tools used, or quotes.
- "Realistic" metrics are NOT allowed unless verified. Use only facts from the
  fact sheet or the existing code. If a sentence needs a missing fact, write
  [VERIFY: what is needed].
- Third-party statistics need a real source. Otherwise write
  [SOURCE NEEDED: claim]. Never guess a statistic or a source.
- Testimonials and reviews are used word-for-word. Never write, edit or
  paraphrase them.
- First-hand experience ("In our projects we've seen...") only when backed by
  a given fact. Otherwise explain the process and reasoning.

RULE 1 — KEYWORDS AND SEARCH INTENT
- Primary keyword naturally in: title (near the front), H1, first 100 words,
  at least one H2, meta description, one image alt.
- Spread secondary keywords, related entities and question variants across
  H2/H3s and body. Aim for complete topic coverage, not density. If a human
  wouldn't say it that way, don't write it.
- Match intent: service/solution/hire pages sell with proof; blog posts teach
  first; About and Contact reassure.

RULE 2 — HEADING STRUCTURE
- Exactly ONE H1: primary keyword + clear outcome, under ~70 characters.
  Example: "AI Agent Development Services for US Businesses"
- Use the original H1 wrap (desktop and mobile) when the keyword allows.
  Do not leave a full unused line. Do not wrap more lines than the original.
- Visible copy uses plain business language. No internal jargon
  (for example "named jobs", "clinical paths", "risk desks", "deal work",
  "class work", or "program" as internal scoping).
- Sections get H2, cards/sub-points get H3, H4 only when truly needed. Never
  skip levels. Never use headings for styling.
- Every heading makes sense on its own.
  Weak: "Why Us?"  Strong: "Why US Companies Choose DigiWorks AI for AI Agents"
- Mix three styles:
  a) Topic headings with keywords ("Generative AI Development Services We Offer")
  b) Question headings matching real searches, about 40-50% of H2s
     ("How Much Does AI Agent Development Cost?")
  c) Benefit headings, specific and outcome-led
     ("Cut Manual Ticket Triage With AI Agents That Route Work for You")

RULE 3 — AEO, AI OVERVIEWS, GEO (WRITE TO BE QUOTED)
- Answer first: under every question H2, the first 40-60 words answer the
  question completely on their own. Then go deeper.
- Service and solution pages include one clear "[Topic] is..." definition
  near the top.
- Numbered steps for processes, bullets for features, tables for comparisons
  (build vs. buy, AI agent vs. chatbot vs. RPA, in-house vs. dedicated pod),
  only where the design has a component that can show them.
- Always write "DigiWorks AI" and regularly pair it with category and location
  ("DigiWorks AI, an Austin-based AI development company").
- Specific beats impressive: timelines, steps, roles, deliverables,
  constraints, decision criteria.
- Commercial pages get a short "Key facts" block: 3-5 standalone, verifiable
  sentences (only if an existing component can hold it; otherwise work the
  facts into the intro).
- Every page has at least one piece of information gain: a trade-off, a "when
  AI is not the right fit" note, a decision checklist, cost drivers, or common
  failure points.
- Business examples and customer questions are welcome; they must stay
  truthful (RULE 0).
- FAQs: 6-8 per commercial page, based on real buyer questions (cost,
  timeline, data security, integration, IP ownership, maintenance, ROI) and
  Google "People Also Ask" style queries and objections. Answers are 50-90
  words, self-contained, first sentence answers the question. All answers
  sit in the SSR accordion HTML and match FAQPage JSON-LD. Never reuse the
  same FAQ wording on two pages. Only add FAQ sections using the site's
  existing FAQ component.

RULE 4 — HUMAN WRITING
- Write like a senior consultant explaining to a busy CTO: direct, specific,
  confident, zero fluff.
- US English. "You" and "we". Contractions fine. Mostly active voice.
- 2-4 sentences per paragraph. Vary sentence length. Readability around grade
  8-10. Explain jargon on first use.
- BANNED: delve, leverage (verb), unlock, unleash, harness, empower, elevate,
  revolutionize, game-changer, cutting-edge, state-of-the-art, seamless,
  seamlessly, robust, synergy, landscape, realm, tapestry, "in today's
  fast-paced world", "ever-evolving", "look no further", "take it to the next
  level", "it's important to note", "whether you're X or Y".
- Max one em dash per paragraph. No exclamation marks in body copy. No emoji.
- Swap test: if a paragraph could sit on a competitor's site unchanged,
  rewrite it with a DigiWorks AI-specific detail.

RULE 5 — COPYWRITING
- Page flow follows AIDA: hero grabs attention -> problem builds interest ->
  proof and outcomes build desire -> CTA drives action.
- Problem sections use PAS: problem -> business cost of ignoring it -> solution.
- Every feature ends with a benefit (time, cost, risk, revenue).
- Headlines pass the 4U test: useful, ultra-specific, unique, urgent (only
  when honest).
- Cover: customer problems, DigiWorks AI solution, business benefits, trust
  factors, clear outcomes.
- Answer objections before they're asked: cost, timeline, data security,
  "will it work with our systems?", "what if it fails?", "who owns the code?".
- Put proof next to every big claim: case study link, verified number,
  standard, or process step.

RULE 6 — CTAs
- Every page: ONE primary goal and ONE low-commitment secondary goal.
  Primary -> contact page. Button text options:
    "Book a Free Discovery Call", "Book Free Consultation",
    "Start Your AI Project", "Discuss Your Business Idea", "Get My AI Roadmap"
  Secondary (pick what fits): AI Readiness page ("Check My AI Readiness"),
    ROI calculator section on the homepage (use its real section ID),
    case studies ("View Case Studies", "See the Drive Guard Story"),
    services ("Explore Services"), hire pages ("Hire AI Engineers"),
    "Talk With AI Experts".
- Placement: hero, after proof/case study, after process or pricing, and at
  the end. Roughly every 2-3 sections, using existing CTA components only.
  Never two identical CTAs back-to-back.
- Button text = verb + outcome, 2-5 words. Never "Submit", "Click Here",
  "Discover" or a bare "Learn More".
- Risk-removing microcopy under primary CTAs, verified promises only:
  "Free discovery session - Reply within 1 business day".

RULE 7 — INTERNAL LINKING AND ANCHOR TEXT
- Link ONLY to pages that exist (real URLs from the inventory). Never invent a
  URL. If an ideal target doesn't exist, note it in REPORT.md.
- Architecture: Home -> hubs -> detail pages. Every detail page links up to its
  hub, across to 2-3 sibling pages, to 1-2 related industries or solutions,
  to 1 case study, and to 1 blog post where relevant. Hubs link to all their
  children.
- 5-10 contextual body links on commercial pages (nav/footer don't count);
  3-8 in blog posts. Most important link in the first 2-3 sections.
- Anchor text: 2-6 descriptive words. Mix across the site:
  ~50% partial-match/descriptive ("custom AI agents for customer support"),
  ~20% exact-match ("AI agent development"), max once per target per page,
  ~20% branded/natural ("DigiWorks AI's dedicated AI pods"),
  ~10% contextual/CTA-style.
- Never "click here", "read more" or "this page" alone. Never link to the
  same URL twice in one page's body. Never link a page to itself.
- Use the site's existing link styling only.
- Record each page's links (anchor + target URL) in /seo/KEYWORD_MAP.md.

RULE 8 — NUMBERS AND COUNTERS
- Verified numbers only. Counter = value + suffix + specific label + short
  context line. Example: 150+ | AI deployments | across 7+ industries
- Labels specific ("production AI deployments", not "Projects").
- Missing number -> [VERIFY]. Never show 0 or a guess.
- Prefer numbers tied to time, money or scale: "8-20 weeks to production AI",
  "Full team in 2-3 weeks".

RULE 9 — METADATA
- Title: 50-60 characters, primary keyword first, then qualifier, ending with
  "| DigiWorks AI". Unique on every page.
  Example: "AI Development Company in the USA | DigiWorks AI"
- Meta description: 130-155 characters. Primary keyword + one specific proof
  point + soft CTA. Unique on every page.
- OG title up to 60 characters; OG description up to 125 characters, a bit
  more conversational. Twitter tags match OG.
- Canonical: https://digiworksai.com + real page path.
- Robots: index, follow (thank-you, utility pages and
  custom-app-development-meta.html: noindex).

RULE 10 — IMAGES AND ALT TEXT
- Alt text describes what the image shows and why it's there: 8-16 words,
  under 125 characters. Don't start with "Image of" / "Picture of".
- Primary keyword in one alt per page, only if it truly describes the image.
- Decorative/background images: alt="".
- Client logos: "[Client name] logo". Team photos: "[Name], [Role] at
  DigiWorks AI".
- Don't rename or replace image files. In REPORT.md, per page and section,
  suggest: image concept, visual style, placement, purpose, a descriptive
  filename (lowercase-hyphenated, e.g. ai-agent-development-process-diagram.webp)
  and alt text; list stock photos that should become real screenshots,
  diagrams or team photos.

RULE 11 — SCHEMA (JSON-LD)
- One shared Organization @id: https://digiworksai.com/#organization
- Home: Organization (name, url, logo, description = entity statement, HQ
  address, contactPoint, sameAs = social profiles in src/data/site.ts,
  otherwise [VERIFY]) + WebSite.
- Every page except Home: BreadcrumbList + WebPage (JSON-LD only; no visible
  breadcrumbs unless the design already has them).
- Service, Solution, Industry and Hire pages: Service (name, serviceType,
  description, provider -> Organization @id, areaServed: "United States" and
  "Worldwide").
- Pages with visible FAQs: FAQPage; schema text matches visible text exactly.
- Blog posts: BlogPosting with author (Person), datePublished, dateModified.
- Case studies: Article.
- About: AboutPage. Contact: ContactPage + PostalAddress for each office with
  a full address.
- Never add Review or AggregateRating markup about DigiWorks AI itself.

RULE 12 — LENGTH AND UNIQUENESS
The design must look exactly like the original. Fit the existing slots; never pad.
- Every text block (hero paragraph, section intros, card descriptions, process
  step text, CTA text, related-block text, and any other visible slot) must
  have a word count within ±5 words of the original text in that same slot.
  Reference: the original HTML and `_spa_pristine/` bundles.
- Headings (H1/H2/H3) must not take more lines than the original on desktop
  or mobile. Keep heading word counts inside the same ±5 band.
- H1s should use the original line count where the keyword allows, not end
  up shorter by a full line. No internal jargon in visible copy anywhere.
- The old 1,300+ / hub 1,500+ own-content word targets no longer apply.
  SEO depth lives in the FAQ accordion (hidden until opened), not in visible
  cards and intros.
- FAQ section (commercial pages): 6–8 questions. Answers 50–90 words.
  All answers must be in the server-rendered HTML (collapsed is fine) and
  must match FAQPage JSON-LD exactly. FAQ answers are exempt from the ±5
  visible-slot rule.
- No two pages share paragraphs. Sibling pages take clearly different angles.
Blog posts: keep the technical meaning; improve the answer-first intro,
headings, FAQ, internal links and the CTA to the matching service page.

==========================================================================
6. SITEMAP AND KEYWORD MAP (topics and starting keywords)
==========================================================================
URLs here are topic references. Map each to the real .html page.
Format: topic path | primary keyword | angle

COMPANY
/ | AI development company | brand + full offer overview for US businesses
/about | DigiWorks AI (brand) | story, how we work, offices, standards
/team | DigiWorks AI team | real bios, expertise, LinkedIn (trust)
/case-studies | AI development case studies | proof library by industry
/case-studies/drive-guard | Drive Guard case study | fleet safety platform
/case-studies/mvpedits | MVP Edits case study | sports tech platform
/case-studies/thrive-city | Thrive City case study | educational game
/case-studies/[others] | "[Client] case study"
/blog | enterprise AI blog | topic clusters that feed service pages
/ai-readiness | AI readiness assessment | free self-assessment, lead magnet
/contact | contact DigiWorks AI | what happens next, offices
/privacy-policy, /terms-of-use | no SEO push, plain language

SERVICE HUBS AND SERVICES ("we build it for you")
/services/artificial-intelligence | artificial intelligence development services | full AI catalog, links to every AI service
/services/machine-learning | machine learning development services | custom ML models and MLOps
/services/automation-and-integration | AI integration services | connecting AI to existing systems and workflows
/services/data-and-cloud | data engineering and cloud services for AI | pipelines and cloud on AWS/Azure/GCP
/services/security-and-compliance | AI security and compliance services | securing and governing YOUR AI systems and data
/services/ai-training-and-support | AI training and support services | adoption and post-launch support
/services/ai-agent-development | AI agent development services | building autonomous AI agents
/services/generative-ai-development | generative AI development services | LLM apps (RAG, fine-tuning, integrations)
/services/predictive-modeling | predictive modeling services | engineering forecasting models
/services/ai-chatbot-development | AI chatbot development services | building NLP chatbots
Custom software / custom app development | custom software development company | tailored business software
Web application development | web app development services | scalable web apps
Mobile app development | mobile app development company | iOS/Android business apps
Blockchain development | blockchain development services | smart contracts, dApps, enterprise blockchain
(If a page for any of the last four exists in the inventory, write it as a
normal service page. If not, do NOT create it; recommend it in REPORT.md with
keyword and outline.)
[any other service pages found in the inventory]

SOLUTIONS ("what it does for your business")
/solutions/ai-automation | AI business process automation | outcomes by workflow and department
/solutions/predictive-analytics | predictive analytics solutions | demand, churn, risk forecasting outcomes
/solutions/conversational-ai | conversational AI solutions | customer experience across chat and voice
/solutions/computer-vision-image-recognition | computer vision solutions | inspection, recognition, visual QA
/solutions/generative-ai | generative AI solutions for business | use cases and ROI by department
/solutions/ai-for-cybersecurity | AI for cybersecurity | using AI to detect and respond to threats

INDUSTRIES
/industries/ai-for-healthcare | AI solutions for healthcare
/industries/ai-for-fintech | AI for fintech
/industries/ai-for-retail-and-ecommerce | AI for retail and ecommerce
/industries/ai-for-manufacturing | AI in manufacturing solutions
/industries/ai-for-logistics-and-supply-chain | AI in logistics and supply chain
/industries/ai-for-real-estate | AI for real estate
/industries/ai-for-education | AI in education solutions

HIRE
/hire/dedicated-ai-pods | dedicated AI development team
/hire/hire-ai-engineers | hire AI engineers
[other hire pages] | hire [role] developers

BLOG POSTS (existing)
/blog/reduce-llm-hallucinations-techniques
/blog/structured-outputs-llm-json-mode
/blog/how-to-evaluate-llm-applications
[any other blog posts in the inventory]

ANTI-CANNIBALIZATION RULES
- Service vs. Solution (e.g. generative-ai-development vs. generative-ai): the
  SERVICE page covers HOW WE BUILD IT (process, team, stack, timeline,
  engagement, cost drivers). The SOLUTION page covers WHAT IT ACHIEVES (use
  cases, department outcomes, ROI, examples). Each links to the other using
  the other page's keyword as anchor text.
- Predictive Modeling vs. Predictive Analytics, and AI Chatbot Development vs.
  Conversational AI, follow the same split.
- Home vs. AI hub: Home targets "AI development company" + brand. The AI hub
  targets "artificial intelligence development services" and goes deeper.
- Security and Compliance vs. AI for Cybersecurity: the first protects and
  governs AI systems and data; the second uses AI to fight threats.
- Custom software vs. web app vs. mobile app: custom software = tailored
  business systems overall; web app = browser-based products; mobile app =
  iOS/Android products.

==========================================================================
7. PAGE BLUEPRINTS (default section order — use to spot gaps, never to
   change the design)
==========================================================================
HOME: Hero (H1, subhead, 2 CTAs) -> client logos -> counters -> what we do
(entity statement + answer block) -> expertise -> featured services ->
engagement models -> solutions -> industries -> case studies -> ROI calculator
-> testimonials (word-for-word) -> insights -> FAQ -> final CTA

SERVICE HUB: Hero -> what is [topic] (definition) -> services in this category
(H3 cards linking to each child) -> problems solved (PAS) -> delivery process
with timelines -> platforms and stack -> industries served -> proof ->
engagement models -> FAQ -> CTA

SERVICE: Hero -> introduction + definition + who it's for -> business problems
/ signs you need it (PAS) -> DigiWorks AI solution / what we build (H3
capabilities) -> benefits -> use cases -> development process (steps +
timeline) -> technology stack [VERIFY] -> comparison table -> cost and
timeline drivers (no invented prices) -> industries served -> why choose
DigiWorks AI (with proof) -> case study -> related services -> FAQ -> final CTA

SOLUTION: Hero -> definition -> business outcomes -> use cases by department
(H3) -> how it works (simple steps) -> when it's not the right fit ->
industries -> the service that builds it (link) -> proof -> FAQ -> CTA

INDUSTRY: Hero -> industry challenges -> highest-ROI AI use cases (H3) ->
compliance and data handling (HIPAA, PCI DSS, SOC 2, FERPA as relevant;
"aligned with" wording) -> relevant solutions and services (links) ->
implementation roadmap -> proof -> FAQ -> CTA

HIRE: Hero -> roles you can hire (H3) -> engagement models -> vetting process
-> onboarding timeline -> in-house vs. freelancer vs. DigiWorks AI ->
pricing factors -> FAQ -> CTA

CASE STUDY: Snapshot (client, industry, services, timeline [VERIFY]) ->
challenge -> solution -> stack -> results (verified only) -> client quote
(word-for-word, if any) -> related services/industry -> CTA
"Build Something Similar"

ABOUT: Hero -> entity statement + story -> how we work -> numbers ->
leadership (link to Team) -> offices with full addresses -> standards and
platforms -> review platforms -> CTA

TEAM: Intro -> bios (name, role, expertise, LinkedIn — [VERIFY] if not in
code) -> CTA

CONTACT: H1 -> what happens after you reach out (3 steps) -> form microcopy ->
offices -> short FAQ

AI READINESS: Hero -> what an AI readiness assessment is -> what it measures
-> how scoring works -> what you get -> FAQ -> CTA

BLOG POST: H1 -> 40-60 word answer-first intro -> key takeaways -> table of
contents -> question-led H2s -> examples/tables -> "How DigiWorks AI helps"
(short paragraph + link to matching service) -> FAQ -> author bio + dates

==========================================================================
8. PER-PAGE CHECKLIST (run before marking a page done)
==========================================================================
[ ] Design unchanged on desktop and mobile; URL unchanged
[ ] One H1 with the primary keyword; heading levels in order; all headings
    descriptive; labels above headings are <p>/<span>
[ ] Primary keyword in title, H1, first 100 words, one H2, meta description
[ ] Every question H2 answered in its first 40-60 words
[ ] No banned words; no invented facts; unknowns are [VERIFY] and in VERIFY.md
[ ] Primary + secondary CTA with specific text and working links
[ ] Visible slots within ±5 words of the original HTML / _spa_pristine slot
[ ] H1/H2/H3 do not wrap more lines than the original on desktop and mobile
[ ] H1s use the original line count where the keyword allows (not a full unused line)
[ ] No internal jargon in visible copy
[ ] 6-8 FAQs; answers 50-90 words; SSR HTML + FAQPage JSON-LD match
[ ] 2-4 in-body links plus Related; varied descriptive anchors; only real URLs
[ ] Every image has alt text (or alt="" if decorative)
[ ] Counters show real verified numbers in the HTML
[ ] FAQ text matches FAQPage schema exactly
[ ] Title 50-60 characters; meta description 130-155 characters; canonical,
    OG and Twitter tags set
[ ] Angle clearly different from sibling pages
[ ] Image suggestions added to REPORT.md
[ ] npm run build passes; PROGRESS.md updated; committed

==========================================================================
9. OFF-SITE TO-DO (put in REPORT.md for the owner)
==========================================================================
- Create/verify the Google Business Profile for the Austin HQ
- Collect more reviews on Clutch, Trustpilot and G2
- Use the exact same name, address and phone everywhere online
- Complete the LinkedIn company page and team profiles
- Earn mentions and backlinks from relevant US tech publications
- Submit the sitemap in Google Search Console and Bing Webmaster Tools;
  track impressions, clicks and positions every 2-4 weeks
- Add real DigiWorks AI analytics IDs in src/data/site.ts

==========================================================================
10. FILES TO KEEP UPDATED
==========================================================================
/seo/PROGRESS.md    — checklist of phases and pages (resume point)
/seo/KEYWORD_MAP.md — keywords, intent, meta, internal links per page
/seo/VERIFY.md      — everything the owner must confirm or fill in
/seo/REPORT.md      — changes, fixes, image suggestions, recommendations
migration/page-inventory.md — source of truth for pages and URLs

==========================================================================
START NOW: read the files listed in section 0, run npm install, give me a
short state summary, then do PHASE 3.
==========================================================================
