import Link from "next/link";
import PlaceholderImage from "./PlaceholderImage";

const PREVIEW_PHOTOS = [
  { label: "Gallery preview 1", variant: "" },
  { label: "Gallery preview 2", variant: "v2" },
  { label: "Gallery preview 3", variant: "v3" },
  { label: "Gallery preview 4", variant: "v4" },
];

export default function GalleryPreview() {
  return (
    <section className="gallery-preview">
      <div className="container">
        <div className="section-heading">
          <span className="kicker">Gallery</span>
          <h2>A look around Casa Vienna</h2>
          <div className="rule"></div>
        </div>

        <div className="gallery-preview-grid">
          {PREVIEW_PHOTOS.map((photo) => (
            <PlaceholderImage
              key={photo.label}
              label={photo.label}
              variant={photo.variant}
            />
          ))}
        </div>

        <div className="gallery-preview-footer">
          <Link href="/gallery" className="btn btn-brass">
            View more
          </Link>
        </div>
      </div>
    </section>
  );
}
