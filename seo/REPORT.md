# DigiWorks AI — SEO / AEO / GEO report (Phase 8)

Production domain: `https://digiworksai.com`. Do not push until you deploy.

## Decisions this phase

**Indexing (Option B).** Content on individual blog posts, case-study details, and team is not owned yet. Those URLs stay live with working links, but they are `noindex, follow` and omitted from the sitemap. `/blog.html` and `/case-studies.html` stay indexable.

**Cloudflare email widgets.** Footer obfuscated token (`__cf_email__` next to the `@` icon) is replaced with the label `Contact` linking to `/contact.html` because `site.email` is empty. Shared footer also updated in the SPA bundle so hydration still matches. Article example on `/blog/ai-red-teaming-stress-test.html` and non-footer `mailto:[EMAIL]` on Contact / Privacy / Terms were left as-is.

## Inventory counts (source of truth: `src/pages`)

Earlier “55 posts / 17 studies” was correct. The later “57 / 16” mixed the case-studies **hub** into one tally and double-counted two blog paths in a dist scan. Current files:

| Set | Count | Indexing |
|---|---|---|
| `/blog/*.astro` posts | **55** | `noindex, follow`; not in sitemap |
| `/case-studies/*.astro` details | **17** | `noindex, follow`; not in sitemap |
| `/team.html` | **1** | `noindex, follow`; not in sitemap |
| `/blog.html` hub | 1 | indexable; in sitemap |
| `/case-studies.html` hub | 1 | indexable; in sitemap (copy still frozen) |
| Built HTML | 126 (125 original URLs + `/404.html`) | 404 and campaign stay noindex |
| Sitemap `<loc>` | 51 | hubs in; skip details out |

### 55 blog posts

`/blog/10-claude-prompts-that-replace-your-entire-seo-audit-toolkit.html`, `/blog/ab-testing-machine-learning-models.html`, `/blog/ai-agent-memory-explained.html`, `/blog/ai-and-robotics-advancing-automation.html`, `/blog/ai-customer-support-deflection.html`, `/blog/ai-fintech-fraud-detection.html`, `/blog/ai-for-insurance-claims-automation.html`, `/blog/ai-for-legal-contract-review.html`, `/blog/ai-for-recruiting-candidate-screening.html`, `/blog/ai-for-supply-chain-demand-sensing.html`, `/blog/ai-governance-eu-ai-act-guide.html`, `/blog/ai-healthcare-production-use-cases.html`, `/blog/ai-manufacturing-predictive-maintenance-guide.html`, `/blog/ai-red-teaming-stress-test.html`, `/blog/ai-retail-personalization-engine.html`, `/blog/ai-vendor-selection-checklist.html`, `/blog/anomaly-detection-for-operations.html`, `/blog/build-vs-buy-ai-decision-matrix.html`, `/blog/building-a-feature-store.html`, `/blog/building-voice-ai-agents.html`, `/blog/calculating-ai-roi-cfo-framework.html`, `/blog/change-management-for-ai-adoption.html`, `/blog/choosing-right-llm-business.html`, `/blog/computer-vision-quality-inspection.html`, `/blog/customer-churn-prediction-tutorial.html`, `/blog/cut-cloud-costs-for-ai-workloads.html`, `/blog/data-lakehouse-architecture.html`, `/blog/embeddings-infrastructure-vector-search-scale.html`, `/blog/enterprise-ai-implementation-mistakes.html`, `/blog/enterprise-ai-maturity-stages.html`, `/blog/feature-engineering-techniques.html`, `/blog/fine-tuning-llms-enterprise-tutorial.html`, `/blog/getting-started-with-artificial-intelligence.html`, `/blog/how-to-build-ai-agent-2026.html`, `/blog/how-to-evaluate-llm-applications.html`, `/blog/intelligent-document-processing-guide.html`, `/blog/internal-knowledge-assistant-enterprise-rag.html`, `/blog/llm-observability-monitoring-ai-quality.html`, `/blog/mlops-from-scratch-deploy.html`, `/blog/model-context-protocol-mcp-explained.html`, `/blog/multi-agent-ai-systems-patterns.html`, `/blog/nlp-revolutionizing-text-analysis.html`, `/blog/predictive-maintenance-ml-tutorial.html`, `/blog/privacy-preserving-ai-techniques.html`, `/blog/production-chatbot-custom-nlp.html`, `/blog/prompt-engineering-production-patterns.html`, `/blog/rag-architecture-production-guide.html`, `/blog/real-time-streaming-kafka-flink-spark.html`, `/blog/reduce-llm-hallucinations-techniques.html`, `/blog/securing-llm-applications-owasp-top-10.html`, `/blog/sentiment-analysis-tutorial.html`, `/blog/structured-outputs-llm-json-mode.html`, `/blog/synthetic-data-for-machine-learning.html`, `/blog/time-series-forecasting-demand-planning.html`, `/blog/vector-databases-compared.html`

