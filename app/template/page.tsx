import ProjectCard from "@/components/ProjectCard";

export default function StyleGuidePage() {
  return (
    <main>
      {/* ============ HEADER ============ */}
      <div className="site-container" style={{ paddingTop: "clamp(140px, 12vw, 200px)", paddingBottom: "var(--space-lg)" }}>
        <h1 className="heading-display fade-in" style={{ marginBottom: "var(--space-xs)" }}>
          Style guide
        </h1>
        <p className="text-big fade-in fade-d1" style={{ color: "var(--color-muted)", maxWidth: 560 }}>
          Design system reference &mdash; typography, color, spacing, components &amp; interactive elements.
        </p>
      </div>

      {/* ============================================================ */}
      {/* TYPOGRAPHY — HEADINGS                                        */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Text<br />Styles</p>
          <p className="section-label-text">Section<br />001</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>

          {/* Display */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Display</p>
              <p className="sg-spec">800 &middot; clamp(3.5rem, 12vw, 12rem)</p>
              <p className="sg-spec">.heading-display</p>
            </div>
            <div className="sg-type-sample">
              <p className="heading-display" style={{ margin: 0 }}>Heading</p>
            </div>
          </div>

          <div className="rule" />

          {/* H1 — XL */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">H1 &mdash; XL</p>
              <p className="sg-spec">700 &middot; clamp(2rem, 5vw, 4.5rem)</p>
              <p className="sg-spec">.heading-xl</p>
            </div>
            <div className="sg-type-sample">
              <p className="heading-xl" style={{ margin: 0 }}>Heading H1</p>
            </div>
          </div>

          <div className="rule" />

          {/* H2 — LG */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">H2 &mdash; LG</p>
              <p className="sg-spec">700 &middot; clamp(1.75rem, 4vw, 3.5rem)</p>
              <p className="sg-spec">.heading-lg</p>
            </div>
            <div className="sg-type-sample">
              <p className="heading-lg" style={{ margin: 0 }}>Heading H2</p>
            </div>
          </div>

          <div className="rule" />

          {/* H3 — MD */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">H3 &mdash; MD</p>
              <p className="sg-spec">700 &middot; clamp(1.125rem, 1.5vw, 1.5rem)</p>
              <p className="sg-spec">.heading-md</p>
            </div>
            <div className="sg-type-sample">
              <p className="heading-md" style={{ margin: 0 }}>Heading H3</p>
            </div>
          </div>

          <div className="rule" />

          {/* H4 — SM */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">H4 &mdash; SM</p>
              <p className="sg-spec">700 &middot; clamp(1rem, 1.25vw, 1.25rem)</p>
              <p className="sg-spec">.heading-sm</p>
            </div>
            <div className="sg-type-sample">
              <p className="heading-sm" style={{ margin: 0 }}>Heading H4</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TYPOGRAPHY — BODY                                            */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Body<br />Text</p>
          <p className="section-label-text">Section<br />002</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>

          {/* Pull Quote */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Pull Quote</p>
              <p className="sg-spec">500 &middot; clamp(1.125rem, 2vw, 1.75rem)</p>
              <p className="sg-spec">.pull-quote</p>
            </div>
            <div className="sg-type-sample">
              <p className="pull-quote" style={{ margin: 0 }}>
                I channel this creative energy into producing unique brands that speak in a minimal way.
              </p>
            </div>
          </div>

          <div className="rule" />

          {/* Text Big */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Text Big</p>
              <p className="sg-spec">400 &middot; clamp(0.875rem, 1.25vw, 1.125rem)</p>
              <p className="sg-spec">.text-big</p>
            </div>
            <div className="sg-type-sample">
              <p className="text-big" style={{ margin: 0, color: "var(--color-fg)" }}>
                Experiments, side projects, and things made for fun. This is the larger body style used for intros and descriptions.
              </p>
            </div>
          </div>

          <div className="rule" />

          {/* Text Body */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Text Body</p>
              <p className="sg-spec">400 &middot; clamp(0.8125rem, 1vw, 1rem)</p>
              <p className="sg-spec">.text-body / .text-body-fg</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <p className="text-body-fg" style={{ margin: 0 }}>Body text in foreground color &mdash; used for primary content and values.</p>
              <p className="text-body" style={{ margin: 0 }}>Body text in muted color &mdash; used for secondary content and descriptions.</p>
            </div>
          </div>

          <div className="rule" />

          {/* Intro Body */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Intro Body</p>
              <p className="sg-spec">500 &middot; clamp(14px, 1.25vw, 24px)</p>
              <p className="sg-spec">.intro-body-text</p>
            </div>
            <div className="sg-type-sample">
              <p className="intro-body-text" style={{ margin: 0 }}>
                Studio Schultz is an independent design studio run out of a second bedroom in Denver, CO.
              </p>
            </div>
          </div>

          <div className="rule" />

          {/* Stat Value */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Stat Value</p>
              <p className="sg-spec">700 &middot; clamp(1.75rem, 3.5vw, 3.5rem)</p>
              <p className="sg-spec">.stat-value</p>
            </div>
            <div className="sg-type-sample">
              <p className="stat-value" style={{ margin: 0 }}>40%</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TYPOGRAPHY — LABELS & SMALL                                  */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Labels &amp;<br />Small</p>
          <p className="section-label-text">Section<br />003</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>

          {/* Section Label */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Section Label</p>
              <p className="sg-spec">600 &middot; clamp(10px, 0.9375vw, 18px)</p>
              <p className="sg-spec">.section-label-text</p>
            </div>
            <div className="sg-type-sample">
              <div className="section-label-row">
                <p className="section-label-text" style={{ margin: 0 }}>Quick<br />Introduction</p>
                <p className="section-label-text" style={{ margin: 0 }}>Section<br />001</p>
              </div>
            </div>
          </div>

          <div className="rule" />

          {/* Label (uppercase) */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Label</p>
              <p className="sg-spec">500 &middot; clamp(0.625rem, 0.75vw, 0.75rem)</p>
              <p className="sg-spec">.label / .label-fg</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", gap: "var(--space-lg)" }}>
              <span className="label">Muted label</span>
              <span className="label-fg">Foreground label</span>
            </div>
          </div>

          <div className="rule" />

          {/* Card Meta */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Card Meta</p>
              <p className="sg-spec">.card-label &middot; .card-title &middot; .card-desc</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <p className="card-label" style={{ margin: 0 }}>Branding &bull; UI &bull; UX</p>
              <p className="card-title" style={{ margin: 0 }}>Amount</p>
              <p className="card-desc" style={{ margin: 0 }}>Reimagining digital lending experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* COLORS                                                       */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Colors</p>
          <p className="section-label-text">Section<br />004</p>
        </div>

        <div className="sg-color-grid" style={{ marginTop: "var(--space-lg)" }}>
          {[
            { name: "Off White", var: "--color-fg", hex: "#FFFFF0", fg: "#141414" },
            { name: "Swiss Accent", var: "--color-accent", hex: "#F24A2E", fg: "#FFFFF0" },
            { name: "Smoky Black", var: "--color-bg", hex: "#141414", fg: "#FFFFF0" },
            { name: "Dark Gray", var: "--color-muted", hex: "#888888", fg: "#141414" },
          ].map((c) => (
            <div key={c.name} className="sg-color-card" style={{ background: c.hex, color: c.fg }}>
              <span className="sg-color-name">{c.name}</span>
              <div className="sg-color-info">
                <span>{c.hex}</span>
                <span>var({c.var})</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* BUTTONS                                                      */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Buttons</p>
          <p className="section-label-text">Section<br />005</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>

          {/* Primary */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Primary</p>
              <p className="sg-spec">.btn .btn-primary</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <button className="btn btn-primary btn-lg" type="button">Large Button</button>
              <button className="btn btn-primary" type="button">Default Button</button>
              <button className="btn btn-primary btn-sm" type="button">Small Button</button>
            </div>
          </div>

          <div className="rule" />

          {/* Secondary */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Secondary</p>
              <p className="sg-spec">.btn .btn-secondary</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <button className="btn btn-secondary btn-lg" type="button">Large Button</button>
              <button className="btn btn-secondary" type="button">Default Button</button>
              <button className="btn btn-secondary btn-sm" type="button">Small Button</button>
            </div>
          </div>

          <div className="rule" />

          {/* Ghost */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Ghost</p>
              <p className="sg-spec">.btn .btn-ghost</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "center" }}>
              <button className="btn btn-ghost btn-lg" type="button">Large Button</button>
              <button className="btn btn-ghost" type="button">Default Button</button>
              <button className="btn btn-ghost btn-sm" type="button">Small Button</button>
            </div>
          </div>

          <div className="rule" />

          {/* Disabled States */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Disabled</p>
              <p className="sg-spec">:disabled / aria-disabled</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" }}>
              <span className="btn btn-primary" aria-disabled="true">Primary</span>
              <span className="btn btn-secondary" aria-disabled="true">Secondary</span>
              <span className="btn btn-ghost" aria-disabled="true">Ghost</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INPUTS                                                       */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Inputs</p>
          <p className="section-label-text">Section<br />006</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>

          {/* Text Input */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Text Input</p>
              <p className="sg-spec">.input</p>
            </div>
            <div className="sg-type-sample" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="form-group">
                <label className="label-fg">Name</label>
                <input type="text" className="input" placeholder="Enter your name" />
              </div>
              <div className="form-group">
                <label className="label-fg">Email</label>
                <input type="email" className="input" placeholder="hello@example.com" />
              </div>
            </div>
          </div>

          <div className="rule" />

          {/* Textarea */}
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Textarea</p>
              <p className="sg-spec">.textarea</p>
            </div>
            <div className="sg-type-sample">
              <div className="form-group">
                <label className="label-fg">Message</label>
                <textarea className="textarea" placeholder="Tell us about your project..." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* RULES & DIVIDERS                                             */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Rules &amp;<br />Dividers</p>
          <p className="section-label-text">Section<br />007</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>
          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Rule &mdash; subtle</p>
              <p className="sg-spec">rgba(255,255,240, 0.2)</p>
              <p className="sg-spec">.rule</p>
            </div>
            <div className="sg-type-sample" style={{ paddingTop: 8 }}>
              <div className="rule" />
            </div>
          </div>

          <div className="sg-type-row">
            <div className="sg-type-meta">
              <p className="label">Rule &mdash; solid</p>
              <p className="sg-spec">#FFFFF0</p>
              <p className="sg-spec">.rule-solid</p>
            </div>
            <div className="sg-type-sample" style={{ paddingTop: 8 }}>
              <div className="rule-solid" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SPACING                                                      */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Spacing<br />Tokens</p>
          <p className="section-label-text">Section<br />008</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "var(--space-lg)" }}>
          {[
            { token: "--site-px", value: "clamp(16px, 1.67vw, 32px)", use: "Horizontal page padding" },
            { token: "--space-xl", value: "clamp(64px, 9vw, 160px)", use: "Major section gaps" },
            { token: "--space-lg", value: "clamp(32px, 4vw, 64px)", use: "Card rows, minor sections" },
            { token: "--space-md", value: "clamp(20px, 2.5vw, 40px)", use: "Content blocks, image gaps" },
            { token: "--space-sm", value: "clamp(12px, 1.5vw, 24px)", use: "Tight elements" },
            { token: "--space-xs", value: "clamp(8px, 0.75vw, 12px)", use: "Minimal gaps" },
            { token: "--radius-card", value: "8px", use: "Card / image border radius" },
          ].map(({ token, value, use }, i) => (
            <div key={token}>
              {i > 0 && <div className="rule" />}
              <div className="sg-spacing-row">
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", flex: 1 }}>
                  <span className="sg-token-badge">var({token})</span>
                  <span className="text-body" style={{ margin: 0 }}>{use}</span>
                </div>
                <code className="sg-spec" style={{ margin: 0 }}>{value}</code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* COMPONENTS                                                   */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Components</p>
          <p className="section-label-text">Section<br />009</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)", marginTop: "var(--space-lg)" }}>

          {/* Project Pair */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-sm)" }}>
              <p className="label" style={{ margin: 0 }}>Project Pair &mdash; 50 / 50 split</p>
              <p className="sg-spec" style={{ margin: 0 }}>.project-pair &middot; 4:3 images</p>
            </div>
            <div className="project-pair">
              <ProjectCard slug="amount" label="Branding &bull; UI &bull; UX" title="Amount" description="Reimagining digital lending experiences" />
              <ProjectCard slug="grow-therapy" label="Healthcare &bull; UI &bull; UX" title="Grow Therapy" description="Designing care that actually shows up" />
            </div>
          </div>

          <div className="rule" />

          {/* Stat Card */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "var(--space-sm)" }}>
              <p className="label" style={{ margin: 0 }}>Stat Card &mdash; drag-scrollable row</p>
              <p className="sg-spec" style={{ margin: 0 }}>.stat-card</p>
            </div>
            <div style={{ display: "flex", gap: "var(--space-sm)", overflowX: "auto", paddingBottom: "var(--space-xs)" }}>
              {[
                { stat: "40%", title: "Faster loan origination", body: "Streamlined the digital lending workflow." },
                { stat: "\u2192", title: "Enterprise adoption", body: "Attracted tier-one banking clients." },
                { stat: "3x", title: "User engagement", body: "Threefold increase in daily active usage." },
              ].map((h, i) => (
                <div key={i} className="stat-card" style={{ flex: "0 0 auto" }}>
                  <p className="stat-value">{h.stat}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                    <p className="text-body-fg" style={{ fontWeight: 500, margin: 0 }}>{h.title}</p>
                    <p className="text-body" style={{ margin: 0 }}>{h.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* BREAKPOINTS                                                  */}
      {/* ============================================================ */}
      <section className="site-container" style={{ paddingBottom: "var(--space-xl)" }}>
        <div className="rule-solid" />
        <div className="section-label-row" style={{ paddingTop: "var(--space-xs)" }}>
          <p className="section-label-text">Breakpoints</p>
          <p className="section-label-text">Section<br />010</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "var(--space-lg)" }}>
          {[
            { bp: "\u2264 768px", label: "Mobile", changes: "Grids stack to single column, nav collapses to drawer, hero reduces height" },
            { bp: "\u2264 1024px", label: "Tablet", changes: "3-col grids collapse, intro row stacks vertically, footer columns stack" },
          ].map(({ bp, label, changes }, i) => (
            <div key={bp}>
              {i > 0 && <div className="rule" />}
              <div className="sg-spacing-row">
                <div style={{ display: "flex", alignItems: "center", gap: "var(--space-sm)", flex: 1 }}>
                  <span className="sg-token-badge">{bp}</span>
                  <span className="text-body-fg" style={{ margin: 0, fontWeight: 500 }}>{label}</span>
                </div>
                <span className="text-body" style={{ margin: 0, textAlign: "right", maxWidth: 400 }}>{changes}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
