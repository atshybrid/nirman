import { faqs } from '../data/content'
import './FAQ.css'

export default function FAQ() {
  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-heading">
      <div className="container faq">
        <header className="faq__header" data-reveal>
          <span className="section__eyebrow">FAQ</span>
          <h2 id="faq-heading" className="section__title">
            Frequently asked questions
          </h2>
          <p className="section__subtitle">
            Answers about our urban service apartments, green living projects, and construction
            services in Hyderabad and Bangalore.
          </p>
        </header>

        <div className="faq__list" data-reveal itemScope itemType="https://schema.org/FAQPage">
          {faqs.map((item) => (
            <details key={item.question} className="faq__item" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <summary className="faq__question" itemProp="name">
                {item.question}
              </summary>
              <div
                className="faq__answer"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
