import Link from "next/link";
import GalleryGrid from "../../components/GalleryGrid";

export const metadata = {
  title: "Gallery — Casa Vienna, Azure Urban Resort",
  description: "Full photo gallery for Casa Vienna at Azure Urban Resort.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="gallery-hero">
        <div className="container">
          <Link href="/#home" className="back-link">
            ← Back to home
          </Link>
          <div className="section-heading" style={{ marginBottom: 0 }}>
            <span className="kicker">Gallery</span>
            <h2>A full look around Casa Vienna</h2>
            <div className="rule"></div>
            <p>
              Placeholder photos for now — real photography will replace
              every tile below.
            </p>
          </div>
        </div>
      </section>

      <GalleryGrid />
    </>
  );
}
