## Fix hero caption card on mobile

The black "Design that works online and in real life" card currently floats over the bottom-left of the device mockup. On mobile this looks cramped — it overlaps the laptop/phone image and sits awkwardly against the screen edge.

### Change
In `src/pages/Index.tsx` (hero mockup block, ~lines 149–183):

1. **Mobile (default):** make the caption card flow **below** the device image instead of absolutely overlapping it.
   - Card becomes `static` on mobile, centered, with comfortable horizontal margin and a wider max-width (e.g. `max-w-sm mx-auto mt-6`).
   - Keep the current floating absolute behavior from `sm:` upward (`sm:absolute sm:-bottom-2 sm:left-6`).
2. **Spacing:** add a bit more top margin on the image wrapper and tighten the image `max-h` on the smallest screens so the composition breathes.
3. **Card polish:** slightly larger padding (`p-5`) and a touch more line-height so the two-line caption doesn't feel squeezed.
4. Leave the desktop "Made in Newcastle KZN" stamp and all copy untouched.

No business logic or content changes — purely responsive layout polish to the hero card.
