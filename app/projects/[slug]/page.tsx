import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import DragScroll from "@/components/DragScroll";
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

  return (
    <main>
      {/* META + TITLE */}
      <div className="site-container" style={{ position: "relative", zIndex: 2, background: "var(--color-bg)" }}>
        <section style={{ paddingTop: "clamp(120px, 10vw, 180px)" }}>
          <h1 className="heading-display fade-in">{project.title}</h1>
          <p className="text-big fade-in fade-d1" style={{ maxWidth: 640, marginTop: "var(--space-xs)" }}>
            {project.description}
          </p>
        </section>

        <div className="rule-solid fade-in fade-d2" style={{ marginTop: "var(--space-md)" }} />

        <section className="fade-in fade-d2" style={{ paddingTop: "var(--space-sm)", paddingBottom: "var(--space-lg)" }}>
          <div className="project-meta-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "var(--space-md)",
            maxWidth: 600,
          }}>
            {project.meta.map((m, i) => (
              <div key={i}>
                <span className="label" style={{ display: "block", marginBottom: 4 }}>{m.label}</span>
                <span className="text-body-fg">{m.value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* HERO IMAGE — parallax */}
      <ParallaxHero src={heroSrc} alt={project.title} />
      <div style={{ height: "100vh" }} />

      {/* CONTENT OVERLAY */}
      <div className="parallax-content">

        {/* Intro — offset right */}
        <div className="site-container" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-xl)" }}>
          <div className="content-text-offset">
            <div className="text-block">
              <p className="pull-quote fade-in">{project.intro}</p>
            </div>
          </div>
        </div>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <div style={{ paddingBottom: "var(--space-lg)", paddingLeft: "var(--site-px)", overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "var(--space-lg)", paddingRight: "var(--site-px)" }}>
              <span className="label fade-in">Project Highlights</span>
            </div>
            <DragScroll
              className="drag-scroll"
              style={{ display: "flex", gap: "var(--space-sm)", overflowX: "auto", paddingRight: "var(--site-px)", paddingBottom: "var(--space-xs)" }}
            >
              {project.highlights.map((h, i) => (
                <div key={i} className="stat-card fade-in" style={{
                  flex: "0 0 auto",
                  animationDelay: `${0.1 + i * 0.1}s`,
                }}>
                  <p className="stat-value">{h.stat}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                    <p className="text-body-fg" style={{ fontWeight: 500 }}>{h.title}</p>
                    <p className="text-body">{h.body}</p>
                  </div>
                </div>
              ))}
            </DragScroll>
          </div>
        )}

        {/* Content Sections */}
        <div className="site-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
          {project.sections.map((section, i) => (
            <ContentSection key={i} section={section} />
          ))}
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="site-container">
            <section style={{ paddingTop: "var(--space-xl)" }}>
              <div className="rule-solid" style={{ marginBottom: "var(--space-md)" }} />
              <div className="section-label-row">
                <p className="section-label-text">More Work</p>
              </div>
              <div className="grid-2col">
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

function ContentSection({ section }: { section: ProjectSection }) {
  if (section.type === "full") {
    return (
      <section>
        {section.image ? (
          <img src={section.image} alt="" style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover", borderRadius: "var(--radius-card)" }} />
        ) : (
          <div className="img-placeholder ratio-landscape fade-in" />
        )}
        {section.caption && (
          <div className="content-text-offset fade-in fade-d1" style={{ marginTop: "var(--space-lg)" }}>
            <div className="text-block">
              {section.caption.label && <span className="label" style={{ display: "block", marginBottom: "var(--space-xs)" }}>{section.caption.label}</span>}
              {section.caption.title && <p className="heading-sm" style={{ marginBottom: "var(--space-xs)" }}>{section.caption.title}</p>}
              {section.caption.body && <p className="text-body">{section.caption.body}</p>}
            </div>
          </div>
        )}
      </section>
    );
  }

  return (
    <section>
      <div className="grid-2col fade-in">
        {section.images ? (
          <>
            <img src={section.images[0]} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "var(--radius-card)" }} />
            <img src={section.images[1]} alt="" style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", borderRadius: "var(--radius-card)" }} />
          </>
        ) : (
          <>
            <div className="img-placeholder ratio-square" />
            <div className="img-placeholder ratio-square" />
          </>
        )}
      </div>
      {section.caption && (
        <div className="content-text-offset fade-in fade-d1" style={{ marginTop: "var(--space-lg)" }}>
          <div className="text-block">
            {section.caption.label && <span className="label" style={{ display: "block", marginBottom: "var(--space-xs)" }}>{section.caption.label}</span>}
            {section.caption.title && <p className="heading-sm" style={{ marginBottom: "var(--space-xs)" }}>{section.caption.title}</p>}
            {section.caption.body && <p className="text-body">{section.caption.body}</p>}
          </div>
        </div>
      )}
    </section>
  );
}
