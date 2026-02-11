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
  const titleClass = size === "large" ? "heading-md-lg" : "heading-md";
  const labelClass = labelWeight === "light" ? "label-light" : "label";

  return (
    <Link href={`/projects/${slug}`} className="block transition-opacity hover:opacity-85">
      <div className="divider card-divider" style={{ marginBottom: 8 }} />
      <p className={labelClass} style={{ marginBottom: 4 }}>{label}</p>
      <p className={titleClass} style={{ marginBottom: 4 }}>{title}</p>
      <p className="text-body" style={{ marginBottom: 32 }}>{description}</p>
      <div className={`img-placeholder ${ratioClass}`} />
    </Link>
  );
}
