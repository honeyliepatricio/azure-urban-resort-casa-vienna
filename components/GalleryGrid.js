"use client";

import { useState } from "react";
import PlaceholderImage from "./PlaceholderImage";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "amenities", label: "Amenities" },
  { key: "onebed", label: "1 Bedroom" },
  { key: "twobed", label: "2 Bedroom" },
];

const PHOTOS = [
  { cat: "amenities", label: "Pool", variant: "" },
  { cat: "onebed", label: "1BR living area", variant: "v3" },
  { cat: "twobed", label: "2BR living area", variant: "v5" },
  { cat: "amenities", label: "Kitchen", variant: "v2" },
  { cat: "onebed", label: "1BR bedroom", variant: "" },
  { cat: "twobed", label: "2BR balcony", variant: "v4" },
  { cat: "amenities", label: "Lounge", variant: "v4" },
  { cat: "onebed", label: "1BR bathroom", variant: "v2" },
  { cat: "twobed", label: "2BR bedroom two", variant: "v3" },
  { cat: "amenities", label: "Building exterior", variant: "v5" },
  { cat: "onebed", label: "1BR view", variant: "v5" },
  { cat: "twobed", label: "2BR dining", variant: "" },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("all");
  const visible =
    filter === "all" ? PHOTOS : PHOTOS.filter((p) => p.cat === filter);

  return (
    <>
      <div className="container">
        <div className="gallery-filters" role="tablist" aria-label="Filter gallery">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={filter === f.key ? "is-active" : ""}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <section className="full-gallery">
        <div className="container">
          <div className="full-gallery-grid">
            {visible.map((photo, i) => (
              <figure key={`${photo.label}-${i}`}>
                <PlaceholderImage label={photo.label} variant={photo.variant} />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
