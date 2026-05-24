import { greenFeatures } from '../data/content'
import Icon from './Icon'
import './GreenTech.css'

const iconMap = {
  sun: 'sun',
  water: 'water',
  leaf: 'leaf',
  smart: 'smart',
}

export default function GreenTech() {
  return (
    <section id="green" className="section section--dark green-tech">
      <div className="container">
        <header className="section__header" data-reveal>
          <span className="section__eyebrow">Future Technology</span>
          <h2 className="section__title">Green living, built for tomorrow</h2>
          <p className="section__subtitle">
            Every MR NIRMAN project integrates sustainability and smart technology—not as
            add-ons, but as the foundation of how we design, build, and manage urban homes.
          </p>
        </header>

        <div className="green-tech__grid">
          {greenFeatures.map((item, i) => (
            <article
              key={item.title}
              className="green-tech__card"
              data-reveal
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="green-tech__icon">
                <Icon name={iconMap[item.icon]} size={28} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="green-tech__banner" data-reveal>
          <div className="green-tech__banner-text">
            <h3>Planning green living future technology</h3>
            <p>
              We are actively developing next-phase features—AI energy optimization, community
              apps, and net-zero roadmaps—for Hyderabad and Bangalore portfolios.
            </p>
          </div>
          <a href="#contact" className="btn btn--primary">
            Join the Waitlist
            <Icon name="arrow" size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
