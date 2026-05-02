import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-logo">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-name">QA</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p>Software Test Engineer — Delivering Quality, One Test at a Time.</p>
        <div className="footer-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:your@email.com">Email</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Your Name. Built with React & Node.js</span>
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >↑ Top</button>
      </div>
    </div>
  </footer>
);

export default Footer;
