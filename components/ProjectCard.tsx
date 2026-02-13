import Link from "next/link";

interface ProjectCardProps {
  slug: string;
  label?: string;
  title: string;
  description: string;
  heroImage?: string;
  index?: number;
}

export default function ProjectCard({
  slug, label = "Branding • UI • UX", title, description, heroImage, index = 0,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="card-link fade-in" style={{ animationDelay: `${0.1 + index * 0.05}s` }}>
      {heroImage ? (
        <img src={heroImage} alt={title} className="card-image-real" />
      ) : (
        <div className="card-image" />
      )}
      <div className="card-meta">
        <p className="card-label">{label}</p>
        <h3 className="card-title">{title}</h3>
        <p className="card-desc">{description}</p>
      </div>
    </Link>
  );
}
