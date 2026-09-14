import React, { useState } from 'react';
import './About.css';

const About = () => {
  const [selectedPhoto, setSelectedPhoto] = useState('/Images/1.jpg');
  const [copiedField, setCopiedField] = useState(null);

  const photos = [
    { src: '/Images/1.jpg', label: 'Studio' },
    { src: '/Images/2.jpg', label: 'Editorial' },
    { src: '/Images/3.jpg', label: 'Portrait' },
    { src: '/Images/4.jpg', label: 'Outdoor' }
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
              Crafting scalable software systems &amp; decision-grade data architectures.
            </h3>

            <div className="story-paragraphs">
              <p>
                I engineer software where performance, clean architecture, and practical value converge. Across full-stack web applications, native Android platforms, and complex data intelligence models, I build solutions designed to perform reliably under high load and provide actionable clarity to users and stakeholders alike.
              </p>
              <p>
                From architecting and launching the complete official web infrastructure for <strong>NATAB (National Anti-Tuberculosis Association of Bangladesh)</strong> to modernizing academic data and payroll administration for 500+ individuals at <strong>Newcastle International School</strong>, my focus is always on engineering robust systems that eliminate operational bottlenecks.
              </p>
            </div>

            {/* Quick Metrics Strip */}
            <div className="story-stats-grid">
              <div className="story-stat-item">
                <span className="stat-num text-gradient-ember">100%</span>
                <span className="stat-desc">Solo Web Architecture (NATAB)</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num text-gradient-cyan">~30%</span>
                <span className="stat-desc">Reporting Velocity Improvement</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num text-gradient-ember">500+</span>
                <span className="stat-desc">Institutional Records Administered</span>
              </div>
              <div className="story-stat-item">
                <span className="stat-num text-gradient-cyan">1st Pos</span>
                <span className="stat-desc">Mentored Govt. Scholarship Winner</span>
              </div>
            </div>
          </div>

          {/* ================= CARD 2: INTERACTIVE PHOTO SHOWCASE (RIGHT 1 COL) ================= */}
          <div className="bento-card bento-gallery glass-panel">
            <div className="gallery-main-view">
              <img 
                src={selectedPhoto} 
                alt="Rabius Sani" 
                className="gallery-active-img"
              />
              <div className="gallery-gradient-overlay"></div>
              <div className="gallery-caption">
                <span className="gallery-name">Rabius Sani</span>
                <span className="gallery-tag">Dhaka-1236 · Open to Remote & On-site</span>
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="gallery-thumbs">
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  className={`thumb-btn ${selectedPhoto === p.src ? 'active' : ''}`}
                  onClick={() => setSelectedPhoto(p.src)}
                  title={`View ${p.label}`}
                >
                  <img src={p.src} alt={p.label} />
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
                <h4 className="bento-subhead">Education & Credentials</h4>
                <p className="bento-subdesc">Daffodil International University (DIU)</p>
              </div>
            </div>

            <div className="degree-card">
              <div className="degree-meta">
                <span className="degree-title">Bachelor of Science (B.Sc.) in Software Engineering</span>
                <span className="degree-year">Class of 2022</span>
              </div>
              <p className="degree-info">
                Core coursework: Object-Oriented Programming, Database Systems (RDBMS & SQL), Data Structures & Algorithms, Software Architecture, Web Engineering, and Project Management.
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

      </div>
    </section>
  );
};

export default About;
