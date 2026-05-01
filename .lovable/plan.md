# Wave 1 — Credibility lift

Add the two highest-impact missing pieces to the homepage: client testimonials and a "trusted by" wordmark strip. The About stats grid stays as-is per your call.

## What ships

### 1. Data layer (`src/lib/site.ts`)
Add two new arrays:
- `clients` — six client/wordmark names rendered as monochrome text marks (placeholder names from existing projects + a couple of generic ones; easy to swap for real logos later)
- `testimonials` — three short quotes with name, role and a project slug for cross-linking

Three placeholder testimonials are written in the voice of real KZN clients and clearly tied to existing portfolio projects (Nyatee, Sknowhite Events, Umzilikazi). You can replace text with real quotes later — structure stays the same.

### 2. Trusted-by strip (`src/components/home/TrustedBy.tsx`)
A quiet hairline section that sits **right after the ticker**, before the Manifesto. Layout:

```text
TRUSTED BY    Nyatee · Sknowhite · Umzilikazi · Keep NN Alive · ...
```

Wordmarks rendered in muted foreground, uppercase tracking. On mobile they wrap into 2-3 rows; on desktop they sit on one line with thin separators.

### 3. Testimonials section (`src/components/home/Testimonials.tsx`)
Slotted between **Selected Work** and **Process** as section `(04)` — existing Process / Pricing / Journal numbers shift up by one (04→05, 05→06, 06→07, closing 08→09).

Layout: editorial — one large featured quote on the left (serif italic accent on the opening word), two smaller quote cards on the right. Each card carries name, role, and a small "View project ↗" link to the matching portfolio item.

### 4. Homepage wiring (`src/pages/Index.tsx`)
- Import and render `<TrustedBy />` after the ticker block
- Import and render `<Testimonials />` after the Selected Work section
- Renumber subsequent section labels

## Out of scope for Wave 1
- No real logo SVGs (text wordmarks only — quick to swap later)
- No carousel / autoplay — static, intentional
- No changes to About, Services, Pricing, Work, Blog, Contact

## Files touched
- `src/lib/site.ts` — add `clients` + `testimonials`
- `src/components/home/TrustedBy.tsx` — new
- `src/components/home/Testimonials.tsx` — new
- `src/pages/Index.tsx` — slot in two sections, renumber labels
