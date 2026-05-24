import Icon from './Icon'
import './About.css'

const highlights = [
  'Member of the Institute of Chartered Accountants of India (ICAI)',
  'Personalized strategy—not one-size-fits-all templates',
  'Digital-first workflow with secure document handling',
  'Dedicated support through notices, assessments, and appeals',
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about__visual" data-reveal>
          <div className="about__image-wrap">
            <div className="about__placeholder">
              <span className="about__initials">MR</span>
              <span className="about__ca-badge">CA</span>
            </div>
            <div className="about__experience">
              <strong>12+</strong>
              <span>Years of trusted practice</span>
            </div>
          </div>
        </div>

        <div className="about__content" data-reveal>
          <span className="section__eyebrow">About MR Tax</span>
          <h2 className="section__title">Your Chartered Accountant partner for every tax season</h2>
          <p className="about__lead">
            MR Tax was founded on a simple belief: tax compliance should empower your financial
            decisions—not create anxiety. As a practicing Chartered Accountant, I lead a team that
            combines rigorous standards with approachable, transparent service.
          </p>
          <p className="about__text">
            Whether you are filing your first return, scaling a business, or navigating complex
            cross-border income, we bring the discipline of audit-grade work and the warmth of a
            long-term advisor relationship.
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
            Schedule a Meeting
          </a>
        </div>
      </div>
    </section>
  )
}
