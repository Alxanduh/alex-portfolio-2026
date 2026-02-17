import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ParallaxHero from "@/components/ParallaxHero";
import { getProjectBySlug, getRelatedProjects, getAllSlugs } from "@/lib/projects";
import type { ProjectSection } from "@/lib/projects";

const PLACEHOLDER_HERO = "https://alxandr.us/assets/img/mcgrath-architects/image-mcgrath-business-cards-a.png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project.related);
  const heroSrc = project.heroImage || PLACEHOLDER_HERO;

  /* Split sections: first renders before highlights, rest after */
  const firstSections = project.sections.slice(0, 1);
  const remainingSections = project.sections.slice(1);

  return (
    <main>
      {/* ============================================ */}
      {/* CATEGORY + TITLE + RULE + META               */}
      {/* ============================================ */}
      <div className="site-container" style={{ position: "relative", zIndex: 2, background: "var(--color-bg)" }}>
        <section style={{ paddingTop: "clamp(120px, 10vw, 180px)" }}>
          {/* Category label — 18px, 600, muted */}
          <p className="project-category fade-in" style={{ marginBottom: "clamp(32px, 3vw, 48px)" }}>
            {project.subtitle}
          </p>
          {/* Title — 96px, weight 500 */}
          <h1 className="project-title fade-in">{project.title}</h1>
        </section>

        {/* Solid rule */}
        <div className="rule-solid fade-in fade-d1" style={{ marginTop: "var(--space-md)" }} />

        {/* Meta row — 18px, weight 500, gap 96px */}
        <section className="project-meta-row fade-in fade-d2" style={{ paddingTop: "var(--space-sm)", paddingBottom: "var(--space-lg)" }}>
          {project.meta.map((m, i) => (
            <div key={i} className="project-meta-item">
              <span className="project-meta-label">{m.label}</span>
              <span className="project-meta-value">{m.value}</span>
            </div>
          ))}
        </section>
      </div>

      {/* ============================================ */}
      {/* HERO IMAGE — parallax (keeping existing)     */}
      {/* ============================================ */}
      <ParallaxHero src={heroSrc} alt={project.title} />
      <div style={{ height: "100vh" }} />

      {/* ============================================ */}
      {/* CONTENT OVERLAY                              */}
      {/* ============================================ */}
      <div className="parallax-content">

        {/* ---- Intro: centered, label + body side by side ---- */}
        <div className="content-text-offset">
          <div className="content-text-offset-inner">
            <p className="project-intro-label fade-in">A label can go here</p>
            <div style={{ flex: 1 }}>
              <p className="project-body fade-in">{project.intro}</p>
            </div>
          </div>
        </div>

        {/* ---- First content section before highlights ---- */}
        {firstSections.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 32px)" }}>
            {firstSections.map((section, i) => (
              <ContentSection key={`first-${i}`} section={section} />
            ))}
          </div>
        )}

        {/* ---- Project Highlights ---- */}
        {project.highlights.length > 0 && (
          <div className="site-container" style={{ paddingTop: "clamp(64px, 7.5vw, 120px)", paddingBottom: "clamp(64px, 7.5vw, 120px)" }}>
            <h2 className="project-section-heading fade-in" style={{ marginBottom: "clamp(48px, 6vw, 96px)" }}>
              Project highlights
            </h2>
            <div className="stat-card-grid">
              {project.highlights.map((h, i) => (
                <div key={i} className="stat-card fade-in" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                  <div>
                    <div className="stat-card-rule" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px, 5.5vw, 88px)" }}>
                    <p className="stat-value">{h.stat}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                      <p className="stat-card-title">{h.title}</p>
                      <p className="stat-card-body">{h.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---- Remaining content sections ---- */}
        {remainingSections.length > 0 && (
          <div style={{ display: "flex", flexDirection: "column", gap: "clamp(16px, 2vw, 32px)" }}>
            {remainingSections.map((section, i) => (
              <ContentSection key={`rest-${i}`} section={section} />
            ))}
          </div>
        )}

        {/* ---- Related projects ---- */}
        {related.length > 0 && (
          <div style={{ padding: "clamp(128px, 16vw, 256px) clamp(32px, 4vw, 64px) 0" }}>
            <section>
              {/* "More Stuff" label */}
              <p className="project-related-label fade-in" style={{ marginBottom: "clamp(32px, 3vw, 48px)" }}>
                More<br />Stuff
              </p>
              {/* Solid rule */}
              <div className="rule-solid fade-in" style={{ marginBottom: "clamp(32px, 3vw, 48px)" }} />
              {/* "Check these too" heading */}
              <h2 className="project-related-heading fade-in" style={{ marginBottom: "clamp(32px, 3vw, 48px)" }}>
                Check these too
              </h2>

              <div className="grid-2col" style={{ paddingLeft: 0, paddingRight: 0 }}>
                {related.map((p, i) => (
                  <ProjectCard key={p.slug} slug={p.slug} label={p.label} title={p.title} description={p.description} heroImage={p.heroImage} index={i} />
                ))}
              </div>
            </section>
          </div>
        )}

        <Footer />
      </div>
    </main>
  );
}

/* ============================================ */
/* CONTENT SECTION RENDERER                     */
/* ============================================ */
function ContentSection({ section }: { section: ProjectSection }) {
  if (section.type === "full") {
    return (
      <section>
        {/* Full-width image with side padding */}
        <div className="site-container">
          {section.image ? (
            <img
              src={section.image}
              alt=""
              style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover", borderRadius: 12 }}
            />
          ) : (
            <div className="img-placeholder ratio-landscape fade-in" />
          )}
        </div>
        {/* Caption: centered, max-width 1200px */}
        {section.caption && (
          <div className="project-caption-wrap">
            <div className="project-caption-inner fade-in">
              <p className="project-body">{section.caption.body}</p>
            </div>
          </div>
        )}
      </section>
    );
  }

  /* type === "pair" */
  return (
    <section>
      {/* Two images side by side */}
      <div className="site-container">
        <div className="grid-2col fade-in">
          {section.images ? (
            <>
              <img src={section.images[0]} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 12 }} />
              <img src={section.images[1]} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: 12 }} />
            </>
          ) : (
            <>
              <div className="img-placeholder ratio-square" />
              <div className="img-placeholder ratio-square" />
            </>
          )}
        </div>
      </div>
      {/* Caption: centered, max-width 1200px */}
      {section.caption && (
        <div className="project-caption-wrap">
          <div className="project-caption-inner fade-in">
            <p className="project-body">{section.caption.body}</p>
          </div>
        </div>
      )}
    </section>
  );
}
