
import { useEffect } from "react";
import { Link } from "react-router";
export function Homepage() {
    useEffect(() => {
      import("./laptop-scene.js");
    }, []);
    return (
        <>
        <header className="site-header">
      <div className="container site-header-inner">
        <Link className="site-brand" to="/" aria-label="Go to home">
          Muntasir<span className="brand-dot">.</span>
        </Link>

        <nav className="site-nav" aria-label="Primary">
          <Link to="/about">About</Link>
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
              <div className="project-media project-media--image">
                <div className="project-image-frame">
                  <img
                    className="project-image"
                    src="/etl.png"
                    alt="AWS data pipeline project preview"
                  />
                </div>
              </div>

              <div className="project-content">
                  <p className="project-kicker">Project 01</p>
                  <h3>AWS Data Pipeline System</h3>
                  <p>
                  End-to-end ETL pipeline on AWS for data ingestion, transformation,
                  and scalable cloud storage using modular Python workflows.
                  </p>
                 <div className="project-tags">
                  <span>AWS</span>
                  <span>ETL</span>
                  <span>Python</span>
                  <span>Data Engineering</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Muntasirornob/data-pipeline-aws" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button button--ghost" href="#">Live Demo</a>
                </div>
              </div>
            </article>

            <article className="project-card project-card--reverse">
              <div className="project-media project-media--image">
                <div className="project-image-frame">
                  <img
                    className="project-image"
                    src="/SCED.png"
                    alt="Security-constrained economic dispatch tool preview"
                  />
                </div>
              </div>

              <div className="project-content">
                <p className="project-kicker">Project 02</p>
                <h3>Security-Constrained Economic Dispatch Tool</h3>
                <p>
                  Python-based optimization and forecasting system for power grids using
                  machine learning and Gurobi-based constrained optimization.
                </p>
                 <div className="project-tags">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Gurobi</span>
                  <span>Time-Series</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Nabil-Ahmed-Sheikh/Power-system-forecasting-tool" target="_blank" rel="noreferrer">GitHub</a>
                  <a className="button button--ghost" href="#">Live Demo</a>
                </div>
              </div>
            </article>

            <article className="project-card">
              <div className="project-media project-media--image">
                <div className="project-image-frame">
                  <img
                    className="project-image"
                    src="/interview-prep.png"
                    alt="AI interview prep project preview"
                  />
                </div>
              </div>

              <div className="project-content">
                <p className="project-kicker">Project 03</p>
                <h3>AI Powered Interview Prep</h3>
                <p>
                  A concept interface for designing agentic automation flows,
                  task nodes, and workflow handoffs.
                </p>
                <div className="project-tags" aria-label="Technologies used">
                  <span>Next JS</span>
                  <span>Fast API</span>
                  <span>LangChain</span>
                </div>
                <div className="project-actions">
                  <a className="button" href="https://github.com/Muntasirornob/ai-powered-interview-prep" target="_blank" rel="noreferrer">GitHub</a>
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