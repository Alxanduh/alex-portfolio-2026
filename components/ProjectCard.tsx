import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  label?: string;
  title: string;
  description: string;
  layout?: "paired" | "solo";
}

export default function ProjectCard({
  slug,
  label = "Recent work",
  title,
  description,
  layout = "paired",
}: ProjectCardProps) {
  const ratioClass =
    layout === "solo"
      ? "ratio-responsive ratio-responsive-solo"
      : "ratio-responsive ratio-responsive-paired";

  return (
    <Link href={`/projects/${slug}`} className="block transition-opacity hover:opacity-85">
      <div className="divider" style={{ marginBottom: 16 }} />
      <p className="label" style={{ marginBottom: 4 }}>{label}</p>
      <p className="heading-sm" style={{ marginBottom: 2 }}>{title}</p>
      <p className="text-small" style={{ marginBottom: 16 }}>{description}</p>
      <div className={`img-placeholder ${ratioClass}`} />
    </Link>
  );
}
