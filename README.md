# Portfolio — React + Vite + TypeScript

A minimalistic, dark-mode personal portfolio built with React, Vite, and TypeScript. No UI library dependencies — all styling via CSS Modules with CSS custom properties.

## Stack

- **React 18** with functional components and hooks
- **Vite 5** for instant HMR and fast builds
- **TypeScript** (strict mode)
- **CSS Modules** for scoped, zero-runtime styling
- **Space Grotesk** + **Inter** via Google Fonts

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

## Personalising Your Portfolio

All content lives in one file — **`src/data/portfolio.ts`**.
Open it and replace every `[placeholder]` with your real information:

| Field | Where |
|---|---|
| Name, email, status | `owner` object |
| Skills list | `skills` array |
| Work / education history | `experiences` array |
| Projects | `projects` array |
| Social links & resume | `socialLinks` array |

The `[...]` brackets are intentional — search for `[` in your editor to find every placeholder at once.

## Project Structure

```
src/
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── Skills.tsx / .module.css
│   ├── Experience.tsx / .module.css
│   ├── Projects.tsx / .module.css
│   ├── Contact.tsx / .module.css
│   ├── Footer.tsx / .module.css
│   ├── Icons.tsx          ← SVG icon components
│   └── useScrollReveal.ts ← Intersection Observer hook
├── data/
│   └── portfolio.ts       ← ALL YOUR CONTENT LIVES HERE
├── styles/
│   └── index.css          ← Global reset + CSS tokens
├── App.tsx
└── main.tsx
```

## Design Tokens (CSS custom properties)

Defined in `src/styles/index.css` under `:root`:

```css
--bg:       #0A0F1E   /* page background */
--bg-card:  #111827   /* card background */
--text:     #E8EDF5   /* primary text */
--muted:    #8899BB   /* secondary text */
--accent:   #6366F1   /* indigo — primary accent */
--teal:     #2DD4BF   /* teal — secondary accent */
```

Change these four lines to retheme the entire site instantly.

## Deploying

**GitHub Pages (recommended):**
```bash
npm run build
# push the dist/ folder to your gh-pages branch
```

**Vercel / Netlify:** connect your repo and set build command to `npm run build`, output directory to `dist`.
