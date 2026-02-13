import Footer from "@/components/Footer";

const archiveImages = [
  { src: "https://alxandr.us/assets/img/fun/image-fox.gif", alt: "Fox illustration" },
  { src: "https://alxandr.us/assets/img/fun/image-sbs-2013.jpg", alt: "SBS 2013" },
  { src: "https://alxandr.us/assets/img/fun/image-sbs-2014.gif", alt: "SBS 2014" },
  { src: "https://alxandr.us/assets/img/fun/image-welcome.jpg", alt: "Welcome" },
  { src: "https://alxandr.us/assets/img/fun/image-dead-eye.gif", alt: "Dead Eye" },
  { src: "https://alxandr.us/assets/img/fun/image-skull.gif", alt: "Skull" },
];

export default function Archive() {
  return (
    <main>
      <div className="site-container">
        <section style={{ paddingTop: "clamp(120px, 10vw, 180px)" }}>
          <h1 className="heading-display fade-in">Archive</h1>
          <p className="text-big fade-in fade-d1" style={{ maxWidth: 640, marginTop: "var(--space-xs)" }}>
            Experiments, side projects, and things made for fun.
          </p>
        </section>

        <div className="rule-solid fade-in fade-d2" style={{ marginTop: "var(--space-md)" }} />

        <section style={{ paddingTop: "var(--space-lg)" }}>
          <div className="section-label-row">
            <p className="section-label-text">All Work</p>
            <p className="section-label-text">Section<br />001</p>
          </div>
          <div className="masonry-grid fade-in fade-d2">
            {archiveImages.map((img, i) => (
              <div key={i} className="masonry-item">
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
