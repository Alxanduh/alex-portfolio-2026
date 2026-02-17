import Link from "next/link";
import Footer from "@/components/Footer";
import HeroParallax from "@/components/HeroParallax";
import { getHomeProjects } from "@/lib/projects";

export default function Home() {
  const projects = getHomeProjects();

  return (
    <main>
      {/* ============================================ */}
      {/* HERO BANNER — fixed behind content           */}
      {/* ============================================ */}
      <HeroParallax>
        <h1 className="hero-title">
          <span className="hero-title-light">Schultz</span><span className="hero-title-bold">™®©</span>
        </h1>
      </HeroParallax>

      {/* Spacer to push content below the hero */}
      <div className="hero-spacer" />

      {/* Content scrolls up and over the hero */}
      <div className="parallax-content">
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

        {/* Project grid — pair / solo repeating pattern */}
        <div className="project-rows">
          {buildGrid(projects)}
        </div>
      </div>

      {/* ============================================ */}
      {/* ACCENT BAND — Philosophy                     */}
      {/* ============================================ */}
      <section className="accent-band">
        <div className="accent-band-inner">
          <p className="accent-label">Our<br />Philosophy</p>
          <h2 className="accent-heading">
            <span style={{ display: "block", whiteSpace: "nowrap" }}>What works,</span>
            <span style={{ display: "block", whiteSpace: "nowrap" }}>no more, no less<span className="fw-700">™</span><span className="accent-symbols">®©</span></span>
          </h2>
        </div>
      </section>

      <Footer />
      </div>{/* end parallax-content */}
    </main>
  );
}

/* ---- Build pair / solo alternating cycle (3 per cycle) ---- */
type CardProject = { slug: string; label: string; title: string; description: string; heroImage?: string };

function buildGrid(items: CardProject[]) {
  // Cycle: pair (2 cards, 50/50, 1:1) → solo (1 card, 16:9) = 3 projects
  const elements: React.ReactElement[] = [];
  let i = 0;
  let step = 0;

  while (i < items.length) {
    const isPair = step % 2 === 0;

    if (isPair && i + 1 < items.length) {
      elements.push(
        <div key={`p-${items[i].slug}`} className="project-pair">
          <Card project={items[i]} />
          <Card project={items[i + 1]} />
        </div>
      );
      i += 2;
    } else {
      elements.push(<Card key={`s-${items[i].slug}`} project={items[i]} />);
      i += 1;
    }
    step++;
  }
  return elements;
}

function Card({ project }: { project: CardProject }) {
  return (
    <Link href={`/projects/${project.slug}`} className="card-link">
      {project.heroImage ? (
        <img src={project.heroImage} alt={project.title} className="card-image-real" />
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
