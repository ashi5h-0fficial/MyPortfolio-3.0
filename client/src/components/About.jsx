import React from 'react';

const About = () => {
  const stats = [
    { number: '3+', label: 'Years Experience' },
    { number: '50+', label: 'Bugs Squashed' },
    { number: '20+', label: 'Projects Tested' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// about_me</span>
          <h2 className="section-title">Who Am I?</h2>
        </div>

        <div className="about-grid">
          <div className="about-image-wrap">
            <div className="about-image-frame">
              <div className="about-avatar">
                <span>YN</span>
              </div>
              <div className="frame-decoration top-left"></div>
              <div className="frame-decoration bottom-right"></div>
            </div>
          </div>

          <div className="about-content">
            <h3>Software Test Engineer</h3>
            <p>
              I'm a dedicated Software Test Engineer with 3+ years of experience ensuring software quality
              through rigorous manual and automated testing. I specialize in identifying edge cases, building
              robust test frameworks, and collaborating closely with development teams to ship reliable products.
            </p>
            <p>
              My approach combines deep technical knowledge with a user-centric mindset — because quality
              isn't just about finding bugs, it's about delivering exceptional experiences.
            </p>

            <div className="about-info">
              <div className="info-item"><span className="info-label">📍 Location</span><span>Your City, Country</span></div>
              <div className="info-item"><span className="info-label">📧 Email</span><span>your@email.com</span></div>
              <div className="info-item"><span className="info-label">🎓 Degree</span><span>B.Tech Computer Science</span></div>
              <div className="info-item"><span className="info-label">💼 Status</span><span className="status-available">Open to Work</span></div>
            </div>

            <a
              href="https://drive.google.com/your-resume-link"
              target="_blank"
              rel="noreferrer"
              className="btn-resume"
            >
              ⬇️ Download Resume
            </a>
          </div>
        </div>

        <div className="stats-row">
          {stats.map(s => (
            <div key={s.label} className="stat-card">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
