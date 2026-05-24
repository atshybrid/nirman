import { certifications } from '../data/content'
import './Certifications.css'

export default function Certifications() {
  return (
    <section className="certs" aria-label="Certifications and trust">
      <div className="container">
        <ul className="certs__list">
          {certifications.map((item, i) => (
            <li key={item} data-reveal style={{ transitionDelay: `${i * 0.06}s` }}>
              <span className="certs__icon">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
