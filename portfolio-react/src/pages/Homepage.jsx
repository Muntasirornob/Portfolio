
import { useEffect } from "react";
export function Homepage() {
    useEffect(() => {
      import("./laptop-scene.js");
    }, []);
    return (
        <>
        <header className="site-header">
      <div className="container site-header-inner">
        <a className="site-brand" href="#home" aria-label="Go to home">
          Muntasir<span className="brand-dot">.</span>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="about.html">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="contact.html">Contact</a>
        </nav>

        <a className="button button--primary site-header-cta" href="contact.html">Hire me</a>
      </div>
        </header>

         <main>
      <section className="hero" id="home">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio Website</p>
            <h1>
              <span className="accent">Hi there!</span>
              <br />
              I am Muntasir, a full stack developer and cloud and ai
              enthusiast.
            </h1>
            <h5>Building scalable system and agentic workflows</h5>
          </div>

          <div className="hero-visual" aria-label="Laptop illustration with subtle animation">
            <div id="laptop-scene" className="hero-canvas"></div>
          </div>
        </div>
      </section>

      <section className="projects section" id="projects">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Projects</p>
            <h2>Selected work</h2>
            <p>
              A few featured projects built with modern frontend and cloud-first
              workflows.
            </p>
          </div>

          <div className="project-list">
            <article className="project-card">
              <div className="project-media project-media--blog" aria-hidden="true">
                <div className="browser-shell">
                  <div className="browser-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-content">
                    <div className="browser-grid">
                      <div className="browser-tile browser-tile--wide"></div>
                      <div className="browser-tile"></div>
                      <div className="browser-tile"></div>
                      <div className="browser-tile"></div>
                      <div className="browser-tile"></div>
                      <div className="browser-tile browser-tile--wide"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-kicker">Project 01</p>
                <h3>Blog App</h3>
                <p>
                  A clean blog application with a modern editorial layout,
                  structured content sections, and a responsive interface.
                </p>
                <div className="project-tags" aria-label="Technologies used">
                  <span>React JS</span>
                  <span>Firebase</span>
                  <span>CSS</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Muntasirornob" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button button--ghost" href="#">Live Demo</a>
                </div>
              </div>
            </article>

            <article className="project-card project-card--reverse">
              <div className="project-media project-media--dashboard" aria-hidden="true">
                <div className="browser-shell browser-shell--soft">
                  <div className="browser-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-content browser-content--dashboard">
                    <div className="dashboard-sidebar"></div>
                    <div className="dashboard-main">
                      <div className="dashboard-hero"></div>
                      <div className="dashboard-row">
                        <div></div><div></div><div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-kicker">Project 02</p>
                <h3>Analytics Dashboard</h3>
                <p>
                  A responsive dashboard UI with card-based metrics, intuitive
                  layout blocks, and a polished enterprise feel.
                </p>
                <div className="project-tags" aria-label="Technologies used">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Muntasirornob" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button button--ghost" href="#">Live Demo</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-media project-media--ai" aria-hidden="true">
                <div className="browser-shell browser-shell--soft">
                  <div className="browser-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-content browser-content--ai">
                    <div className="ai-orb ai-orb--one"></div>
                    <div className="ai-panel"></div>
                    <div className="ai-card ai-card--left"></div>
                    <div className="ai-card ai-card--right"></div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-kicker">Project 03</p>
                <h3>Agent Workflow Studio</h3>
                <p>
                  A concept interface for designing agentic automation flows,
                  task nodes, and workflow handoffs.
                </p>
                <div className="project-tags" aria-label="Technologies used">
                  <span>Next JS</span>
                  <span>AI</span>
                  <span>Tailwind</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Muntasirornob" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button button--ghost" href="#">Live Demo</a>
                </div>
              </div>
            </article>

            <article className="project-card project-card--reverse">
              <div className="project-media project-media--cloud" aria-hidden="true">
                <div className="browser-shell browser-shell--soft">
                  <div className="browser-bar">
                    <span></span><span></span><span></span>
                  </div>
                  <div className="browser-content browser-content--cloud">
                    <div className="cloud-chart cloud-chart--big"></div>
                    <div className="cloud-chart cloud-chart--small"></div>
                    <div className="cloud-card"></div>
                    <div className="cloud-card cloud-card--accent"></div>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <p className="project-kicker">Project 04</p>
                <h3>Cloud Operations Panel</h3>
                <p>
                  A lightweight cloud management interface with monitoring,
                  status indicators, and an accessible layout.
                </p>
                <div className="project-tags" aria-label="Technologies used">
                  <span>React</span>
                  <span>Cloud</span>
                  <span>UI Design</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Muntasirornob" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button button--ghost" href="#">Live Demo</a>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
         </main>
    </>
    );
}