### 17 case-study detail pages

`/case-studies/addiction-world.html`, `/case-studies/arc-viva.html`, `/case-studies/bay-world.html`, `/case-studies/coachd.html`, `/case-studies/curb-cream.html`, `/case-studies/do-costa.html`, `/case-studies/draft-day.html`, `/case-studies/drive-guard.html`, `/case-studies/gas-on-the-go.html`, `/case-studies/live-muse.html`, `/case-studies/memor.html`, `/case-studies/milestone-truck.html`, `/case-studies/mvpedits.html`, `/case-studies/niro.html`, `/case-studies/siteiq.html`, `/case-studies/thrive-city.html`, `/case-studies/yum-runner.html`

## Technical changes (short)

- `isOwnerSkipIndex()` → `noindex, follow` on team, `/blog/*`, `/case-studies/*`. Staging still `noindex, nofollow`.
- Sitemap filter drops those URLs; hubs remain.
- Footer CF widget → `/contact.html` + `Contact`; SPA footer matches.
- `vercel.json` still sends `X-Robots-Tag: noindex, nofollow` only when `Host` is `digiworks-ashy.vercel.app`.

## Phase 8 QA

| Check | Result |
|---|---|
| `npm run build` | Pass — 126 pages, copy/slot/FAQ checks ok |
| URL comparison vs `_html_source` | Pass — 0 missing; extra `/404.html` only |
| Internal link check | Pass — 0 broken unique href/src pairs |
| Skip robots | 73 pages `noindex, follow` |
| Sitemap | 51 locs; no team, no `/blog/*`, no `/case-studies/*`; hubs present |
| Indexable title/description | Near-miss only: AI services desc 159 chars; generative-ai-development title 49 chars. Frozen skip titles still often outside 50–60. |
| Playwright | Header + hydration 255 tests: 252 passed on the first run; 3 contact/legal copy mismatches from an over-broad CF replace, then those 3 passed after footer-only rewrite |
| Responsive 360 / 768 / 1024 / 1440 | Document `scrollWidth` matches viewport on Home, AI Agent, Hire AI Engineers, Contact, About. Mobile Menu expands. Desktop Services mega-menu expands. |
| Lighthouse desktop (local preview) | Home 97 / 96 / 96 / 100; AI Agent 99 / 97 / 96 / 100; Hire AI Engineers 98 / 97 / 96 / 100; Contact 99 / 97 / 96 / 100 (Performance / Accessibility / Best Practices / SEO) |
| Lighthouse mobile (local preview, form-factor=mobile) | Home 98 / 96 / 96 / 100; AI Agent 99 / 96 / 96 / 100; Hire AI Engineers 99 / 96 / 96 / 100; Contact 99 / 94 / 96 / 100. All ≥90. |
| Live URL shape | `https://digiworksai.com` does not resolve (no DNS; fetch 500). `https://digiworks-ashy.vercel.app` homepage 200; `/about` and `/services/ai-agent-development` **404**; `/about.html` and `/services/ai-agent-development.html` **200**. Homepage markup still links extensionless (`/about`, `/blog`, `/contact`, `/services/ai-agent-development`, `/hire/hire-ai-engineers`). |
| 301s | `vercel.json` has 248 permanent redirects: every non-index page path and trailing-slash variant → the matching `.html` file. `/` is not redirected. |

