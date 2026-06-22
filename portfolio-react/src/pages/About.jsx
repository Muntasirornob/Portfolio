import { useState } from 'react'
import { Header } from '../components/Header.jsx'
import '../styles/components/ContactInfo.css'
import '../styles/pages/About.css'

export function About() {
  const [activeExperienceTab, setActiveExperienceTab] = useState('work')

  return (
    <>
      <Header
        brandText="Portfolio"
        activePage="about"
      />

      <main className="about-page">
        <section className="about-hero section">
          <div className="container about-layout">
            <aside className="about-sidebar">
              <h1>Software engineer and Cloud enthusiast.</h1>

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
                I am a Software Engineer and Cloud enthusiast focused on building
                scalable enterprise applications with clean user experiences. My work
                centers on turning complex business requirements into practical,
                maintainable solutions using JavaScript, React, Python, PHP, HTML, and
                CSS.
              </p>

              <p>
                I currently looking for full time role in the field of Software
                Engineering and Cloud Computing. I enjoy solving business problems
                through user-friendly interfaces, robust architecture, and efficient
                workflow automation.
              </p>

              <ul className="about-highlights">
                <li>
                  <strong>MEng in Electrical and Computer Engineering</strong> (2025
                  Graduate)
                </li>
                <li>
                  <strong>Focus:</strong> Python, PHP, JavaScript, React, Node.js, Laravel, MySQL, MongoDB, AWS, Docker, Kubernetes
                </li>
              </ul>

              <div className="resume-block">
                <span className="resume-label">View my resume</span>
                <a className="button button--primary" href="/resume.pdf" download>
                  Resume 📄
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="experience-section section" aria-labelledby="experience-title">
          <div className="container experience-layout">
            <aside className="experience-intro">
              <h2 id="experience-title"></h2>
              <p>Experience and Education</p>

              <div className="experience-tabs" role="tablist" aria-label="Experience tabs">
                <button
                  type="button"
                  className={`experience-tab ${activeExperienceTab === 'work' ? 'experience-tab--active' : ''}`}
                  onClick={() => setActiveExperienceTab('work')}
                  role="tab"
                  aria-selected={activeExperienceTab === 'work'}
                >
                  Experience
                </button>
                <button
                  type="button"
                  className={`experience-tab ${activeExperienceTab === 'education' ? 'experience-tab--active' : ''}`}
                  onClick={() => setActiveExperienceTab('education')}
                  role="tab"
                  aria-selected={activeExperienceTab === 'education'}
                >
                  Education
                </button>
              </div>
            </aside>

            <div className="experience-content">
              {activeExperienceTab === 'work' ? (
                <article className="experience-entry">
                  <div className="experience-timeline-dot experience-timeline-dot--top"></div>
                  <div className="experience-head">
                    <h3>🏢 SoftBD</h3>
                    <span className="experience-badge">2022 - 2023</span>
                  </div>

                  <h4>Assistant Software Engineer</h4>
                  <p>
                    Developed a scalable government job platform (NISE) using Laravel
                    Lumen and MySQL, serving over 5M users nationwide. Built and
                    maintained REST APIs with JWT and OpenAPI (Swagger), enabling secure
                    integration across multiple systems. Automated manual identity
                    verification, increasing operational efficiency by 60% and reducing
                    errors significantly. Managed CI/CD workflows with GitLab, ArgoCD,
                    and Kubernetes, reducing deployment time by 40%. Collaborated with a
                    React frontend team to deliver seamless integration, ensuring
                    feature parity across platforms.
                  </p>

                  <div className="experience-head">
                    <h3>🏢 App Atlantis Corporation</h3>
                    <span className="experience-badge">2022</span>
                  </div>

                  <h4> Software Developer</h4>
                  <p>
                    Built backend services and business features for an agricultural e-commerce platform with more than 10,000 active users. Integrated payment gateways, optimized database operations, and supported production deployments and troubleshooting.
                  </p>

                  
                </article>
              ) : (
                <article className="experience-entry experience-entry--education">
                <div className="experience-timeline-dot experience-timeline-dot--top"></div>

                <div className="experience-head">
                  <h3>🎓 Master of Engineering in Electrical and Computer Engineering</h3>
                  <span className="experience-badge">2023 - 2025</span>
                </div>

                <h4>University of Calgary, Canada</h4>

                <p>
                  Advanced studies in software engineering, optimization, embedded systems,
                  and machine learning with a focus on developing scalable and data-driven
                  solutions for real-world engineering challenges.
                </p>

                <h5 className="experience-subtitle">Academic Highlights</h5>

                <div className="education-boilerplate-grid">
                  <article className="education-boilerplate-card">
                    <h6>Coursework</h6>
                    <p>
                      Applied Optimization for Sustainable Design,
                      Machine Learning,
                      Embedded Systems.
                    </p>
                  </article>

                  <article className="education-boilerplate-card">
                    <h6>Projects</h6>
                    <p>
                      Churn Prediction using Machine Learning techniques and
                      Security-Constrained Economic Dispatch (SCED) Forecasting
                      for power system optimization and decision support.
                    </p>
                  </article>

                  <article className="education-boilerplate-card">
                    <h6>Technical Focus</h6>
                    <p>
                      Machine Learning, Predictive Analytics, Optimization,
                      Python Development, Cloud Computing, and Distributed Systems.
                    </p>
                  </article>
                </div>
              </article>
              )}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}