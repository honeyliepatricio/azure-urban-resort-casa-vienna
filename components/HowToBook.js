const STEPS = [
  {
    num: "01",
    title: "Pick your dates",
    body: "Check the room you'd like and choose your check-in and check-out dates.",
  },
  {
    num: "02",
    title: "Send a message",
    body: "Message us through any channel below with your dates and guest count.",
  },
  {
    num: "03",
    title: "Confirm & pay",
    body: "We'll confirm availability and send payment details to lock in your stay.",
  },
];

export default function HowToBook() {
  return (
    <section className="how-to-book" id="howtobook">
      <div className="container">
        <div className="section-heading">
          <span className="kicker">How to book</span>
          <h2>Three steps to your stay</h2>
          <div className="rule"></div>
        </div>

        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.num}>
              <span className="step-num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>

        <div className="book-contact">
          <div className="contact-item">
            <span>Message us</span>
            <a href="#">facebook.com/azureurbanresort</a>
          </div>
          <div className="contact-item">
            <span>Book on Airbnb</span>
            <a href="#">airbnb.com/casavienna</a>
          </div>
          <div className="contact-item">
            <span>Call / text</span>
            <a href="tel:+63000000000">+63 000 000 0000</a>
          </div>
          <div className="contact-item">
            <span>Email</span>
            <a href="mailto:stay@casavienna.example">
              stay@casavienna.example
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
