import React, { useEffect, useRef, useState } from 'react';

const skillsData = {
  'Testing & QA': [
    { name: 'Manual Testing', level: 95 },
    { name: 'Selenium WebDriver', level: 88 },
    { name: 'Cypress', level: 82 },
    { name: 'Postman / API Testing', level: 90 },
    { name: 'JMeter (Performance)', level: 75 },
    { name: 'TestNG / JUnit', level: 85 }
  ],
  'Programming': [
    { name: 'Java', level: 80 },
    { name: 'Python', level: 72 },
    { name: 'JavaScript', level: 70 },
    { name: 'SQL', level: 85 }
  ],
  'Tools & DevOps': [
    { name: 'JIRA / Bugzilla', level: 95 },
    { name: 'Git / GitHub', level: 85 },
    { name: 'Jenkins / CI-CD', level: 75 },
    { name: 'Docker (basics)', level: 60 }
  ]
};

const SkillBar = ({ name, level, animate }) => (
  <div className="skill-item">
    <div className="skill-header">
      <span>{name}</span>
      <span className="skill-pct">{level}%</span>
    </div>
    <div className="skill-bar-bg">
      <div
        className="skill-bar-fill"
        style={{ width: animate ? `${level}%` : '0%' }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const ref = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const certifications = [
    'ISTQB Foundation Level',
    'Selenium WebDriver with Java',
    'API Testing with Postman',
    'Agile Testing Fundamentals'
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// tech_stack</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, items]) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              {items.map(s => <SkillBar key={s.name} {...s} animate={animate} />)}
            </div>
          ))}
        </div>

        <div className="certifications">
          <h3>Certifications</h3>
          <div className="cert-list">
            {certifications.map(c => (
              <span key={c} className="cert-badge">🏆 {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
