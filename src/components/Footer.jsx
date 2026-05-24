import Logo from './Logo'
import { SITE } from '../config/site'
import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo-link">
              <Logo size="footer" className="logo--footer" />
            </a>
            <p className="footer__tagline">{SITE.tagline}</p>
            <p>
              {SITE.legalName} — urban service apartments, green living, and future-ready
              construction in Hyderabad &amp; Bangalore.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#locations">Hyderabad</a></li>
                <li><a href="#locations">Bangalore</a></li>
                <li><a href="#green">Green Technology</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Service Apartments</a></li>
                <li><a href="#services">Green Living</a></li>
                <li><a href="#services">Construction</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a></li>
                <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {year} {SITE.name} Infra. All rights reserved.</p>
          <p className="footer__disclaimer">
            RERA and local approvals apply per project. Images and features may vary by development.
          </p>
        </div>
      </div>
    </footer>
  )
}
