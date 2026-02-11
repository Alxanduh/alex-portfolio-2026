import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <div className="site-container">
        {/* ---- HERO ---- */}
        <section style={{ paddingTop: "var(--space-hero)" }}>
          <h1 className="heading-xl fade-in">
            What works<br /><span className="heading-accent">No more, no less</span>
          </h1>
        </section>

        <div className="divider fade-in fade-d1" style={{ marginTop: "var(--space-sm)" }} />

        {/* ---- BIO ---- */}
        <section className="fade-in fade-d2" style={{ paddingTop: "var(--space-md)" }}>
          <p className="text-big" style={{ maxWidth: 762 }}>
            Raised on a healthy dose of Saturday morning cartoons, legos,
            skateboarding, and rock and roll. I channel this creative energy into
            producing unique brands that speak in a minimal way.
          </p>
        </section>

        {/* ---- HERO PHOTO ---- */}
        <section className="fade-in fade-d3" style={{ paddingTop: "var(--space-lg)" }}>
          <div className="img-placeholder" style={{ aspectRatio: "1672 / 960" }} />
        </section>

        {/* ---- MY FOCUS ---- */}
        <section style={{ paddingTop: "var(--space-xl)" }}>
          <div className="fade-in" style={{ marginBottom: "var(--space-lg)" }}>
            <h2 className="heading-xl">My<br /><span className="heading-accent">focus</span></h2>
          </div>

          <div className="grid-3col fade-in fade-d1">
            {[
              { title: "Design", items: ["Brand identity", "Visual systems", "UI / UX Design", "Creative direction"] },
              { title: "Strategy", items: ["Brand positioning", "Content strategy", "User research", "Growth planning"] },
              { title: "Another one", items: ["Motion design", "Prototyping", "Design systems", "Webflow / Code"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="divider" style={{ marginBottom: "var(--space-xs)" }} />
                <h3 className="heading-focus" style={{ marginBottom: "var(--space-sm)" }}>{col.title}</h3>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {col.items.map((item) => (
                    <span key={item} className="text-list">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---- WHEN I'M NOT ON THE COMPUTER ---- */}
        <section style={{ paddingTop: "var(--space-xl)" }}>
          <div className="fade-in" style={{ marginBottom: "var(--space-lg)" }}>
            <h2 className="heading-xl">
              When i&apos;m<br /><span className="heading-accent">Not on the computer</span>
            </h2>
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
