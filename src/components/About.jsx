import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [selectedPhoto, setSelectedPhoto] = useState('/Images/1.webp');
  const [copiedField, setCopiedField] = useState(null);

  const photos = [
    { src: '/Images/1.webp', label: 'Studio' },
    { src: '/Images/2.webp', label: 'Editorial' },
    { src: '/Images/3.webp', label: 'Portrait' },
    { src: '/Images/4.webp', label: 'Outdoor' }
  ];

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="about" className="section about-section fade-up-element">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-pill-tag">
            <i className="fas fa-id-badge"></i>
            <span>Executive Dossier</span>
          </div>
          <h2 className="section-main-title">
            Engineering Clarity & <span className="text-gradient-ember">Deploying Systems</span>
          </h2>
          <p className="section-main-subtitle">
            Bridging Software Engineering, High-Performance Streaming Apps, and Enterprise Business Intelligence.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="about-bento-grid">
          
          {/* ================= CARD 1: PRIMARY BIO & STORY (LEFT 2 COLS) ================= */}
          <div className="bento-card bento-story glass-panel">
            <div className="bento-badge-strip">
              <span className="bento-mini-badge">
                <i className="fas fa-terminal"></i> Software Engineering & Data Architecture
              </span>
              <span className="bento-location-badge">
                <i className="fas fa-map-marker-alt"></i> Dhaka, Bangladesh · Global Remote
              </span>
            </div>

            <h3 className="story-title">
              Building reliable software &amp; data systems that solve real headaches.
            </h3>

            <div className="story-paragraphs">
              <p>
                I’m a software engineer and data analyst born and based in Dhaka. I don’t write code just to push commits—I build software because I genuinely love seeing things run faster, smoother, and without crashing when traffic spikes. Whether it's crafting native Android streaming engines that run buttery-smooth on budget TV boxes or structuring clean relational schemas that turn chaotic numbers into crystal-clear Power BI dashboards, I care about practical, real-world impact.
              </p>
              <p>
                Over the past few years, I’ve worked extensively as an independent freelance engineer—both <strong>locally across Bangladesh</strong> and with <strong>international clients worldwide</strong>. From deploying full-scale web platforms completely solo to overhauling administrative databases and payroll pipelines for 500+ users, my philosophy is straightforward: take a complex, messy problem, architect a resilient solution, and deliver it with zero excuses.
              </p>
            </div>

            {/* Quick Metrics Strip */}
            <div className="story-stats-grid">
              <div className="story-stat-item">
                <span className="stat-num text-gradient-ember">100%</span>
                <span className="stat-desc">Solo Production Delivery</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num text-gradient-cyan">~30%</span>
                <span className="stat-desc">Workflow Velocity Improvement</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num text-gradient-ember">500+</span>
                <span className="stat-desc">Institutional Records Handled</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num text-gradient-cyan">Global</span>
                <span className="stat-desc">Local &amp; Remote Freelance</span>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: INTERACTIVE PHOTO SHOWCASE (RIGHT 1 COL) ================= */}
          <div className="bento-card bento-gallery glass-panel">
            <div className="gallery-main-view">
              <img 
                src={selectedPhoto} 
                alt="Rabius Sani — Software Engineer &amp; Data Analyst" 
                className="gallery-active-img"
                loading="lazy"
                decoding="async"
                width="480"
                height="580"
              />
              <div className="gallery-gradient-overlay"></div>
              <div className="gallery-caption">
                <span className="gallery-name">Rabius Sani</span>
                <span className="gallery-tag">Dhaka-1236 · Open to Remote &amp; On-site</span>
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="gallery-thumbs">
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${selectedPhoto === p.src ? 'active' : ''}`}
                  onClick={() => setSelectedPhoto(p.src)}
                  title={`View ${p.label} portrait`}
                >
                  <img 
                    src={p.src} 
                    alt={`Rabius Sani ${p.label}`} 
                    loading="lazy"
                    decoding="async"
                    width="64"
                    height="64"
                  />
                  <span>{p.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* ================= CARD 3: ACADEMIC FOUNDATION ================= */}
          <div className="bento-card bento-education glass-panel">
            <div className="bento-header-row">
              <div className="bento-icon-box violet-box">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <h4 className="bento-subhead">Education &amp; Credentials</h4>
                <p className="bento-subdesc">B.Sc. in Software Engineering · Class of 2022</p>
              </div>
            </div>

            <div className="degree-card">
              <div className="degree-meta">
                <span className="degree-title">Bachelor of Science (B.Sc.) in Software Engineering</span>
                <span className="degree-year">Class of 2022</span>
              </div>
              <p className="degree-info">
                Core engineering foundations: Object-Oriented Programming, Database Systems (RDBMS &amp; SQL), Data Structures &amp; Algorithms, Software Architecture, Web Engineering, and Project Management.
              </p>
            </div>

            <div className="cert-pills-row">
              <span className="cert-pill">
                <i className="fas fa-award"></i> HDNB Data Analytics Bootcamp
              </span>
              <span className="cert-pill">
                <i className="fas fa-database"></i> Udemy SQL & PostgreSQL
              </span>
              <span className="cert-pill">
                <i className="fas fa-palette"></i> Pencilbox UI/UX Design
              </span>
              <span className="cert-pill">
                <i className="fas fa-cart-shopping"></i> Mexemy E-Commerce & Web
              </span>
            </div>
          </div>

          {/* ================= CARD 4: DIRECT TELEMETRY & CONTACT CHIPS ================= */}
          <div className="bento-card bento-contact-chips glass-panel">
            <div className="bento-header-row">
              <div className="bento-icon-box ember-box">
                <i className="fas fa-bolt"></i>
              </div>
              <div>
                <h4 className="bento-subhead">Direct Reach & Channels</h4>
                <p className="bento-subdesc">Click to copy instantly</p>
              </div>
            </div>

            <div className="chips-list">
              
              {/* Email Chip */}
              <div 
                className="copy-chip-item"
                onClick={() => copyToClipboard('mohammad.rabius.sanii@gmail.com', 'email')}
                title="Click to copy email"
              >
                <div className="chip-left">
                  <i className="fas fa-envelope"></i>
                  <div className="chip-details">
                    <span className="chip-label">Email</span>
                    <span className="chip-value">mohammad.rabius.sanii@gmail.com</span>
                  </div>
                </div>
                <span className="copy-action-tag">
                  {copiedField === 'email' ? '✓ Copied!' : 'Copy'}
                </span>
              </div>

              {/* Phone Chip */}
              <div 
                className="copy-chip-item"
                onClick={() => copyToClipboard('+8801774745666', 'phone')}
                title="Click to copy phone"
              >
                <div className="chip-left">
                  <i className="fas fa-phone-alt"></i>
                  <div className="chip-details">
                    <span className="chip-label">Phone / WhatsApp</span>
                    <span className="chip-value">+880 1774-745666</span>
                  </div>
                </div>
                <span className="copy-action-tag">
                  {copiedField === 'phone' ? '✓ Copied!' : 'Copy'}
                </span>
              </div>

              {/* Location Chip */}
              <div className="copy-chip-item no-click">
                <div className="chip-left">
                  <i className="fas fa-location-dot"></i>
                  <div className="chip-details">
                    <span className="chip-label">Location Base</span>
                    <span className="chip-value">Dhaka-1236, Bangladesh</span>
                  </div>
                </div>
                <span className="mode-tag">On-site · Hybrid · Remote</span>
              </div>

            </div>
          </div>

        </div>

        {/* Engineering Philosophy & 4-Step Lifecycle */}
        <div className="about-principles-strip glass-panel">
          <div className="principles-title-col">
            <span className="principles-badge"><i className="fas fa-cubes-stacked"></i> Engineering Lifecycle</span>
            <h4 className="principles-heading">How I Think &amp; Build</h4>
            <span className="principles-subtext">From initial domain discovery to privacy-hardened production deployment.</span>
          </div>
          <div className="principles-grid">
            <div className="principle-item">
              <span className="principle-step-num">01</span>
              <span className="principle-icon ember-text"><i className="fas fa-clipboard-question"></i></span>
              <div className="principle-content">
                <strong>Gather Info &amp; Discovery</strong>
                <p>Deep requirement gathering, mapping data flows, stakeholder inquiry, and uncovering root pain points before touching code.</p>
              </div>
            </div>
            <div className="principle-item">
              <span className="principle-step-num">02</span>
              <span className="principle-icon cyan-text"><i className="fas fa-compass-drafting"></i></span>
              <div className="principle-content">
                <strong>UI/UX &amp; Architecture</strong>
                <p>Ergonomic interfaces: Leanback D-pad TV navigation, fluid responsive web flows, decoupled state machines, and clean schemas.</p>
              </div>
            </div>
            <div className="principle-item">
              <span className="principle-step-num">03</span>
              <span className="principle-icon amber-text"><i className="fas fa-wand-magic-sparkles"></i></span>
              <div className="principle-content">
                <strong>Build &amp; AI-Augmented Velocity</strong>
                <p>Writing robust code in Kotlin, React &amp; SQL, leveraging modern AI to accelerate development, optimize queries, and scaffold systems.</p>
              </div>
            </div>
            <div className="principle-item">
              <span className="principle-step-num">04</span>
              <span className="principle-icon green-text"><i className="fas fa-shield-halved"></i></span>
              <div className="principle-content">
                <strong>Test &amp; Strict Privacy Focus</strong>
                <p>Stress testing, edge-case audits, and uncompromising privacy: zero unwanted telemetry, zero tracking, and offline-first Room/SQLite storage.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
