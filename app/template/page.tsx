import ProjectCard from "@/components/ProjectCard";

export default function StyleGuidePage() {
  return (
    <main>
      {/* ============ HEADER ============ */}
      <div className="site-container" style={{ paddingTop: "clamp(140px, 12vw, 200px)", paddingBottom: "var(--space-xl)" }}>
        <h1 className="heading-display" style={{ marginBottom: "var(--space-xs)" }}>Style Guide</h1>
        <p className="text-big" style={{ color: "var(--color-muted)" }}>
          Design system reference — typography, color, spacing &amp; components
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

      {/* ============ HEADINGS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Headings — BDO Grotesk</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          {[
            { cls: "heading-display", label: ".heading-display — 800 — clamp(3.5rem, 12vw, 12rem)" },
            { cls: "heading-xl", label: ".heading-xl — 700 — clamp(2rem, 5vw, 4.5rem)" },
            { cls: "heading-lg", label: ".heading-lg — 700 — clamp(1.75rem, 4vw, 3.5rem)" },
            { cls: "heading-md", label: ".heading-md — 700 — clamp(1.125rem, 1.5vw, 1.5rem)" },
            { cls: "heading-sm", label: ".heading-sm — 700 — clamp(1rem, 1.25vw, 1.25rem)" },
          ].map((h) => (
            <div key={h.cls}>
              <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>{h.label}</p>
              <p className={h.cls} style={{ margin: 0 }}>The quick brown fox</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ DENTON ACCENT ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Accent Font — Denton Light Italic</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-md)" }}>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              Denton used for accent / decorative text
            </p>
            <p style={{
              fontFamily: "Denton, serif",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(2rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              color: "var(--color-muted)",
              margin: 0,
            }}>
              Digital experiences
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>
              .stat-value — 700 — clamp(1.75rem, 3.5vw, 3.5rem)
            </p>
            <p className="stat-value" style={{ margin: 0 }}>10%</p>
          </div>
        </div>
      </section>

      {/* ============ BODY TEXT ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Body Text — BDO Grotesk</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          {[
            { cls: "pull-quote", label: ".pull-quote — 500 — clamp(1.125rem, 2vw, 1.75rem)", sample: "Crafting meaningful digital experiences through design" },
            { cls: "text-big", label: ".text-big — 400 — clamp(0.875rem, 1.25vw, 1.125rem)", sample: "Intro body text, bio, stat titles" },
            { cls: "text-body-fg", label: ".text-body-fg — 400 — clamp(0.8125rem, 1vw, 1rem) — foreground", sample: "Body text in foreground color for primary content" },
            { cls: "text-body", label: ".text-body — 400 — clamp(0.8125rem, 1vw, 1rem) — muted", sample: "Body text in muted color for descriptions" },
          ].map((t) => (
            <div key={t.cls}>
              <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>{t.label}</p>
              <p className={t.cls} style={{ margin: 0 }}>{t.sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ LABELS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Labels</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          {[
            { cls: "label", label: ".label — 500 — uppercase — muted", sample: "Section Label" },
            { cls: "label-fg", label: ".label-fg — 500 — uppercase — foreground", sample: "Section Label" },
            { cls: "section-label-text", label: ".section-label-text — 600 — clamp(10px, 0.9375vw, 18px)", sample: "Quick Introduction" },
            { cls: "card-label", label: ".card-label — 500 — muted", sample: "Branding • UI • UX" },
          ].map((l) => (
            <div key={l.cls}>
              <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 8 }}>{l.label}</p>
              <p className={l.cls} style={{ margin: 0 }}>{l.sample}</p>
            </div>
          ))}
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

        {/* Project Cards — Row A (7fr / 5fr) */}
        <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 16 }}>Project Card — Row A: asymmetric 7fr / 5fr (.project-row-a) — all 16:9</p>
        <div className="project-row-a" style={{ marginBottom: "var(--space-lg)" }}>
          <ProjectCard slug="amount" label="Branding • UI • UX" title="Amount" description="Reimagining digital lending experiences" />
          <ProjectCard slug="grow-therapy" label="Healthcare • UI • UX" title="Grow Therapy" description="Designing care that actually shows up" />
        </div>

        {/* Project Cards — Row B (5fr / 7fr) */}
        <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 16 }}>Project Card — Row B: asymmetric 5fr / 7fr (.project-row-b) — all 16:9</p>
        <div className="project-row-b" style={{ marginBottom: "var(--space-lg)" }}>
          <ProjectCard slug="braintree" label="Fintech • Motion" title="Braintree" description="Code as art at a payments platform" />
          <ProjectCard slug="amount" label="Branding • UI • UX" title="Amount" description="Reimagining digital lending experiences" />
        </div>

        {/* Project Card — Full width (odd/solo) */}
        <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 16 }}>Project Card — full width for odd/last project (.project-row-wide) — 16:9</p>
        <div className="project-row-wide" style={{ marginBottom: "var(--space-lg)" }}>
          <ProjectCard slug="braintree" label="UI • UX • Motion" title="Braintree" description="Code as art at a leading online payments platform" />
        </div>

        {/* Stat Cards */}
        <p style={{ fontSize: 12, color: "var(--color-muted)", marginBottom: 16 }}>Stat Cards (.stat-card)</p>
        <div style={{ display: "flex", gap: "var(--space-sm)", marginBottom: "var(--space-lg)" }}>
          <div className="stat-card">
            <p className="stat-value" style={{ margin: 0 }}>10%</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
              <p className="text-big" style={{ margin: 0 }}>Booking completion</p>
              <p className="text-body" style={{ margin: 0 }}>Stat card description text goes here</p>
            </div>
          </div>
          <div className="stat-card">
            <p className="stat-value" style={{ margin: 0 }}>3x</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
              <p className="text-big" style={{ margin: 0 }}>Provider match rate</p>
              <p className="text-body" style={{ margin: 0 }}>Another stat card description</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMAGE RATIOS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Image Placeholders &amp; Aspect Ratios</p>
        <div style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
          {[
            { cls: "ratio-landscape", label: "16:9 Landscape" },
            { cls: "ratio-square", label: "1:1 Square" },
            { cls: "ratio-portrait", label: "4:5 Portrait" },
          ].map((r) => (
            <div key={r.cls} style={{ width: 200 }}>
              <div className={`img-placeholder ${r.cls}`} style={{ marginBottom: 8 }} />
              <p style={{ fontSize: 12, color: "var(--color-muted)", margin: 0 }}>.{r.cls} — {r.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============ GRIDS ============ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule" style={{ marginBottom: "var(--space-md)" }} />
        <p className="label" style={{ marginBottom: "var(--space-sm)" }}>Grid Variants</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { cls: ".project-row-a", gap: "clamp(16px, 1.67vw, 32px)", use: "Home — asymmetric 7fr / 5fr" },
            { cls: ".project-row-b", gap: "clamp(16px, 1.67vw, 32px)", use: "Home — asymmetric 5fr / 7fr" },
            { cls: ".project-row-wide", gap: "—", use: "Home — full-width solo card" },
            { cls: ".grid-2col", gap: "clamp(16px, 2.5vw, 48px)", use: "Project detail — 2-up images" },
            { cls: ".grid-3col", gap: "clamp(16px, 2.5vw, 48px)", use: "About — focus columns" },
            { cls: ".grid-4col", gap: "clamp(8px, 1.5vw, 24px)", use: "About — photo grid" },
          ].map(({ cls, gap, use }) => (
            <div key={cls} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
              <p className="text-body-fg" style={{ margin: 0 }}>{cls}</p>
              <p style={{ fontFamily: "monospace", fontSize: 13, color: "var(--color-muted)", margin: 0 }}>{gap} — {use}</p>
            </div>
          ))}
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
            { bp: "≤ 1024px (Tablet)", changes: "3-col → 1-col, intro stacks, footer stacks" },
            { bp: "≤ 768px (Mobile)", changes: "2-col → 1-col, nav compact, card rows stack, masonry → 2-col" },
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
