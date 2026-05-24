import Icon from './Icon'
import { SITE } from '../config/site'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner" data-reveal>
        <div className="cta-banner__content">
          <p className="cta-banner__eyebrow">{SITE.tagline}</p>
          <h2>Your green urban home awaits in Hyderabad or Bangalore</h2>
          <p>
            Service apartments, smart technology, and sustainable design—built by MR NIRMAN for
            the way India lives tomorrow.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a href="#contact" className="btn btn--primary">
            Book Apartment Visit
            <Icon name="arrow" size={18} />
          </a>
          <a href={`tel:${SITE.phoneTel}`} className="btn btn--outline cta-banner__call">
            <Icon name="phone" size={18} />
            Call {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
