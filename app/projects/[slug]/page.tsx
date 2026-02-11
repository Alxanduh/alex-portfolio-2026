import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import DragScroll from "@/components/DragScroll";
import { getProjectBySlug, getRelatedProjects, getAllSlugs } from "@/lib/projects";
import type { ProjectSection } from "@/lib/projects";

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

  return (
    <main>
      {/* ---- HERO + META ---- */}
      <div className="site-container">
        <section style={{ paddingTop: "var(--space-hero)" }}>
          <h1 className="heading-xl fade-in">
            {project.title}<br />
            <span className="heading-accent">
              {project.subtitle.split("\n").map((line, i) => (
                <span key={i}>{line}{i < project.subtitle.split("\n").length - 1 && <br />}</span>
              ))}
            </span>
          </h1>
        </section>

        <div className="divider fade-in fade-d1" style={{ marginTop: "var(--space-sm)" }} />

        <section className="project-meta fade-in fade-d2" style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          paddingTop: "var(--space-sm)", paddingBottom: "var(--space-lg)", gap: "var(--space-lg)",
        }}>
          <div className="meta-columns" style={{ display: "flex", gap: "var(--space-lg)", flexShrink: 0 }}>
            {project.meta.map((m, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="label-light">{m.label}</span>
                <span className="text-body-tight">{m.value}</span>
              </div>
            ))}
          </div>
          <div style={{ maxWidth: 800, display: "flex", flexDirection: "column", gap: 8 }}>
            <span className="label">Intro</span>
            <p className="text-big">{project.intro}</p>
          </div>
        </section>
      </div>

      {/* ---- HERO IMAGE ---- */}
      <div className="fade-in fade-d3" style={{ paddingTop: "var(--space-lg)" }}>
        {project.heroImage ? (
          <img src={project.heroImage} alt={project.title} style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover" }} />
        ) : (
          <div className="img-placeholder ratio-landscape" style={{ borderRadius: 0 }} />
        )}
      </div>

      {/* ---- HIGHLIGHTS ---- */}
      {project.highlights.length > 0 && (
        <div style={{ paddingTop: "var(--space-lg)", paddingBottom: "var(--space-lg)", paddingLeft: "var(--site-px)", overflow: "hidden" }}>
          <h2 className="heading-highlight fade-in" style={{ marginBottom: "var(--space-lg)" }}>Project highlights</h2>
          <DragScroll
            className="drag-scroll"
            style={{ display: "flex", gap: "var(--space-sm)", overflowX: "auto", paddingRight: "var(--site-px)", paddingBottom: "var(--space-xs)" }}
          >
            {project.highlights.map((h, i) => (
              <div key={i} className="stat-card fade-in" style={{
                minWidth: 300, maxWidth: 447, flex: "0 0 auto",
                animationDelay: `${0.1 + i * 0.1}s`,
              }}>
                <div className="divider" />
                <div style={{ display: "flex", flexDirection: "column", gap: 88, justifyContent: "center", flex: 1, paddingTop: "var(--space-xs)" }}>
                  <p className="stat-value">{h.stat}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                    <p className="text-big">{h.title}</p>
                    <p className="text-body-thin">{h.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </DragScroll>
        </div>
      )}

      {/* ---- CONTENT SECTIONS ---- */}
      <div className="site-container" style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
        {project.sections.map((section, i) => (
          <ContentSection key={i} section={section} />
        ))}
      </div>

      {/* ---- RELATED PROJECTS ---- */}
      {related.length > 0 && (
        <div className="site-container">
          <section style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-md)" }}>
            <h2 className="heading-display-alt fade-in" style={{ marginBottom: "var(--space-md)" }}>
              Check out<br /><span className="heading-accent">this stuff too</span>
            </h2>
            <div className="grid-2col-tight fade-in fade-d1">
              {related.map((p) => (
                <ProjectCard
                  key={p.slug}
                  slug={p.slug}
                  label={p.label}
                  title={p.title}
                  description={p.description}
                  size="large"
                  labelWeight="light"
                />
              ))}
            </div>
          </section>
        </div>
      )}

      <Footer />
    </main>
  );
}

/* ---- SECTION RENDERER ---- */
function ContentSection({ section }: { section: ProjectSection }) {
  if (section.type === "full") {
    return (
      <section>
        {section.image ? (
          <img src={section.image} alt="" style={{ width: "100%", display: "block", aspectRatio: "16/9", objectFit: "cover", borderRadius: 12 }} />
        ) : (
          <div className="img-placeholder ratio-landscape fade-in" />
        )}
        {section.caption && (
          <div className="fade-in fade-d1" style={{ maxWidth: 1100, marginTop: "var(--space-sm)" }}>
            {section.caption.label && <p className="label-thin" style={{ marginBottom: 8 }}>{section.caption.label}</p>}
            {section.caption.title && <p className="heading-md" style={{ marginBottom: 8 }}>{section.caption.title}</p>}
            {section.caption.body && <p className="text-body-light">{section.caption.body}</p>}
          </div>
        )}
      </section>
    );
  }

  return (
    <section>
      <div className="grid-2col-tight fade-in" style={section.caption ? { marginBottom: "var(--space-sm)" } : undefined}>
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
      {section.caption && (
        <div className="fade-in fade-d1" style={{ maxWidth: 1100 }}>
          {section.caption.label && <p className="label-thin" style={{ marginBottom: 8 }}>{section.caption.label}</p>}
          {section.caption.title && <p className="heading-md" style={{ marginBottom: 8 }}>{section.caption.title}</p>}
          {section.caption.body && <p className="text-body-light">{section.caption.body}</p>}
        </div>
      )}
    </section>
  );
}
