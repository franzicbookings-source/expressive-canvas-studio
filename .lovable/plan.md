## Redesign Plan — Ntombii Tech

A full visual + motion redesign across all pages. **Zero copy changes** — every headline, paragraph, FAQ, testimonial, pricing row, blog excerpt and location text stays exactly as written. Only design, layout, typography, color system, and animations change.

### 1. Design system overhaul (`src/index.css`, `tailwind.config.ts`)

- New token set, dark-mode default:
  - Dark: `--background` deep navy/near-black (`220 20% 6%`), `--foreground` warm white, `--card` `220 18% 9%`, soft grey muted.
  - Light: warm off-white background, dark navy text, soft shadows.
  - `--accent` orange retained as premium accent only (small dots, underlines, hovers, single button highlights).
- Add display tokens: `--display-mega` clamp up to ~9rem, tighter tracking, mix of Inter (display) + Instrument Serif italic accents (already loaded).
- New utilities: `magnetic`, `marquee-xl`, `dot-grid`, `glass`, `orange-spark`, `section-number`, `gradient-mesh`.
- Keyframes: `text-rise`, `letter-in`, `float-slow`, `dot-drift`, `sheen`, `aurora`.

### 2. Theme + toggle

- Add `ThemeProvider` (class-based, persisted in `localStorage`, default `dark`, applied pre-paint via small inline script in `index.html` to avoid flash — **no loading screen**).
- Add `ThemeToggle` icon button to `SiteNav` (desktop pill + mobile menu). Sun/Moon icons with smooth crossfade.

### 3. Navigation (`src/components/site/Nav.tsx`)

- Floating glass pill nav, refined hover (orange underline grow + magnetic lift).
- Add theme toggle, keep all existing links/labels.
- Mobile menu: full-height sheet, large type, staggered link reveal.

### 4. Global motion primitives (new `src/components/fx/`)

- `TextReveal` — line/word mask reveal on mount + scroll.
- `MagneticButton` — pointer-follow translate for CTAs.
- `MarqueeRow` — infinite horizontal scroll of service words: DESIGN · DEVELOPMENT · BRANDING · WEBSITES · AUTOMATION · DIGITAL SYSTEMS · CREATIVE TECH · ONLINE GROWTH · BUSINESS TOOLS.
- `ParticleField` — lightweight canvas of drifting orange dots + thin lines (respects `prefers-reduced-motion`, pauses off-screen).
- `Parallax` — translate-on-scroll wrapper for cards/visuals.
- `FloatingCards` — abstract UI/dashboard/code mockup cards composed in CSS (no personal photos).

### 5. Homepage (`src/pages/Index.tsx`) — section-by-section redesign, same copy

- **Hero**: oversized display headline with per-word rise reveal; orange particle field + soft aurora gradient behind; floating glass dashboard/code/UI mockup cluster on the right (desktop) / below (mobile); magnetic primary CTA + ghost secondary; small animated orange dot accent next to wordmark.
- **Marquee strip**: full-bleed bold marquee with the 9 service words, orange dot separators.
- **Trusted by**: keep logos, restyle row with refined hairlines + slow drift.
- **Capabilities (Services)**: numbered cards `01–06`, asymmetric bento, hover lift + orange corner spark, scroll reveal stagger.
- **Process**: large `01/02/03/04` numerals, vertical rule, text reveal per step.
- **Work preview**: edge-to-edge horizontal scroll cards with parallax thumbnails.
- **Pricing**: featured card with orange accent border + sheen; secondary cards minimal.
- **Testimonials**: keep slider, restyle with quote serif, soft glass cards.
- **Blog teaser**: editorial 2-col layout.
- **Final CTA**: full-bleed dark band, mega type, magnetic orange-accented button.

### 6. Other pages (visual pass only, copy intact)

- `Work.tsx`, `Services.tsx`, `Pricing.tsx`, `About.tsx`, `Blog.tsx`, `BlogPost.tsx`, `Contact.tsx`, `Areas.tsx`, `LocationPage.tsx`, `NotFound.tsx`: apply new tokens, section numbers, text-reveal headers, refined cards, consistent spacing rhythm. No copy edits.

### 7. Performance + a11y

- Particles + marquees disabled under `prefers-reduced-motion`.
- Canvas capped at low DPR, paused via `IntersectionObserver`.
- No new heavy libraries — reuse existing `framer-motion` if present, otherwise CSS + tiny custom hooks (check `package.json` first; add `framer-motion` only if not installed).
- Preserve all SEO components, schemas, sitemap, semantic structure.

### Files touched

```text
src/index.css                              (tokens, keyframes, utilities)
tailwind.config.ts                         (darkMode: 'class', new tokens)
index.html                                 (pre-paint theme script)
src/main.tsx                               (ThemeProvider mount)
src/components/theme/ThemeProvider.tsx     (new)
src/components/theme/ThemeToggle.tsx       (new)
src/components/fx/TextReveal.tsx           (new)
src/components/fx/MagneticButton.tsx       (new)
src/components/fx/MarqueeRow.tsx           (new)
src/components/fx/ParticleField.tsx        (new)
src/components/fx/Parallax.tsx             (new)
src/components/fx/FloatingMockups.tsx      (new)
src/components/site/Nav.tsx                (glass pill + toggle + hover fx)
src/pages/Index.tsx                        (full redesign, same copy)
src/pages/{Work,Services,Pricing,About,Blog,BlogPost,Contact,Areas,LocationPage,NotFound}.tsx
                                           (visual pass, same copy)
```

### Out of scope

- No copy rewriting.
- No loading screen / splash.
- No new backend, routes, or data.
- No large background orange fills — orange stays an accent.
