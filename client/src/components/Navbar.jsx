import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo" onClick={() => scrollTo('home')}>
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">QA</span>
        <span className="logo-bracket">/&gt;</span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <button onClick={() => scrollTo(link)}>{link}</button>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {isDark ? '☀️' : '🌙'}
        </button>
        <button className="hamburger" onClick={() => setMenuOpen(p => !p)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
