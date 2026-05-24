import { useState, useEffect, useCallback } from 'react'
import { testimonials } from '../data/content'
import './Testimonials.css'

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => {
    setActive((i) => (i + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (paused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, next])

  const t = testimonials[active]

  return (
    <section id="testimonials" className="section">
      <div className="container">
        <header className="section__header" data-reveal>
          <span className="section__eyebrow">Client Reviews</span>
          <h2 className="section__title">Trusted by professionals & businesses</h2>
          <p className="section__subtitle">
            Real feedback from clients who value clarity, punctuality, and expert guidance.
          </p>
        </header>

        <div
          className="testimonials__carousel"
          data-reveal
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <blockquote key={active} className="testimonials__slide">
            <div className="testimonials__stars" aria-hidden="true">
              {'★★★★★'}
            </div>
            <p>&ldquo;{t.quote}&rdquo;</p>
            <footer>
              <cite>{t.name}</cite>
              <span>{t.role}</span>
            </footer>
          </blockquote>

          <div className="testimonials__controls">
            <button type="button" onClick={prev} aria-label="Previous review">
              ‹
            </button>
            <div className="testimonials__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === active ? 'active' : ''}
                  onClick={() => setActive(i)}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Next review">
              ›
            </button>
          </div>
        </div>

        <div className="testimonials__grid testimonials__grid--fallback">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonials__card">
              <div className="testimonials__stars">{'★★★★★'}</div>
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <cite>{item.name}</cite>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
