import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { getHomeProjects } from "@/lib/projects";

export default function Home() {
  const projects = getHomeProjects();

  const rows: { layout: "paired" | "solo"; projects: typeof projects }[] = [];
  let pairBuffer: typeof projects = [];

  projects.forEach((p) => {
    if (p.homeLayout === "solo") {
      if (pairBuffer.length > 0) {
        rows.push({ layout: "paired", projects: [...pairBuffer] });
        pairBuffer = [];
      }
      rows.push({ layout: "solo", projects: [p] });
    } else {
      pairBuffer.push(p);
      if (pairBuffer.length === 2) {
        rows.push({ layout: "paired", projects: [...pairBuffer] });
        pairBuffer = [];
      }
    }
  });
  if (pairBuffer.length > 0) {
    rows.push({ layout: "paired", projects: [...pairBuffer] });
  }

  return (
    <main>
      <div className="site-container">
        {/* ---- HERO ---- */}
        <section className="hero-home" style={{ minHeight: "100dvh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: "var(--space-hero-divider)" }}>
          <h1 className="heading-display fade-in">
            Hey
            <Image src="/images/image-hand.png" alt="Peace hand" width={84} height={114}
              style={{ display: "inline-block", verticalAlign: "baseline", width: "0.66em", height: "0.89em", objectFit: "contain", margin: "0 0.05em" }}
            />
            {" "}I&apos;m Alex—
            <br />
            <span className="heading-accent">
              Crafting brands and<br />digital experiences
            </span>
          </h1>
          <div className="divider fade-in fade-d2" style={{ marginTop: "var(--space-hero-divider)" }} />
        </section>

        {/* ---- SELECTED EXHIBITIONS ---- */}
        <section style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-lg)" }}>
          <div className="fade-in fade-d2" style={{ marginBottom: "var(--space-lg)" }}>
            <h2 className="heading-xl">Selected<br /><span className="heading-accent">Exhibitions</span></h2>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={i > 0 ? "card-row-gap" : ""}>
              {row.layout === "paired" ? (
                <div className="grid-2col fade-in fade-d3">
                  {row.projects.map((p) => (
                    <ProjectCard
                      key={p.slug}
                      slug={p.slug}
                      label={p.label}
                      title={p.title}
                      description={p.description}
                      layout="paired"
                    />
                  ))}
                </div>
              ) : (
                <div className="fade-in fade-d4">
                  <ProjectCard
                    slug={row.projects[0].slug}
                    label={row.projects[0].label}
                    title={row.projects[0].title}
                    description={row.projects[0].description}
                    layout="solo"
                  />
                </div>
              )}
            </div>
          ))}
        </section>

        {/* ---- TAGLINE ---- */}
        <section className="fade-in" style={{ paddingTop: "var(--space-xl)", paddingBottom: "var(--space-xl)" }}>
          <h2 className="heading-tagline">What works,<br /><span className="heading-accent">No more, no less</span></h2>
        </section>
      </div>

      <Footer />
    </main>
  );
}
