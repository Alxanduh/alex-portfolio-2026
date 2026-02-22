import { CaseStudy } from "../types";

const nomad: CaseStudy = {
  title: "Simple Trips",
  slug: "nomad",
  year: "2025",
  eyebrow: "Editorial design for the modern explorer",
  role: "Editorial Design, Web Design, Content Strategy",
  client: "Simple Trips",
  duration: "10 weeks",
  tools: ["Figma", "InDesign", "Next.js"],
  meta: [
    { label: "Industry", value: "Travel" },
    { label: "Services", value: "Editorial, Web" },
    { label: "Timeline", value: "10 Weeks" },
  ],
  summary:
    "An editorial-first brand and web experience for a travel publication redefining how stories are told.",
  coverImage: "/images/nomad/cover.jpg",
  heroImage: "/images/nomad/hero.jpg",
  order: 5,
  featured: true,
  draft: false,
  seoTitle: "Simple Trips — Studio Schultz",
  seoDescription:
    "Editorial design and web experience for Simple Trips, a modern travel publication.",
  modules: [
    {
      type: "intro",
      heading: "Stories first",
      body: "Simple Trips needed a digital home that honored the editorial craft of print while embracing the possibilities of the web. We built a reading experience that breathes — generous whitespace, considered typography, and imagery that earns its place.\n\nA brand, at its strongest, is a decision that has found its resolve to stand the growth, and questions that arrive in a competitive market.\n\nThe design emphasizes reliability and efficiency, key factors needed to build trust and credibility as they expand to new markets.",
    },
    {
      type: "media-full",
      image: "/images/nomad/cover.jpg",
      alt: "Simple Trips editorial overview",
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
          label: "5min+",
          value: "Avg. read time",
          description:
            "The editorial layout increased average time-on-page by over 60% compared to the previous design.",
        },
        {
          label: "↑",
          value: "Subscriber growth",
          description:
            "Newsletter signups doubled within the first month, driven by the improved reading experience.",
        },
        {
          label: "Print + Web",
          value: "Unified system",
          description:
            "A single design system that bridges the print publication and digital platform seamlessly.",
        },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/nomad/cover.jpg", alt: "Simple Trips detail" },
        { src: "/images/nomad/cover.jpg", alt: "Simple Trips detail" },
      ],
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust in editorial markets.\n\nSimple Trips sought to refresh their brand to reflect their growth and adaptability. We developed a bold new identity, a refined typographic system, and updated layouts to ensure consistency across print and digital.\n\nThe design emphasized readability and craft, key attributes valued by their audience.",
    },
    {
      type: "media-full",
      image: "/images/nomad/cover.jpg",
      alt: "Simple Trips website on tablet",
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/nomad/cover.jpg", alt: "Simple Trips detail" },
        { src: "/images/nomad/cover.jpg", alt: "Simple Trips detail" },
      ],
    },
    {
      type: "media-2up",
      images: [
        { src: "/images/nomad/cover.jpg", alt: "Simple Trips detail" },
        { src: "/images/nomad/cover.jpg", alt: "Simple Trips detail" },
      ],
    },
    {
      type: "text-block",
      body: "This project underscored the importance of a strong and consistent visual identity in fostering trust across digital and print.\n\nWe developed a bold editorial system, a refined typographic hierarchy, and updated templates to ensure consistency across all formats.\n\nIt's a design of structured reliability and craft that carries the brand effortlessly across every channel.",
    },
    {
      type: "media-full",
      image: "/images/nomad/cover.jpg",
      alt: "Simple Trips brand final overview",
    },
  ],
};

export default nomad;
