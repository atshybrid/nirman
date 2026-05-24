import { SITE } from '../config/site'
import './MobileCTA.css'

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <a href={`tel:${SITE.phoneTel}`} className="mobile-cta__btn mobile-cta__btn--call">
        Call Now
      </a>
      <a href="#contact" className="mobile-cta__btn mobile-cta__btn--book">
        Book Apartment
      </a>
    </div>
  )
}
