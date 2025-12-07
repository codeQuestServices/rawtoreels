# RawToReels — Elevator Pitch

RawToReels solves the "Camera Roll Graveyard" problem. Everyone captures thousands of photos and videos during trips and events, but most footage sits in the cloud because editing is time-consuming and difficult.

We provide a done-for-you service that turns raw media dumps into high-quality, beat-synced Instagram Reels and TikToks within 24 hours. For a flat fee starting at $29, users drag-and-drop their mess, pick a vibe, and receive a professional edit ready to post—no app fatigue, no copyright strikes, just perfect memories.

---

## One-Pager Overview

### The Problem
- Storage nightmare: users have 1,000+ unorganized clips cluttering their phones.
- Editing fatigue: creating a polished video takes hours of cutting, syncing, and color grading.
- Audio issues: finding trending audio without copyright strikes is frustrating.

### The Solution
A productized service offering professional video editing with a 24-hour turnaround. We bridge the gap between "Raw Chaos" and "Polished Perfection" using human editors (not generic AI templates).

### How It Works (3-Step Mechanism)
1. Upload the mess — users fill out a Tally form and upload mixed media (photos & videos) via a secure Dropbox Professional link.  
2. Pick your vibe — choose a mood (e.g., Chill Vacation, High-Energy Party, Sentimental Recap).  
3. Get your reel — a fully edited, color-graded, and beat-synced vertical video is delivered to their inbox the next day.

### Target Audience
- Travelers returning from vacations who want to share their trip.
- Event hosts (weddings, birthdays, bachelor/bachelorette parties).
- Creators/influencers with raw footage but no time to edit B-roll.

### Business Model & Pricing
Simple, transparent flat-rate pricing via Stripe:
- Quick Recap — $29: Up to 50 files, 15–30 sec video (entry-level).
- Mega Dump — $49 (Most Popular): Up to 200 files, ~60 sec video — ideal for big trips.
- The Bundle — $99: Unlimited uploads, up to 3 separate videos.

### Key Differentiators (Trust & Safety)
- Privacy-first: strict auto-deletion policy (7 days after delivery) and Dropbox Professional security.
- Human touch: real editors ensure narrative coherence — "no mindless AI errors."
- Mixed media: we specialize in syncing static photos alongside video clips to the beat.

---

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs/) for Fast Refresh.

## React Compiler
The React Compiler is not enabled in this template because of its impact on dev & build performance. To add it, see the documentation: https://react.dev/learn/react-compiler/installation

## Expanding the ESLint configuration
If you're developing a production application, consider enabling type-aware lint rules. Example config:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Replace tseslint.configs.recommended with a type-checked config:
      tseslint.configs.recommendedTypeChecked,
      // Or use the stricter option:
      // tseslint.configs.strictTypeChecked,
      // Optionally add stylistic rules:
      // tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

You can also install react-specific plugins:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```
