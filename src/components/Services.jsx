import { services } from '../data/content'
import Icon from './Icon'
import './Services.css'

export default function Services() {
  return (
    <section id="services" className="section section--alt">
      <div className="container">
        <header className="section__header" data-reveal>
          <span className="section__eyebrow">Our Services</span>
          <h2 className="section__title">Complete construction solutions under one roof</h2>
          <p className="section__subtitle">
            From homes to commercial complexes and civil works—every project is managed with
            skilled teams, quality materials, and transparent communication.
          </p>
        </header>

        <div className="services__grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="services__card"
              data-reveal
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="services__icon">
                <Icon name={service.icon} size={26} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="services__link">
                Learn more
                <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
