import React, { useState, useEffect } from 'react';
import './FloatingBackToTop.css';

const FloatingBackToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }

      setVisible(currentScroll > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`floating-top-wrap ${visible ? 'is-visible' : ''}`}>
      <button 
        className="floating-top-btn"
        onClick={scrollToTop}
        aria-label="Back to Top"
        title="Scroll to Top"
      >
        {/* Circular Scroll Progress Ring */}
        <svg className="progress-ring" viewBox="0 0 44 44">
          <circle 
            className="ring-bg" 
            cx="22" cy="22" r="19" 
          />
          <circle 
            className="ring-bar" 
            cx="22" cy="22" r="19"
            style={{
              strokeDasharray: 119.38, // 2 * PI * 19
              strokeDashoffset: 119.38 - (scrollProgress / 100) * 119.38
            }}
          />
        </svg>

        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default FloatingBackToTop;
