import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './Hero.css';

const Hero = ({ onOpenResume }) => {
  const [hudTab, setHudTab] = useState('profile'); // 'profile' | 'code'
  const [dhakaTime, setDhakaTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Dhaka',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
        setDhakaTime(formatted);
      } catch {
        setDhakaTime('');
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCvDownload = () => {
    confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#ff6a1a', '#ffb238', '#00f5d4', '#ffffff']
    });
  };

  return (
    <section id="hero" className="hero-section">
      
      {/* Subtle Ambient Mesh Layer */}
      <div className="hero-ambient-glow"></div>

      <div className="container hero-container">
        <div className="hero-layout">

          {/* ================= LEFT: 2026 HERO CONTENT ================= */}
          <div className="hero-text-block">
            
            {/* Live Availability Status Pill with Live Dhaka Time */}
            <div className="hero-status-pill">
              <span className="pulse-dot"></span>
              <span className="status-copy">Available for SWE, Data &amp; IT Roles</span>
              <span className="status-divider">·</span>
              <span className="status-time">
                <i className="far fa-clock"></i> Dhaka (UTC+6): {dhakaTime || 'Active'}
              </span>
            </div>

            {/* Bold, Confident Headline */}
            <h1 className="hero-headline">
              <span className="hero-greet-line">Hello, I'm</span>
              <span className="hero-name-highlight text-gradient-ember">Rabius Sani</span>
              <span className="hero-punch-tagline">
                Software Engineer · Data Analyst · IT Specialist
              </span>
            </h1>

            {/* Human, Versatile Engineering Narrative */}
            <p className="hero-lead-text">
              I design and engineer high-performance software systems, native Android platforms, and decision-grade data architectures. Fusing clean software patterns with modern AI co-pilots, I build fast, scalable, and resilient digital solutions that eliminate operational bottlenecks.
            </p>

            {/* Clean, Focused Action Buttons - Prominently Above the Fold */}
            <div className="hero-action-buttons">
              <a href="#projects" className="btn-primary hero-cta-btn">
                <i className="fas fa-rocket"></i>
                <span>Explore Works</span>
              </a>

              <button 
                type="button"
                className="btn-secondary hero-resume-btn"
                onClick={() => {
                  if (onOpenResume) {
                    onOpenResume();
                  } else {
                    handleCvDownload();
                  }
                }}
                title="Preview Official Curriculum Vitae (In-Browser PDF)"
              >
                <i className="fas fa-file-pdf"></i>
                <span>View CV / Resume</span>
              </button>

              <a href="#contact" className="btn-outline-talk">
                <span>Let's Talk</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>

            {/* Balanced Engineering Metrics Strip */}
            <div className="hero-metrics-strip">
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-ember">3+</span>
                <span className="metric-text">Years Experience</span>
              </div>
              <div className="hero-metric-separator"></div>
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-cyan">100%</span>
                <span className="metric-text">Production Code</span>
              </div>
              <div className="hero-metric-separator"></div>
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-amber">5,900+</span>
                <span className="metric-text">BI Records</span>
              </div>
              <div className="hero-metric-separator"></div>
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-cyan">Global</span>
                <span className="metric-text">Local &amp; Remote</span>
              </div>
            </div>

            {/* Quick Connect Social Strip */}
            <div className="hero-social-strip">
              <span className="social-strip-label">Direct Connect:</span>
              <a 
                href="https://github.com/mohammad-rabius-sani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-box" 
                title="GitHub Profile (New Tab)"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/mohammad-rabius-sani" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon-box" 
                title="LinkedIn Profile (New Tab)"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="mailto:mohammad.rabius.sanii@gmail.com" 
                className="social-icon-box" 
                title="Send Direct Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a 
                href="tel:+8801774745666" 
                className="social-icon-box" 
                title="Direct Phone / WhatsApp"
              >
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>

          </div>

          {/* ================= RIGHT: PERSONA HUD & DEVELOPER TERMINAL ================= */}
          <div className="hero-visual-block">
            
            <div className="hero-id-card glass-panel">
              
              {/* HUD Header Bar & Interactive Mode Switcher */}
              <div className="card-top-bar">
                <div className="hud-tab-switcher">
                  <button 
                    className={`hud-tab-btn ${hudTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setHudTab('profile')}
                  >
                    <i className="fas fa-id-badge"></i> Profile
                  </button>
                  <button 
                    className={`hud-tab-btn ${hudTab === 'code' ? 'active' : ''}`}
                    onClick={() => setHudTab('code')}
                  >
                    <i className="fas fa-code"></i> Config
                  </button>
                </div>

                <div className="live-stream-dot">
                  <span className="pulse-dot-cyan"></span>
                  <span>ACTIVE</span>
                </div>
              </div>

              {/* MODE 1: HOLOGRAPHIC PROFILE */}
              {hudTab === 'profile' ? (
                <>
                  <div className="card-photo-container">
                    <img 
                      src="/Images/1.webp" 
                      alt="Rabius Sani — Software Engineer &amp; Data Analyst Portrait" 
                      className="card-portrait-img"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                      width="340"
                      height="420"
                    />
                    <div className="card-photo-gradient"></div>
                    
                    {/* Cyber Laser Scanner Sweep Animation */}
                    <div className="hud-laser-scanner"></div>

                    {/* Audio-Visualizer Equalizer Simulation */}
                    <div className="hud-equalizer">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    {/* Floating Micro-Chip */}
                    <div className="photo-floating-chip">
                      <i className="fas fa-terminal"></i>
                      <span>SWE · Data · IT</span>
                    </div>
                  </div>

                  <div className="card-bottom-info">
                    <div className="card-dev-name">Rabius Sani</div>
                    <div className="card-dev-title">Software Engineer · Data Analyst · IT</div>
                    <div className="card-dev-tags">
                      <span>React 19</span>
                      <span>TypeScript</span>
                      <span>Kotlin</span>
                      <span>Power BI</span>
                      <span>PostgreSQL</span>
                      <span>AI Tools</span>
                    </div>
                  </div>
                </>
              ) : (
                /* MODE 2: DEVELOPER CONFIG / TS TERMINAL */
                <div className="telemetry-terminal-pane">
                  <div className="terminal-header">
                    <span className="term-dot red"></span>
                    <span className="term-dot yellow"></span>
                    <span className="term-dot green"></span>
                    <span className="term-title">rabius_sani.config.ts</span>
                  </div>
                  <div className="terminal-body">
                    <p className="t-line"><span className="t-prompt">const</span> <span className="t-cyan">engineer</span> = &#123;</p>
                    <p className="t-line t-indent"><span className="t-amber">name</span>: <span className="t-green">'Rabius Sani'</span>,</p>
                    <p className="t-line t-indent"><span className="t-amber">role</span>: <span className="t-green">'Software Engineer · Data Analyst · IT'</span>,</p>
                    <p className="t-line t-indent"><span className="t-amber">domains</span>: [</p>
                    <p className="t-line t-indent-2"><span className="t-green">'Full-Stack Web Systems'</span>,</p>
                    <p className="t-line t-indent-2"><span className="t-green">'Native Mobile &amp; IPTV'</span>,</p>
                    <p className="t-line t-indent-2"><span className="t-green">'Enterprise BI &amp; SQL'</span>,</p>
                    <p className="t-line t-indent-2"><span className="t-green">'AI-Augmented Architecture'</span></p>
                    <p className="t-line t-indent">],</p>
                    <p className="t-line t-indent"><span className="t-amber">status</span>: <span className="t-cyan">'Open for high-impact roles'</span>,</p>
                    <p className="t-line t-indent"><span className="t-amber">methodology</span>: <span className="t-green">'AI-Assisted Fast Delivery'</span></p>
                    <p className="t-line">&#125;;</p>
                    <p className="t-cursor-line"><span className="t-prompt">&gt;</span> <span className="t-blink">readyToDeploy()</span></p>
                  </div>
                  <div className="terminal-footer">
                    <button 
                      className="terminal-switch-back"
                      onClick={() => setHudTab('profile')}
                    >
                      <i className="fas fa-arrow-left"></i> View Photo Portrait
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
