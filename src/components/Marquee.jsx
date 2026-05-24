import { marqueeItems } from '../data/content'
import './Marquee.css'

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section className="marquee" aria-label="Services highlight">
      <div className="marquee__track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee__item">
            <span className="marquee__dot" />
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
