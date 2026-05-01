## SEO domination plan — Northern KZN

Goal: rank #1 in Google for high-intent searches like "web designer Newcastle", "website design Vryheid", "branding agency Ladysmith", and the long-tail equivalents across every Northern KZN town and township.

We get there with three layers: **technical SEO foundation**, **localised landing pages**, and **content + authority signals**. Everything stays inside the existing React/Vite stack — no rewrite required.

---

### Target geography (the conquest list)

Tier 1 (priority — biggest commercial intent):
Newcastle, Madadeni, Osizweni, Vryheid, Ladysmith, Dundee, Utrecht

Tier 2 (secondary — capture surrounding searches):
Pongola, Nongoma, Glencoe, Dannhauser, Estcourt, Bergville, Ulundi, Paulpietersburg, Volksrust

Each town gets keyword combos for our 4 services: web design, web development, branding, mobile/app design.

---

### 1. Technical SEO foundation

Add the plumbing every page needs to rank:

- **Dynamic meta tags per route** — install `react-helmet-async`, wrap `<App>` in `HelmetProvider`, and create a `<SEO>` component that sets `<title>`, `<meta description>`, canonical, OG, and Twitter tags on every page (Index, Services, Work, Pricing, About, Blog, BlogPost, Contact, plus new location pages).
- **JSON-LD structured data** — inject schema on every page:
  - `LocalBusiness` / `ProfessionalService` (NAP, geo coords, opening hours, sameAs socials, areaServed list of all towns) — site-wide via Layout.
  - `WebSite` + `SearchAction` on home.
  - `Service` schema on /services and each service section.
  - `BreadcrumbList` on all inner pages.
  - `Article` on blog posts (already partially there in data — formalise it).
  - `FAQPage` from existing `SITE.faqs`.
  - `Review` / `AggregateRating` from existing testimonials.
- **`sitemap.xml`** — generate at build time via a small Vite plugin or a prebuild script; include every static route, every blog post, and every new location page. Write to `public/sitemap.xml`.
- **`robots.txt`** — add `Sitemap: https://ntombii.tech/sitemap.xml`.
- **Canonical URLs** — set per-page in the SEO component to prevent duplicate content.
- **Image SEO** — add descriptive `alt` text using the format "{service} for {client} — {town}" on portfolio images; ensure `width`/`height` attrs to avoid CLS.
- **Performance signals** — already strong after the recent webp pass; add `<link rel="preconnect">` for any third-party domain (none currently, so skip), and ensure the LCP image on home is `fetchpriority="high"`.
- **Mobile + Core Web Vitals** — already mobile-first; add `loading="lazy"` everywhere below the fold (mostly done).

### 2. Localised landing pages — the core ranking weapon

This is what actually wins local searches. Google ranks pages that explicitly mention the town + the service.

Add a single dynamic route: **`/areas/:town`** rendered by a new `LocationPage.tsx`. One source of truth: `src/lib/locations.ts` — an array of town objects:

```text
{
  slug: "newcastle",
  name: "Newcastle",
  region: "Amajuba District, KZN",
  intro: "...",        // 2-3 sentence local-flavoured opener
  neighborhoods: ["Madadeni", "Osizweni", "Lennoxton", ...],
  landmarks: ["Amcor Dam", "Drakensberg foothills", ...],
  industries: ["mining", "manufacturing", "retail", "schools"],
  geo: { lat, lng },
}
```

Each town page renders a unique, localised page with these sections:
1. H1: "Web Design & Development in {Town}" (varies per town to avoid template feel)
2. Local intro paragraph (mentions neighborhoods, landmarks, industries)
3. Services block keyed to local needs (e.g. mining suppliers in Newcastle vs schools in Madadeni)
4. Embedded Google Map (`<iframe>` with town coords — no API key needed)
5. Local proof: testimonials + portfolio filtered/labelled by region
6. FAQ section answering local-intent questions ("How much does a website cost in {Town}?", "Do you serve {neighborhood}?")
7. WhatsApp + contact CTA with local phone copy
8. Per-page JSON-LD: `LocalBusiness` with `areaServed: {Town}` + `Service` + `FAQPage` + `BreadcrumbList`

Towns to ship at launch (15 pages):
Newcastle, Madadeni, Osizweni, Vryheid, Ladysmith, Dundee, Utrecht, Pongola, Nongoma, Glencoe, Dannhauser, Estcourt, Bergville, Ulundi, Paulpietersburg

Each page must have **at least 60% unique copy** — we'll vary intros, FAQs, industry framing, and landmarks per town. No copy-paste template.

Add an **`/areas` index page** listing all towns we serve, with internal links to each (boosts crawl + internal PageRank flow).

### 3. Content + authority

- **Expand the blog** with 6 new SEO-targeted posts (in `SITE.posts`):
  - "Best web designer in Newcastle — what to look for in 2026"
  - "How much does a website cost in Vryheid?"
  - "Why Ladysmith businesses are losing customers to Google"
  - "Madadeni & Osizweni — getting your business found online"
  - "Utrecht & Dundee small business digital guide"
  - "Northern KZN local SEO checklist (free)"
  Each post: 600+ words, internal links to relevant `/areas/{town}` and `/services`, JSON-LD `Article` schema.
- **Internal linking** — Nav stays clean, but footer gets a "Areas we serve" column linking the top 8 towns; blog posts link into location pages and vice versa.
- **NAP consistency** — Name, Address (Newcastle, KZN), Phone (+27 81 236 0230) appear identically in footer, contact page, and every LocalBusiness schema block.

### 4. Off-site setup (user actions — documented, not coded)

I'll output a short post-deploy checklist for you to action:
- Create/claim Google Business Profile for Newcastle HQ + service-area listings
- Submit sitemap in Google Search Console + Bing Webmaster
- Get listed on local directories (Brabys, SA Yellow Pages, Hellopeter)
- Ask the 3 existing testimonial clients for Google reviews

---

### Files to create

```text
src/components/seo/SEO.tsx              // Helmet wrapper + JSON-LD injector
src/lib/locations.ts                    // Town data (15 towns)
src/lib/seo.ts                          // Schema generators + keyword helpers
src/pages/LocationPage.tsx              // Dynamic /areas/:town
src/pages/Areas.tsx                     // /areas index
scripts/generate-sitemap.mjs            // Prebuild sitemap generator
```

### Files to modify

```text
package.json                            // + react-helmet-async, + prebuild script
src/main.tsx                            // wrap with HelmetProvider
src/App.tsx                             // add /areas + /areas/:town routes
src/components/site/Layout.tsx          // site-wide LocalBusiness JSON-LD
src/components/site/Nav.tsx             // (optional) "Areas" link
(every page in src/pages/)              // add <SEO> component with per-page meta
src/lib/site.ts                         // + 6 new blog posts, footer areas list
public/robots.txt                       // + sitemap reference
index.html                              // tighten default meta (becomes fallback only)
```

### Out of scope (intentionally)

- Server-side rendering / prerendering. Google now indexes client-rendered React reliably; we'll add prerender later only if Search Console shows indexing gaps.
- Paid ads, GMB management automation, backlink outreach — those are off-platform and will be in your post-deploy checklist.

### Success metric

Within 60–90 days of deploy + GSC submission, target top-10 ranking for `"web designer {town}"` across all Tier-1 towns, and top-3 for `"web designer Newcastle"` specifically.
