## Fix hero paragraph placement

### Problem
The supporting paragraph ("A digital studio out of Newcastle…") and the two CTAs are pushed to the right half of the grid (`md:col-start-6`). On the current viewport this creates:
- A large empty gap to the left of the paragraph
- Visual disconnect from the headline above it
- CTAs that feel detached from the main message

### Change
In `src/pages/Index.tsx` (lines ~70–93), restructure the block under the H1 so the paragraph and CTAs sit naturally beneath the headline.

New layout on desktop:
```text
[ (00) Studio ] | [ Headline (mega) ........................ ]
                | [ Supporting paragraph — left aligned,    ]
                | [ ~52ch max width                          ]
                | [ CTA buttons row                          ]
```

Specifics:
- Remove the inner `grid-cols-12` wrapper and the `md:col-start-6 lg:col-start-7` offset.
- Place the paragraph + CTAs directly inside the right `col-span-10` column, left-aligned under the headline.
- Bump paragraph max-width from `max-w-md` to `max-w-xl` for better rhythm with the mega headline.
- Keep the Reveal stagger (delay 120) for the paragraph and add delay 200 for the CTA row.
- Tighten the top margin from `mt-10` to `mt-8`.
- Mobile stays single-column and unchanged in feel.

### Files touched
- `src/pages/Index.tsx` — hero section only

### Out of scope
- Headline copy, colors, fonts, status bar, or trusted-by section.
