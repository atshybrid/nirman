import Logo from './Logo'
import Icon from './Icon'
import { SITE } from '../config/site'
import './About.css'

const highlights = [
  'Experienced civil and construction teams',
  'Transparent BOQ and milestone-based billing',
  'Quality materials from trusted suppliers',
  'Dedicated project manager on every site',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__visual" data-reveal>
          <div className="about__image-wrap">
            <div className="about__logo-card">
              <Logo size="lg" />
            </div>
            <div className="about__experience">
              <strong>12+</strong>
              <span>Years building trust</span>
            </div>
          </div>
        </div>

        <div className="about__content" data-reveal>
          <span className="section__eyebrow">About {SITE.name}</span>
          <h2 className="section__title">Your partner for construction that lasts</h2>
          <p className="about__lead">
            {SITE.legalName} was built on a commitment to honest workmanship, clear communication,
            and projects delivered on time and within agreed scope.
          </p>
          <p className="about__text">
            From dream homes to commercial complexes and infrastructure works, we bring planning
            discipline, skilled labour, and site supervision so you can focus on your vision while
            we handle the build.
          </p>

          <ul className="about__list">
            {highlights.map((item) => (
              <li key={item}>
                <Icon name="check" size={20} />
                {item}
              </li>
            ))}
          </ul>

          <a href="#contact" className="btn btn--primary">
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
