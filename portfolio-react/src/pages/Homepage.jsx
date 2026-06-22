import { useEffect, useState } from "react";
import { Header } from '../components/Header.jsx';
import '../styles/pages/Homepage.css'

const projectTabs = {
  projects: {
    title: 'Selected work',
    description:
      'A few featured personal projects built with modern frontend and cloud-first workflows.',
    items: [
      {
        id: 'personal-1',
        kicker: 'Project 01',
        title: 'AWS Data Pipeline System',
        description:
          'End-to-end ETL pipeline on AWS for data ingestion, transformation, and scalable cloud storage using modular Python workflows.',
        image: '/etl.png',
        alt: 'AWS data pipeline project preview',
        tags: ['AWS', 'ETL', 'Python', 'Data Engineering'],
        github: 'https://github.com/Muntasirornob/data-pipeline-aws',
      },
      {
        id: 'personal-2',
        kicker: 'Project 02',
        title: 'Security-Constrained Economic Dispatch Tool',
        description:
          'Python-based optimization and forecasting system for power grids using machine learning and Gurobi-based constrained optimization.',
        image: '/SCED.png',
        alt: 'Security-constrained economic dispatch tool preview',
        tags: ['Python', 'Machine Learning', 'Gurobi', 'Time-Series'],
        github: 'https://github.com/Nabil-Ahmed-Sheikh/Power-system-forecasting-tool',
      },
      {
        id: 'personal-3',
        kicker: 'Project 03',
        title: 'AI Powered Interview Prep',
        description:
          'A concept interface for designing agentic automation flows, task nodes, and workflow handoffs.',
        image: '/interview-prep.png',
        alt: 'AI interview prep project preview',
        tags: ['Next JS', 'Fast API', 'LangChain'],
        github: 'https://github.com/Muntasirornob/ai-powered-interview-prep',
      },
    ],
  },
  work: {
title: 'Professional Experience',
description:
'Backend engineering, cloud infrastructure, and large-scale web platforms built for government services, e-commerce, and business automation.',
items: [
{
id: 'work-1',
kicker: 'Soft BD',
title: 'National Intelligence for Skills, Education, Employment (NISE)',
description:
'Developed and maintained a government employment platform serving over 5 million users. Built secure REST APIs, implemented JWT authentication, automated identity verification workflows, and supported cloud-native deployments using Docker, Kubernetes, GitLab CI/CD, and ArgoCD.',
image: '/niseee.png',
alt: 'NISE government employment platform',
tags: ['Laravel', 'React', 'MySQL', 'Docker', 'Kubernetes'],
github: 'https://nise.gov.bd/',
},
{
id: 'work-2',
kicker: 'App Atlantis Corporation',
title: 'Krishibazar E-Commerce Platform',
description:
'Built backend services and business features for an agricultural e-commerce platform with more than 10,000 active users. Integrated payment gateways, optimized database operations, and supported production deployments and troubleshooting.',
image: '/krishibazar.png',
alt: 'Krishibazar e-commerce platform',
tags: ['Django', 'PostgreSQL', 'JavaScript', 'Payments', 'E-Commerce'],
github: 'https://krishibazar.com.bd/',
},
,
],
}
,
}

export function Homepage() {
    const [toggleState, setToggleState] = useState('projects');
    useEffect(() => {
      import("./laptop-scene.js");
    }, []);

    const activeTab = projectTabs[toggleState];

    return (
        <>
        <Header
          brandText="Muntasir"
          activePage="home"
        />

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
          <div className="section-heading projects-heading">
            <div>
              <div className="projects-title-row">
                <p className="eyebrow">Projects</p>
                <div className="projects-tab-container" role="tablist" aria-label="Project categories">
                  <button
                    className={`projects-tab ${toggleState === 'projects' ? 'is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={toggleState === 'projects'}
                    onClick={() => setToggleState('projects')}
                  >
                    Projects
                  </button>
                  <button
                    className={`projects-tab ${toggleState === 'work' ? 'is-active' : ''}`}
                    type="button"
                    role="tab"
                    aria-selected={toggleState === 'work'}
                    onClick={() => setToggleState('work')}
                  >
                    Work
                  </button>
                </div>
              </div>
              <h2>{activeTab.title}</h2>
              <p>{activeTab.description}</p>
            </div>
          </div>

          <div className="project-list">
            {activeTab.items.map((project, index) => (
              <article
                className={`project-card ${index % 2 === 1 ? 'project-card--reverse' : ''}`}
                key={project.id}
              >
                <div className="project-media project-media--image">
                  <div className="project-image-frame">
                    <img className="project-image" src={project.image} alt={project.alt} />
                  </div>
                </div>

                <div className="project-content">
                    <p className="project-kicker">{project.kicker}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                   <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    <a className="button" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                    <a className="button button--ghost" href="#">Live Demo</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
         </main>
    </>
    );
}