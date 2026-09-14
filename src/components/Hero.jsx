import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import './Hero.css';

const Hero = () => {
  const [hudTab, setHudTab] = useState('profile'); // 'profile' | 'code'
  const [dhakaTime, setDhakaTime] = useState('');
  const [copiedStatus, setCopiedStatus] = useState('');

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
      } catch (e) {
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

  const copyContact = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedStatus(type);
    setTimeout(() => setCopiedStatus(''), 2200);
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
              <span className="status-copy">Available for Software Engineering &amp; Data Roles</span>
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
                Software Engineer &amp; Data Analyst.
              </span>
            </h1>

            {/* Human, Versatile Engineering Narrative */}
            <p className="hero-lead-text">
              I design and develop high-performance software systems, modern full-stack web applications, and data-driven intelligence solutions. Dedicated to clean architecture, scalable code, and delivering impactful digital products that solve real-world problems.
            </p>

            {/* Live Developer Shell Prompt (Engineering Signature) */}
            <div className="hero-terminal-strip">
              <div className="terminal-prompt-row">
                <span className="terminal-user">rabius-sani@devbox</span>
                <span className="terminal-sep">:</span>
                <span className="terminal-dir">~/portfolio</span>
                <span className="terminal-git">(main)</span>
                <span className="terminal-symbol">$</span>
                <span className="terminal-cmd-text">sys.info --stack=prod</span>
              </div>
              <div className="terminal-output-row">
                <span className="term-tag tag-ok">● STATUS: READY</span>
                <span className="term-tag tag-stack">REACT 18 · KOTLIN · POSTGRESQL · POWER BI</span>
                <span className="term-tag tag-cache">LATENCY: &lt;10ms</span>
              </div>
            </div>

            {/* Quick Tech Jump Pills */}
            <div className="hero-quick-chips">
              <span className="quick-chips-label"><i className="fas fa-bolt"></i> Quick Jump:</span>
              <a href="#projects" className="quick-chip chip-android"><i className="fab fa-android"></i> Android TV &amp; Kotlin</a>
              <a href="#projects" className="quick-chip chip-react"><i className="fab fa-react"></i> React 18 &amp; TS</a>
              <a href="#projects" className="quick-chip chip-bi"><i className="fas fa-chart-pie"></i> Power BI &amp; DAX</a>
              <a href="#projects" className="quick-chip chip-sql"><i className="fas fa-database"></i> PostgreSQL &amp; SQL</a>
            </div>

            {/* Balanced Engineering Metrics Strip */}
            <div className="hero-metrics-strip">
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-ember">3+</span>
                <span className="metric-text">Years Building &amp; Ops</span>
              </div>
              <div className="hero-metric-separator"></div>
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-cyan">100%</span>
                <span className="metric-text">Production Code Delivery</span>
              </div>
              <div className="hero-metric-separator"></div>
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-amber">5,900+</span>
                <span className="metric-text">BI Records Modeled</span>
              </div>
              <div className="hero-metric-separator"></div>
              <div className="hero-metric-item">
                <span className="metric-number text-gradient-cyan">18+</span>
                <span className="metric-text">Public Repositories</span>
              </div>
            </div>

            {/* Call to Actions (With Direct New-Tab GitHub Option) */}
            <div className="hero-action-buttons">
              <a href="#projects" className="btn-primary hero-cta-btn">
                <span>Explore Projects</span>
                <i className="fas fa-arrow-down"></i>
              </a>

              {/* Direct GitHub Option (Opens in New Tab) */}
              <a 
                href="https://github.com/mohammad-rabius-sani?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-hero-github"
                title="Explore All Repositories on GitHub (Opens in New Tab)"
              >
                <i className="fab fa-github"></i>
                <span>More on GitHub</span>
                <i className="fas fa-arrow-up-right-from-square"></i>
              </a>

              <a 
                href="/Mohammad_Rabius_Sani_CV.pdf" 
                download="Mohammad_Rabius_Sani_CV.pdf" 
                className="btn-secondary hero-resume-btn"
                onClick={handleCvDownload}
                title="Download Official PDF Resume"
              >
                <i className="fas fa-file-arrow-down"></i>
                <span>Resume</span>
              </a>

              <a href="#contact" className="btn-outline-talk">
                <span>Let's Talk</span>
              </a>
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
                      src="/Images/1.jpg" 
                      alt="Rabius Sani" 
                      className="card-portrait-img"
                      loading="eager"
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
                      <span>Full-Stack &amp; Data</span>
                    </div>
                  </div>

                  <div className="card-bottom-info">
                    <div className="card-dev-name">Rabius Sani</div>
                    <div className="card-dev-title">Software Engineer &amp; Data Analyst</div>
                    <div className="card-dev-tags">
                      <span>React 18</span>
                      <span>TypeScript</span>
                      <span>Kotlin</span>
                      <span>Power BI</span>
                      <span>PostgreSQL</span>
                      <span>Python</span>
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
                    <p className="t-line t-indent"><span className="t-amber">role</span>: <span className="t-green">'Software Engineer &amp; Data Analyst'</span>,</p>
                    <p className="t-line t-indent"><span className="t-amber">domains</span>: [</p>
                    <p className="t-line t-indent-2"><span className="t-green">'Full-Stack Web'</span>,</p>
                    <p className="t-line t-indent-2"><span className="t-green">'Native Mobile Systems'</span>,</p>
                    <p className="t-line t-indent-2"><span className="t-green">'Enterprise BI &amp; SQL'</span></p>
                    <p className="t-line t-indent">],</p>
                    <p className="t-line t-indent"><span className="t-amber">status</span>: <span className="t-cyan">'Open for impactful roles'</span>,</p>
                    <p className="t-line t-indent"><span className="t-amber">relocation</span>: <span className="t-green">'Remote / Hybrid / On-Site'</span></p>
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
