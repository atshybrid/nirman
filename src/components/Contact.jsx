import { useState } from 'react'
import Icon from './Icon'
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
          <h2 className="section__title">Book your free tax consultation</h2>
          <p className="contact__lead">
            Tell us about your needs. We typically respond within one business day with next steps
            and a transparent fee estimate.
          </p>

          <ul className="contact__details">
            <li>
              <span className="contact__icon">
                <Icon name="phone" size={22} />
              </span>
              <div>
                <strong>Phone</strong>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="mail" size={22} />
              </span>
              <div>
                <strong>Email</strong>
                <a href="mailto:hello@mrtax.in">hello@mrtax.in</a>
              </div>
            </li>
            <li>
              <span className="contact__icon">
                <Icon name="location" size={22} />
              </span>
              <div>
                <strong>Office</strong>
                <span>Your City, India — Update with your address</span>
              </div>
            </li>
          </ul>

          <div className="contact__hours">
            <strong>Office Hours</strong>
            <p>Mon – Sat: 10:00 AM – 7:00 PM</p>
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
              Service Needed
              <select name="service" value={form.service} onChange={handleChange}>
                <option value="">Select a service</option>
                <option value="itr">Income Tax Filing</option>
                <option value="gst">GST & Business Tax</option>
                <option value="planning">Tax Planning</option>
                <option value="audit">Audit & Compliance</option>
                <option value="other">Other / Not Sure</option>
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
              placeholder="Briefly describe your requirement..."
            />
          </label>

          <button type="submit" className="btn btn--primary contact__submit">
            Send Message
            <Icon name="arrow" size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
