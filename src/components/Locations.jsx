import { locations } from '../data/content'
import Icon from './Icon'
import './Locations.css'

export default function Locations() {
  return (
    <section id="locations" className="section section--cream">
      <div className="container">
        <header className="section__header" data-reveal>
          <span className="section__eyebrow">Our Presence</span>
          <h2 className="section__title">Hyderabad &amp; Bangalore</h2>
          <p className="section__subtitle">
            Urban service apartments and green living developments in India&apos;s fastest-growing
            metros—where demand, connectivity, and quality of life converge.
          </p>
        </header>

        <div className="locations__grid">
          {locations.map((loc, i) => (
            <article
              key={loc.city}
              className="locations__card"
              data-reveal
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="locations__card-head">
                <Icon name="location" size={28} />
                <span className="locations__status">{loc.status}</span>
              </div>
              <h3>{loc.city}</h3>
              <p className="locations__region">{loc.region}</p>
              <p className="locations__desc">{loc.description}</p>
              <ul className="locations__highlights">
                {loc.highlights.map((h) => (
                  <li key={h}>
                    <Icon name="check" size={16} />
                    {h}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="locations__cta">
                Enquire in {loc.city}
                <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
