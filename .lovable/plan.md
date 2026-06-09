# Homepage redesign — Editorial Brutalist, built to rank in Newcastle/KZN

A complete homepage rebuild in the spirit of Pentagram, Order, Manual, Mast & Studio Dumbar — heavy editorial type, raw grid, oversized numerals, monochrome with a single hot accent — but engineered so every section also earns its keep with Google. Other pages, nav, footer, and global styles stay as they are for now.

## The visual world

- **Black-on-bone** palette. Background goes from warm white to a colder paper white (`#F4F2EC`). Foreground near-black. Single accent: a hotter, more saturated orange-red (`#FF3B14`) used sparingly — accent dot, one headline word, hover state.
- **Type**: keep Instrument Serif for italic punctuation, replace Inter display usage with a stronger editorial sans (Söhne-feel — we can use **Geist** or **Neue Haas Grotesk Display** via fontsource/Google equivalent like **Space Grotesk** at heavy weight). Body stays neutral.
- **Hairline grid**: visible 12-column rules, oversized section numerals `(01) — (07)`, ALL-CAPS micro labels, tabular numerals everywhere.
- **No stock photos. No gradients. No glassmorphism. No drop shadows on cards.** Depth comes from typography scale and whitespace, not effects.
- **Motion**: slow, deliberate. Letter-by-letter reveal on the H1, marquee for service ticker, subtle weight-shift on hover for capability rows. No parallax theatrics.

## New homepage structure

```text
┌─────────────────────────────────────────────────┐
│ (00) MASTHEAD                                   │
│   Oversized editorial H1 — "Web design          │
│   studio in Newcastle, KZN."                    │
│   Sub: one tight sentence. Two CTAs.            │
│   Right rail: live status, location, year est.  │
├─────────────────────────────────────────────────┤
│ MARQUEE — towns we serve (SEO + motion)         │
│   Newcastle · Madadeni · Vryheid · Ladysmith…  │
├─────────────────────────────────────────────────┤
│ (01) INDEX — what we do, as a table             │
│   Numbered rows, hover reveals one-line answer  │
├─────────────────────────────────────────────────┤
│ (02) SELECTED WORK — full-bleed editorial       │
│   One large case, then 3-up tighter grid        │
├─────────────────────────────────────────────────┤
│ (03) MANIFESTO — display quote, single column   │
├─────────────────────────────────────────────────┤
│ (04) AREAS WE SERVE — SEO power section         │
│   Grid of 8-10 KZN towns linking to /areas/*    │
│   Each tile: town name, population, "Web        │
│   design in {town}" link. LocalBusiness schema. │
├─────────────────────────────────────────────────┤
│ (05) PROOF — one testimonial, large, with       │
│   client name + 4 logos beneath                 │
├─────────────────────────────────────────────────┤
│ (06) PROCESS — 4 steps as a horizontal ledger   │
├─────────────────────────────────────────────────┤
│ (07) CONTACT — full-bleed black panel           │
│   "Start a project" + WhatsApp + email          │
└─────────────────────────────────────────────────┘
```

Removed from current home: the device mockup hero, the floating black caption card, the "Made in Newcastle" stamp, the dense capabilities card grid (replaced by editorial index), pricing table (lives on /pricing), blog cards, FAQs (kept on schema but visually removed — fewer sections, more weight per section).

## SEO moves baked into the design

1. **H1 contains the money phrase**: "Web design studio in Newcastle, KZN." — exact-match for the local search opportunity we identified (KDI 0).
2. **Areas section** isn't decoration — it's the SEO engine. 8-10 internal links to `/areas/{town}` with descriptive anchors ("Web design in Madadeni", not "Madadeni →"). LocalBusiness JSON-LD lists `areaServed` with all towns.
3. **Town marquee** is real text (not an image) for crawlers.
4. **Index section** uses semantic `<h2>` per capability with descriptive anchors to `/services/{slug}`.
5. **Page-specific OG** stays from the previous fix. Title tightened to "Web design Newcastle, KZN — Ntombii Tech" (<60 chars). Meta description rewritten around Newcastle + services + 150 chars.
6. **Schema**: keep LocalBusiness, Website, FAQ, Review schemas (move FAQ schema-only since visual FAQ is removed — still crawlable).

## What changes / what stays

**Edited:**
- `src/pages/Index.tsx` — full rewrite of the page composition
- `src/index.css` — add brutalist tokens (paper background, hotter accent, new display sizes, hairline rule helpers); load new display font via `<link>` in `index.html`
- `index.html` — add font link + tightened title/description
- `src/lib/seo.ts` — extend `localBusinessSchema()` to include `areaServed` array (Newcastle, Madadeni, Vryheid, Ladysmith, Dundee, Utrecht, Osizweni, Pongola)

**Untouched (this round):**
- Nav, Footer, all other pages, service detail pages, location pages, components/ui, site.ts content (we reuse SITE data)

**Possibly removed from `src/components/home/`** (only if unused after rewrite): `HoverPreview`, `CursorGlow`, `StatusBar` — confirmed during build.

## Technical notes

- New font loaded with `rel="preconnect"` + `display=swap` to keep LCP intact.
- All new colors added as HSL tokens in `index.css`; no hardcoded hex in components.
- Reveal animation respects `prefers-reduced-motion`.
- Mobile (current viewport: 384px) gets a single-column stack with the same editorial weight — display sizes use `clamp()` so the H1 stays huge but never overflows.
- After build I'll snapshot the preview at 384px and 1440px to confirm composition, then mark the relevant SEO findings (`metadata_quality`, `social_preview`) as fixed if the new metadata satisfies them.

## Out of scope (for follow-ups, in priority order)

1. Rebuild `/services` and `/work` in the same editorial system
2. Build `/web-design-newcastle` and `/website-design-and-seo-packages` landing pages (the KDI-0 opportunities from earlier research)
3. Redesign `/areas/{town}` template with LocalBusiness schema per page
4. Apply the brutalist system to nav + footer

Approve and I'll build the homepage.
