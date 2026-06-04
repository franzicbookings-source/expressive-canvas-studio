## Part A — Fix Capabilities cards (homepage)

The 8 capability cards in `src/pages/Index.tsx` show an `ArrowUpRight` icon but aren't clickable. Make each card a real `Link` to its matching service detail page.

Mapping (capability title → existing slug in `SERVICE_DETAILS`):
- Websites → `/services/web-design`
- Brand Systems → `/services/branding`
- Graphic Design → `/services/graphic-design`
- Print & Signage → `/services/printing`
- Web Engineering → `/services/web-development`
- Mobile Surfaces → `/services/web-apps`
- Signage Solutions → `/services/signage`
- Corporate Gifts → `/services/corporate-gifts`

Add a `slug` field to each item in the `capabilities` array and convert the `Reveal` card wrapper into a `Link` (keep the Reveal as inner container, or use `asChild`-style nesting via `<Reveal><Link>...</Link></Reveal>`).

Also verify the `/#capabilities` nav link scrolls correctly when clicked from non-home pages; if not, add a small effect in `Index.tsx` to scroll to `#capabilities` on mount when the hash is present.

## Part B — Hide Journal section from homepage

In `src/pages/Index.tsx`, comment out (do NOT delete) the `{/* JOURNAL */}` section (~lines 605–651). Leaves `/blog` and `/blog/:slug` routes, the Blog page, the data in `src/lib/site.ts`, and the nav "Journal" link untouched.

## Part C — Phase 3

### C1. New location pages (4)
Append to `LOCATIONS` array in `src/lib/locations.ts`:
1. `durban` — eThekwini, KZN metro
2. `johannesburg` — Gauteng, business capital
3. `pretoria` — Tshwane, Gauteng
4. `south-africa` — national service page

Each gets the same shape as existing locations (intro, hook, industries, neighborhoods, landmarks, geo, FAQs). Existing `/areas/:town` route + `LocationPage.tsx` will render them automatically. Add the 4 new URLs (plus the 7 service-combo URLs each, if `LocationServicePage` enumerates them) to `scripts/generate-sitemap.mjs` and regenerate `public/sitemap.xml`.

### C2. Case study pages (4)
Convert the 4 existing portfolio items into full case studies at `/work/:slug`:
- `nyatee` — Nyatee Foundation
- `events` — Sknowhite Events
- `umzilikazi` — Umzilikazi Senior Secondary
- `keepnnalive` — Keep Newcastle Alive

Implementation:
- New file `src/lib/caseStudies.ts` with a `CASE_STUDIES` array keyed by slug. Each entry: hero image, client, sector, location, year, scope (services delivered), challenge, approach, outcome, 3–5 result bullets, screenshots (reuse existing portfolio images), live URL, related services (links to `/services/<slug>`).
- New page `src/pages/CaseStudy.tsx` rendering a single case study with `SEO` (CreativeWork + BreadcrumbList schema) and a WhatsApp CTA.
- Add route `/work/:slug` in `src/App.tsx` (lazy import).
- Update `src/pages/Work.tsx` and the homepage "Selected work" card to link to `/work/<slug>` instead of the external `href` (keep the external link as a "View live site ↗" secondary action inside the case study).
- Add 4 new URLs to `scripts/generate-sitemap.mjs` and regenerate sitemap.

### Out of scope
- Adding Durban/Joburg/Pretoria into every existing service detail's "areas served" copy.
- New nav menu entries (Case studies will be reachable via `/work` and homepage links).
- Touching `src/lib/site.ts` posts (Journal data stays for future re-enable).

## Files touched
- `src/pages/Index.tsx` (capabilities → links, hide Journal)
- `src/lib/locations.ts` (+4 locations)
- `src/lib/caseStudies.ts` (new)
- `src/pages/CaseStudy.tsx` (new)
- `src/pages/Work.tsx` (link to internal case studies)
- `src/App.tsx` (route)
- `scripts/generate-sitemap.mjs` + `public/sitemap.xml`
- `.lovable/plan.md` (update progress notes)
