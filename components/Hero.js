export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-copy">
        <span className="kicker">Casa Vienna</span>
        <h1>
          A quiet <em>azure</em>
          <br />
          escape in the city
        </h1>
        <p className="lede">
          A 1 Bedroom city-view unit for up to 4 guests, plus two 2 Bedroom
          beachview units at Azure Urban Resort Residences — built for
          weekend resets and slow mornings, minutes from the city and the
          shore.
        </p>
        <div className="hero-actions">
          <a href="#onebedroom" className="btn btn-solid">
            Explore the rooms
          </a>
          <a href="#howtobook" className="btn btn-outline">
            How to book
          </a>
        </div>
      </div>
      <div className="hero-figure">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="/videos/azure-wave-pool.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
