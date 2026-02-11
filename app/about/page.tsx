import Footer from "@/components/Footer";

export default function About() {
  return (
    <main>
      <div className="site-container">
        {/* Hero */}
        <section style={{ paddingTop: 140, paddingBottom: 24 }}>
          <h1 className="heading-xl fade-in">
            What works
            <br />
            <span className="heading-accent">No more, no less</span>
          </h1>
          <div className="divider fade-in fade-d1" style={{ marginTop: 24 }} />
        </section>

        {/* Bio */}
        <section className="fade-in fade-d2" style={{ paddingTop: 16, paddingBottom: 48, maxWidth: 500 }}>
          <p className="text-body">
            Raised on a healthy dose of Saturday morning cartoons, legos,
            skateboarding, and rock and roll. I channel this creative energy into
            producing unique brands that speak in a minimal way.
          </p>
        </section>

        {/* Hero Photo */}
        <section className="fade-in fade-d3" style={{ paddingBottom: 80 }}>
          <div className="img-placeholder ratio-wide" />
        </section>

        {/* My Focus */}
        <section style={{ paddingBottom: 80 }}>
          <div className="fade-in" style={{ marginBottom: 32 }}>
            <h2 className="heading-lg">
              My<br />
              <span className="heading-accent">focus</span>
            </h2>
          </div>
          <div className="divider" />
          <div className="grid-3col fade-in fade-d1" style={{ paddingTop: 32 }}>
            {["Design", "Strategy", "Another one"].map((title) => (
              <div key={title}>
                <h3 className="heading-sm" style={{ marginBottom: 16 }}>{title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[1, 2, 3, 4].map((n) => (
                    <li key={n} className="text-small" style={{ padding: "6px 0" }}>
                      Sample list item number {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* When I'm Not on the Computer */}
        <section style={{ paddingBottom: 80 }}>
          <div className="fade-in" style={{ marginBottom: 32 }}>
            <h2 className="heading-lg">
              When i&apos;m<br />
              <span className="heading-accent">Not on the computer</span>
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
