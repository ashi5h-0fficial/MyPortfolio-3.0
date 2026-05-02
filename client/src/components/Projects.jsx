import React, { useState } from 'react';

const projects = [
  {
    title: 'E-Commerce Test Suite',
    description: 'End-to-end automated test suite for a large e-commerce platform covering 500+ test cases using Selenium + TestNG with CI/CD integration.',
    tags: ['Selenium', 'TestNG', 'Java', 'Jenkins'],
    category: 'Automation',
    github: 'https://github.com/yourusername/project1',
    demo: '#',
    metrics: { tests: '500+', coverage: '92%', time: '-60% regression time' }
  },
  {
    title: 'REST API Testing Framework',
    description: 'Comprehensive API testing framework built with RestAssured and Postman collections for a microservices-based banking application.',
    tags: ['RestAssured', 'Postman', 'Java', 'Newman'],
    category: 'API Testing',
    github: 'https://github.com/yourusername/project2',
    demo: '#',
    metrics: { tests: '200+', coverage: '98%', time: 'Zero prod defects' }
  },
  {
    title: 'Performance Testing Dashboard',
    description: 'Load and stress testing reports for a SaaS product using JMeter. Identified bottlenecks that improved response time by 40%.',
    tags: ['JMeter', 'Grafana', 'Python', 'Reports'],
    category: 'Performance',
    github: 'https://github.com/yourusername/project3',
    demo: '#',
    metrics: { tests: '50+ scenarios', coverage: 'N/A', time: '+40% performance' }
  },
  {
    title: 'Mobile App QA Framework',
    description: 'Appium-based automated testing for Android/iOS mobile application with device farm integration.',
    tags: ['Appium', 'Android', 'iOS', 'Python'],
    category: 'Mobile',
    github: 'https://github.com/yourusername/project4',
    demo: '#',
    metrics: { tests: '300+', coverage: '85%', time: 'Multi-platform' }
  }
];

const categories = ['All', 'Automation', 'API Testing', 'Performance', 'Mobile'];

const Projects = () => {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// my_work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-tab ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >{cat}</button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map(project => (
            <div key={project.title} className="project-card">
              <div className="project-header">
                <span className="project-category">{project.category}</span>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-metrics">
                {Object.values(project.metrics).map((v, i) => (
                  <span key={i} className="metric">{v}</span>
                ))}
              </div>
              <div className="project-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
