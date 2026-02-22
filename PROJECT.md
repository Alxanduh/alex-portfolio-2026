# Studio Schultz — Project Manifest
> Last updated: 2026-02-21
> Read this file first for full project context.

## Stack
- **Framework**: Next.js 15.1 (App Router, static export)
- **React**: 19.0
- **Animation**: GSAP 3.12 (dynamic import, client-only)
- **TypeScript**: 5.7, strict mode
- **Styling**: Pure CSS Modules + CSS custom properties (NO Tailwind, NO CSS-in-JS)
- **Font**: BDO Grotesk (self-hosted OTF in /public/fonts)
- **Build**: `npm run build` → static `/out` folder

## Design Constraints
1. **No Tailwind** — all styling via CSS Modules + global utility classes
2. **No CSS-in-JS** — no styled-components, emotion, etc.
3. **Token-driven** — all spacing, color, typography via CSS custom properties in globals.css
4. **8px grid** — all spacing values are multiples of 8
5. **No hardcoded px** in component CSS (except 1px borders and aspect-ratio declarations)
6. **BDO Grotesk only** — no system fonts, no fallback stacks in production

## Design Tokens (globals.css)

### Colors
| Name | Variable | Value |
|------|----------|-------|
| Mat Board | `--color-surface-primary` | #141414 |
| Crayon | `--color-text-primary` | #FFFFF0 |
| Felt | `--color-text-secondary` | #888888 |
| Swiss | `--color-accent-primary` | #F24A2E |

### Typography Scale
| Class | Size/Line | Weight | Tracking |
|-------|-----------|--------|----------|
| `.display-l` | 332/340 | Medium (500) | -2% |
| `.display-m` | 192/200 | Medium | -2% |
| `.display-s` | 164/172 | Medium | -2% |
| `.headline-l` | 96/104 | Medium | -2% |
| `.headline-m` | 72/80 | Medium | 0 |
| `.headline-s` | 64/72 | Medium | 0 |
| `.title-l` | 40/48 | Medium | 0 |
| `.title-m` | 32/40 | Medium | 0 |
| `.title-s` | 24/32 | Medium | 0 |
| `.label-l` | 24/30 | DemiBold (600) | 0 |
| `.label-m` | 18/24 | DemiBold | 0 |
| `.label-s` | 14/20 | DemiBold | 0 |
| `.body-l` | 24/32 | Medium | 0 |
| `.body-m` | 18/26 | Medium | 0 |
| `.body-s` | 16/24 | Medium | 0 |
| `.nav-primary` | 18/26 | DemiBold | 0 |

### Spacing Scale
| Name | Variable | Desktop | Tablet | Mobile |
|------|----------|---------|--------|--------|
| Section XL | `--space-section-xl` | 256px | 128px | 96px |
| Section L | `--space-section-l` | 192px | 96px | 64px |
| Section M | `--space-section-m` | 120px | 64px | 48px |
| Section S | `--space-section-s` | 96px | 48px | 32px |
| Block | `--space-block` | 64px | 48px | 32px |
| Stack | `--space-stack` | 32px | 32px | 24px |
| Tight | `--space-tight` | 24px | 24px | 16px |
| Micro | `--space-micro` | 8px | 8px | 8px |

### Layout
| Token | Desktop | Tablet | Mobile |
|-------|---------|--------|--------|
| `--layout-max-width` | 1920px | — | — |
| `--layout-gutter` | 32px | 24px | 16px |

### Other Tokens
| Token | Value |
|-------|-------|
| `--opacity-hover` | 0.7 |
| `--opacity-disabled` | 0.35 |
| `--radius-s` | 4px |
| `--duration-base` | 300ms |
| `--ease-out` | cubic-bezier(0.16,1,0.3,1) |
| `--border-subtle` | 1px solid var(--color-text-primary) |

## Breakpoints
| Name | Range | Notes |
|------|-------|-------|
| Desktop | ≥1280px | Baseline token values |
| Tablet | 768–1279px | ~50% display, ~65% headline, 24px gutter |
| Mobile | <768px | ~25% display, ~40% headline, 16px gutter |

## Global Utility Classes (globals.css)
- `.container` — max-width + auto margins + gutter padding
- `.section`, `.section--xl`, `.section--l`, `.section--m`, `.section--s` — vertical section padding
- `.stack` — flex column, gap: stack (32px)
- `.block` — flex column, gap: block (64px)
- `.tight` — flex column, gap: tight (24px)
- `.readable` — max-width: 960px
- `.readable-wide` — max-width: 1200px
- `.text-secondary` — color: secondary
- `.text-accent` — color: accent

## File Structure

### Pages
| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Homepage: hero → intro → projects → CTA |
| `/work/[slug]` | `app/work/[slug]/page.tsx` | Case study detail |
| `/about` | `app/about/page.tsx` | About page |
| `/archives` | `app/archives/page.tsx` | Placeholder (disabled in nav) |
| `/style-guide` | `app/style-guide/page.tsx` | Design system reference |

