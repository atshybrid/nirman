import Icon from './Icon'
import { SITE } from '../config/site'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner" data-reveal>
        <div className="cta-banner__content">
          <h2>Ready to build with confidence?</h2>
          <p>
            Partner with {SITE.name} for quality construction, on-time delivery, and transparent
            project management from foundation to handover.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a href="#contact" className="btn btn--primary">
            Request a Quote
            <Icon name="arrow" size={18} />
          </a>
          <a href={`tel:${SITE.phoneTel}`} className="btn btn--outline cta-banner__call">
            <Icon name="phone" size={18} />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
