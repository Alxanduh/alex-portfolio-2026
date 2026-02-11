import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  label?: string;
  title: string;
  description: string;
  layout?: "paired" | "solo";
  size?: "default" | "large";
  labelWeight?: "default" | "light";
}

export default function ProjectCard({
  slug, label = "Branding • UI • UX", title, description,
  layout = "paired", size = "default", labelWeight = "default",
}: ProjectCardProps) {
  const ratioClass = layout === "solo"
    ? "ratio-responsive ratio-responsive-solo"
    : "ratio-responsive ratio-responsive-paired";
  /* Home cards: NHGD 32/40, Project related: NHGD 40/48 */
  const titleClass = size === "large" ? "heading-md-lg" : "heading-md";
  /* Home cards: AG w500, Project related: AG w400 */
  const labelClass = labelWeight === "light" ? "label-light" : "label";

  return (
    <Link href={`/projects/${slug}`} className="block transition-opacity hover:opacity-85">
      {/* Figma: divider → 16px → label → 8px → title → 8px → desc → 32px → image */}
      <div className="divider" style={{ marginBottom: 16 }} />
      <p className={labelClass} style={{ marginBottom: 8 }}>{label}</p>
      <p className={titleClass} style={{ marginBottom: 8 }}>{title}</p>
      <p className="text-body" style={{ marginBottom: 32 }}>{description}</p>
      <div className={`img-placeholder ${ratioClass}`} />
    </Link>
  );
}
