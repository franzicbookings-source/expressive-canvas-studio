# Homepage redesign — Ntombii Tech

A full rebuild of `src/pages/Index.tsx` plus a few supporting tweaks. Everything stays on the existing tech stack and design tokens (cream `--background`, near-black `--foreground`, vivid orange `--accent`). No other pages are touched.

---

## 1. Hero device mockup (generated asset)

- Copy your attached Snesenzo screenshot into `src/assets/ref-snesenzo.png`.
- Generate **one** transparent-background hero image (`src/assets/hero-devices.png`) using the premium image model:
  - Composition: laptop (centered, large) + tablet (right, slightly behind) + phone (front-left), all showing the Snesenzo site on their screens
  - Transparent PNG, no studio floor, no shadow rectangle, no background plate — only devices + soft contact shadow directly beneath
  - 1920×1280, screens sharp and legible
- Used at desktop and mobile (no separate second render — one image scales cleanly).

## 2. Header (`src/components/site/Nav.tsx`)

- Update primary nav order to: Home · Capabilities · Work · Process · Pricing · About
  - "Capabilities" anchors to `/#capabilities`, "Process" to `/#process` (homepage sections), the rest stay as routes
- Replace "Let's talk" CTA copy with **"Start a project →"** (black pill, unchanged styling)
- Footer untouched (the recently-added Capabilities list stays)

## 3. Homepage (`src/pages/Index.tsx`) — full rebuild, sections in order

**Hero (split layout)**
- Left: small uppercase eyebrow `DIGITAL · DESIGN · BRAND · PRINT`, the existing display-mega headline with italic serif accents on *the* / *like everyone else*, supporting paragraph (already updated copy), orange primary "Start a project →" pill + dark outlined "Chat on WhatsApp"
- Right: the generated `hero-devices.png`, a small floating black card *"Design that works online and in real life."*, and a circular orange-dot stamp
- Mobile: stacks — text, buttons, then mockup; mockup capped so the hero doesn't get tall

**Trusted by** (existing `TrustedBy` component, unchanged)

**Manifesto** (existing, unchanged)

**Capabilities — DARK section (`id="capabilities"`)**
- Full-bleed near-black background with subtle noise + orange radial glow
- Eyebrow `CAPABILITIES` in orange · headline *"Everything your business needs to show up __properly__."* (italic serif orange on "properly") · right-column supporting copy
- 8-card bento grid on dark: dark cards with hairline white/10 borders, orange line icon top-left, white title, muted-grey body, arrow icon top-right, orange hover glow + border
- Card copy matches your brief (Websites / Brand Systems / Graphic Design / Print & Signage / Web Engineering / Mobile Surfaces / Signage Solutions / Corporate Gifts)
- Icons via lucide: Globe, Palette, PenTool, Printer, Code2, Smartphone, Megaphone, Gift

**Selected work (cream)**
- Eyebrow `SELECTED WORK` · headline *"A small __portfolio__ of serious work."* (italic on portfolio)
- Two-column: left = project meta (name, category, description, "View project ↗"), right = large project image with small carousel arrows
- Carousel cycles through existing `SITE.projects`; Nyatee first

**Testimonials — DARK section**
- Replaces current `Testimonials` carousel on the homepage (component file kept, just not used here)
- Eyebrow `TESTIMONIALS` · headline *"Words from __people__ we've actually shipped __for__."* (italic on people / for)
- Big single testimonial card with subtle dark gradient, Mr. Zulu quote, "View project ↗" link, small left/right pager to step through `SITE.testimonials`

**Process (cream, `id="process"`)**
- Eyebrow `OUR PROCESS` · headline *"Four steps. __Zero drama.__"*
- 4 compact cards, horizontal on desktop, stacked on mobile, using existing process copy

**Pricing teaser & Journal** — preserved from current homepage (already on brand, copy unchanged)

**Final CTA strip — DARK**
- Full-width dark band with orange accent line
- Left: orange double-dot mark + headline *"Ready to make your business look as __serious__ as the work behind it?"*
- Right: orange "Start a project →" pill

## 4. Mobile QA

- Hero mockup `max-h-[420px]` on mobile, `object-contain`
- Capabilities cards: single column on mobile, generous padding, no awkward empty space
- Process: stacked vertical
- Floating WhatsApp FAB already exists; verify it doesn't overlap the final CTA on mobile (bottom padding bump if needed)

## 5. Copy / typo sweep across the homepage

Confirm: Identities, Lighthouse, Built, Through, "Sub-1s loads". Update any service summaries used on the homepage accordingly (the cards in section 3 use the corrected copy).

---

### Technical notes

- No new dependencies. Existing Tailwind tokens (`bg-foreground`, `text-background`, `text-accent`, `border-border`, `bg-card`, `text-muted-foreground`, `serif`, `display-*`) cover everything
- New dark sections use `bg-foreground text-background` with `noise` + `var(--gradient-warm)` overlays for depth
- Carousel uses existing shadcn `carousel` primitive (already installed) — no extra libs
- `Testimonials` component file is not deleted, just not imported on Index, so other pages can still use it later
- Image generation: `imagegen.generate_image` with `model: "premium"`, `transparent_background: true`, prompt referencing the copied Snesenzo screenshot for the on-screen content

### Out of scope (not changed)

- Other pages (Services, Work, Pricing, About, Blog, Areas)
- `src/lib/site.ts` data (services array already updated previously)
- `src/index.css` tokens (palette stays exactly as-is)
- Footer structure
