"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Generic auto-sliding carousel.
 *
 * Renders whatever `children` are passed (one child per slide) and crossfades
 * between them every `interval` ms. Pass `activeIndex`/`onIndexChange` if you
 * need to sync this carousel's position with something else (see
 * ReviewsCarousel, which drives a photo carousel and a quote carousel in
 * lockstep).
 */
export default function Carousel({
  children,
  interval = 3000,
  showDots = false,
  className = "",
  activeIndex,
  onIndexChange,
}) {
  const slides = Array.isArray(children) ? children : [children];
  const [internalIndex, setInternalIndex] = useState(0);
  const isControlled = activeIndex !== undefined;
  const index = isControlled ? activeIndex : internalIndex;
  const timerRef = useRef(null);

  const goTo = (next) => {
    const wrapped = (next + slides.length) % slides.length;
    if (isControlled) {
      onIndexChange?.(wrapped);
    } else {
      setInternalIndex(wrapped);
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || slides.length <= 1) return;

    timerRef.current = setInterval(() => goTo(index + 1), interval);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, interval, slides.length]);

  const pause = () => clearInterval(timerRef.current);
  const resume = () => {
    timerRef.current = setInterval(() => goTo(index + 1), interval);
  };

  return (
    <div
      className={`slideshow ${className}`.trim()}
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <div className="slideshow-track">
        {slides.map((slide, i) => (
          <div key={i} className={`slide${i === index ? " is-active" : ""}`}>
            {slide}
          </div>
        ))}
      </div>

      {showDots && (
        <div className="slide-dots">
          {slides.map((_, i) => (
            <span key={i} className={i === index ? "is-active" : ""}></span>
          ))}
        </div>
      )}
    </div>
  );
}
