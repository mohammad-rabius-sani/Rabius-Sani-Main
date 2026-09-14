import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import './Navbar.css';

const Navbar = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const navRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Close mobile menu on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCvClick = (e) => {
    if (onOpenResume) {
      e.preventDefault();
      onOpenResume();
      return;
    }
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
      colors: ['#ff6a1a', '#ffb238', '#00f5d4', '#ffffff']
    });
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`} ref={navRef}>
      <div className="navbar-container glass-panel">
        
        {/* Brand Logo & Monogram */}
        <a href="#hero" className="brand-link" onClick={closeMobileMenu}>
          <div className="brand-monogram-box">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-svg">
              <defs>
                <linearGradient id="rsNavGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6a1a" />
                  <stop offset="50%" stopColor="#ffb238" />
                  <stop offset="100%" stopColor="#00f5d4" />
                </linearGradient>
              </defs>
              <polygon points="22,3 39,13 39,31 22,41 5,31 5,13" stroke="url(#rsNavGrad)" strokeWidth="2" fill="rgba(255, 106, 26, 0.12)" />
              <text x="22" y="27" textAnchor="middle" fill="currentColor" className="brand-monogram-text" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="900" letterSpacing="0.5">RS</text>
              <circle cx="22" cy="7" r="1.5" fill="#ff6a1a" />
              <circle cx="22" cy="37" r="1.5" fill="#00f5d4" />
            </svg>
          </div>
          <div className="brand-identity">
            <span className="brand-name">Rabius Sani</span>
            <span className="brand-tagline">Software &amp; Data</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`}>
            About
          </a>
          <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`}>
            Works
          </a>
          <a href="#skills" className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`}>
            Skills
          </a>
          <a href="#experience" className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`}>
            Experience
          </a>
          <a href="#contact" className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`}>
            Contact
          </a>
        </nav>

        {/* Action Buttons: Theme Switcher, GitHub & Download CV */}
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button 
            type="button"
            className="btn-theme-toggle" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <i className="fas fa-sun theme-icon-sun"></i>
            ) : (
              <i className="fas fa-moon theme-icon-moon"></i>
            )}
          </button>

          {/* GitHub Profile */}
          <a 
            href="https://github.com/mohammad-rabius-sani" 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-icon-link"
            title="GitHub Profile (Opens in New Tab)"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* Resume In-Browser View / Download */}
          <button 
            type="button"
            className="btn-cv-pill"
            onClick={handleCvClick}
            title="Preview Official Resume PDF"
          >
            <i className="fas fa-file-pdf"></i>
            <span>Resume</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'is-open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <div 
        id="mobile-nav-drawer"
        className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-visible' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="mobile-drawer-content glass-panel">
          
          {/* Mobile Theme Toggle Row */}
          <div className="mobile-theme-row">
            <span className="mobile-theme-label">
              <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
              <span>Display Theme: {theme === 'dark' ? 'Dark Void' : 'Clean Light'}</span>
            </span>
            <button 
              type="button"
              className="btn-theme-toggle mobile-theme-btn" 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <i className="fas fa-sun theme-icon-sun"></i>
              ) : (
                <i className="fas fa-moon theme-icon-moon"></i>
              )}
            </button>
          </div>

          <a href="#about" className="mobile-nav-link" onClick={closeMobileMenu}>
            <i className="fas fa-user"></i> About Dossier
          </a>
          <a href="#projects" className="mobile-nav-link" onClick={closeMobileMenu}>
            <i className="fas fa-layer-group"></i> Featured Works
          </a>
          <a href="#skills" className="mobile-nav-link" onClick={closeMobileMenu}>
            <i className="fas fa-microchip"></i> Core Competencies
          </a>
          <a href="#experience" className="mobile-nav-link" onClick={closeMobileMenu}>
            <i className="fas fa-briefcase"></i> Career History
          </a>
          <a href="#contact" className="mobile-nav-link" onClick={closeMobileMenu}>
            <i className="fas fa-envelope"></i> Get in Touch
          </a>
          
          <div className="mobile-cv-wrap">
            <button 
              type="button"
              className="btn-primary mobile-cv-btn"
              onClick={() => {
                closeMobileMenu();
                if (onOpenResume) {
                  onOpenResume();
                } else {
                  handleCvClick();
                }
              }}
            >
              <i className="fas fa-file-pdf"></i> Preview Full CV (In-Browser)
            </button>

            <a 
              href="https://github.com/mohammad-rabius-sani"
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-github-link"
              onClick={closeMobileMenu}
            >
              <i className="fab fa-github"></i>
              <span>GitHub Profile (@mohammad-rabius-sani)</span>
              <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Backdrop Overlay (Smart Auto-Close on Outside Click) */}
      <div 
        className={`mobile-backdrop ${mobileMenuOpen ? 'is-visible' : ''}`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />
    </header>
  );
};

export default Navbar;
