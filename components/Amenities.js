import Carousel from "./Carousel";
import PlaceholderImage from "./PlaceholderImage";

const AMENITY_PHOTOS = [
  { label: "Amenity photo 1 — pool", variant: "" },
  { label: "Amenity photo 2 — kitchen", variant: "v2" },
  { label: "Amenity photo 3 — lounge", variant: "v3" },
  { label: "Amenity photo 4 — balcony", variant: "v4" },
];

const AMENITIES = [
  "Rooftop infinity pool",
  "Full kitchen & dining",
  "High-speed wifi",
  "Private parking slot",
  "Smart TV & streaming",
  "24/7 security & front desk",
];

export default function Amenities() {
  return (
    <section className="amenities" id="amenities">
      <div className="container">
        <div className="amenities-grid">
          <Carousel interval={3000} showDots className="arch-frame">
            {AMENITY_PHOTOS.map((photo) => (
              <PlaceholderImage
                key={photo.label}
                label={photo.label}
                variant={photo.variant}
              />
            ))}
          </Carousel>

          <div>
            <div className="section-heading">
              <span className="kicker">Amenities</span>
              <h2>Everything the stay needs, nothing it doesn&apos;t</h2>
              <div className="rule"></div>
              <p>
                A short walk from every essential, and a shorter walk from
                the pool.
              </p>
            </div>
            <ul className="amenity-list">
              {AMENITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
