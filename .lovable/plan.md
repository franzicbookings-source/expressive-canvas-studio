# Add Umzilikazi logo + convert "Trusted by" into a sliding marquee

You now have 5 client logos total. Static rows feel cramped on mobile and waste the "movement = activity" cue agencies usually exploit. Let's slide them.

## What ships

### 1. Add the new logo
- Copy the uploaded Umzilikazi Senior Secondary School crest into `src/assets/clients/umzilikazi.png`
- Add it to the `clientLogos` array in `TrustedBy.tsx`

### 2. Convert "Trusted by" into an infinite marquee

Layout becomes:

```text
TRUSTED BY  →  [logo] [logo] [logo] [logo] [logo] [logo] [logo] [logo] ...
              <-------- continuously sliding right-to-left -------->
```

**How it works:**
- The 5 logos are rendered **twice** back-to-back inside a flex track
- A CSS keyframe animation translates the track from `0%` to `-50%` over ~30s, looping seamlessly (the second copy slides into the exact position the first copy started, so the eye sees no jump)
- Pauses on hover (desktop) so users can actually look at a logo if they want
- Respects `prefers-reduced-motion` — falls back to the current static wrap layout for users who've opted out of motion
- Edge fades: thin gradient masks on the left/right edges fade logos in/out of the viewport instead of hard-cutting them at the container edge

**Why a marquee here (vs static or carousel):**
- Static: was fine with 4, gets visually heavy and crowded as the list grows
- Carousel with arrows: too much UI for a trust strip — buttons compete with the logos
- Marquee: zero UI, signals momentum, scales to 5/10/20 logos with no layout work, and matches the same "in-motion" feel the hero section already sets

### 3. Visual treatment stays consistent
- Same monochrome / `opacity-70 → 100 on hover` treatment
- Same hairline border-bottom and muted "TRUSTED BY" eyebrow label on the left
- Logo heights stay 40–56px so nothing dominates

## Technical details

- New keyframe `marquee-x` added in `src/index.css` (`translateX(0) → translateX(-50%)`, linear, infinite, ~30s)
- Utility class `.marquee-track` with the animation + `animation-play-state: paused` on `:hover` and inside `@media (prefers-reduced-motion: reduce)`
- `TrustedBy.tsx` becomes: eyebrow label (left, fixed) + an `overflow-hidden` viewport with the doubled track inside, plus left/right gradient fade overlays (`bg-gradient-to-r from-background`)
- `aria-hidden="true"` on the duplicated logo set so screen readers only announce the list once

## Files touched

- `src/assets/clients/umzilikazi.png` — new (copied from your upload)
- `src/components/home/TrustedBy.tsx` — refactor to marquee, add 5th logo
- `src/index.css` — add `marquee-x` keyframe + `.marquee-track` utility

## Out of scope
- No changes to the hero, testimonials, or any other section
- Not touching the existing service ticker (already removed)
