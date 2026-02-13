import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <div className="site-container">
        <section style={{ paddingTop: "clamp(120px, 10vw, 180px)" }}>
          <h1 className="heading-display fade-in">About</h1>
        </section>

        <div className="rule-solid fade-in fade-d1" style={{ marginTop: "var(--space-sm)" }} />

        {/* Bio — offset right */}
        <section style={{ paddingTop: "var(--space-lg)" }}>
          <div className="content-text-offset fade-in fade-d2">
            <div className="text-block">
              <p className="pull-quote" style={{ marginBottom: "var(--space-md)" }}>
                Raised on a healthy dose of Saturday morning cartoons, legos,
                skateboarding, and rock and roll. I channel this creative energy into
                producing unique brands that speak in a minimal way.
              </p>
              <p className="text-body">
                With over a decade in the industry, I&apos;ve worked with startups, agencies,
                and Fortune 500 companies — always bringing the same obsessive attention
                to detail whether it&apos;s a logo mark or a full product ecosystem.
              </p>
            </div>
          </div>
        </section>

        {/* Photo */}
        <section className="fade-in fade-d3" style={{ paddingTop: "var(--space-xl)" }}>
          <div className="img-placeholder" style={{ aspectRatio: "16 / 9" }} />
        </section>

        {/* Capabilities */}
        <section style={{ paddingTop: "var(--space-xl)" }}>
          <div className="rule-solid" style={{ marginBottom: "var(--space-md)" }} />
          <div className="section-label-row">
            <p className="section-label-text">Capabilities</p>
            <p className="section-label-text">Section<br />001</p>
          </div>

          <div className="grid-3col fade-in fade-d1">
            {[
              { title: "Design", items: ["Brand identity", "Visual systems", "UI / UX Design", "Creative direction"] },
              { title: "Strategy", items: ["Brand positioning", "Content strategy", "User research", "Growth planning"] },
              { title: "Build", items: ["Motion design", "Prototyping", "Design systems", "Webflow / Code"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="rule" style={{ marginBottom: "var(--space-xs)" }} />
                <h3 className="heading-sm" style={{ marginBottom: "var(--space-sm)" }}>{col.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {col.items.map((item) => (
                    <span key={item} className="text-body">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Off the clock */}
        <section style={{ paddingTop: "var(--space-xl)" }}>
          <div className="rule-solid" style={{ marginBottom: "var(--space-md)" }} />
          <div className="section-label-row">
            <p className="section-label-text">Off the clock</p>
            <p className="section-label-text">Section<br />002</p>
          </div>
          <div className="grid-4col fade-in fade-d1">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="img-placeholder ratio-square" />
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
