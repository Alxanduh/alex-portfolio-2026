import Link from "next/link";

const stripeHeights = [4,6,8,10,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46];

/* Marquee: 8 items per half ensures coverage on any viewport width.
   Two identical halves → translateX(-50%) loops seamlessly. */
const marqueeColors = ["#7e7e7e", "#fffff0", "#7e7e7e", "#fffff0", "#7e7e7e", "#fffff0", "#7e7e7e", "#fffff0"];

export default function Footer() {
  return (
    <footer>
      <div className="site-container">
        <div className="divider" />

        <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "var(--space-xs)" }}>
          <span className="label-footer">Portfolio</span>
          <span className="label-footer">39.7548° N, 104.9723° W</span>
        </div>

        <div className="footer-columns" style={{ paddingTop: "var(--space-xl)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <h4 className="heading-accent" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1 }}>
              Explore
            </h4>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link href="/" className="heading-lg link footer-nav-link">Home</Link>
              <Link href="/about" className="heading-lg link footer-nav-link">About</Link>
              <Link href="/projects" className="heading-lg link footer-nav-link">Archives</Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <h4 className="heading-accent" style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)", lineHeight: 1 }}>
              Let&apos;s chat
            </h4>
            <a href="mailto:hello@alxander.studio" className="heading-lg link">
              hello@alxander.studio
            </a>
          </div>
        </div>
      </div>

      {/* Marquee — two identical halves, 8 items each for full viewport coverage */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[0, 1].map((half) => (
            <div key={half} className="marquee-half" aria-hidden={half === 1 ? "true" : undefined}>
              {marqueeColors.map((color, i) => (
                <span key={i} className="marquee-text" style={{ color }}>
                  SCHULTZ.DESIGN
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="site-container" style={{ display: "flex", justifyContent: "space-between", paddingTop: "var(--space-xs)", paddingBottom: "var(--space-md)" }}>
        <span className="label-footer">Proudly manufactured in CO, USA</span>
        <span className="label-footer">© Alex Schultz</span>
      </div>

      {/* Stripes */}
      <div className="stripes">
        {stripeHeights.map((h, i) => (
          <div key={i} className="stripe-line" style={{ height: h, marginBottom: i < stripeHeights.length - 1 ? "var(--space-sm)" : 0 }} />
        ))}
      </div>
    </footer>
  );
}
