import Link from "next/link";
import Footer from "@/components/Footer";
import { getHomeProjects } from "@/lib/projects";

export default function Home() {
  const projects = getHomeProjects();

  /* Pair projects for alternating wide/narrow rows */
  const pairs: { left: (typeof projects)[0]; right?: (typeof projects)[0]; flip: boolean }[] = [];
  for (let i = 0; i < projects.length; i += 2) {
    pairs.push({
      left: projects[i],
      right: projects[i + 1],
      flip: (i / 2) % 2 === 1, /* row 0: wide-narrow, row 1: narrow-wide, row 2: wide-narrow */
    });
  }

  return (
    <main>
      {/* ============================================ */}
      {/* HERO BANNER — #ff4b2e                        */}
      {/* ============================================ */}
      <section className="hero-accent">
        <h1 className="hero-title">
          <span className="hero-title-light">Schultz</span><span className="hero-title-bold">®©™</span>
        </h1>
      </section>

      {/* ============================================ */}
      {/* INTRO — "Quick Introduction" / Section 001   */}
      {/* ============================================ */}
      <div className="site-container" style={{ paddingTop: "var(--space-xl)" }}>
        {/* Section labels first */}
        <section className="section-intro">
          <div className="section-label-row">
            <p className="section-label-text">Quick<br />Introduction</p>
            <p className="section-label-text">Section<br />001</p>
          </div>

          {/* Rule after labels */}
          <div className="rule-solid" />

          {/* Studio Schultz + body below rule */}
          <div className="intro-row">
            <h2 className="intro-heading">Studio<br />Schultz</h2>
            <div className="intro-body">
              <p className="intro-body-text">
                <span className="fw-500">Studio Schultz</span><span className="fw-700">®©™ </span>
                <span className="fw-500">is an independent design studio run out of a second bedroom in Alex William Schultz and Lola Sue Schultz&apos;s apartment in sunny, shit-your-pants-inducing™ Denver, CO.</span>
              </p>
              <p className="intro-body-text fw-500" style={{ marginTop: 16 }}>
                Lola handles art direction with a patented proprietary process via Lola naps™, grunts™™, and farts™™™ (paws are limiting). Alex designs until his fingers bleed, building impactful minimal solutions guided by one rule: what works—no more, no less.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SELECTED WORKS                              */}
        {/* ============================================ */}
        <section className="section-works">
          <div className="section-label-row">
            <p className="section-label-text">Selected<br />Works</p>
            <p className="section-label-text">Section<br />002</p>
          </div>
          <div className="rule-solid" />
          <h2 className="works-heading">Selected works</h2>
        </section>

        {/* Project grid — alternating wide/narrow */}
        <div className="project-rows">
          {pairs.map((pair, rowIdx) => (
            <div
              key={rowIdx}
              className={`project-row ${pair.flip ? "project-row-flip" : ""}`}
            >
              <ProjectCard project={pair.left} />
              {pair.right && <ProjectCard project={pair.right} />}
            </div>
          ))}
        </div>
      </div>

      {/* ============================================ */}
      {/* ACCENT BAND — Philosophy                     */}
      {/* ============================================ */}
      <section className="accent-band">
        <div className="accent-band-inner">
          <div className="section-label-row" style={{ marginBottom: "auto" }}>
            <p className="section-label-text">Studio<br />Schultz®<br />Portfolio<br />© 2026</p>
            <p className="section-label-text">The<br />Philosophy</p>
          </div>
          <h2 className="accent-heading">
            <span className="fw-500">What works,<br />no more, no less</span><span className="fw-700">™™™™</span>
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ---- Inline ProjectCard for home page ---- */
function ProjectCard({ project }: { project: { slug: string; label: string; title: string; description: string; heroImage?: string } }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card-link">
      {project.heroImage ? (
        <img
          src={project.heroImage}
          alt={project.title}
          className="card-image-real"
        />
      ) : (
        <div className="card-image" />
      )}
      <div className="card-meta">
        <p className="card-label">{project.label}</p>
        <h3 className="card-title">{project.title}</h3>
        <p className="card-desc">{project.description}</p>
      </div>
    </Link>
  );
}
