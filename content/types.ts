/* ============================================================
   CASE STUDY TYPES
   
   Every project file must satisfy the CaseStudy interface.
   Content is composed from a typed union of modules —
   this means you can mix and match content blocks without
   ever duplicating page layouts.
   ============================================================ */

/**
 * Module types — each represents a distinct content block.
 * The [slug] page renders these conditionally via a switch.
 * To add a new block type, add it here and handle it in
 * CaseStudyRenderer.tsx.
 */
export type CaseStudyModule =
  | { type: "intro"; heading: string; body: string }
  | { type: "text-block"; heading?: string; body: string }
  | { type: "metrics"; items: { label: string; value: string; description?: string }[] }
  | { type: "media-full"; image: string; alt: string; caption?: string }
  | { type: "media-2up"; images: { src: string; alt: string }[] }
  | { type: "media-3up"; images: { src: string; alt: string }[] }
  | { type: "quote"; text: string; author?: string; role?: string }
  | { type: "section-heading"; label?: string; heading: string };

/**
 * The main CaseStudy interface.
 * `order` controls sort position across the site.
 * `featured` controls homepage visibility.
 * `draft` prevents the page from being generated at build time.
 */
export interface CaseStudy {
  title: string;
  slug: string;
  year: string;
  eyebrow: string;          /* e.g. "Designing care that actually shows up" */
  role: string;
  client: string;
  duration: string;
  tools: string[];
  meta: { label: string; value: string }[];  /* Displayed as label-over-value pairs in hero */
  summary: string;
  coverImage: string;
  heroImage: string;
  order: number;
  featured: boolean;
  draft: boolean;
  seoTitle: string;
  seoDescription: string;
  modules: CaseStudyModule[];
}
