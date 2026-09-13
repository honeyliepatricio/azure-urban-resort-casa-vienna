import PlaceholderImage from "./PlaceholderImage";

export default function RoomsTeaser() {
  return (
    <section className="rooms-teaser">
      <div className="container">
        <div className="teaser-grid">
          <a href="#onebedroom" className="teaser-card one-bed">
            <PlaceholderImage label="1 Bedroom placeholder" variant="v3" />
            <div className="teaser-overlay">
              <span className="teaser-tag">For couples &amp; solo stays</span>
              <h3>1 Bedroom</h3>
              <p className="teaser-meta">Sleeps 2–3 · 32 sqm · City view</p>
              <span className="teaser-cta">View the room →</span>
            </div>
          </a>

          <a href="#twobedroom" className="teaser-card two-bed">
            <PlaceholderImage label="2 Bedroom placeholder" variant="v5" />
            <div className="teaser-overlay">
              <span className="teaser-tag">For families &amp; small groups</span>
              <h3>2 Bedroom</h3>
              <p className="teaser-meta">Sleeps 4–6 · 54 sqm · Balcony</p>
              <span className="teaser-cta">View the room →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
