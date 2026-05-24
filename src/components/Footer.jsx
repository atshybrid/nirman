import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo-link">
              <span className="footer__logo">MR</span>
              <span>
                <strong>MR Tax</strong>
                <small>Chartered Tax Consultation</small>
              </span>
            </a>
            <p>
              Professional tax filing, GST, and advisory services led by a qualified Chartered
              Accountant. Your compliance partner for the long term.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#process">Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Income Tax</a></li>
                <li><a href="#services">GST & Business</a></li>
                <li><a href="#services">Tax Planning</a></li>
                <li><a href="#services">Audit Support</a></li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <ul>
                <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                <li><a href="mailto:hello@mrtax.in">hello@mrtax.in</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} MR Tax. All rights reserved.</p>
          <p className="footer__disclaimer">
            Information on this site is general in nature and not legal or tax advice. Consult us
            for guidance specific to your case.
          </p>
        </div>
      </div>
    </footer>
  )
}
