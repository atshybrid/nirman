import { useState } from 'react'
import Icon from './Icon'
import { SITE } from '../config/site'
import './Contact.css'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="contact" className="section">
      <div className="container contact">
        <div className="contact__info" data-reveal>
          <span className="section__eyebrow">Get In Touch</span>
          <h2 className="section__title">Start your project with MR NIRMAN</h2>
          <p className="contact__lead">
            Share your requirements. We respond within one business day with next steps and a
            transparent project discussion.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__icon">
                <Icon name="phone" size={22} />
              </span>
              <div>
                <strong>Phone</strong>
                <a href={`tel:${SITE.phoneTel}`}>{SITE.phoneDisplay}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="mail" size={22} />
              </span>
              <div>
                <strong>Email</strong>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="location" size={22} />
              </span>
              <div>
                <strong>Service Area</strong>
                <span>Andhra Pradesh &amp; pan-India projects</span>
              </div>
            </li>
          </ul>

          <div className="contact__hours">
            <strong>Office Hours</strong>
            <p>Mon – Sat: 9:00 AM – 7:00 PM</p>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} data-reveal>
          {submitted && (
            <div className="contact__success" role="status">
              Thank you! We will contact you shortly.
            </div>
          )}

          <div className="contact__row">
            <label>
              Full Name *
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </label>
            <label>
              Email *
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
              />
            </label>
          </div>

          <div className="contact__row">
            <label>
              Phone *
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="+91 XXXXX XXXXX"
              />
            </label>
            <label>
              Project Type
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">Select project type</option>
                <option value="residential">Residential Construction</option>
                <option value="commercial">Commercial Building</option>
                <option value="infra">Infrastructure / Civil</option>
                <option value="renovation">Renovation</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>

          <label>
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Site location, approximate area, timeline..."
            />
          </label>

          <button type="submit" className="btn btn--primary contact__submit">
            Send Enquiry
          </button>
        </form>
      </div>
    </section>
  )
}
