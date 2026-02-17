# CLAUDE.md — Alex Portfolio 2026

## Project Overview

Personal portfolio site for a designer ("Studio Schultz") showcasing design, branding, and UX work. Built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4. Deployed on Vercel.

## Tech Stack

- **Framework:** Next.js 16.1.6 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 19.2.3
- **Styling:** Tailwind CSS 4 + custom CSS design tokens in `app/globals.css`
- **Animation:** Framer Motion 12, custom parallax and scroll effects
- **Fonts:** BDO Grotesk (primary), Denton Light Italic (accent)
- **Package Manager:** npm

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint (Next.js core-web-vitals + TypeScript rules)
```

There is no test framework configured. No test commands exist.

## Project Structure

```
app/
├── layout.tsx              # Root layout (wraps all pages with Nav)
├── page.tsx                # Home page — hero parallax + project grid
├── globals.css             # All CSS: design tokens, components, animations (~900 lines)
├── about/
│   └── page.tsx            # About page — bio, capabilities grid, photo gallery
├── template/
│   └── page.tsx            # Style guide — design system reference
└── projects/
    ├── page.tsx            # Archive page — masonry image grid
    └── [slug]/
        └── page.tsx        # Dynamic project detail pages

components/
├── Nav.tsx                 # Fixed navigation, mobile drawer, active link states
├── Footer.tsx              # Footer with marquee, stripes, links
├── ProjectCard.tsx         # Reusable project card (image + metadata)
├── HeroParallax.tsx        # Home page scroll-based parallax background
├── ParallaxHero.tsx        # Project detail page parallax hero image
└── DragScroll.tsx          # Horizontal drag-to-scroll container

lib/
└── projects.ts             # Single source of truth for all project data

public/fonts/               # BDO Grotesk OTF files (Regular, Medium, Bold, ExtraBold)
```

## Key Architecture Decisions

### Project Data (`lib/projects.ts`)

All portfolio projects are defined in a single `projects.ts` file with typed interfaces (`Project`, `ProjectMeta`, `ProjectHighlight`, `ProjectSection`). Helper functions (`getHomeProjects`, `getProjectBySlug`, `getRelatedProjects`, `getAllSlugs`) drive the home page grid, dynamic routes, and related project links. To add a new project, add an entry to the `projects` array — it auto-appears everywhere.

**Home page grid:** Projects auto-layout in a repeating pair/solo pattern: two cards in an unequal 2-col row (alternating 5fr/7fr and 7fr/5fr), then one full-width 16:9 card. Just set `showOnHome: true` and `homeOrder` — the cycle generates automatically.

Section types for project detail pages:
- `"full"` — 16:9 full-width image
- `"pair"` — two 1:1 square images side by side

### Styling

All styles live in `app/globals.css` using CSS custom properties (design tokens) and Tailwind utility classes. There is no component-level CSS modules or CSS-in-JS beyond Tailwind.

**Design tokens (CSS variables):**
- Colors: `--bg: #222222`, `--fg: #fffff0`, `--muted: #888888`, `--accent: #ff4b2e`
- Spacing: `--space-xl`, `--space-lg`, `--space-md`, `--space-sm`, `--space-xs` (all fluid via `clamp()`)
- `--site-px`: horizontal page padding

**Responsive breakpoint:** 768px is the primary mobile breakpoint. Some adjustments at 1024px.

### Path Aliases

Use `@/` for absolute imports from the project root (configured in `tsconfig.json`).

```tsx
import { getHomeProjects } from "@/lib/projects";
import Nav from "@/components/Nav";
```

### Image Assets

Project images are hosted on an external CDN (`alxandr.us/assets/img/`), not in the repo. Components fall back to colored placeholder `<div>` elements when no image URL is provided.

## Conventions

- **No testing framework** — there are no tests to run
- **ESLint only** — no Prettier configured; follow existing code style
- **Tailwind CSS 4** — uses `@tailwindcss/postcss` plugin (not the older `tailwindcss` CLI)
- **App Router patterns** — pages are React Server Components by default; client components use `"use client"` directive
- **Framer Motion** — used selectively for staggered fade-in animations on project cards
- **Minimal config** — `next.config.ts` is an empty object; defaults are intentional
- **No CI/CD** — no GitHub Actions or other pipelines

## Common Tasks

### Adding a new project

1. Add a new object to the `projects` array in `lib/projects.ts` following the `Project` interface
2. Set `showOnHome: true` and assign `homeOrder` (auto-cycles pair/solo rows)
3. Add slugs to other projects' `related` arrays as needed
4. The dynamic route `app/projects/[slug]/page.tsx` picks it up automatically

### Modifying the design system

Edit CSS custom properties in `app/globals.css` under the `:root` selector. All spacing, colors, and typography tokens are defined there.

### Adding a new page

Create a new directory under `app/` with a `page.tsx` file. The root `layout.tsx` wraps all pages with the `<Nav />` component automatically.
