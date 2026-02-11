import Link from "next/link";
import Footer from "@/components/Footer";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = {
    title: "Grow Therapy",
    subtitle: "Designing care that\nactually shows up",
    role: "Lead Designer",
    year: "2025",
    scope: "Brand, Web, Systems",
  };

  return (
    <main>
      <div className="site-container">
        {/* Hero */}
        <section style={{ paddingTop: 120, paddingBottom: 24 }}>
          <h1 className="heading-xl fade-in">
            {project.title}
            <br />
            <span className="heading-accent" style={{ display: "block", fontSize: "clamp(1.5rem, 3.5vw, 2.4rem)", marginTop: 4 }}>
              {project.subtitle.split("\n").map((line, i) => (
                <span key={i}>{line}{i === 0 && <br />}</span>
              ))}
            </span>
          </h1>

          {/* Meta */}
          <div className="fade-in fade-d1" style={{ display: "flex", gap: 48, padding: "16px 0", marginTop: 16, marginBottom: 48 }}>
            {[
              { label: "Role", value: project.role },
              { label: "Year", value: project.year },
              { label: "Scope", value: project.scope },
            ].map((meta) => (
              <div key={meta.label}>
                <p className="label" style={{ marginBottom: 2 }}>{meta.label}</p>
                <p className="text-body">{meta.value}</p>
              </div>
            ))}
          </div>
          <div className="divider" />
        </section>

        {/* Hero Image */}
        <section className="fade-in fade-d2" style={{ paddingTop: 48, paddingBottom: 80 }}>
          <div className="img-placeholder ratio-landscape" />
        </section>

        {/* Project Highlights */}
        <section style={{ paddingBottom: 64 }}>
          <div className="fade-in" style={{ marginBottom: 32 }}>
            <h2 className="heading-accent" style={{ fontSize: "1.4rem" }}>Project highlights</h2>
          </div>
          <div className="divider" />
          <div className="grid-4col fade-in fade-d1" style={{ paddingTop: 24 }}>
            {[
              { value: "10%", label: "Metric label" },
              { value: "1", label: "Metric label" },
              { value: "10%", label: "Metric label" },
              { value: "1", label: "Metric label" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="stat-value" style={{ marginBottom: 4 }}>{stat.value}</p>
                <p className="label" style={{ marginBottom: 8 }}>{stat.label}</p>
                <p className="text-small">A brief description of this project highlight and its context.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section style={{ paddingBottom: 80 }}>
          <div className="fade-in" style={{ marginBottom: 24 }}>
            <div className="img-placeholder ratio-landscape" />
          </div>

          <div className="fade-in" style={{ padding: "48px 0" }}>
            <p className="label" style={{ marginBottom: 6 }}>What we did together, and why</p>
            <p className="text-body" style={{ maxWidth: 600 }}>
              A brief description of the work, the approach, and the thinking behind the design decisions made throughout this project.
            </p>
          </div>

          <div className="grid-2col fade-in" style={{ marginBottom: 24 }}>
            <div className="img-placeholder ratio-photo" />
            <div className="img-placeholder ratio-photo" />
          </div>
          <div className="grid-2col fade-in" style={{ marginBottom: 24 }}>
            <div className="img-placeholder ratio-photo" />
            <div className="img-placeholder ratio-photo" />
          </div>

          <div className="fade-in" style={{ padding: "48px 0" }}>
            <p className="label" style={{ marginBottom: 6 }}>What we did together, and why</p>
            <p className="text-body" style={{ maxWidth: 600 }}>
              A brief description of the work, the approach, and the thinking behind the design decisions made throughout this project.
            </p>
          </div>

          <div className="grid-2col fade-in" style={{ marginBottom: 24 }}>
            <div className="img-placeholder ratio-photo" />
            <div className="img-placeholder ratio-photo" />
          </div>
          <div className="fade-in" style={{ marginBottom: 24 }}>
            <div className="img-placeholder ratio-landscape" />
          </div>
          <div className="grid-2col fade-in">
            <div className="img-placeholder ratio-photo" />
            <div className="img-placeholder ratio-photo" />
          </div>
        </section>

        {/* Related Projects */}
        <section style={{ paddingBottom: 80 }}>
          <div className="fade-in" style={{ marginBottom: 40 }}>
            <h2 className="heading-lg">
              Check out<br />
              <span className="heading-accent">this stuff too</span>
            </h2>
          </div>
          <div className="grid-2col fade-in fade-d1">
            {[1, 2].map((n) => (
              <Link key={n} href="/projects/sample" className="block transition-opacity hover:opacity-85">
                <p className="label" style={{ marginBottom: 4 }}>Sample project</p>
                <p className="text-small" style={{ marginBottom: 16 }}>A brief description of this related work.</p>
                <div className="img-placeholder ratio-responsive ratio-responsive-paired" />
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
