import { useState } from 'react'
import { faqs } from '../data/content'
import Icon from './Icon'
import './FAQ.css'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="section section--alt">
      <div className="container faq">
        <header className="faq__header" data-reveal>
          <span className="section__eyebrow">FAQ</span>
          <h2 className="section__title">Common questions answered</h2>
          <p className="section__subtitle">
            Still unsure? Reach out—we are happy to discuss your specific situation in a free
            consultation.
          </p>
        </header>

        <div className="faq__list" data-reveal>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.question} className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
                <button
                  type="button"
                  className="faq__question"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {item.question}
                  <Icon name="chevron" size={20} className="faq__chevron" />
                </button>
                <div className="faq__answer" hidden={!isOpen}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
