## The redesign at a glance

A site-wide visual overhaul that blends three references:
- **Worth Agency** — oversized wordmark hero with a single sculptural centerpiece
- **Base44** — poster-scale display type, offset color blocks, cut-out shapes
- **Websmith** — bento project storytelling with real device imagery

Logo and copy stay exactly as they are. Fonts and palette change (you opted in). Motion dial: 6 (rich but not scroll-hijacky).

## My picks (you asked me to choose)

**Typography — Archivo Black + Inter Tight**
- `Archivo Black` for display headlines (poster-scale, condensed, holds at 200px+ without falling apart)
- `Inter Tight` for body (dense, readable at small sizes, pairs cleanly with Archivo)
- Why: Instrument Serif reads editorial-quiet; you asked for "go all out." Archivo Black gives the Base44/Worth poster energy. Inter Tight is more mobile-legible than DM Sans at small sizes.

**Layout — Hybrid, mobile-first**
- Hero: centered oversized wordmark + one animated sculptural element (Worth energy)
- Sections: broken-grid poster stacks with offset color blocks (Base44 energy)
- Work: bento tiles with real device mockups (Websmith energy)
- Founder/About: magazine editorial split
- Mobile: everything collapses to single column with sticky bottom nav pill (like Websmith's mobile). Poster type auto-scales via `clamp()`.

## Palette (locked)

```text
Bone       #EDE8DE   — page background
Ink        #0A0A0A   — primary text, dark sections
Electric   #3B4BFF   — primary accent, CTAs, poster blocks
Orange     #FF6A00   — counter-punch accent, highlights, hover states
Chalk      #F7F5EF   — elevated surfaces
Fog        #6B6B6B   — muted text
```

## Scope — entire site

| Page | Treatment |
|---|---|
| `/` Home | Full rebuild: sculptural hero, poster sections, bento work, magazine founder |
| `/work` + `/work/:slug` | Bento grid + editorial case study layout |
| `/services` + `/services/:slug` | Poster-stack section per service |
| `/about` | Magazine editorial with founder portrait |
| `/pricing` | Poster tier cards with orange counter-punch on featured tier |
| `/capabilities`, `/process` | Broken-grid list layouts |
| `/blog` + `/blog/:slug` | Magazine index + editorial reader |
| `/contact` | Split-screen: form left, sculptural mark right |
| `/agents` | Keep dark editorial (already premium), retint accents to Electric/Orange |
| Location pages (`/areas/*`, `/web-design-*`) | Same poster-stack template, town-specific copy preserved |
| `404` | Poster-scale "404" wordmark with return CTA |

## What I'll build

### Design tokens (`src/index.css`, `tailwind.config.ts`)
- Swap CSS variables to the new palette
- Add font-face for Archivo Black + Inter Tight (self-hosted via `@font-face`)
- Utility classes: `.poster-type` (clamp-scaled display), `.poster-block` (electric offset panel), `.cutout` (SVG-clipped shapes), `.chip-nav` (Websmith-style pill), `.magazine-split`

### New shared components
- `SculpturalHero` — animated 3D-feel centerpiece (CSS transforms + Motion, no Three.js — keeps bundle light)
- `PosterSection` — reusable broken-grid section with offset color block + oversized numeral
- `BentoWork` — mixed-size project grid with device-mockup framing
- `MobileChipNav` — floating pill nav for mobile (bottom, like Websmith)
- `KineticHeadline` — split-text stagger reveal on scroll (already have `SplitTextReveal` — extend it)

### Existing components — kept, restyled
- `LogoRotator`, `WhatsAppFab`, `Nav`, `SEO`, all `home/*` motion primitives — reused, retinted

### Motion (dial 6)
- Hero: sculptural element rotates/breathes continuously; headline splits in on load
- Section entrances: staggered reveal via existing `Reveal` component
- Hover: magnetic CTAs (existing), tilt cards on work tiles (existing)
- One horizontal marquee max on the page (the "Trusted across KZN" strip)
- Honors `prefers-reduced-motion` everywhere

### Mobile
- Hero collapses to stacked wordmark + smaller centerpiece
- Poster sections stack single-column, offset blocks become full-width bands
- Bottom chip nav appears < 768px
- Poster type: `clamp(2.5rem, 12vw, 8rem)` — never overflows

## What stays locked

- Nav logo (Ntombii wordmark)
- Every headline, subhead, CTA label, SEO title/description, alt text, footer copy
- All routes, sitemap, schema
- WhatsApp FAB behavior
- No em-dashes (existing project rule)

## Technical notes

- Tailwind v3 stays (project constraint). New utilities added to `tailwind.config.ts` `extend`.
- Fonts loaded via `<link rel="preload">` in `index.html` + `@font-face` in `index.css` with `font-display: swap`.
- No new heavy deps. Motion (already installed) handles all animation. No Three.js — sculptural element is layered CSS + SVG.
- All new components typed, RSC-safe (project is client-only Vite so trivially fine).
- Build stays under current bundle budget; verify with `bun run build` after.

## Out of scope

- Backend/Supabase changes
- New copy or SEO restructuring
- Logo redesign
- Admin/dashboard pages (none exist)

## Rollout order

1. Tokens + fonts + tailwind extend
2. Shared components (SculpturalHero, PosterSection, BentoWork, MobileChipNav)
3. Homepage rebuild
4. Work + case study
5. Services + service detail + pricing
6. About + founder + contact
7. Blog + capabilities + process + areas + location templates
8. 404 + Agents retint
9. Playwright pass on mobile + desktop, verify contrast, verify no em-dashes reintroduced
