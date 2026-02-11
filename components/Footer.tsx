import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="site-container">
        {/* Info bar */}
        <div className="divider-subtle" />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "40px 0" }}>
          <span className="label-sm">Portfolio</span>
          <span className="label-sm">39.7548° N, 104.9723° W</span>
        </div>

        {/* Columns */}
        <div className="grid-2col" style={{ paddingBottom: 80 }}>
          <div>
            <h4 className="heading-accent" style={{ fontSize: "1.6rem", marginBottom: 16 }}>Explore</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <Link href="/" className="link-muted text-small">Home</Link>
              <Link href="/about" className="link-muted text-small">About</Link>
              <Link href="#" className="link-muted text-small">Vineyard</Link>
            </div>
          </div>
          <div>
            <h4 className="heading-accent" style={{ fontSize: "1.6rem", marginBottom: 16 }}>Let&apos;s chat</h4>
            <a
              href="mailto:hello@alxander.studio"
              className="heading-md link"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)" }}
            >
              hello@alxander.studio
            </a>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="divider-subtle" />
      <div style={{ overflow: "hidden", padding: "32px 0" }}>
        <div className="marquee-track">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="font-serif italic"
              style={{
                fontSize: "clamp(4rem, 9vw, 8rem)",
                fontWeight: 300,
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                padding: "0 24px",
                color: i % 2 === 0 ? "#fffff0" : "#7e7e7e",
              }}
            >
              SCHULTZ.DESIGN
            </span>
          ))}
        </div>
      </div>

      {/* Stripes */}
      <div style={{ paddingTop: 16 }}>
        <div className="site-container" style={{ display: "flex", justifyContent: "space-between", paddingTop: 6, paddingBottom: 6 }}>
          <span className="label-sm">Crafted with → V.2 &amp; 526</span>
          <span className="label-sm">© Alex Schultz</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 4, paddingTop: 8 }}>
          {[...Array(26)].map((_, i) => (
            <div key={i} className="stripe-line" />
          ))}
        </div>
      </div>
    </footer>
  );
}
