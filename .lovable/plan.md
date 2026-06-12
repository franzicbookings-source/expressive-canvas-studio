## 1. LogoRotator — show groups of 3 (2 on mobile)

Rewrite `src/components/home/LogoRotator.tsx` to cycle **groups** instead of single logos:

- Keep the `logos: Logo[]` prop API so the user can still add/remove logos.
- Compute group size from a `useEffect` matchMedia listener: `3` on `md+`, `2` on mobile (`<768px`).
- Chunk the logo array into groups of that size. If the last group is short, it still shows (with empty space) — keeps order intuitive.
- Render one fixed-height row (`h-24 md:h-32`) with the group laid out as a flex row (`gap-10 md:gap-20`, `justify-center`).
- Use `framer-motion` `AnimatePresence mode="wait"` keyed by group index. Each group slides up from below (`y: 40, opacity: 0` → `y: 0, opacity: 1`), holds, then exits upward (`y: -40, opacity: 0`).
- Interval: ~2400ms between group changes; transition ~550ms.
- Respect `prefers-reduced-motion` — fall back to a static wrap of all logos.

## 2. Remove em dashes site-wide

39 occurrences of `—` (U+2014) across user-facing content files. Replace every em dash with a hyphen `-` (matches the rest of the copy, which already uses hyphens for the same purpose).

Files to sweep:
- `src/pages/Index.tsx` (29)
- `src/lib/site.ts` (5)
- `src/pages/About.tsx` (2)
- `src/lib/seo.ts` (1)
- `src/index.css` (1) — comment text only, safe
- `index.html` (1)

Single `sed -i 's/—/-/g'` pass across those files. Will spot-check after for awkward spacing (e.g. ` - ` reads fine, but `town—Newcastle` would become `town-Newcastle`; from the visible copy all current uses are surrounded by spaces).

En dashes (`–`) and hyphens are left alone — the user asked only about em dashes.

## 3. Capabilities page

The nav links to `/#capabilities` but there is no section with that id and no `/capabilities` route. Two changes:

**a) Create `src/pages/Capabilities.tsx`** — a proper page in the same editorial brutalist style as the homepage. Sections:
- Hero: H1 "Capabilities", short intro line about what the studio does end-to-end.
- Full capabilities grid driven by `SITE.services` (already has 8 entries with `title`, `summary`, `includes[]`). Render each as a numbered card with checklist.
- "How we work" — reuse the 5-step process content.
- Final CTA → `/contact`.
- `<SEO>` with title "Capabilities | Ntombii Tech", local description, breadcrumb schema.

**b) Wire it up**:
- Add lazy import + `<Route path="/capabilities" element={<Capabilities />} />` in `src/App.tsx` (before the catch-all `/:slug`).
- Update `src/components/site/Nav.tsx` link from `/#capabilities` to `/capabilities`.

## Files touched

- `src/components/home/LogoRotator.tsx` (rewrite)
- `src/pages/Index.tsx`, `src/lib/site.ts`, `src/pages/About.tsx`, `src/lib/seo.ts`, `src/index.css`, `index.html` (em dash sweep)
- `src/pages/Capabilities.tsx` (new)
- `src/App.tsx`, `src/components/site/Nav.tsx` (route + nav link)
