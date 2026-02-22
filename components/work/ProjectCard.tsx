import Link from "next/link";
import Image from "next/image";
import type { CaseStudy } from "@/content";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: CaseStudy;
  wide?: boolean;
}

export default function ProjectCard({ project, wide = false }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className={`${styles.card} ${wide ? styles.wide : ""}`}
    >
      <div className={styles.imageWrap}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes={wide ? "100vw" : "(max-width: 960px) 100vw, 50vw"}
          className={styles.image}
        />
        {/* Overlay tags */}
        <div className={styles.overlay}>
          <span className={`label-s ${styles.tag}`}>Featured</span>
        </div>
      </div>
      <div className={styles.meta}>
        <span className={`title-s ${styles.title}`}>{project.title}</span>
        <span className="body-s text-secondary">{project.role}</span>
      </div>
    </Link>
  );
}
