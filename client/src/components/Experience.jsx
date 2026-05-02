import React from 'react';

const experiences = [
  {
    role: 'Senior Software Test Engineer',
    company: 'Tech Company Name',
    period: '2022 – Present',
    type: 'Full Time',
    points: [
      'Led automation testing for 3 major product releases using Selenium + TestNG',
      'Reduced regression time by 60% through CI/CD pipeline integration',
      'Mentored 2 junior QA engineers on best practices',
      'Built API test suite covering 200+ endpoints with 98% coverage'
    ]
  },
  {
    role: 'Software Test Engineer',
    company: 'Previous Company',
    period: '2021 – 2022',
    type: 'Full Time',
    points: [
      'Performed manual and automated functional testing on web applications',
      'Wrote detailed test plans, test cases and bug reports in JIRA',
      'Collaborated with developers in Agile/Scrum sprints',
      'Executed performance tests using JMeter for load benchmarking'
    ]
  },
  {
    role: 'QA Intern',
    company: 'Startup Name',
    period: '2020 – 2021',
    type: 'Internship',
    points: [
      'Assisted in manual testing of mobile and web applications',
      'Learned Postman for API testing and basic Selenium scripting',
      'Documented 100+ defects with detailed reproduction steps'
    ]
  }
];

const Experience = () => (
  <section id="experience" className="experience section">
    <div className="container">
      <div className="section-header">
        <span className="section-tag">// work_history</span>
        <h2 className="section-title">Experience</h2>
      </div>

      <div className="timeline">
        {experiences.map((exp, i) => (
          <div key={i} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="timeline-header">
                <span className="timeline-type">{exp.type}</span>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <h3 className="timeline-role">{exp.role}</h3>
              <h4 className="timeline-company">{exp.company}</h4>
              <ul className="timeline-points">
                {exp.points.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
        <div className="timeline-line"></div>
      </div>
    </div>
  </section>
);

export default Experience;
