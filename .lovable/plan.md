# Plan: Add the correct Google Search Console account

## Goal
Connect the Google Search Console account that already verified `ntombii.tech` (`Franzic.bookings@gmail.com`) to this project, then verify ownership and submit the sitemap.

## Current state
- Two "Sizwe" Google Search Console connections exist in the workspace, but neither is linked to the project.
- The wanted account (`Franzic.bookings@gmail.com`) is not yet connected to the workspace.

## Steps

### 1. Add the Franzic Google Search Console connection
- Open the workspace connector settings for Google Search Console.
- Sign in with `Franzic.bookings@gmail.com` and grant Search Console access.
- This creates a new workspace connection under that account.

### 2. Link the new connection to this project
- Select the `Franzic.bookings@gmail.com` connection and link it to the project.
- This makes the connection secrets available to the app/backend.

### 3. Confirm `ntombii.tech` is already verified in that account
- List the verified properties in the connected account via the Search Console API.
- If `https://ntombii.tech/` is already a verified property, skip to sitemap submission.
- If it is not verified, add the meta verification tag to `index.html`, deploy, then call the Google site verification endpoint.

### 4. Submit the sitemap
- Submit `https://ntombii.tech/sitemap.xml` to the verified Search Console property.

### 5. (Optional) Request manual indexing for priority pages
- Provide a list of URLs to submit for faster indexing if desired.

## What I need from you
- Approve the connector flow so I can trigger the Google sign-in prompt for `Franzic.bookings@gmail.com`.
- Confirm whether you want me to also handle META verification and sitemap submission in the same turn, or just connect the account first.

## What you'll do
- Sign in with the Franzic account when the connector prompt appears and grant Search Console access.