# DigiWorks AI — Migration Progress

**Status:** Phase 2 complete. **JS restore complete** (2026-09-24).  
**Do not start Phase 3 until the user says continue.**

## Done
- Phase 1 inventory (`page-inventory.md`)
- Phase 2 Astro conversion (125 pages), brand scrub, tracking stubbed via `Analytics.astro`
- JS restore: SPA (`app-digi.js`) boots; mega-menus, mobile menu, Motion animations work
- Verified `npm run preview` (:4321) and `npm run dev` (:4323): home + 5 subfolder pages + mobile menu — **zero console errors**

## JS root causes fixed
1. Vite `mapDeps` must stay as `"assets/…"` (helper prepends `/`). Using `/assets/` → `//assets/`; using `./` → wrong root URLs.
2. Cleared `#root` + removed `data-server-rendered` before SPA → client `createRoot` (avoids React #418 hydration mismatch on frozen HTML).
3. `NavFix` no longer wraps `history.pushState`/`replaceState` (that broke React Router menus); click hard-nav to `.html` only.
4. `dw-boot.js` normalizes `.html` → clean paths for the mirrored React Router.
5. Soft WebGL fail in `three` / AICore / ScrollStory so missing GPU cannot blank the page.
6. Absolute asset URLs in layout (`/assets/…`); scripts use `is:inline`.

## Intentionally removed (tracking only — not required for menus/animations)
Tawk, Clarity, GA, Meta, OpenAI pixel, Cloudflare beacon, email-decode.

## Next (only when user says continue)
Phase 3+ (SEO/content/etc. per prior plan). Placeholders still in `site.ts` (analytics IDs empty, etc.).
