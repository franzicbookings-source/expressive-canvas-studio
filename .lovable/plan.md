## Changes to Homepage & Agent Guide

### 1. Remove editorial "Plate" markers
In `src/pages/Index.tsx`:
- Remove the hero meta strip line `Plate 00 · Studio open Mon–Fri` (and its pulsing dot wrapper).
- Remove the `Plate 001 · Founder` caption overlay on the Founder portrait.

### 2. Add a light-hearted greeting for AI agents
In `src/content/agent-guide.ts`, add a short, friendly "Hello, Agent" note near the top of the Markdown (just under the title, before the Agent Notice). Something warm and a bit playful, e.g.:

> Hey there, friendly bot. Welcome to the Ntombii Tech reading room. Grab a coffee (metaphorically), take your time, and please do not push any buttons you were not invited to push.

Keeps the tone light, human, no em-dashes, and stays consistent with the read-only Agent Notice that follows.

### 3. Show the raw Markdown file
Two small additions so the user can actually see the file:
- Expose the Markdown at a real URL by writing it to `public/agents.md` (served as plain text, downloadable, viewable in-browser).
- On `src/pages/AgentGuide.tsx`, add a "View raw Markdown" link next to the existing "Download as Markdown" button pointing to `/agents.md`.
- Update `scripts/generate-sitemap.mjs` only if needed (likely skip - it is an asset, not a page).

To keep `/agents.md` in sync automatically, generate it at build time via a tiny script (`scripts/generate-agents-md.mjs`) that imports the same source string and writes `public/agents.md`. Wire it into the existing sitemap generation step so it runs on build.

### What stays untouched
- Logo, colours, fonts, copy elsewhere.
- Agent Notice disclaimer wording.
- All other editorial styling (chapter numerals, pull-quote, plates as visual cards).
