import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Left: Brand Identity & Monogram */}
        <div className="footer-left">
          <div className="footer-monogram">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="rsFooterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff6a1a" />
                  <stop offset="100%" stopColor="#00f5d4" />
                </linearGradient>
              </defs>
              <polygon points="22,3 39,13 39,31 22,41 5,31 5,13" stroke="url(#rsFooterGrad)" strokeWidth="2" fill="rgba(255, 106, 26, 0.1)" />
              <text x="22" y="27" textAnchor="middle" fill="currentColor" className="footer-monogram-text" fontSize="13" fontFamily="'Outfit', sans-serif" fontWeight="900">RS</text>
            </svg>
          </div>
          
          <div className="footer-brand-info">
            <div className="footer-name">Rabius Sani</div>
            <div className="footer-role">Software Engineer & Data Analyst · Dhaka, Bangladesh</div>
          </div>
        </div>

        {/* Center: Quick Nav Links */}
        <div className="footer-center-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Works</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Right: Social & Back-to-Top */}
        <div className="footer-right">
          <div className="footer-social-strip">
            <a 
              href="https://github.com/mohammad-rabius-sani" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-link" 
              title="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a 
              href="https://linkedin.com/in/mohammad-rabius-sani" 
              target="_blank" 
              rel="noreferrer" 
              className="footer-social-link" 
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a 
              href="mailto:mohammad.rabius.sanii@gmail.com" 
              className="footer-social-link" 
              title="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>

          <button 
            className="btn-back-to-top"
            onClick={scrollToTop}
            title="Scroll to Top"
            aria-label="Scroll to Top"
          >
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>

      </div>

      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <span className="footer-copy">
            © {new Date().getFullYear()} Rabius Sani. Engineered with modern 3D WebGL & React.
          </span>
          <span className="footer-built">
            Dhaka, Bangladesh · GMT+6
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
