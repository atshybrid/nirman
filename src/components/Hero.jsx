import { heroWords } from '../data/content'
import { useRotatingText } from '../hooks/useRotatingText'
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
            Chartered Accountant · Tax Experts
          </div>

          <h1 className="hero__title">
            Smart tax solutions for{' '}
            <span className={`hero__title-accent hero__rotate ${visible ? 'hero__rotate--in' : 'hero__rotate--out'}`}>
              {word}
            </span>
          </h1>

          <p className="hero__description">
            MR Tax delivers end-to-end tax consultation, compliance, and advisory—led by a
            qualified Chartered Accountant. Trusted by individuals, startups, and enterprises
            across India.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">
              Get Free Consultation
              <Icon name="arrow" size={18} />
            </a>
            <a href="#calculator" className="btn btn--secondary">
              Try Tax Calculator
            </a>
          </div>

          <ul className="hero__trust">
            <li>
              <Icon name="check" size={18} />
              ICAI Registered CA
            </li>
            <li>
              <Icon name="check" size={18} />
              100% Confidential
            </li>
            <li>
              <Icon name="check" size={18} />
              Pan-India Service
            </li>
          </ul>
        </div>

        <div className="hero__card" data-reveal>
          <div className="hero__card-inner">
            <div className="hero__card-header">
              <span>Tax Savings Snapshot</span>
              <span className="hero__card-tag hero__card-tag--live">Live FY 25–26</span>
            </div>
            <div className="hero__card-chart">
              <div className="hero__bar" style={{ '--h': '45%' }} />
              <div className="hero__bar" style={{ '--h': '65%' }} />
              <div className="hero__bar hero__bar--highlight" style={{ '--h': '88%' }} />
              <div className="hero__bar" style={{ '--h': '72%' }} />
              <div className="hero__bar" style={{ '--h': '55%' }} />
            </div>
            <div className="hero__card-stats">
              <div>
                <strong>₹4.2L+</strong>
                <span>Avg. client savings*</span>
              </div>
              <div>
                <strong>100%</strong>
                <span>On-time filing</span>
              </div>
            </div>
            <p className="hero__card-note">*Illustrative; results vary by profile</p>
          </div>

          <div className="hero__float hero__float--1">
            <Icon name="shield" size={22} />
            <div>
              <strong>Audit Ready</strong>
              <span>Full compliance</span>
            </div>
          </div>
          <div className="hero__float hero__float--2">
            <Icon name="chart" size={22} />
            <div>
              <strong>Tax Optimized</strong>
              <span>Strategic planning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