## What changed per page (copy)

Phase 6 Architecture A copy stays on company, services, solutions, industries, hire, readiness, contact, blog hub, legal. Skipped URLs were not rewritten. Phase 8 only changed robots/sitemap on skip URLs and footer email markup.

## Image suggestions

Files are not renamed. Suggestions only (from Phase 6).

## Batch 7 image suggestions

| Page | Section | Concept | Filename | Alt |
|---|---|---|---|---|
| `/ai-readiness.html` | Hero | Five-question scorecard on a desk | ai-readiness-assessment-scorecard.webp | AI readiness assessment graded score on a named-owner desk |
| `/contact.html` | Offices | Austin HQ storefront, Congress Ave | contact-digiworks-austin-hq.webp | Contact DigiWorks AI Austin headquarters on Congress Avenue |
| `/blog.html` | Hero | Production runbook next to a laptop | enterprise-ai-blog-production-guides.webp | Enterprise AI blog production guides on a staffed desk |
| `/privacy-policy.html` | Intro | Plain-language policy on a screen | digiworks-privacy-policy-plain.webp | DigiWorks AI privacy policy in plain language on this site |
| `/terms-of-use.html` | Intro | Website terms beside a signed folder | digiworks-terms-of-use-site.webp | DigiWorks AI terms of use for this website not a project contract |

## Batch 5 image suggestions

| Page | Section | Concept | Filename | Alt |
|---|---|---|---|---|
| `/industries/ai-for-healthcare.html` | Hero | Clinician at a records desk with a named score | ai-for-healthcare-clinical-desk.webp | AI for healthcare clinical job on a records desk |
| `/industries/ai-for-fintech.html` | Hero | Risk desk watching a ledger flag | ai-for-fintech-risk-desk.webp | AI for fintech risk job on a staffed ledger desk |
| `/industries/ai-for-retail-and-ecommerce.html` | Hero | Merchant at a catalog planning board | ai-for-retail-and-ecommerce-catalog.webp | AI for retail and ecommerce merchandising job |
| `/industries/ai-for-manufacturing.html` | Hero | Line owner at a plant miss stop | ai-for-manufacturing-line-work.webp | AI for manufacturing line job on a plant floor |
| `/industries/ai-for-logistics-and-supply-chain.html` | Hero | Dispatcher at a lane board | ai-for-logistics-and-supply-chain-lanes.webp | AI for logistics and supply chain network job |
| `/industries/ai-for-real-estate.html` | Hero | Broker with a listing book | ai-for-real-estate-deal-work.webp | AI for real estate deal and listing job |
| `/industries/ai-for-education.html` | Hero | Teacher at a class roster desk | ai-for-education-class-work.webp | AI for education class and desk job |
| `/hire/dedicated-ai-pods.html` | Hero | Small named roster at a standup | hire-dedicated-ai-pods-roster.webp | Hire dedicated AI pods named roster in two to three weeks |

## Batch 4 image suggestions

| Page | Section | Concept | Filename | Alt |
|---|---|---|---|---|
| `/services/ai-training-and-support.html` | Hero | Named staff at a live console, Austin office light | enterprise-ai-training-lab.webp | Named US staff practicing on a live AI path in training |
| `/services/mobile-app-development.html` | Offerings | iOS and Android store listings side by side | custom-mobile-app-store-listings.webp | Custom mobile app development company store listings |
| `/solutions/ai-automation.html` | Hero | Operations queue with a named metric | ai-automation-solutions-operations-queue.webp | AI automation solutions for an operations queue metric |
| `/solutions/predictive-analytics.html` | Hero | Planning board with a demand number | predictive-analytics-solutions-demand-board.webp | Predictive analytics solutions showing a demand number |
| `/solutions/conversational-ai.html` | Hero | Support desk with chat and voice | conversational-ai-solutions-support-desk.webp | Conversational AI solutions on a staffed support desk |
| `/solutions/computer-vision-image-recognition.html` | Hero | Plant line camera and a miss stop | computer-vision-image-recognition-line.webp | Computer vision image recognition solutions on a plant line |
| `/solutions/generative-ai.html` | Hero | Desk with a draft waiting for sign-off | generative-ai-solutions-desk-signoff.webp | Generative AI solutions draft waiting for a person to sign |
| `/solutions/ai-for-cybersecurity.html` | Hero | Analyst triage queue, not a policy binder | ai-for-cybersecurity-solutions-triage.webp | AI for cybersecurity solutions on a security triage feed |

