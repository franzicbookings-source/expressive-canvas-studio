## Remove "By the numbers" section

Delete the entire dark numbers band from the homepage (`src/pages/Index.tsx`, lines 245–287). This includes:

- The "(05) By the numbers" label
- The "Quietly measurable." headline
- The 4 stats grid (5★, 30+, 100%, 1+)
- The "Serving — Newcastle / Vryheid / Pongola…" ticker

### Section numbering
The following section is currently labeled "(06) Pricing". Renumber subsequent section labels down by one so the homepage flow stays sequential (06 → 05, 07 → 06, etc.).

### Out of scope
- No other pages touched
- No changes to `SITE.stats` data in `src/lib/site.ts` (kept in case it's reused elsewhere)
- No changes to nav, footer, or backend
