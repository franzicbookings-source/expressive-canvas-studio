## Scroll animations + content polish for non-home pages

Apply the existing `Reveal` component (IntersectionObserver fade+rise) across all pages except the homepage, and add some editorial flourishes & extra copy to make each page feel richer.

### Reusable upgrades
- **Promote `Reveal`** from `src/components/home/` → `src/components/site/Reveal.tsx` (keep a re-export for the homepage).
- **Add scroll utilities** to `src/index.css`:
  - `.reveal-stagger > *` helper for child stagger
  - A subtle parallax hover/scroll utility (`.scroll-fade-in` keyframe variant)
  - Smooth scroll behavior on `html`

### Per-page work

**About.tsx**
- Wrap hero, story paragraphs, values grid, and CTA in `Reveal` with staggered delays.
- Add a new "Principles" strip (4 short tenets I'll write — e.g. *Clarity over cleverness*, *Ship, then refine*, *Respect the brief, question the brief*, *Pixels are promises*).
- Add a small "Currently" sidebar (what I'm reading / building / listening to — placeholder editorial copy).

**Services.tsx**
- Reveal each service card on enter with stagger.
- Add a short intro paragraph above the grid framing the offering.
- Add a "How we work" 4-step mini-section (Discover → Design → Build → Hand-off) with revealed steps.

**Pricing.tsx**
- Reveal tier cards with a slight stagger; subtle hover lift.
- Add a "What's always included" row beneath the tiers (5 bullets I'll write — revisions, source files, hand-off docs, 14-day support, performance pass).
- Add a one-line FAQ teaser linking to Contact.

**Work.tsx**
- Reveal each project tile with stagger.
- Add a short editorial intro sentence at the top.
- Add a closing "Have something in mind?" band with link to Contact.

**Blog.tsx**
- Reveal post cards with stagger.
- Add a short tagline under the page title.

**BlogPost.tsx**
- Fade-in the article header; reveal each paragraph block as you scroll.
- Add a "Continue reading" footer with links to the other two posts.

**Contact.tsx**
- Reveal the form fields and side info column.
- Add a small "Response within 24h" reassurance line and office hours.

### Out of scope
- Homepage stays untouched (already animated, user likes it).
- No nav/footer changes.
- No new dependencies — pure CSS + the existing IntersectionObserver pattern.
- No backend/schema changes.

### Technical notes
- Move file: `src/components/home/Reveal.tsx` → `src/components/site/Reveal.tsx`. Update `Index.tsx` import; new pages import from `@/components/site/Reveal`.
- Keep animations subtle (≤900ms, ease-out-expo) and respect `prefers-reduced-motion` by adding a `@media (prefers-reduced-motion: reduce)` block in `index.css` that disables transforms/opacity transitions on `[data-reveal]`.
