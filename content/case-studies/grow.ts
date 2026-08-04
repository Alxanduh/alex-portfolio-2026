import { CaseStudy } from "../types";

const grow: CaseStudy = {
  title: "Grow Therapy",
  slug: "grow",
  year: "2024",
  eyebrow: "Scaling care through better design",
  role: "Senior Brand Designer",
  client: "Grow Therapy",
  duration: "12 weeks",
  tools: ["Figma", "React", "TypeScript", "Framer Motion"],
  meta: [
    { label: "Industry", value: "HealthTech" },
    { label: "Role", value: "Staff Visual Designer" },
    { label: "Services", value: "Art Direction, UI/UX Design, Design Systems, Web Design" },
  ],
  summary:
    "A digital-first brand and product design for a venture studio scaling climate-focused startups.",
  coverImage: "/images/grow/image-cover-grow-therapy.jpg",
  heroImage: "/images/grow/image-hero-grow-therapy.jpg",
  order: 2,
  featured: true,
  draft: false,
  seoTitle: "Grow Therapy — Studio Schultz",
  seoDescription:
    "Brand strategy and digital product design for Grow Therapy, a climate-tech venture studio.",
  modules: [ 
    {
      type: "intro",
      heading: "Scaling with intention",
      body: "I developed a new logo mark for Grow Therapy and built a transitional visual system around it — one that could elevate the current brand while remaining flexible for a larger rebrand planned downstream. The system needed to feel ownable in the short term, but modular and restrained enough to scale across future brand, product, and marketplace contexts.\n\nI helped evolve Grow Therapy’s brand during a transitional moment for the company. The work included developing a new logo mark to pair with the existing wordmark, expanding the visual language, shaping art direction, and building modular UI-driven brand components that could scale across the website, marketplace, and product-adjacent experiences — without overcommitting the team to a fully rebuilt identity ahead of a future rebrand.",
    },
    {
      type: "media-full",
      image: "/images/grow/image-grow-therapy-logomark.jpg",
      alt: "Grow Therapy brand system overview",
    },
    {
      type: "media-full",
      image: "/images/grow/image-grow-therapy-brand-overview.jpg",
      alt: "Grow Therapy brand system overview",
    },
    {
      type: "section-heading",
      label: "Approach",
      heading: "Project highlights",
    },
    {
      type: "metrics",
      items: [
        {
          label: "Outcome",
          value: "12 portfolio brands",
          description:
            "A parent identity system flexible enough to house twelve distinct sub-brands while maintaining a cohesive visual language.",
        },
        {
          label: "Delivered",
          value: "Design system",
          description:
            "Component library with tokens, patterns, and templates for rapid deployment across all portfolio companies.",
        },
        {
          label: "Impact",
          value: "Series A closed",
          description:
            "Brand clarity contributed to a successful fundraising round within three months of launch.",
        },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/grow/cover.jpg", alt: "Grow brand elements" },
        { src: "/images/grow/cover.jpg", alt: "Grow interface design" },
      ],
    },
    {
      type: "media-full",
      image: "/images/grow/image-grow-ui-a.jpg",
      alt: "Grow Therapy website on multiple devices",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/grow/image-grow-therapy-body-home-layout-test-a.jpg",
      alt: "Grow brand system final overview",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
        { src: "/images/grow/cover.jpg", alt: "Grow detail" },
      ],
    },
    {
      type: "media-full",
      image: "/images/grow/image-grow-therapy-brand-overview.jpg",
      alt: "Grow brand system final overview",
    },
    {
      type: "text-block",
      body: "The system uses a deliberately constrained color palette — mostly monochrome with a single accent per sub-brand. This forces clarity and ensures that when color does appear, it carries weight.\n\nTypography follows the same logic: one family, strict hierarchy, no exceptions. The result is a brand that feels both unified and adaptable — each sub-brand distinct but unmistakably part of the same family.\n\nThe design emphasized reliability and efficiency, key attributes valued by their clients. Objectives included increasing brand recognition, improving client retention, and supporting expansion efforts.",
    },
  ],
};

export default grow;
