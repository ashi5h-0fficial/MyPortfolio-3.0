import React, { useEffect, useState } from 'react';

const roles = ['Software Test Engineer', 'QA Automation Expert', 'Bug Slayer', 'Quality Advocate'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let i = typing ? 0 : role.length;

    const interval = setInterval(() => {
      if (typing) {
        setDisplayed(role.slice(0, i + 1));
        i++;
        if (i === role.length) { clearInterval(interval); setTimeout(() => setTyping(false), 2000); }
      } else {
        setDisplayed(role.slice(0, i - 1));
        i--;
        if (i === 0) { clearInterval(interval); setRoleIndex(p => (p + 1) % roles.length); setTyping(true); }
      }
    }, typing ? 80 : 50);

    return () => clearInterval(interval);
  }, [roleIndex, typing]);

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="grid-overlay"></div>
        {[...Array(20)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }}></div>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">👋 Available for opportunities</div>
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Ashish Soni</span>
        </h1>
        <div className="hero-role">
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-desc">
          Passionate about delivering flawless software experiences. I break things so your users don't have to.
        </p>
        <div className="hero-cta">
          <button className="btn-primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Hire Me
          </button>
        </div>
        <div className="hero-socials">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="social-link">Twitter</a>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse"><div className="scroll-wheel"></div></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
