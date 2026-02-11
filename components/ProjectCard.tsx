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
  const titleClass = size === "large" ? "card-title" : "card-title";

  return (
    <Link href={`/projects/${slug}`} className="block transition-opacity hover:opacity-85">
      <div className="divider card-divider" style={{ marginBottom: 4 }} />
      <p className={titleClass}>{title}</p>
      <p className="text-body-tight" style={{ color: "#7e7e7e" }}>{description}</p>
      <p className="text-body-tight" style={{ color: "#7e7e7e", marginBottom: 32 }}>{label}</p>
      <div className={`img-placeholder ${ratioClass}`} />
    </Link>
  );
}
