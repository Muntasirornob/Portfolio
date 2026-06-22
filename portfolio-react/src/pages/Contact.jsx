import { useState } from 'react'
import { Header } from '../components/Header.jsx'
import '../styles/components/ContactInfo.css'
import '../styles/pages/Contact.css'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSending(true)
    setSuccessMessage('')
    setErrorMessage('')

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.detail || 'Failed to send message')
      }

      setSuccessMessage(data.message || 'Message sent successfully')
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <Header brandText="Portfolio" activePage="contact" />

      <main className="contact-page">
        <section className="contact-section section">
          <div className="container contact-layout">
            <aside className="contact-intro">
              <h1>Let's build something amazing together!</h1>
              <p className="contact-lead">Any Questions? Connect through social media.</p>

              <div className="about-contact-block">
                <h6>Email :</h6>
                <a className="about-email" href="mailto:muntasirornob@gmail.com">
                  muntasirornob@gmail.com
                </a>
              </div>

              <div className="about-contact-block">
                <h6>Say Hello :</h6>
                <div className="social-row" aria-label="Social links">
                  <a
                    href="https://www.linkedin.com/in/muntasir-chowdhury-787b8b143/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    in
                  </a>
                  <a
                    href="https://github.com/Muntasirornob"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ⌂
                  </a>
                </div>
              </div>
            </aside>

            <article className="contact-form-wrap">
              <h2>Contact form :</h2>
              {successMessage ? (
                <p className="contact-status contact-status--success" aria-live="polite">
                  {successMessage}
                </p>
              ) : null}

              {errorMessage ? (
                <p className="contact-status contact-status--error" aria-live="polite">
                  {errorMessage}
                </p>
              ) : null}

              <form className="contact-form" onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </label>

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Write your message..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </label>

                <button className="button button--primary contact-submit" type="submit" disabled={isSending}>
                  {isSending ? 'Sending...' : 'Submit ➢'}
                </button>
              </form>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}