### Components
| Component | Files | Description |
|-----------|-------|-------------|
| Header | `components/layout/Header.*` | Fixed nav, z-100, logo mark SVG |
| Footer | `components/layout/Footer.*` | Columns, marquee, line pattern, peace hand |
| ProjectCard | `components/work/ProjectCard.*` | Card with 4:3 default or 16:9 wide ratio |
| CaseStudyHero | `components/case-study/CaseStudyHero.*` | Hero for case study pages |
| CaseStudyRenderer | `components/case-study/CaseStudyRenderer.*` | Renders content blocks from TS data |
| CaseStudyMeta | `components/case-study/CaseStudyMeta.*` | Metadata sidebar |
| CaseStudyNextPrev | `components/case-study/CaseStudyNextPrev.*` | Navigation between case studies |
| RelatedProjects | `components/case-study/RelatedProjects.*` | Related projects grid |
| FadeIn | `components/motion/FadeIn.tsx` | GSAP scroll-triggered fade |
| Parallax | `components/motion/Parallax.tsx` | GSAP parallax wrapper |

### Content (case studies)
| Slug | Project Name | Cover Image |
|------|-------------|-------------|
| mcgrath | McGrath Architects | VR headset, orange bg |
| grow | Grow Therapy | Phone mockup, Inner.co |
| runnr | Black River Barbershop | Astronaut suit |
| atlas | Logofolio | Laptop, gradient screen |
| nomad | Simple Trips | Tablet, akoya |
| apex | Braintree | Runner, blue/yellow RUN |

## Homepage Layout Spec

### Hero (fixed, z:0)
- `position: fixed`, full viewport, red bg (#F24A2E)
- "Schultz" + superscript "™®©" at bottom-left
- `font-size: 17.3vw` (332px at 1920), `line-height: 0.9`
- Superscript: `font-size: 0.4em`, `vertical-align: super`
- Direct padding: `var(--layout-gutter)` left/right
- `overflow: hidden` clips descenders at fold
- **Mobile**: 70vh (not full viewport, matching reference site)

### Content wrapper (z:1)
- `margin-top: 100vh` pushes below hero
- `background-color: var(--color-surface-primary)` — slides over hero on scroll (parallax)

### Intro section
- Top padding: section-xl (256px)
- Label "A brief introduction" (label-m, secondary) → 1px divider → grid
- Grid: 2-col (1fr 1fr), gap: block (64px), right padding: section-s (96px)
- Left: "Studio Schultz" (display-s)
- Right: body copy (body-l, 24/32)

### Selected Projects
- Top padding: section-xl (256px)
- Label "The work" → divider → "Selected projects" (headline-l)
- Grid: 12-col, column-gap: stack (32px), row-gap: section-m (120px)
- Pattern: 8+4, 12 wide, 4+8, 12 wide
- Mobile: single col, row-gap doubles to section-xl
- Wide cards collapse to 4:3 on mobile

### CTA (red manifesto)
- Red bg, min-height: 100vh (70vh on mobile)
- Direct padding: `var(--layout-gutter)` all sides
- "Our Philosophy" (label-m) at top, headline at bottom via space-between
- "What works, no more, no less™®©" (display-m, font-size: 10vw)
- ™®© is `<sup>` with `.superscript` class, `<strong>` for weight 700

### Footer
- Dark bg (surface-primary), z:1
- Content wrapper: section-xl padding top/bottom
- 1px divider → 24px → meta row ("The Footer" / coordinates) → section-m → columns
- Columns: "Explore" (headline-l secondary + links) / "Let's chat" (headline-l + email)
- Marquee: full-bleed, GSAP scroll, alternating cream/gray "SCHULTZ.DESIGN"
- Bottom meta: "© Alex Schultz" / "Proudly manufactured in CO, USA"
- Line pattern: 23 bars (4→46px, exact heights), 32px gap, full-bleed
- Peace hand: centered, image-peace.png, 71x96

## Assets
| File | Purpose |
|------|---------|
| `/public/images/logo-mark.svg` | Header nav icon (geometric crystal/star) |
| `/public/images/image-peace.png` | Footer peace hand illustration |
| `/public/fonts/BDOGrotesk-*.otf` | 7 weights of BDO Grotesk |

## Key Architecture Decisions
1. **Hero is `position: fixed`** — content slides over it (parallax effect)
2. **Footer has `position: relative; z-index: 1; background-color`** — sits above fixed hero
3. **Red sections (hero, CTA) don't use `.container`** — direct padding instead, so text aligns flush with gutter
4. **All dark sections use `.container`** — centered with max-width + auto margins
5. **Case studies are TypeScript data files** — not MDX, not CMS. Each exports a typed object.
6. **Static export** — `output: "export"` in next.config.ts, no server required
7. **No `localStorage`** — no client state persistence needed
8. **Images are unoptimized** — `images: { unoptimized: true }` since static export can't do on-the-fly optimization
