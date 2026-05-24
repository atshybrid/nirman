import { heroWords } from '../data/content'
import { SITE } from '../config/site'
import { useRotatingText } from '../hooks/useRotatingText'
import Logo from './Logo'
import Icon from './Icon'
import './Hero.css'

export default function Hero() {
  const { word, visible } = useRotatingText(heroWords)

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__mesh" />
        <div className="hero__grid" />
        <div className="hero__glow hero__glow--gold" />
        <div className="hero__glow hero__glow--green" />
      </div>

      <div className="container hero__layout">
        <div className="hero__content" data-reveal>
          <div className="hero__cities">
            {SITE.cities.map((city) => (
              <span key={city} className="hero__city-pill">
                <Icon name="location" size={14} />
                {city}
              </span>
            ))}
          </div>

          <p className="hero__tagline">{SITE.tagline}</p>

          <h1 className="hero__title">
            Urban service apartments &amp;{' '}
            <span className={`hero__accent ${visible ? 'hero__accent--in' : 'hero__accent--out'}`}>
              {word}
            </span>
          </h1>

          <p className="hero__desc">
            MR NIRMAN builds and manages future-ready homes in Hyderabad and Bangalore—combining
            premium construction, green living design, and smart technology for modern India.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Book a Site Visit
              <Icon name="arrow" size={18} />
            </a>
            <a href="#green" className="btn btn--green">
              Green Living Tech
            </a>
          </div>

          <div className="hero__features">
            <div className="hero__feature">
              <span className="hero__feature-icon">🌿</span>
              <div>
                <strong>Green Living</strong>
                <span>Eco-first design</span>
              </div>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-icon">🏢</span>
              <div>
                <strong>Service Apartments</strong>
                <span>Managed urban stays</span>
              </div>
            </div>
            <div className="hero__feature">
              <span className="hero__feature-icon">⚡</span>
              <div>
                <strong>Smart Technology</strong>
                <span>Future-ready homes</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="hero__logo-card">
            <Logo size="hero" />
          </div>
          <div className="hero__card">
            <div className="hero__card-top">
              <span>Live Portfolio</span>
              <span className="hero__live">● Planning 2025–26</span>
            </div>
            <ul className="hero__card-list">
              <li>
                <strong>Hyderabad</strong>
                <span>Urban service apartments</span>
              </li>
              <li>
                <strong>Bangalore</strong>
                <span>Green smart residences</span>
              </li>
              <li>
                <strong>Technology</strong>
                <span>IoT · Solar · EV-ready</span>
              </li>
            </ul>
            <a href="#projects" className="hero__card-link">
              View projects →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
