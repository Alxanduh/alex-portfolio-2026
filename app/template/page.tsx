import ProjectCard from "@/components/ProjectCard";

export default function StyleGuidePage() {
  return (
    <main>
      {/* ============ HEADER ============ */}
      <div className="site-container" style={{ paddingTop: "clamp(140px, 12vw, 200px)", paddingBottom: "var(--space-xl)" }}>
        <h1 className="heading-display" style={{ marginBottom: "var(--space-xs)" }}>Style Guide</h1>
        <p className="text-big" style={{ color: "var(--color-muted)" }}>
          Home page design system — typography, color, spacing &amp; components
        </p>
      </div>

      {/* ============ COLORS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Colors</p>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {[
            { name: "Background", var: "--color-bg", hex: "#222222" },
            { name: "Foreground", var: "--color-fg", hex: "#fffff0" },
            { name: "Muted", var: "--color-muted", hex: "#888888" },
            { name: "Accent", var: "--color-accent", hex: "#ff4b2e" },
            { name: "Rule", var: "--color-rule", hex: "rgba(255,255,240,0.2)" },
          ].map((c) => (
            <div key={c.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                width: 120,
                height: 80,
                borderRadius: "var(--radius-card)",
                background: c.hex,
                border: "1px solid var(--color-rule)",
              }} />
              <p style={{ fontSize: 14, color: "var(--color-fg)", margin: 0 }}>{c.name}</p>
              <p style={{ fontFamily: "monospace", fontSize: 12, color: "var(--color-muted)", margin: 0 }}>
                {c.hex}<br />var({c.var})
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ TYPOGRAPHY — LARGE ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Typography — Large</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .hero-title — 500 — clamp(48px, 19.5vw, 375px) — hero banner
            </p>
            <p className="hero-title" style={{ margin: 0, position: "relative" }}>
              <span className="hero-title-light">Schultz</span><span className="hero-title-bold">™®©</span>
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .intro-heading / .works-heading — 500 — clamp(48px, 8.54vw, 164px) — section headings
            </p>
            <p className="intro-heading" style={{ margin: 0 }}>Studio Schultz</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .accent-heading — 500 — clamp(36px, 10.5vw, 232px) — philosophy band
            </p>
            <p className="accent-heading" style={{ margin: 0 }}>What works</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .footer-col-label — 500 — clamp(32px, 5vw, 96px) — footer column headings
            </p>
            <p className="footer-col-label" style={{ margin: 0 }}>Explore</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .footer-col-link — 400 — clamp(32px, 5vw, 96px) — footer links
            </p>
            <p className="footer-col-link" style={{ margin: 0 }}>Works</p>
          </div>
        </div>
      </section>

      {/* ============ TYPOGRAPHY — BODY ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Typography — Body</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .intro-body-text — 500 — clamp(14px, 1.25vw, 24px) — intro paragraph
            </p>
            <p className="intro-body-text" style={{ margin: 0 }}>
              Studio Schultz is an independent design studio run out of a second bedroom in Denver, CO.
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .marquee-text — 500 — clamp(40px, 16.5vw, 320px) — scrolling marquee
            </p>
            <p style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: "clamp(40px, 8vw, 120px)", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>SCHULTZ.DESIGN</p>
          </div>
        </div>
      </section>

      {/* ============ TYPOGRAPHY — LABELS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Typography — Labels</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .section-label-text — 600 — clamp(10px, 0.9375vw, 18px) — above-rule section labels
            </p>
            <div className="section-label-row">
              <p className="section-label-text" style={{ margin: 0 }}>Quick<br />Introduction</p>
              <p className="section-label-text" style={{ margin: 0 }}>Section<br />001</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .footer-label — 600 — clamp(10px, 0.9375vw, 18px) — footer rule labels
            </p>
            <p className="footer-label" style={{ margin: 0 }}>The Footer</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .footer-coords — 600 — clamp(9.5px, 0.82vw, 15.5px) — footer coordinates (optically sized)
            </p>
            <p className="footer-coords" style={{ margin: 0 }}>39.7548° N  104.9723° W</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .footer-bottom-text — 600 — clamp(10px, 0.9375vw, 18px) — below marquee credits
            </p>
            <p className="footer-bottom-text" style={{ margin: 0 }}>Proudly MFG in CO, USA</p>
          </div>
        </div>
      </section>

      {/* ============ TYPOGRAPHY — CARD META ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Typography — Card Meta</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .card-label — 500 — clamp(10px, 0.625vw, 12px) — category tags
            </p>
            <p className="card-label" style={{ margin: 0 }}>Branding • UI • UX</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .card-title — 500 — clamp(14px, 1.04vw, 20px) — project name
            </p>
            <p className="card-title" style={{ margin: 0 }}>Amount</p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .card-desc — 400 — clamp(11px, 0.73vw, 14px) — project description
            </p>
            <p className="card-desc" style={{ margin: 0 }}>Reimagining digital lending experiences</p>
          </div>
        </div>
      </section>

      {/* ============ RULES ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Rules / Dividers</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>.rule — rgba(255,255,240, 0.2)</p>
            <div className="rule" />
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>.rule-solid — #fffff0</p>
            <div className="rule-solid" />
          </div>
        </div>
      </section>

      {/* ============ COMPONENTS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Components</p>

        {/* Project Pair */}
        <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 16 }}>Project Pair — 50/50 split (.project-pair) — 4:3 images</p>
        <div className="project-pair" style={{ marginBottom: "var(--space-lg)" }}>
          <ProjectCard slug="amount" label="Branding • UI • UX" title="Amount" description="Reimagining digital lending experiences" />
          <ProjectCard slug="grow-therapy" label="Healthcare • UI • UX" title="Grow Therapy" description="Designing care that actually shows up" />
        </div>
      </section>

      {/* ============ SPACING ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Spacing Tokens</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { token: "--site-px", value: "clamp(16px, 1.67vw, 32px)", use: "Horizontal page padding" },
            { token: "--space-xl", value: "clamp(64px, 9vw, 160px)", use: "Major section gaps" },
            { token: "--space-lg", value: "clamp(32px, 4vw, 64px)", use: "Card rows, minor sections" },
            { token: "--space-md", value: "clamp(20px, 2.5vw, 40px)", use: "Content blocks, image gaps" },
            { token: "--space-sm", value: "clamp(12px, 1.5vw, 24px)", use: "Tight elements" },
            { token: "--space-xs", value: "clamp(8px, 0.75vw, 12px)", use: "Minimal gaps" },
            { token: "--radius-card", value: "8px", use: "Card / image border radius" },
          ].map(({ token, value, use }) => (
            <div key={token} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p className="text-body-fg" style={{ margin: 0 }}>var({token})</p>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: "var(--color-muted)", margin: 0 }}>{value} — {use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ BREAKPOINTS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Breakpoints</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { bp: "≤ 768px (Mobile)", changes: "Pair rows stack to 1-col, nav compact" },
          ].map(({ bp, changes }) => (
            <div key={bp} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p className="text-body-fg" style={{ margin: 0 }}>{bp}</p>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: "var(--color-muted)", margin: 0 }}>{changes}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
