## Homepage redesign — full creative control

The current homepage looks "clean and Apple-ish" but its structure is still the same template (hero → stats → marquee → services grid → projects grid → pricing → FAQ → blog → CTA). A top-tier agency homepage doesn't read like a checklist — it reads like a magazine cover that happens to sell. This redesign rebuilds `src/pages/Index.tsx` from scratch with a new visual language, new section order, and new motion. **Only the homepage changes.** All other pages, content data, and backend stay the same.

Inspiration: Vercel, Linear, Resend, Framer, Cuberto, Active Theory, Apple product pages.

---

### New homepage structure

```text
1. Status bar         — thin top strip: "● Available for Q3 projects · Newcastle, KZN · 02:14 SAST"
2. Editorial hero     — oversized split headline, no centered text, asymmetric
3. Logo wall          — past clients / "as seen on" style row
4. Manifesto          — large serif statement, like a brand promise
5. Capabilities bento — 6-tile asymmetric grid (not a 2x2), each tile a different size/feel
6. Selected work      — "01 / 05" indexed list with hover image preview (Cuberto-style)
7. Process timeline   — horizontal scroll-snap, 4 steps with sticky numbers
8. Numbers band       — full-width dark band, oversized stats, ticker animation
9. Voices             — single rotating testimonial card with portrait + quote mark
10. Pricing teaser    — 1 hero card + 2 small cards (not 3 equal columns)
11. Journal           — magazine layout: 1 large feature + 2 stacked
12. Closing CTA       — full-bleed black canvas, oversized "Let's build" with cursor-follow gradient
13. Footer (existing)
```

### Visual language changes

- **Type scale:** Headline jumps to `clamp(3.5rem, 12vw, 11rem)` with tight `-0.05em` tracking. Mix Inter (display) with Instrument Serif (italic accents) more aggressively — every section uses both.
- **Color:** Keep off-white base. Introduce a true black `#0A0A0A` band for sections 8 and 12. Accent orange becomes a precise highlight, not decoration — used on indexes, dots, hover states, and italic words only.
- **Layout:** Move from symmetric grids to asymmetric editorial grids (`grid-cols-12` with `col-span` jumps). Generous negative space, hairline dividers with section labels in the margin (e.g. `(02) — Capabilities`).
- **Motion:** Subtle scroll-triggered fade/translate on every section using IntersectionObserver. Marquee replaced with a one-line live status ticker. Closing CTA has a cursor-following radial gradient.
- **Texture:** Tiny grain overlay on hero (SVG noise, 4% opacity). Hairlines (1px) replacing card borders in places. Section numbers in the side margin like a print magazine.

### Components & files

**Modify:**
- `src/pages/Index.tsx` — full rewrite, ~13 sections
- `src/index.css` — add: noise utility, cursor-glow, scroll-snap helpers, new clamp-based display sizes, marquee variant for ticker

**Add:**
- `src/components/home/StatusBar.tsx` — top live ticker with current SAST time
- `src/components/home/HoverPreview.tsx` — work list with image preview that follows cursor
- `src/components/home/CursorGlow.tsx` — radial gradient that follows pointer (used in closing CTA only)
- `src/components/home/Reveal.tsx` — IntersectionObserver wrapper for fade-up

**Untouched:** `Nav.tsx`, `Layout.tsx`, footer, all other pages, `site.ts` data, Supabase tables.

### Copy rewrites (homepage only, my words)

I'll rewrite homepage section copy with stronger agency voice while keeping the brand truth (Newcastle-born, mobile-first, WhatsApp-friendly, AI workflow). Examples:

- Hero: **"We design the internet"** / *for brands that refuse to look like everyone else.* Subline: "A digital studio out of Newcastle, building the websites, brands and product surfaces that growing African companies actually deserve."
- Manifesto: *"Beautiful is the baseline. We're here for what it does next."*
- Capabilities tiles: "Interfaces", "Brand systems", "Web engineering", "Mobile surfaces", "AI workflows", "Launch & iterate"
- Closing CTA: **"Let's build the next thing."**

All names, stats, projects, pricing numbers, WhatsApp number remain unchanged.

### What I will NOT do

- Touch any other page
- Change colors globally (only add a black-band variant)
- Replace the data layer or routing
- Change the nav or footer
- Remove existing sections from other pages

### Acceptance

- Homepage looks visibly different from the current one on first scroll
- Sections feel asymmetric and editorial, not card-grid templated
- Reads like a senior studio, not a freelancer template
- Mobile (770px and below) still legible — clamp-based type and stacked grids
- No regressions on /work, /services, /pricing, /about, /blog, /contact
