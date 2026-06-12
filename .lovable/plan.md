## 1. Upload new logo & project images as Lovable Assets

Upload from `/mnt/user-uploads/`:
- `164317-removebg-preview.png` → Snesenzo Security Group logo (`src/assets/clients/snesenzo.png.asset.json`)
- `164314-removebg-preview.png` → Ntombii Tech mark (`src/assets/clients/ntombii.png.asset.json`)
- `164313-removebg-preview.png` → Amajuba Top Women Awards (`src/assets/clients/amajuba.png.asset.json`)
- `file_000000007e7071f489d23d89977b697a.png` → Snesenzo project mockup (`src/assets/portfolio-snesenzo.png.asset.json`)
- `file_00000000f9cc71f8987489c6ab421f3b.png` → RnB Soulful Groove Gathering mockup (`src/assets/portfolio-rnb.png.asset.json`)

## 2. Rewrite `LogoRotator` — single cycling logo

Install `framer-motion` (currently not in `package.json`).

Replace `src/components/home/LogoRotator.tsx` with a component that:
- Accepts `logos: { name: string; src: string }[]` as a prop (defaults to internal list so I can pass overrides later).
- Renders one fixed-size centered container (`h-24 md:h-32`, max-w ~`280px md:360px`).
- Uses `AnimatePresence` + `motion.img` keyed by index. Each logo: slides up from below (`y: 40, opacity: 0` → `y: 0, opacity: 1`), holds ~1.8s, then fades/slides out upward (`y: -40, opacity: 0`) as next slides in.
- Loop interval ~2.4s. Respects `prefers-reduced-motion` (shows a static grid).
- CSS fallback only if framer-motion install fails.

Default logo list (order):
1. Nyatee Foundation
2. Sknowhite Events
3. Keep Newcastle Alive
4. Umzilikazi SSS
5. Aunty Wama 2K (keep in rotator since it's a past client)
6. Snesenzo Security Group (new)
7. Ntombii Tech (new)
8. Amajuba Top Women Awards (new)

(Note: Aunty Wama 2K stays as a logo in the trust strip; only the *project card* gets removed per request.)

## 3. Update `SITE.projects` in `src/lib/site.ts`

- Remove `spazatap` and `auntywama` entries.
- Update `snesenzo`: `image: portfolioSnesenzo`, `href: "https://www.snesenzosecuritygroup.co.za/"`.
- Update `rnb-gathering`: `image: portfolioRnb`, `href: "https://rnbsoulfulgroovegathering.co.za/"`.
- Final 6 projects: Nyatee, Sknowhite, Umzilikazi, Keep NN Alive, Snesenzo, RnB Gathering.

## 4. Add Pricing + Founder preview to homepage `src/pages/Index.tsx`

Insert two new sections before the Final CTA, after FAQ. Keep the editorial brutalist style (SectionHead, mono labels, sharp borders, `display-xl`).

**Section (09) Pricing — homepage tier teaser**
- Renumber existing FAQ→(08), Pricing→(09), Founder→(10), Final CTA→(11). Update `SectionHead` numbers accordingly.
- 3-column grid using `SITE.pricing` (Starter / Business / Premium). Show: name, "From {from}" (with `original` strikethrough if present), first 4 features (Check icon), and a "Get this package" link → `/contact`.
- Highlight the `popular` tier with accent border.
- Below grid: link "See full pricing →" → `/pricing`.

**Section (10) Founder — short preview**
- Two-column layout (image left ~5/12, text right ~7/12) using the existing `src/assets/sabelo-ndlovu-founder.webp.asset.json` (already optimised).
- Heading: `Sabelo Ndlovu — <serif accent>Technoking.</serif>`
- New short bio (2 paragraphs only):
  1. "Sabelo Ndlovu is the Technoking of Ntombii Tech — his own twist on 'founder and CEO.' Based in Newcastle, KwaZulu-Natal, he builds websites, web apps and digital solutions for businesses and entrepreneurs across the region."
  2. "Self-taught and AI-native, he leads every project personally — from the first conversation to the final product live."
- CTA: `Read the full story →` → `/about`.

## 5. Update `src/pages/About.tsx` founder bio

Replace founder paragraphs with the full 3-paragraph version:
1. "Sabelo Ndlovu is the Technoking of Ntombii Tech — his own twist on 'founder and CEO.' Based in Newcastle, KwaZulu-Natal, he builds websites, web apps and digital solutions for businesses and entrepreneurs across the region."
2. "Self-taught from the ground up, Sabelo learned everything through hands-on practice and AI-powered workflows. He builds AI-native, using the most powerful tools available to deliver fast, high-quality work without the agency overhead."
3. "He leads every project personally, from the first conversation to the final product live."

## Files touched

- `package.json` (+ framer-motion)
- `src/components/home/LogoRotator.tsx` (rewrite)
- `src/lib/site.ts` (projects array)
- `src/pages/Index.tsx` (add Pricing + Founder sections, renumber)
- `src/pages/About.tsx` (founder copy)
- New asset pointers under `src/assets/clients/` and `src/assets/`

## Out of scope (flag only)

- `TrustedBy.tsx` marquee component is not used on the homepage anymore — leaving it untouched.
- No design system / brand color changes.
