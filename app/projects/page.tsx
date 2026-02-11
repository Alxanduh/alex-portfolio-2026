import Footer from "@/components/Footer";

const archiveImages = [
  { src: "https://alxandr.us/assets/img/fun/image-fox.gif", alt: "Fox illustration" },
  { src: "https://alxandr.us/assets/img/fun/image-sbs-2013.jpg", alt: "SBS 2013" },
  { src: "https://alxandr.us/assets/img/fun/image-sbs-2014.gif", alt: "SBS 2014" },
  { src: "https://alxandr.us/assets/img/fun/image-welcome.jpg", alt: "Welcome" },
  { src: "https://alxandr.us/assets/img/fun/image-dead-eye.gif", alt: "Dead eye" },
  { src: "https://alxandr.us/assets/img/fun/image-skull.gif", alt: "Skull" },
];

export default function ArchivesPage() {
  return (
    <main>
      <div className="site-container">
        {/* ---- HERO ---- */}
        <section style={{ paddingTop: "var(--space-hero)" }}>
          <h1 className="heading-xl fade-in">
            Bits and pieces<br />
            <span className="heading-accent">from over the years</span>
          </h1>
        </section>

        <div className="divider fade-in fade-d1" style={{ marginTop: "var(--space-sm)" }} />

        {/* ---- MASONRY GRID ---- */}
        <section style={{ paddingTop: "var(--space-lg)" }}>
          <div className="masonry-grid fade-in fade-d2">
            {archiveImages.map((img, i) => (
              <div key={i} className="masonry-item">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    display: "block",
                    borderRadius: "var(--radius-card)",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
