import PlaceholderImage from "./PlaceholderImage";

export default function RoomsTeaser() {
  return (
    <section className="rooms-teaser">
      <div className="container">
        <div className="teaser-grid">
          <a href="#onebedroom" className="teaser-card one-bed">
            <PlaceholderImage label="1 Bedroom placeholder" variant="v3" />
            <div className="teaser-overlay">
              <span className="teaser-tag">For groups up to 4</span>
              <h3>1 Bedroom</h3>
              <p className="teaser-meta">Sleeps 4 · City view</p>
              <span className="teaser-cta">View the room →</span>
            </div>
          </a>

          <a href="#twobedroom" className="teaser-card two-bed">
            <PlaceholderImage label="2 Bedroom placeholder" variant="v5" />
            <div className="teaser-overlay">
              <span className="teaser-tag">2 units available · Beachview</span>
              <h3>2 Bedroom</h3>
              <p className="teaser-meta">Sleeps 4–6 · Beachview</p>
              <span className="teaser-cta">View the room →</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
