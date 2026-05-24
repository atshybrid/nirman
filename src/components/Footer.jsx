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
            <p>
              {SITE.legalName} delivers trusted construction, infrastructure, and turnkey building
              solutions with quality craftsmanship and transparent project management.
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
                <li><a href="#services">Residential</a></li>
                <li><a href="#services">Commercial</a></li>
                <li><a href="#services">Infrastructure</a></li>
                <li><a href="#services">Renovation</a></li>
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
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
            Project timelines and costs vary by scope. Contact us for site-specific quotations.
          </p>
        </div>
      </div>
    </footer>
  )
}