## Recommended new pages (do not build until you ask)

Commercial URLs in `seo/KEYWORD_MAP.md` already have a page. Do not add siblings that reuse a primary.

1. After you rewrite posts/studies/team, **remove noindex** on those URLs rather than creating new ones.
2. Optional later: a dedicated Austin office / local landing only if you want a Google Business Profile URL that is not Home or Contact. Outline: H1 “DigiWorks AI Austin office”, NAP, map, how discovery works, link to Contact. Do not invent hours or extra addresses.
3. Do not add “AI agent vs chatbot” or “ML services vs ML applications” pages; those distinctions already live on the winning service URLs.

## Off-site to-do

1. Google Search Console: add `https://digiworksai.com`, verify, submit `https://digiworksai.com/sitemap-index.xml`.
2. Bing Webmaster Tools: same sitemap.
3. Confirm production HTML `robots` is `index, follow,...` on Home and that `https://digiworks-ashy.vercel.app` returns `X-Robots-Tag: noindex, nofollow`.
4. Google Business Profile: Austin NAP must match the site (716 Congress Ave #200, Austin, TX 78701).
5. Fill `seo/VERIFY.md` (email, social, analytics IDs) then send “Apply /seo/VERIFY.md”.

## Deploy on Vercel (`https://digiworksai.com`)

1. Push this branch to GitHub when you are ready (not done in this session).
2. [Vercel](https://vercel.com) → Add New → Project → import this repo. Framework: Astro. Build command: `npm run build`. Output: `dist`. Node `>=22.12.0`.
3. Root directory: repo root. Environment: Production. Do **not** set `VERCEL_ENV` yourself (Vercel sets `production` on the production deployment).
4. Project Settings → Domains:
   - Add `digiworksai.com` and `www.digiworksai.com`.
   - Prefer apex `digiworksai.com` as the primary production domain; redirect `www` → apex (or the reverse — pick one and keep it).
5. DNS at your registrar:
   - Apex: Vercel A / AAAA (or ALIAS) as Vercel shows.
   - `www`: CNAME to `cname.vercel-dns.com` (or the target Vercel displays).
6. Wait for HTTPS. Vercel issues the certificate after DNS propagates. Open `https://digiworksai.com` and confirm the padlock.
7. Production indexing check (must pass):
   - View source on `https://digiworksai.com/`: `<meta name="robots" content="index, follow, ...">` (not noindex).
   - `curl -I https://digiworksai.com/` should **not** include `X-Robots-Tag: noindex`.
8. Staging host check:
   - `curl -I https://digiworks-ashy.vercel.app/` should include `X-Robots-Tag: noindex, nofollow`.
   - Preview deployments (`VERCEL_ENV=preview`) also render `noindex, nofollow` in the meta tag.
9. After go-live: Search Console sitemap submit; request indexing on Home plus 2–3 money pages (`/services/artificial-intelligence.html`, `/hire/hire-ai-engineers.html`, `/contact.html`).
10. Keep `custom-app-development-meta.html` noindex. Keep skip URLs noindex until you rewrite them (`seo/VERIFY.md`).

## SKIPPED — owner will update later

Visible copy is still frozen on this set. Phase 4 technical SEO stays. Links stay working. `/blog.html` copy is done. `/case-studies.html` copy is frozen but **indexable**. Team, `/blog/*`, and `/case-studies/*` are **noindex** until rewrite.

- `/team.html`
- `/case-studies.html`
- `/case-studies/addiction-world.html`
- `/case-studies/arc-viva.html`
- `/case-studies/bay-world.html`
- `/case-studies/coachd.html`
- `/case-studies/curb-cream.html`
- `/case-studies/do-costa.html`
- `/case-studies/draft-day.html`
- `/case-studies/drive-guard.html`
- `/case-studies/gas-on-the-go.html`
- `/case-studies/live-muse.html`
- `/case-studies/memor.html`
- `/case-studies/milestone-truck.html`
- `/case-studies/mvpedits.html`
- `/case-studies/niro.html`
- `/case-studies/siteiq.html`
- `/case-studies/thrive-city.html`
- `/case-studies/yum-runner.html`
- `/blog/10-claude-prompts-that-replace-your-entire-seo-audit-toolkit.html`
- `/blog/ab-testing-machine-learning-models.html`
- `/blog/ai-agent-memory-explained.html`
- `/blog/ai-and-robotics-advancing-automation.html`
- `/blog/ai-customer-support-deflection.html`
- `/blog/ai-fintech-fraud-detection.html`
- `/blog/ai-for-insurance-claims-automation.html`
- `/blog/ai-for-legal-contract-review.html`
- `/blog/ai-for-recruiting-candidate-screening.html`
- `/blog/ai-for-supply-chain-demand-sensing.html`
- `/blog/ai-governance-eu-ai-act-guide.html`
- `/blog/ai-healthcare-production-use-cases.html`
- `/blog/ai-manufacturing-predictive-maintenance-guide.html`
- `/blog/ai-red-teaming-stress-test.html`
- `/blog/ai-retail-personalization-engine.html`
- `/blog/ai-vendor-selection-checklist.html`
- `/blog/anomaly-detection-for-operations.html`
- `/blog/build-vs-buy-ai-decision-matrix.html`
- `/blog/building-a-feature-store.html`
- `/blog/building-voice-ai-agents.html`
- `/blog/calculating-ai-roi-cfo-framework.html`
- `/blog/change-management-for-ai-adoption.html`
- `/blog/choosing-right-llm-business.html`
- `/blog/computer-vision-quality-inspection.html`
- `/blog/customer-churn-prediction-tutorial.html`
- `/blog/cut-cloud-costs-for-ai-workloads.html`
- `/blog/data-lakehouse-architecture.html`
- `/blog/embeddings-infrastructure-vector-search-scale.html`
- `/blog/enterprise-ai-implementation-mistakes.html`
- `/blog/enterprise-ai-maturity-stages.html`
- `/blog/feature-engineering-techniques.html`
- `/blog/fine-tuning-llms-enterprise-tutorial.html`
- `/blog/getting-started-with-artificial-intelligence.html`
- `/blog/how-to-build-ai-agent-2026.html`
- `/blog/how-to-evaluate-llm-applications.html`
- `/blog/intelligent-document-processing-guide.html`
- `/blog/internal-knowledge-assistant-enterprise-rag.html`
- `/blog/llm-observability-monitoring-ai-quality.html`
- `/blog/mlops-from-scratch-deploy.html`
- `/blog/model-context-protocol-mcp-explained.html`
- `/blog/multi-agent-ai-systems-patterns.html`
- `/blog/nlp-revolutionizing-text-analysis.html`
- `/blog/predictive-maintenance-ml-tutorial.html`
- `/blog/privacy-preserving-ai-techniques.html`
- `/blog/production-chatbot-custom-nlp.html`
- `/blog/prompt-engineering-production-patterns.html`
- `/blog/rag-architecture-production-guide.html`
- `/blog/real-time-streaming-kafka-flink-spark.html`
- `/blog/reduce-llm-hallucinations-techniques.html`
- `/blog/securing-llm-applications-owasp-top-10.html`
- `/blog/sentiment-analysis-tutorial.html`
- `/blog/structured-outputs-llm-json-mode.html`
- `/blog/synthetic-data-for-machine-learning.html`
- `/blog/time-series-forecasting-demand-planning.html`
- `/blog/vector-databases-compared.html`
