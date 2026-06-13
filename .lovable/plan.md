## 1. Remove "(№ 001 - Index)" from hero

In `src/pages/Index.tsx` line 116, delete the `<span>(№ 001 - Index)</span>`. Keep the other two meta spans ("Studio open · Mon-Fri" and "Est. 2024 - Newcastle, KZN") so the row still balances.

## 2. Make the 4 small logos match Nyatee Foundation's visual size

The rotator already uses the same CSS box (`h-12 md:h-16`, `max-w-[140px] md:max-w-[180px]`) for every logo. Aunty Wama 2K, Snesenzo, Ntombii Tech and Amajuba look smaller only because their source PNGs have transparent padding around the mark, so they render shrunk inside the box.

Fix without touching the source files: extend the `Logo` type in `src/components/home/LogoRotator.tsx` with an optional per-logo `scale` (default 1) and an optional `className`. In the render, apply `style={{ transform: \`scale(${l.scale ?? 1})\` }}` to those four logos so they visually fill the same height as the Nyatee logo.

Tuned scales (to be verified visually in preview after build):
- Aunty Wama 2K - `scale: 1.6`
- Snesenzo Security Group - `scale: 1.5`
- Ntombii Tech - `scale: 1.7`
- Amajuba Top Women Awards - `scale: 1.5`

Container stays `overflow-hidden` so the scaled-up marks stay inside the row and rhythm with the other logos. Nyatee, Sknowhite, KNAWP, Umzilikazi keep `scale: 1`.

If after preview any logo is still off, nudge that one value only - no other layout changes needed.

## Files touched

- `src/pages/Index.tsx` (remove one span)
- `src/components/home/LogoRotator.tsx` (add optional `scale`, apply per-logo transform on the 4 PNG logos)
