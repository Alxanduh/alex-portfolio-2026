# Studio Schultz — Portfolio

A typography-led, system-driven portfolio site built with Next.js 15, TypeScript, and CSS custom properties. No Tailwind, no CSS-in-JS, no UI libraries.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
studio-schultz/
├── app/                          # Next.js App Router pages
│   ├── globals.css               # ★ Design system (all tokens live here)
│   ├── layout.tsx                # Root layout (Header + Footer)
│   ├── page.tsx                  # Homepage
│   ├── work/
│   │   └── [slug]/page.tsx       # Dynamic case study page
│   ├── about/page.tsx            # About page
│   ├── archives/page.tsx         # Archives (placeholder)
│   └── style-guide/page.tsx      # Visual system reference
├── components/
│   ├── layout/                   # Header, Footer
│   ├── work/                     # ProjectCard
│   ├── case-study/               # Hero, Meta, Renderer, NextPrev, Related
│   └── motion/                   # FadeIn, Parallax (GSAP wrappers)
├── content/
│   ├── types.ts                  # CaseStudy interface + module types
│   ├── index.ts                  # Registry (exports all projects)
│   └── case-studies/             # One .ts file per project
│       ├── mcgrath.ts
│       ├── grow.ts
│       ├── runnr.ts
│       ├── atlas.ts
│       ├── nomad.ts
│       └── apex.ts
└── public/
    ├── fonts/                    # BDO Grotesk (.otf)
    └── images/{slug}/            # Project images
```

## Adding a New Project

1. Create `content/case-studies/your-project.ts` — export a `CaseStudy` object
2. Import it in `content/index.ts` and add to the `caseStudies` array
3. Add images to `public/images/your-project/`

That's it. The homepage and routing handle the rest automatically.

- Set `featured: true` → appears on homepage
- Set `draft: true` → hidden from the site (404 if accessed)
- `order` controls sort position everywhere

## Design System

All design tokens are defined as CSS custom properties in `app/globals.css`. No other file uses raw values.

### Typography Classes
`.display-l` through `.display-s` · `.headline-l` through `.headline-s` · `.title-l` through `.title-s` · `.label-l` through `.label-s` · `.body-l` through `.body-s` · `.nav-primary`

### Layout Primitives
- `.container` — horizontal max-width + gutters
- `.section` / `.section--xl/l/m/s` — vertical section spacing
- `.stack` — vertical flow (32px gap)
- `.block` — vertical flow (64px gap)
- `.tight` — vertical flow (24px gap)

### Colors
- `--color-surface-primary` → #141414 (Mat Board)
- `--color-text-primary` → #FFFFF0 (Crayon)
- `--color-text-secondary` → #888888 (Felt)
- `--color-accent-primary` → #F24A2E (Swiss)

## Case Study Modules

Content is composed from typed modules — mix and match without layout duplication:

| Module | Purpose |
|--------|---------|
| `intro` | Two-column heading + body |
| `text-block` | Prose with optional heading |
| `metrics` | 3-column stats/outcomes |
| `media-full` | Full-width image |
| `media-2up` | Two images side by side |
| `media-3up` | Three images in a row |
| `quote` | Pull quote with attribution |
| `section-heading` | Section label + heading |

## Motion

GSAP + ScrollTrigger, dynamically imported in `"use client"` components. All animations respect `prefers-reduced-motion`. Only `transform` and `opacity` are animated — never layout properties.

## Placeholder Images

The `/public/images/` directories contain SVG placeholders. Replace them with your actual project images (recommended: optimized JPG/WebP at 1920px wide for full-width, 960px for half-width).
