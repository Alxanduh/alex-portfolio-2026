import Image from "next/image";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <div className="site-container">
        {/* Hero */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 60, }}>
          <h1 className="heading-display fade-in" style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)", }}>
            Hey
            <Image
              src="/images/image-hand.png"
              alt="Peace hand"
              width={64}
              height={64}
              className="hand-icon"
              style={{
                display: "inline-block",
                verticalAlign: "middle",
                width: "0.9em",
                height: "0.9em",
                objectFit: "contain",
                margin: "0 0.05em",
              }}
            />
            {" "}I&apos;m Alex —
            <br />
            <span className="heading-accent" style={{ display: "block" }}>
              Crafting brands and
              <br />
              digital experiences
            </span>
          </h1>
          <div className="divider fade-in fade-d2" style={{ marginTop: 24 }} />
        </section>

        {/* Selected Exhibitions */}
        <section style={{ paddingTop: 40, paddingBottom: 80 }}>
          <div className="fade-in fade-d2" style={{ marginBottom: 48 }}>
            <h2 className="heading-lg">
              Selected
              <br />
              <span className="heading-accent">Exhibitions</span>
            </h2>
          </div>

          {/* Row 1: 2 col */}
          <div className="grid-2col fade-in fade-d3" style={{ marginBottom: 40 }}>
            <ProjectCard slug="bloomtree" title="Bloomtree" description="2024 website redesign, systems & identity" layout="paired" />
            <ProjectCard slug="grow-therapy" title="Grow Therapy" description="Designing care that actually shows up" layout="paired" />
          </div>

          {/* Row 2: full width */}
          <div className="fade-in fade-d4" style={{ marginBottom: 40 }}>
            <ProjectCard slug="003-sample" title="003 Sample project" description="Full brand strategy, systems & identity in action" layout="solo" />
          </div>

          {/* Row 3: 2 col */}
          <div className="grid-2col fade-in fade-d5" style={{ marginBottom: 40 }}>
            <ProjectCard slug="04-sample" title="04 Sample project" description="2024 art direction, systems & identity" layout="paired" />
            <ProjectCard slug="05-sample" title="05 Sample project" description="2024 art direction, systems & identity" layout="paired" />
          </div>
        </section>

        {/* Tagline */}
        <section className="fade-in" style={{ paddingTop: 100, paddingBottom: 80 }}>
          <h2 className="heading-display">
            What works,
            <br />
            <span className="heading-accent">No more, no less</span>
          </h2>
        </section>
      </div>

      <Footer />
    </main>
  );
}
