import ReviewsCarousel from "./ReviewsCarousel";

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="section-heading">
          <span className="kicker">Guest reviews</span>
          <h2>What past guests have said</h2>
          <div className="rule"></div>
        </div>

        <ReviewsCarousel />
      </div>
    </section>
  );
}
