import Icon from './Icon'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner" data-reveal>
        <div className="cta-banner__content">
          <h2>Ready to file with confidence?</h2>
          <p>
            Join 2,500+ clients who trust MR Tax for accurate returns, proactive planning, and
            year-round CA support.
          </p>
        </div>
        <div className="cta-banner__actions">
          <a href="#contact" className="btn btn--primary">
            Book Free Consultation
            <Icon name="arrow" size={18} />
          </a>
          <a href="tel:+919876543210" className="btn btn--outline cta-banner__call">
            <Icon name="phone" size={18} />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
