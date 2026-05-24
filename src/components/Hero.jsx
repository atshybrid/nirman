import { heroWords } from '../data/content'
import { useRotatingText } from '../hooks/useRotatingText'
import Logo from './Logo'
import Icon from './Icon'
import './Hero.css'

export default function Hero() {
  const { word, visible } = useRotatingText(heroWords)

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__gradient" />
        <div className="hero__grid" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
      </div>

      <div className="container hero__content">
        <div className="hero__text" data-reveal>
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Construction &amp; Infrastructure Experts
          </div>

          <h1 className="hero__title">
            Building{' '}
            <span className={`hero__title-accent hero__rotate ${visible ? 'hero__rotate--in' : 'hero__rotate--out'}`}>
              {word}
            </span>
          </h1>

          <p className="hero__description">
            MR NIRMAN Infra delivers residential, commercial, and civil projects with quality
            materials, skilled execution, and transparent timelines—trusted across Andhra Pradesh
            and beyond.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get Free Quote
              <Icon name="arrow" size={18} />
            </a>
            <a href="#services" className="btn btn--secondary">
              Our Services
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <Icon name="check" size={18} />
              Licensed &amp; Insured
            </li>
            <li>
              <Icon name="check" size={18} />
              Quality Materials
            </li>
            <li>
              <Icon name="check" size={18} />
              On-Time Delivery
            </li>
          </ul>
        </div>

        <div className="hero__card" data-reveal>
          <div className="hero__logo-wrap">
            <Logo size="xl" />
          </div>
          <div className="hero__card-inner">
            <div className="hero__card-header">
              <span>Project Snapshot</span>
              <span className="hero__card-tag hero__card-tag--live">Active Builds</span>
            </div>
            <div className="hero__card-chart">
              <div className="hero__bar" style={{ '--h': '55%' }} />
              <div className="hero__bar" style={{ '--h': '72%' }} />
              <div className="hero__bar hero__bar--highlight" style={{ '--h': '92%' }} />
              <div className="hero__bar" style={{ '--h': '68%' }} />
              <div className="hero__bar" style={{ '--h': '48%' }} />
            </div>
            <div className="hero__card-stats">
              <div>
                <strong>150+</strong>
                <span>Projects delivered</span>
              </div>
              <div>
                <strong>98%</strong>
                <span>Client satisfaction</span>
              </div>
            </div>
          </div>

          <div className="hero__float hero__float--1">
            <Icon name="building" size={22} />
            <div>
              <strong>Turnkey Builds</strong>
              <span>End-to-end delivery</span>
            </div>
          </div>
          <div className="hero__float hero__float--2">
            <Icon name="shield" size={22} />
            <div>
              <strong>Quality Assured</strong>
              <span>Structured QC</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
