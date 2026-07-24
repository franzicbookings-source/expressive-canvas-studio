# Homepage Visual Redesign — "Kinetic Editorial"

Locked (do not touch): Space Grotesk typography, all existing copy/headings/SEO text, logo files, footer legal, section IDs and route structure.

Scope: `src/pages/Index.tsx` visual layer + `src/index.css` tokens/utilities + a few new presentational components. No content, no routing, no data changes.

## Visual Direction

Warm ivory paper base carried over, pushed further into a premium editorial magazine feel with cinematic motion. Deep ink black, warm ember accent, subtle chromatic highlights. Every section gets a distinct "spread" personality while sharing one type/color system.

## Signature Effects (the "wow" layer)

1. **Cinematic hero**
   - Full-viewport hero with animated aurora/gradient mesh behind the ink text
   - Custom cursor (ember dot + trailing ring) on desktop
   - Split-letter headline reveal on load (letters rise + settle) using Framer Motion
   - Subtle parallax on hero blocks as the user scrolls
   - Marquee ticker at the bottom of the hero ("Newcastle · KZN · Est. …") in tiny caps

2. **Magnetic + tilt interactions**
   - Primary CTAs become magnetic (button drifts toward cursor)
   - Portfolio and service cards get 3D tilt on hover with soft ember glow
   - Founder portrait gets a subtle mouse-reactive parallax

3. **Scroll choreography**
   - Section numerals (01 – 10) become large sticky editorial marks in the gutter as you scroll
   - Reveal-on-scroll for every block (staggered fade + rise) via IntersectionObserver / Framer
   - A slim scroll progress bar in ember at the top

4. **Bento + broken grid sections**
   - Services rebuilt as an asymmetric bento grid (varied cell sizes, one featured "hero" service)
   - Featured Work becomes an editorial split: large lead case + stacked smaller cases with hover image-zoom and ember caption slide-in

5. **Marquee + kinetic type**
   - Trusted strip logos gain a continuous horizontal marquee variant on mobile (still static grid on desktop, per current design)
   - A full-width kinetic type band between two sections ("WEBSITES · SEO · BRAND · NEWCASTLE") slowly scrolling

6. **Founder spread**
   - Portrait framed as a magazine plate: corner ticks, caption block with pull-quote, drop-cap paragraph, faint contact-sheet numbering
   - Mouse parallax on the portrait, ember wax-seal accent

7. **Micro-polish**
   - Film-grain overlay (already present) tuned finer
   - Warm vignette at page edges
   - Ember underline hover on all inline links
   - Section dividers as thin hairlines with a single ember tick
   - Focus rings styled in ember for accessibility

## Technical Notes

- Add `framer-motion` usage (already installed) for reveals, split-text, magnetic buttons, tilt
- New small components under `src/components/home/`:
  - `CustomCursor.tsx`
  - `MagneticButton.tsx`
  - `TiltCard.tsx`
  - `SplitTextReveal.tsx`
  - `ScrollProgress.tsx`
  - `KineticMarquee.tsx`
  - `StickyNumeral.tsx`
- Extend `src/index.css` with tokens for aurora gradient, tilt shadow, cursor states, marquee keyframes
- Respect `prefers-reduced-motion`: disable cursor, magnetic, tilt, split-text — keep static layout
- Mobile: skip custom cursor, tilt, magnetic; keep reveals + marquees (lighter)
- Do not alter `<SEO />`, headings text, footer, logo image, or `SITE.*` copy

## Out of Scope

- No changes to other pages
- No font swaps, no logo swaps, no copy edits
- No new content sections, no removed sections
- No backend/schema changes

## Verification

- Playwright screenshots at 384px and 1280px for hero, services, work, founder, footer
- Confirm reduced-motion path renders cleanly
- Confirm no console errors, no layout shift on load
