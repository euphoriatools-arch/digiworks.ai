# Owner fill list

## Lead Scout case study (`/case-studies/lead-scout.html`)

| Item | Notes |
|---|---|
| Client company | The quote attribution is “B2B Software, USA”. No separate legal company name was in the source. |
| Named stack | The source says “SaaS-based workflow architecture” and “scalable cloud infrastructure”. No product names for the cloud or app framework. |
| Qualified lead rate before | The source says “Previous baseline”, not a number. |
| Custom software development services | No matching service URL, so that phrase is not linked. AI integration services links to `/services/automation-and-integration`. |
| Product screens | The supplied images show a door-to-door tracking product UI. The written study does not use that phrase. Slots follow the file order: 01 hero, 02 solution (right of the heading), 03 results. The “Lead Scout in the Field” gallery is removed. `lead-scout-04.webp` stays on disk and is not shown. |

## Orange Ruler case study (`/case-studies/orange-ruler.html`)

| Item | Notes |
|---|---|
| Custom software development services | No matching service URL, so that phrase is not linked. |
| Participant engagement before | The source says “Previous baseline”, not a number. |
| Timeline | The source does not give a build duration. |
| Product screens | 01 hero (laptop, tablet, phone), 02 solution (phones, right of the heading), 03 results (laptop). Logo is `orange-ruler-logo.webp`. |

## Person Care case study (`/case-studies/person-care.html`)

| Item | Notes |
|---|---|
| Client quote | The source has no client quote, so the page has no quote block. |
| Market | The source does not name a country. |
| Timeline | The source does not give a build duration. |
| Custom software development services | No matching service URL, so that phrase is not linked. MLOps links to `/services/mlops-setup`. |
| Product screens | 01 hero (tablet, laptop, phone), 02 solution (right of the heading), 03 results (desk mockup). Logo is `person-care-logo.webp`. |

## Checkmate case study (`/case-studies/checkmate.html`)

| Item | Notes |
|---|---|
| `public/case/checkmate/checkmate-03.webp` | Still not provided. The dinner-rush box uses `checkmate-04.webp` (the laptop screen). The “Every Checkmate Screen, Crafted” gallery is removed. |
| Platform: Phone AI | Shown as “Web dashboard · Phone AI”. Confirm the phone channel. |
| Timeline | Unknown. The Timeline cell is hidden. |
| Custom software development services | No matching service URL, so that phrase is not linked. |

Fill the right column. When done, send: **Apply /seo/VERIFY.md**

## Remove noindex after rewrite

Do this only after you own the copy on that URL. Until then, pages stay `noindex, follow` and out of the sitemap. Links still work.

| URL group | Count | Remove noindex after rewrite? (yes / leave) |
|---|---|---|
| All `/blog/*` posts | 55 | |
| All `/case-studies/*` detail pages | 17 | |
| `/team.html` | 1 | |

Hubs `/blog.html` and `/case-studies.html` stay indexable.

## Facts still empty

| Item | Fill in |
|---|---|
| Public email (`src/data/site.ts` → `site.email`) | |
| LinkedIn URL | |
| X URL | |
| Instagram URL | |
| Facebook URL | |
| YouTube URL | |
| Threads URL | |
| London street address | London, United Kingdom only. No street on file. |
| Google Analytics ID | |
| Google Tag Manager ID | |
| Microsoft Clarity ID | |
| Meta Pixel ID | |
| Tawk property / widget IDs | |
| OpenAI pixel ID | |
| Cloudflare beacon token | |

## Confirm or strike

| Claim on the site | Confirm / change to |
|---|---|
| 150+ production AI deployments | |
| 7+ sectors served | |
| Since 2017 | Confirmed. Copyright and schema foundingDate. |
| 2 offices: USA, UK | Confirmed. Austin HQ and London. |
| 8–20 weeks to first production AI | |
| Dedicated AI pods ready in 2–3 weeks | |
| Embedded talent onboard in 1–2 weeks | |
| 2,000+ newsletter readers | |
| Reply within 1 business day | |
| Reviews come from Bark, Trustpilot, and Clutch | |
| Individual review quotes (leave word-for-word if real) | |
| Named certifications (HIPAA, ISO, GDPR, etc.) — currently not claimed | |
| HIPAA-aligned / FERPA-aligned industry language (not certification) | |
| Hire CV **engineers** vs URL `hire-computer-vision-developers` | |
| Case-studies hub count of 18 products (not “20+”) | |

## Legal

| Item | Counsel OK? |
|---|---|
| Privacy policy (plain language, not a legal rewrite) | |
| Terms of use (plain language, not a legal rewrite) | |
