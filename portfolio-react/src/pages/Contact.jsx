import { Header } from '../components/Header.jsx'
import '../styles/components/ContactInfo.css'
import '../styles/pages/Contact.css'

export function Contact() {
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
              <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
                <label>
                  <span>Name</span>
                  <input type="text" name="name" placeholder="Your name" />
                </label>

                <label>
                  <span>Email address</span>
                  <input type="email" name="email" placeholder="you@example.com" />
                </label>

                <label>
                  <span>Message</span>
                  <textarea name="message" rows="5" placeholder="Write your message..."></textarea>
                </label>

                <button className="button button--primary contact-submit" type="submit">
                  Submit ➢
                </button>
              </form>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}