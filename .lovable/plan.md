# Homepage adjustments — pricing, founder, copy + socials fix, faster image, logo rotator

Six focused changes. Editorial brutalist system stays intact — new sections use the existing `SectionHead`, hairline grid, mono labels, and accent.

## 1. Add a Pricing section to the homepage `(05) Pricing`

Insert a new section between **(04) Areas** and the current Proof block. Renumber subsequent sections so the page reads `00 → 07` cleanly.

- Pulls from `SITE.pricing` (Starter R2,500 / Business R3,500 / Premium R7,500).
- Three-column editorial table on desktop, stacked on mobile. No card shadows — hairline rules only.
- Each tier: name, "from" price (display size), strikethrough original, 4–6 feature bullets, single CTA → `/contact`.
- The "Business" tier gets a thin accent rule on top + `Popular` mono-label (no coloured card backgrounds).
- CTA row beneath: "See full pricing" → `/pricing`.

## 2. Add a Founder section to the homepage `(06) Founder`

New section after Pricing. Two-column on desktop:

- **Left (5 cols)**: founder portrait, square crop, hairline frame.
- **Right (7 cols)**: numeral `(06)`, mono label `Founder`, display headline `Sabelo Ndlovu — Technoking.`, one short bio paragraph, a small `dl` with role / based / contact, and a "More about the studio" link → `/about`.

Copy will be rewritten per fix #3 below.

## 3. Fix the "Technoking" copy + socials

- **`src/pages/About.tsx`**: change the bio from "Sabelo Ndlovu, also known as **The Technoking**, is the founder…" to wording that treats Technoking as a role title, e.g. "Sabelo Ndlovu is **Technoking** (the company's CEO-equivalent role) and founder of Ntombii Tech." Update the headline `Sabelo Ndlovu — The Technoking.` → `Sabelo Ndlovu — Technoking.`. Update the image `alt` to drop "known as".
- **`src/lib/seo.ts`**: remove `alternateName: "The Technoking"` (it's not a nickname) and rewrite the founder `description` to match.
- **Socials**: leave `SITE.socials.instagram` / `facebook` as-is on the site footer — they already point to the **company** accounts (`ntombii_tech`, the company Facebook share link). The new homepage Founder section will **not** render Instagram/Facebook icons next to the founder — only role + studio + a link to `/about`. This prevents the impression that those handles belong to Sabelo personally.

## 4. Make the founder image load way faster

Current file is a **1.8 MB PNG** loaded eagerly on `/about`. Fix:

- Regenerate a compact, optimised **WebP** portrait (~600×600, quality 78, target <80 KB) using `imagegen` (or downscale + re-encode the existing PNG with `cwebp`/`sharp` via a one-off script) and upload via `lovable-assets` to replace the pointer at `src/assets/sabelo-ndlovu-founder.png.asset.json` with a new `.webp.asset.json`.
- Add `loading="eager"` + `fetchpriority="high"` + explicit `width`/`height` on the homepage Founder `<img>` (above the fold on mobile after scroll, but we want it ready). Use `loading="lazy"` only on `/about` where it's further down.
- Add a `<link rel="preload" as="image" href="…webp" fetchpriority="high">` in `index.html` so it starts downloading with the HTML.
- Delete the old 1.8 MB PNG asset pointer once references are migrated.

Expected: ~95% file-size reduction, image appears effectively instant on Newcastle 4G.

## 5. Remove the testimonial Proof section

Delete the entire current `(05) PROOF` block (the large quote + the small "Trusted by" name list beneath it). The visual testimonial goes away completely. The review JSON-LD schema array stays in the `<SEO>` head so Google still sees the reviews — purely a visual removal.

## 6. Replace with a "Worked with" logo rotator (blink in/out, one group at a time)

New section in the slot where Proof used to be. Behaviour:

- Show **one group of 2–3 client logos at a time** (so on mobile maybe 2 logos visible; desktop 3).
- Group fades in (≈400 ms), holds for ~2.2 s, fades out (≈400 ms), next group fades in. Loops.
- Uses the existing logos in `src/components/home/TrustedBy.tsx` (`knawpLogo`, `sknowhiteLogo`, `auntywamaLogo`, `nyateeLogo`, `umzilikaziLogo`). Five logos → ~2 groups on mobile, ~2 groups on desktop.
- Implemented with a small React `useEffect` interval + CSS `opacity` transition. No external libs.
- Respects `prefers-reduced-motion`: when reduced, render all logos in a single static row instead of cycling.
- Layout: numeral `(05)`, label `Worked with`, then a single horizontally centred row that holds the current group, with a fixed min-height so the page doesn't jump between groups.

## Final section order

```text
(00) Masthead
(01) Index — services
(02) Selected work
(03) Manifesto
(04) Areas served
(05) Worked with — logo rotator    ← replaces Proof
(06) Pricing                        ← new
(07) Founder                        ← new
(08) Process
(09) Contact
```

(Two extra numerals — we accept the slightly longer page; the Process and Contact section headers get their numerals updated.)

## Files to edit

- `src/pages/Index.tsx` — add Pricing + Founder + LogoRotator sections, remove Proof, renumber.
- `src/pages/About.tsx` — copy + alt update, swap to new webp asset, set `loading="lazy"` (keep).
- `src/lib/seo.ts` — drop `alternateName`, update founder description.
- `src/assets/sabelo-ndlovu-founder.webp.asset.json` — new (smaller) asset.
- Old `src/assets/sabelo-ndlovu-founder.png.asset.json` — delete after migration.
- `index.html` — add preload for the new founder webp.
- Optional: a small `src/components/home/LogoRotator.tsx` to keep `Index.tsx` tidy.

## Out of scope

- No changes to nav, footer, other pages, service detail pages, or the existing `TrustedBy.tsx` marquee component (untouched, may be reused elsewhere later).
- No changes to `SITE.socials` URLs — they're already the company accounts and the founder section won't link personal socials.

Approve and I'll build.
