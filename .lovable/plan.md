# Plan: Rank #1 across every area for every service

Realistic framing: Google can't rank you #1 everywhere overnight — but the strategy that gets you there is well-defined. You already have the foundation (area pages, service pages, LocalBusiness schema). What's missing is the **area × service matrix**, cleaner on-page SEO, and Google Search Console connected so we can measure and iterate.

## Phase A — Fix the 3 open SEO findings (fast wins)

1. **Alt text on client logos** (`src/components/home/LogoRotator.tsx`, `src/components/home/TrustedBy.tsx`): drop the word "logo" and file extensions. `alt="Nyatee Foundation"`, not `alt="Nyatee Foundation logo"`.
2. **Static social preview tags** in `index.html`: remove the hardcoded `og:title`, `og:description`, `og:url` so per-route Helmet tags aren't shadowed for non-JS crawlers (LinkedIn, Slack). Keep `og:image` sitewide fallback.
3. **Google Search Console**: trigger the connector so we can verify ownership, submit the sitemap, and monitor which "web design {town}" queries are actually landing.

## Phase B — Build the area × service matrix (the actual ranking play)

Right now `/areas/{town}` exists and generic `/services/{slug}` exists, but the high-intent searches are **"{service} {town}"** (e.g. "ecommerce Newcastle", "logo design Vryheid"). Google ranks pages that match this exact intent.

Create programmatic pages at `/{service}-{town}`:

```text
services (7):     web-design, web-development, ecommerce,
                  school-websites, local-seo, logo-design, web-apps
areas (~15):      newcastle, madadeni, osizweni, dundee, utrecht,
                  ladysmith, vryheid, amajuba-district, durban,
                  johannesburg, pretoria, ...
= ~105 landing pages
```

Each page:
- Unique H1: `{Service} in {Town} — Ntombii Tech`
- Local intro paragraph referencing town landmarks/industries (pulled from `LOCATIONS`)
- Service scope, pricing anchor, 3-5 FAQs (with FAQ schema)
- LocalBusiness + Service schema with `areaServed = town`
- CTA → WhatsApp + contact form
- Internal links: sibling towns for the same service, sibling services for the same town, parent `/services/{slug}` and `/areas/{town}`

`LocationServicePage.tsx` already exists — extend it, wire routes in `App.tsx`, and add all 105 URLs to `scripts/generate-sitemap.mjs`.

## Phase C — Internal linking + content depth

1. **Hub pages**: `/services/{slug}` links to all `/{service}-{town}` variants. `/areas/{town}` links to all `/{service}-{town}` variants for that town.
2. **Homepage Local SEO section**: add a compact "Areas we serve" strip linking to top 6 town × service combos.
3. **Breadcrumbs schema** on every location × service page.
4. **Blog cadence** (recommendation, not built now): one post/week targeting a `{service} {town}` long-tail query with a case study or local angle.

## Phase D — Measurement

1. Trigger a fresh SEO review scan after Phase A ships.
2. Once GSC is connected, submit sitemap + request indexing for the top 20 pages.
3. Re-check Semrush in ~60 days for ranking movement on target keywords.

## What I'll NOT change

- Design, logo, colours, editorial style, fonts.
- Existing routes / pages / forms.
- Any content the user has already approved.

## Files that will change

- `src/components/home/LogoRotator.tsx`, `src/components/home/TrustedBy.tsx` — alt text
- `index.html` — remove static og:* tags
- `src/pages/LocationServicePage.tsx` — flesh out template
- `src/App.tsx` — add `/{service}-{town}` routes
- `scripts/generate-sitemap.mjs` — add matrix URLs
- `src/lib/seo.ts` — add `serviceLocationSchema` helper if needed

## Order of execution

1. Phase A (3 fixes, ~10 min, publish immediately)
2. Trigger SEO scan + connect GSC (needs your approval)
3. Phase B (matrix build, largest chunk)
4. Phase C (internal linking sweeps)
5. Phase D (measure)

Approve and I'll start with Phase A + the SEO scan trigger, then move into the matrix build.
