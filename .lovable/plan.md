# Make the site truly responsive — desktop & mobile

The site currently feels enormous on desktop because the display type was tuned for huge screens (hero up to ~168px, section headings up to ~96px) and the section padding scales up to nearly 11rem. On a typical 13–15" laptop everything fills the viewport and feels cramped. On mobile some elements (giant numerals, hover-preview, hero buttons) also overflow or feel oversized.

This plan retunes the type scale, spacing, and a few component-level details so the layout looks intentional at every breakpoint — without changing the visual identity.

## What changes

### 1. Global type scale (`src/index.css`)
Bring the editorial sizes back to a luxury-but-sane range:

- `.display-mega` → `clamp(2.75rem, 8vw, 6.5rem)` (was up to 10.5rem)
- `.display-xl`   → `clamp(2rem, 5vw, 4.25rem)` (was up to 6rem)
- Tighten `display` line-height slightly for large sizes
- Add a `.display-lg` utility (`clamp(1.75rem, 3.5vw, 3rem)`) for secondary headings

### 2. Container & spacing
- `container-wide` keeps `max-w-7xl` but section vertical padding is reduced one tier: `py-28 md:py-44` → `py-20 md:py-28`, `py-24 md:py-32` → `py-16 md:py-24`. Applied across `Index.tsx` and the other pages.
- Add a readable `max-w-prose-wide` (≈68ch) for long body paragraphs on About / Blog / Services so lines don't stretch edge-to-edge on desktop.

### 3. Homepage (`src/pages/Index.tsx`)
- Hero headline uses the new `display-mega` and is wrapped to `max-w-[18ch]` so it breaks gracefully on wide monitors.
- Hero supporting paragraph + CTA column moves from `md:col-start-7` to `md:col-start-6` and gains `max-w-md` so it doesn't sit awkwardly far right at 1280px.
- Section headings use the new `display-xl` and are constrained with `max-w-[16ch]`.
- Capabilities bento: rows change from fixed `auto-rows-[180px]` to `md:auto-rows-[200px]` at lg, with `lg:auto-rows-[220px]`; reduce inner padding from `p-9` to `md:p-7 lg:p-8`.
- Process numerals shrink: `text-6xl` → `text-5xl md:text-6xl`.
- Pricing hero card: `display text-7xl` price → `text-5xl md:text-6xl`; padding `p-12` → `md:p-10`.
- Marquee/ticker text size unchanged but padding `px-8` → `px-6` to fit more on desktop.

### 4. Other pages (About, Services, Pricing, Work, Blog, BlogPost, Contact)
Each page hero currently uses `text-5xl md:text-7xl`. Change to `text-4xl md:text-5xl lg:text-6xl` so headings feel premium, not shouty. Body intro paragraphs get `max-w-2xl` (already present in most) — verify and add where missing.

### 5. Navigation (`src/components/site/Nav.tsx`)
No structural change. Confirm the mobile menu and the desktop nav still align after the type changes (they should — Nav uses fixed sizes).

### 6. Reduced motion
Already handled — no change.

## Out of scope
- No new pages, sections, or features.
- No color, font, or branding changes.
- No content rewrites.

## Files touched
- `src/index.css` — type scale, new utility, prose width
- `src/pages/Index.tsx` — heading/padding tweaks, hero column widths
- `src/pages/About.tsx`, `Services.tsx`, `Pricing.tsx`, `Work.tsx`, `Blog.tsx`, `BlogPost.tsx`, `Contact.tsx` — heading sizes only

## Verification
After implementing I'll spot-check at 1440×900 (desktop), 1024×768 (small laptop), and 390×844 (mobile) using the browser tools to confirm nothing overflows and the proportions feel right.
