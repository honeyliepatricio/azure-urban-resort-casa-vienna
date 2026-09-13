import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/#home" className="brand">
            <span className="brand-name">Casa Vienna</span>
            <span className="brand-sub">AZURE URBAN RESORT</span>
          </Link>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <ul>
                <li><Link href="/#onebedroom">1 Bedroom</Link></li>
                <li><Link href="/#twobedroom">2 Bedroom</Link></li>
                <li><Link href="/gallery">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h4>Book</h4>
              <ul>
                <li><Link href="/#howtobook">How to book</Link></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Airbnb</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Casa Vienna — Azure Urban Resort.</span>
          <span>Built for weekend escapes.</span>
        </div>
      </div>
    </footer>
  );
}
