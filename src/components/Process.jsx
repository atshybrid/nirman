import { processSteps } from '../data/content'
import './Process.css'

export default function Process() {
  return (
    <section id="process" className="section section--alt">
      <div className="container">
        <header className="section__header" data-reveal>
          <span className="section__eyebrow">How We Work</span>
          <h2 className="section__title">A clear, stress-free process</h2>
          <p className="section__subtitle">
            From first site visit to final handover—we keep you informed at every step with clear
            milestones and quality checks.
          </p>
        </header>

        <ol className="process__steps">
          {processSteps.map((step, i) => (
            <li key={step.step} className="process__step" data-reveal style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="process__number">{step.step}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
