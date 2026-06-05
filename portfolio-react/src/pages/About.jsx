import { Link } from 'react-router'

export function About() {
  return (
    <>
      <header className="site-header">
        <div className="container site-header-inner">
          <Link className="site-brand" to="/" aria-label="Go to home">
            Portfolio<span className="brand-dot">.</span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            <Link to="/about" aria-current="page">
              About
            </Link>
            <Link to="/#projects">Projects</Link>
            <Link to="/#skills">Skills</Link>
            <a href="contact.html">Contact</a>
          </nav>

          <a className="button button--primary site-header-cta" href="contact.html">
            Hire me
          </a>
        </div>
      </header>

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
                  <strong>Focus:</strong> Python, PHP, JavaScript, Cloud Computing
                </li>
              </ul>

              <div className="resume-block">
                <span className="resume-label">View my resume</span>
                <a className="button button--primary" href="#">
                  Resume 📄
                </a>
              </div>

              <section className="stack-section" aria-label="Stack and tools">
                <h2>Stack &amp; Tools</h2>
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
              </section>
            </article>
          </div>
        </section>

        <section className="experience-section section" aria-labelledby="experience-title">
          <div className="container experience-layout">
            <aside className="experience-intro">
              <h2 id="experience-title">Experience</h2>
              <p>Companies I&apos;ve had worked with</p>
            </aside>

            <div className="experience-content">
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
                  React frontend team to deliver seamless integration, ensuring feature
                  parity across platforms. Collaborated with a React frontend team to
                  deliver seamless integration, ensuring feature parity across
                  platforms.
                </p>

                <h5 className="experience-subtitle">Certifications</h5>
                <div className="cert-grid">
                  <article className="cert-card">
                    <div className="cert-topline">
                      <span className="cert-mark">✹</span>
                      <span className="cert-chip">AWS-CCP</span>
                    </div>
                    <h6>AWS Certified Cloud Practitioner</h6>
                    <p>AWS • 2026</p>
                  </article>

                  <article className="cert-card">
                    <div className="cert-topline">
                      <span className="cert-mark">✹</span>
                      <span className="cert-chip">AZ-900</span>
                    </div>
                    <h6>Microsoft Azure Fundamentals</h6>
                    <p>Azure • 2026</p>
                  </article>

                  <article className="cert-card">
                    <div className="cert-topline">
                      <span className="cert-mark">✹</span>
                      <span className="cert-chip">Python</span>
                    </div>
                    <h6>Python for Everyone</h6>
                    <p>Coursera • 2020</p>
                  </article>
                </div>
              </article>

              <article className="experience-entry experience-entry--education">
                <div className="experience-timeline-dot experience-timeline-dot--bottom"></div>
                <div className="experience-head">
                  <h3>🎓 Master of Engineering in Electrical and Computer Engineering</h3>
                  <span className="experience-badge">2023-2025</span>
                </div>

                <h4>University of Calgary, Canada</h4>
                <p>
                  Specialized in software development, algorithms, and system design.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}