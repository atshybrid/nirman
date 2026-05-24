import { useState, useMemo } from 'react'
import { estimateTax } from '../utils/taxEstimate'
import Icon from './Icon'
import './TaxCalculator.css'

export default function TaxCalculator() {
  const [income, setIncome] = useState(1200000)
  const [regime, setRegime] = useState('new')

  const result = useMemo(() => estimateTax(income, regime), [income, regime])

  const formatINR = (n) =>
    new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(n)

  return (
    <section id="calculator" className="section calculator">
      <div className="container">
        <div className="calculator__layout">
          <div className="calculator__intro" data-reveal>
            <span className="section__eyebrow">Tax Calculator</span>
            <h2 className="section__title">Estimate your tax in seconds</h2>
            <p className="section__subtitle">
              Get a quick illustrative estimate under old or new regime. For accurate filing and
              deductions, book a consultation with our CA team.
            </p>
            <ul className="calculator__features">
              <li>
                <Icon name="check" size={18} /> New &amp; old regime comparison
              </li>
              <li>
                <Icon name="check" size={18} /> Real-time slider updates
              </li>
              <li>
                <Icon name="check" size={18} /> CA-verified before you file
              </li>
            </ul>
            <a href="#contact" className="btn btn--primary">
              Get Expert Review
              <Icon name="arrow" size={18} />
            </a>
          </div>

          <div className="calculator__panel" data-reveal>
            <div className="calculator__regime">
              <button
                type="button"
                className={regime === 'new' ? 'active' : ''}
                onClick={() => setRegime('new')}
              >
                New Regime
              </button>
              <button
                type="button"
                className={regime === 'old' ? 'active' : ''}
                onClick={() => setRegime('old')}
              >
                Old Regime
              </button>
            </div>

            <label className="calculator__label">
              Annual Income (₹)
              <span className="calculator__income-value">{formatINR(income)}</span>
            </label>
            <input
              type="range"
              min={200000}
              max={5000000}
              step={50000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="calculator__slider"
            />
            <div className="calculator__range-labels">
              <span>₹2L</span>
              <span>₹50L+</span>
            </div>

            <div className="calculator__result">
              <div className="calculator__result-main">
                <span>Estimated Tax</span>
                <strong>{formatINR(result.tax)}</strong>
              </div>
              <div className="calculator__result-grid">
                <div>
                  <span>Effective Rate</span>
                  <strong>{result.effectiveRate}%</strong>
                </div>
                <div>
                  <span>Regime</span>
                  <strong>{result.slab}</strong>
                </div>
                <div>
                  <span>Take-home (approx.)</span>
                  <strong>{formatINR(Math.max(0, income - result.tax))}</strong>
                </div>
              </div>
            </div>

            <p className="calculator__disclaimer">
              *Illustrative estimate only. Actual tax depends on deductions, exemptions, and
              latest notifications. Consult MR Tax for precise planning.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
