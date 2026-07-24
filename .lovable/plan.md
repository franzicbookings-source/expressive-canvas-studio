# Editorial Museum Redesign - "Exhibition plate"

Rebuild the homepage and four key pages on a locked brand system, using the selected prototype as the structural reference. Existing copy, logo, colours, fonts and SA voice stay untouched. Zulu placeholder text from the prototype is dropped - your existing English wording is reused verbatim.

## Locked (do not touch)
- Logo (`Ntombii.`)
- Palette (ivory `#F6F3EC`, ink `#1A1A1A`, ember `hsl(12 88% 50%)`)
- Fonts (Space Grotesk + Instrument Serif italic)
- All existing headlines, body copy, service names, FAQ answers, pricing wording, founder bio, WhatsApp CTA
- Existing routes, SEO tags, schemas, sitemap

## Composition rules copied from prototype
- Narrow reading column (`max-w-2xl`) centred, 24-48px side padding
- Section register: `Exhibition 0X: {Name}` eyebrow with 8px ember rule
- Display headlines with underlined phrase accent
- Italic serif standfirst beside a small "Est. 2024 / Ref" meta block + pill CTA
- Numbered chapter markers (large italic serif numeral + tiny uppercase title)
- Editorial drop-cap paragraph
- Full-bleed serif pull-quote between hairline rules
- Footer meta strip with coordinate ticks

## Homepage section order (unchanged, restyled)
```
Nav (existing SiteNav)
Hero - Exhibition 01: Ubuhle boBuchwepheshe treatment applied to current H1
Chapter 01 - Trusted across KZN (partner grid, hairline-framed)
Chapter 02 - Capabilities (services as chapter list, hover reveal)
Chapter 03 - Why choose Ntombii (drop-cap paragraph + 4 tick items)
Chapter 04 - Selected work (2-up plates with ticks)
Chapter 05 - Areas we serve (KZN list with coord ticks)
Chapter 06 - Process (5 numbered steps)
Chapter 07 - Reviews (serif pull-quote carousel, one at a time)
Chapter 08 - Pricing (3 plates, tick borders, ember accent on middle)
Chapter 09 - The Founder (portrait + drop-cap bio)
Chapter 10 - FAQ (chapter-list accordion)
Chapter 11 - Local SEO editorial
Colophon CTA - final serif pull-quote + Start a project button
```

## Motion (Framer Motion only)
- `motion.p / motion.h*` with `whileInView` fade-and-rise, 40ms stagger per line
- Chapter numerals slide in from -12px, ember opacity 0 to 1
- Portrait parallax on scroll (y offset -30 to 30)
- Pull-quote crossfade
- No spring overshoot, all `ease: [0.2, 0.7, 0.2, 1]`, 600-800ms
- Keep existing `CustomCursor`, `ScrollProgress`, `WhatsAppFab`, `MagneticButton` on CTAs

## Files to edit
- `src/index.css` - add `.chapter-eyebrow`, `.chapter-numeral`, `.pull-quote`, `.meta-tick`, `.plate` utilities; tighten container widths
- `src/pages/Index.tsx` - rebuild sections around chapter register (existing copy pasted in verbatim)
- `src/pages/About.tsx` - apply plate layout, drop-cap bio, coord footer
- `src/pages/Work.tsx` - project cards become numbered plates with tick corners
- `src/pages/Services.tsx` - services rendered as chapter list matching Capabilities pattern
- `src/pages/Contact.tsx` - form styled as archive-request card; keep fields, labels, submit copy
- `src/components/site/Nav.tsx` - restyle only: uppercase tracked links, hairline underline on active, keep logo mark and routes

## Files to leave alone
- `src/lib/site.ts`, `caseStudies.ts`, `locations.ts`, `serviceDetails.ts`
- `src/pages/CaseStudy.tsx`, `LocationPage.tsx`, `LocationServicePage.tsx`, `Blog*`, `Pricing.tsx`, `Process.tsx`, `Areas.tsx`, `Capabilities.tsx`
- All SEO components and schemas
- `src/components/site/WhatsAppFab.tsx`, `Layout.tsx`

## Verification
- Playwright screenshot at 384x800 and 1280x1800 for `/`, `/about`, `/work`, `/services`, `/contact`
- Confirm logo, footer copyright, hero copy match previous strings byte-for-byte
- Confirm no em-dashes introduced
