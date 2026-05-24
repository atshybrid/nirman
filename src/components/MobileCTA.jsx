import './MobileCTA.css'

export default function MobileCTA() {
  return (
    <div className="mobile-cta">
      <a href="tel:+919876543210" className="mobile-cta__btn mobile-cta__btn--call">
        Call Now
      </a>
      <a href="#contact" className="mobile-cta__btn mobile-cta__btn--book">
        Free Consultation
      </a>
    </div>
  )
}
