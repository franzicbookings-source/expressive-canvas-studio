## Plan: Add Google Search Console verification

**What:** Add the verification meta tag to `index.html` so Google can confirm ownership of ntombii.tech.

**Change:** In `index.html`, inside `<head>` (right after the existing `<meta name="author">`), insert:

```html
<meta name="google-site-verification" content="B06mCRBoqWCGnFg93jN7ghc3dO-6hQvvoDtp2ulNBNs" />
```

**Why this works:** The tag is server-rendered in the static HTML (not injected by React), so Googlebot will see it on the first fetch of https://ntombii.tech/.

**After implementing — what you do:**
1. Publish the project so the change goes live on ntombii.tech.
2. In Google Search Console, click **Verify** on the property.
3. Once verified, (re)submit the sitemap: `https://ntombii.tech/sitemap.xml`.

**Note:** Keep the meta tag in place permanently — if you remove it, Google can un-verify the property.