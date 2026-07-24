# Homepage redesign — "Editorial Brutalist v2, Damien-grade"

Full homepage-only redesign using the design-like-damien skill. Locked from your picks; layout suggested by me below.

## Locked tokens (from your picks)

- **Palette:** near-black premium
  - Background `#0A0A0A` · Surface `#141414` · Text `#F5F5F5` · Accent `#FF4A1C` (single accent, ≤3 uses per page)
  - Borders `rgba(255,255,255,0.08)`
- **Typography:** Instrument Serif (display) + Work Sans (body/UI)
  - Headings: tracking `-0.03em`, line-height `1.05–1.15`, weight 400 serif for editorial gravity
  - Body: tracking `-0.01em`, line-height `1.6`, weight 400/500
  - Labels: uppercase, tracking `0.16em`, 11px, Work Sans 500
- **Radius/shadow:** `rounded-2xl` default · `shadow-sm` only · no glass, no gradients

## Suggested layout — "Editorial full-bleed with bento inserts"

A hybrid — not a template. Big cinematic full-width sections carry the story, and two bento tiles break the rhythm where density earns it. This matches the Damien playbook (Linear × Mercury × Audi) without feeling like a stock landing page.

```text
┌──────────────────────────────────────────────┐
│ HERO — full-bleed. Serif headline 96–128px,  │
│ tight tracking. Small ticker of KZN towns.   │
├──────────────────────────────────────────────┤
│ TRUSTED — hairline row of 5 clickable proofs │
├──────────────────────────────────────────────┤
│ CAPABILITIES — bento grid (6 tiles, mixed)   │
├──────────────────────────────────────────────┤
│ FEATURED WORK — full-bleed case, alternating │
├──────────────────────────────────────────────┤
│ WHY US — 3-up editorial, tight numerals      │
├──────────────────────────────────────────────┤
│ PROCESS — horizontal scroll-snapped steps    │
├──────────────────────────────────────────────┤
│ PRICING — 3 cards, one recommended           │
├──────────────────────────────────────────────┤
│ AREAS — dense hairline grid of KZN towns     │
├──────────────────────────────────────────────┤
│ FAQ — accordion, editorial serif questions   │
├──────────────────────────────────────────────┤
│ FOUNDER — portrait left, quote right         │
├──────────────────────────────────────────────┤
│ FINAL CTA — full-bleed serif, single button  │
└──────────────────────────────────────────────┘
```

## Execution plan

1. **Capture current homepage** at desktop + mobile widths via Playwright.
2. **Generate 3 rendered directions** with the locked palette + type + layout hybrid. Each variant differs only in composition/density/motion register — not in tokens. Damien-grade quality bar: Linear crispness, Mercury spacing, Audi confidence.
3. **You pick one** from the prototype picker.
4. **Implement the chosen direction on `/` only:**
   - Update `src/index.css` design tokens (bg, surface, accent, radius, borders) to the locked palette
   - Wire Instrument Serif + Work Sans via Google Fonts in `index.html`
   - Rewrite `src/pages/Index.tsx` to match chosen direction 1:1 (sections, hierarchy, density)
   - Keep the existing homepage assets (founder portrait, logos, portfolio images, LogoRotator group animation)
   - Framer Motion `whileInView` reveals, `once: true`, ≤40px travel, ≤0.7s
   - Mobile-first: hero clamps down cleanly at 375px, bento collapses to single column, horizontal scroll-snap for process, WhatsApp FAB spacing preserved
5. **Guardrails:**
   - Homepage only. `About`, `Services`, `Pricing`, `Work`, `Process`, `Contact`, location pages untouched.
   - No changes to routing, SEO metadata, sitemap, or case-study data.
   - All content preserved: local Newcastle/KZN SEO copy, 8 services, 10 FAQ, trusted proofs, LocalBusiness schema.
   - Em-dashes stay banned (project rule).
   - Nav/footer keep current structure; only tokens restyle them.
6. **Verify** — Playwright screenshots at 1280px and 375px; contrast check on the accent + text on dark surface.

## Technical details

- Fonts loaded via `<link>` in `index.html`, not `@import` in CSS (no FOUT stall).
- CSS variables in `src/index.css` updated in HSL (existing convention) to preserve shadcn theming.
- Accent used only on: primary CTA, active nav pill, one data highlight per section.
- No new dependencies — Framer Motion already installed. Lenis intentionally skipped to keep bundle lean (can add in a follow-up if you want the buttery scroll feel).

## Out of scope

- Other pages (only `/` this turn)
- Backend/data changes
- New copy — reusing current homepage content, restyled

Approve and I'll capture the current preview and generate the 3 directions for you to pick.