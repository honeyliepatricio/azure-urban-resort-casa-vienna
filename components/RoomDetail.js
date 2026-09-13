import PlaceholderImage from "./PlaceholderImage";

export default function RoomDetail({
  id,
  alt = false,
  title,
  photos,
  specs,
  tags,
  description,
}) {
  return (
    <section className={`room-detail${alt ? " alt" : ""}`} id={id}>
      <div className="container">
        <div className="room-head">
          <div>
            <span className="kicker">Unit type</span>
            <h2>{title}</h2>
          </div>
          <a href="#howtobook" className="btn btn-solid">
            Book this room
          </a>
        </div>

        <div className="room-layout">
          <div className="room-strip">
            {photos.map((photo) => (
              <PlaceholderImage
                key={photo.label}
                label={photo.label}
                variant={photo.variant}
              />
            ))}
          </div>

          <div>
            <div className="room-specs">
              {specs.map((spec) => (
                <div key={spec.label}>
                  <span className="spec-label">{spec.label}</span>
                  <span className="spec-value">{spec.value}</span>
                </div>
              ))}
            </div>

            <div className="room-tags">
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <p style={{ color: "var(--ink-soft)", maxWidth: "46ch" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
