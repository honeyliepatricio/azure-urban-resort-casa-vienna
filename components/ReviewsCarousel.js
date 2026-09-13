"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import PlaceholderImage from "./PlaceholderImage";

const REVIEWS = [
  {
    photoLabel: "Guest photo 1",
    variant: "",
    quote:
      "The unit was spotless and the pool view at sunset made the whole trip worth it.",
    author: "Maria S.",
  },
  {
    photoLabel: "Guest photo 2",
    variant: "v2",
    quote:
      "Easy check-in, quiet building, and the kitchen had everything we needed for the weekend.",
    author: "Joshua T.",
  },
  {
    photoLabel: "Guest photo 3",
    variant: "v4",
    quote:
      "Perfect for our family of five — the second bedroom and balcony made it feel like home.",
    author: "The Reyes Family",
  },
];

export default function ReviewsCarousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="review-slideshow">
      <Carousel
        interval={3000}
        className="review-photo"
        activeIndex={index}
        onIndexChange={setIndex}
      >
        {REVIEWS.map((review) => (
          <PlaceholderImage
            key={review.author}
            label={review.photoLabel}
            variant={review.variant}
          />
        ))}
      </Carousel>

      <Carousel
        interval={3000}
        className="review-slide-wrap"
        activeIndex={index}
        onIndexChange={setIndex}
      >
        {REVIEWS.map((review) => (
          <div className="review-slide" key={review.author}>
            <span className="quote-mark">&ldquo;</span>
            <blockquote>{review.quote}</blockquote>
            <p className="review-author">{review.author}</p>
            <p className="stars">★★★★★</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
