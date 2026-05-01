## Problem

All blog post cover images are broken because they point to external URLs that don't exist:
- 3 posts use `https://ntombii.tech/<slug>.png` (404)
- 6 posts use `https://ntombii.tech/og-image.jpg` (404)

The Blog index and individual BlogPost pages both render `<img src={post.cover}>`, so every card and hero image is broken site-wide.

## Fix

### 1. Generate 9 local cover images

Create one branded cover per post in `src/assets/` as WebP (matches existing portfolio assets). Each cover will be on-brand (dark background, accent color, clean typography) and visually distinct using the post's category/title — no stock photos, no text-heavy mockups. Lightweight (~80-150KB each, lazy-loaded already).

Files to create:
- `src/assets/blog-northern-kzn-behind.webp`
- `src/assets/blog-vryheid-zululand.webp`
- `src/assets/blog-construction-trades.webp`
- `src/assets/blog-newcastle-designer.webp`
- `src/assets/blog-vryheid-cost.webp`
- `src/assets/blog-ladysmith-google.webp`
- `src/assets/blog-madadeni-osizweni.webp`
- `src/assets/blog-utrecht-dundee.webp`
- `src/assets/blog-seo-checklist.webp`

### 2. Wire them into `src/lib/site.ts`

Import the 9 new assets and replace each post's `cover:` string with the imported asset reference. This makes Vite hash + bundle them so they always load (works in dev, preview, and production).

### 3. Verify

Confirm Blog index grid and BlogPost hero images render after the change.

## Custom domain question

Your domain `ntombii.tech` (and `www.ntombii.tech`) is already showing as connected in the project — both URLs are listed as active custom domains. DNS propagation typically completes within **a few minutes to 24 hours**, with up to 72 hours in rare cases. SSL is provisioned automatically once DNS verifies.

If it's not loading yet:
- Wait up to 24 hours and retry
- Check `dnschecker.org` to confirm the A record points to `185.158.133.1` globally
- Make sure you've clicked **Publish → Update** at least once so the latest build is live (frontend changes only go live after publishing)

No code action needed for the domain — it's just propagation time.

## Out of scope

- Redesigning blog layout
- Changing post copy
- Adding new posts