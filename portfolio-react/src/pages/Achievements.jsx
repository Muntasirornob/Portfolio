import { Header } from '../components/Header.jsx'
import '../styles/components/ContactInfo.css'
import '../styles/pages/About.css'

export function Achievements() {
  return (
    <>
      <Header
        brandText="Portfolio"
        activePage="achievements"
      />

      <main className="about-page">
        <section className="about-hero section">
          <div className="container about-layout">
            <aside className="about-sidebar">
              <h1>Skill Highlight.</h1>

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

            <article className="about-content">
              <p>
                Selected skills, certifications, and publication highlights that show
                my experience across software engineering, cloud, and applied research.
              </p>

              <section className="achievements-section" aria-label="Achievements">
                <h2>Core Skills</h2>
                <p className="achievements-lead">
                  Selected skills, certifications, and publication highlights.
                </p>

                <div className="achievements-grid">
                  <article className="achievement-card">
                    <h3>Core Skills</h3>
                    <div className="stack-grid">
                      <span className="tech-badge tech-badge--html" title="HTML">
                        5
                      </span>
                      <span className="tech-badge tech-badge--css" title="CSS">
                        3
                      </span>
                      <span className="tech-badge tech-badge--bootstrap" title="Bootstrap">
                        B
                      </span>
                      <span className="tech-badge tech-badge--tailwind" title="Tailwind">
                        ≋
                      </span>
                      <span className="tech-badge tech-badge--vscode" title="VS Code">
                        ⌘
                      </span>
                      <span className="tech-badge tech-badge--github" title="GitHub">
                        ⌂
                      </span>
                      <span className="tech-badge tech-badge--python" title="Python">
                        Py
                      </span>
                      <span className="tech-badge tech-badge--python" title="PHP">
                        PHP
                      </span>
                      <span className="tech-badge tech-badge--cplus" title="C++">
                        C++
                      </span>
                      <span className="tech-badge tech-badge--react" title="React">
                        ⚛
                      </span>
                      <span className="tech-badge tech-badge--notion" title="Notion">
                        N
                      </span>
                      <span className="tech-badge tech-badge--jira" title="Jira">
                        J
                      </span>
                      <span className="tech-badge tech-badge--triangle" title="Design">
                        ▲
                      </span>
                    </div>
                  </article>

                  <article className="achievement-card">
                    <h3>Certifications</h3>
                    <ul className="achievement-list">
                      <li>
                        <strong>AWS Certified Cloud Practitioner</strong> — AWS, 2026
                      </li>
                      <li>
                        <strong>Microsoft Azure Fundamentals</strong> — Azure, 2026
                      </li>
                      <li>
                        <strong>Python for Everyone</strong> — Coursera, 2020
                      </li>
                    </ul>
                  </article>

                  <article className="achievement-card">
                    <h3>Published Article</h3>
                    <p className="achievement-article-copy">
                      Research publication available at:
                    </p>
                    <a
                      className="achievement-article-link"
                      href="https://doi.org/10.4108/eai.18-8-2020.165995"
                      target="_blank"
                      rel="noreferrer"
                    >
                      https://doi.org/10.4108/eai.18-8-2020.165995
                    </a>
                  </article>
                </div>
              </section>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}
