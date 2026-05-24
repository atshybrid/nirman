import Logo from './Logo'
import Icon from './Icon'
import { SITE } from '../config/site'
import './About.css'

const highlights = [
  'Urban service apartments in Hyderabad & Bangalore',
  'Green living & future technology in every master plan',
  'Turnkey construction with transparent milestones',
  'Managed stays for corporates, families & investors',
]

export default function About() {
  return (
    <section id="about" className="section section--alt">
      <div className="container about">
        <div className="about__visual" data-reveal>
          <div className="about__image-wrap">
            <div className="about__logo-card">
              <Logo size="lg" />
              <p className="about__logo-tagline">{SITE.tagline}</p>
            </div>
            <div className="about__experience">
              <strong>12+</strong>
              <span>Years building futures</span>
            </div>
          </div>
        </div>

        <div className="about__content" data-reveal>
          <span className="section__eyebrow">About {SITE.name}</span>
          <h2 className="section__title">
            Construction company shaping urban India&apos;s next chapter
          </h2>
          <p className="about__lead">
            {SITE.legalName} is not a consultancy—we are builders, developers, and operators of
            urban service apartments and green living communities designed for Hyderabad and
            Bangalore.
          </p>
          <p className="about__text">
            We combine premium construction quality with eco-conscious design and smart-home
            technology, so residents and investors benefit from homes that are comfortable today
            and ready for tomorrow.
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
            Schedule a Visit
          </a>
        </div>
      </div>
    </section>
  )
}
