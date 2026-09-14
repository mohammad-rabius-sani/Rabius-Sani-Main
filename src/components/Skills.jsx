import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const barsRef = useRef([]);

  const skillCategories = [
    { id: 'all', label: 'All Disciplines', icon: 'fas fa-layer-group' },
    { id: 'web', label: 'Full-Stack & Web', icon: 'fas fa-code' },
    { id: 'data', label: 'Data & Analytics', icon: 'fas fa-chart-pie' },
    { id: 'mobile', label: 'Mobile & Android', icon: 'fab fa-android' },
    { id: 'cloud', label: 'Databases & Ops', icon: 'fas fa-server' }
  ];

  const pillarCards = [
    {
      title: 'Full-Stack Web',
      subtitle: 'Frontend & APIs',
      icon: 'fab fa-react',
      color: 'cyan',
      tech: 'React 18 · TypeScript · Vite · Tailwind CSS',
      level: '92%'
    },
    {
      title: 'Data & BI',
      subtitle: 'Intelligence & Modeling',
      icon: 'fas fa-chart-line',
      color: 'amber',
      tech: 'Power BI · DAX · SQL · Excel Pivots',
      level: '95%'
    },
    {
      title: 'Mobile Systems',
      subtitle: 'Native Android & Media',
      icon: 'fab fa-android',
      color: 'green',
      tech: 'Kotlin · Jetpack Compose · Media3 ExoPlayer',
      level: '90%'
    },
    {
      title: 'Databases & Ops',
      subtitle: 'Storage & Infrastructure',
      icon: 'fas fa-database',
      color: 'ember',
      tech: 'PostgreSQL · Supabase RLS · IT Systems',
      level: '92%'
    }
  ];

  const skillItems = [
    // Web & Full-Stack
    { 
      name: 'React 18 & TypeScript', 
      category: 'web', 
      level: 90, 
      tier: 'Production', 
      icon: 'fab fa-react', 
      iconColor: '#00d8ff',
      detail: 'Component Architecture, Hooks, State Management, Strict Typing'
    },
    { 
      name: 'HTML5, Modern CSS & Tailwind', 
      category: 'web', 
      level: 95, 
      tier: 'Mastery', 
      icon: 'fab fa-css3-alt', 
      iconColor: '#38bdf8',
      detail: 'Responsive Layouts, Glassmorphism, 3D CSS Transforms, Micro-animations'
    },
    { 
      name: 'JavaScript (ES6+) & Modern Web APIs', 
      category: 'web', 
      level: 92, 
      tier: 'Advanced', 
      icon: 'fab fa-js', 
      iconColor: '#f7df1e',
      detail: 'Async/Await, DOM Performance, Canvas, Local Storage & Fetch'
    },
    { 
      name: 'WordPress CMS & Web Deployments', 
      category: 'web', 
      level: 95, 
      tier: 'Solo Lead', 
      icon: 'fab fa-wordpress', 
      iconColor: '#21759b',
      detail: 'Custom Themes, Plugin Optimization, Full Site Architecture & Client Deployments'
    },

    // Data Analytics & BI
    { 
      name: 'Power BI & Advanced DAX', 
      category: 'data', 
      level: 95, 
      tier: 'Flagship', 
      icon: 'fas fa-chart-line', 
      iconColor: '#f2c811',
      detail: 'Star-Schema Data Modeling, Time Intelligence, Profit Margin Forecasting'
    },
    { 
      name: 'Microsoft Excel (Pivots, Slicers, VBA)', 
      category: 'data', 
      level: 96, 
      tier: 'Mastery', 
      icon: 'fas fa-file-excel', 
      iconColor: '#107c41',
      detail: 'Multi-Sheet Cleaning, Dynamic Dashboards, Nested Lookups & Slicers'
    },
    { 
      name: 'SQL & PostgreSQL Relational Analytics', 
      category: 'data', 
      level: 94, 
      tier: 'Production', 
      icon: 'fas fa-database', 
      iconColor: '#336791',
      detail: 'Window Functions, Subqueries, CTEs, Data Cleansing & Relational Normalization'
    },
    { 
      name: 'Data Pipeline Engineering & ETL', 
      category: 'data', 
      level: 88, 
      tier: 'Advanced', 
      icon: 'fas fa-arrow-progress', 
      iconColor: '#ff6a1a',
      detail: 'ETL Pipelines, Schema Validation, Business Metric Standardisation'
    },

    // Mobile & Android
    { 
      name: 'Android TV & Google Media3 ExoPlayer', 
      category: 'mobile', 
      level: 95, 
      tier: 'Flagship', 
      icon: 'fab fa-android', 
      iconColor: '#3ddc84',
      detail: 'Custom HLS Bitrate Engine, D-Pad Remote Control Focus Engine, 0ms Cache'
    },
    { 
      name: 'Kotlin & Jetpack Compose', 
      category: 'mobile', 
      level: 92, 
      tier: 'Production', 
      icon: 'fas fa-mobile-screen', 
      iconColor: '#7f52ff',
      detail: 'Modern Declarative UI, Coroutines, StateFlow, Room Local SQLite DB'
    },
    { 
      name: 'Clean Architecture & MVI Pattern', 
      category: 'mobile', 
      level: 92, 
      tier: 'Architecture', 
      icon: 'fas fa-cubes', 
      iconColor: '#00f5d4',
      detail: 'Reactive Unidirectional Data Flow, SQLite Room, Zero Telemetry'
    },

    // Databases, Cloud & IT Ops
    { 
      name: 'PostgreSQL & Supabase BaaS', 
      category: 'cloud', 
      level: 90, 
      tier: 'Production', 
      icon: 'fas fa-server', 
      iconColor: '#3ecf8e',
      detail: 'Row-Level Security (RLS), Trigger Functions, Realtime Telemetry, Indexing'
    },
    { 
      name: 'Git, GitHub & Version Control', 
      category: 'cloud', 
      level: 92, 
      tier: 'Workflow', 
      icon: 'fab fa-git-alt', 
      iconColor: '#f05032',
      detail: 'Branch Workflows, Release Tagging, Markdown Architecture Documentation'
    },
    { 
      name: 'IT Infrastructure & Network Diagnostics', 
      category: 'cloud', 
      level: 92, 
      tier: 'Field Lead', 
      icon: 'fas fa-network-wired', 
      iconColor: '#38bdf8',
      detail: 'Local LAN Troubleshooting, Hardware OS Setup, System Uptime Assurance'
    },
    { 
      name: 'Institutional Database Records Admin', 
      category: 'cloud', 
      level: 94, 
      tier: 'Enterprise', 
      icon: 'fas fa-users-gear', 
      iconColor: '#f59e0b',
      detail: 'Managed 500+ Staff/Student Records, Streamlined Payroll Turnaround by 30%'
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skillItems.filter(item => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = !searchQuery.trim() || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.detail.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tier.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  // Animate skill bars on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.classList.contains('skill-bar-fill')) {
          entry.target.style.width = entry.target.dataset.width;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    barsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section id="skills" className="section skills-section fade-up-element">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-pill-tag">
            <i className="fas fa-microchip"></i>
            <span>Engineering &amp; Analytics Stack</span>
          </div>
          <h2 className="section-main-title">
            Core Competencies &amp; <span className="text-gradient-cyan">Technical Depth</span>
          </h2>
          <p className="section-main-subtitle">
            A comprehensive, battle-tested skillset spanning full-stack web engineering, native mobile systems, and enterprise business intelligence.
          </p>
        </div>

        {/* 1. TOP 4 PILLAR CAPABILITY CARDS */}
        <div className="skills-pillars-grid">
          {pillarCards.map((pillar, idx) => (
            <div key={idx} className={`pillar-card glass-panel pillar-${pillar.color}`}>
              <div className="pillar-header">
                <div className="pillar-icon-box">
                  <i className={pillar.icon}></i>
                </div>
                <span className="pillar-level-badge">{pillar.level}</span>
              </div>
              <div className="pillar-content">
                <h3 className="pillar-title">{pillar.title}</h3>
                <span className="pillar-sub">{pillar.subtitle}</span>
                <p className="pillar-tech">{pillar.tech}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Command Prompt Header */}
        <div className="skills-terminal-bar">
          <div className="terminal-bar-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="terminal-bar-text">
            <span className="term-usr">rabius-sani@devbox</span>:<span className="term-path">~/skills</span>$&nbsp;
            <span className="term-cmd">query_stack --discipline=&quot;{activeCategory}&quot; --status=active</span>
            <span className="term-cursor">_</span>
          </div>
          <div className="terminal-bar-meta">
            <span className="term-badge">ENGINEERING SPEC v2.6</span>
          </div>
        </div>

        {/* 2. CATEGORY FILTER NAVIGATION BAR & LIVE SEARCH */}
        <div className="skills-nav-row">
          <div className="skills-filter-nav">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`skills-cat-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <i className={cat.icon}></i>
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
          <div className="skills-search-box">
            <i className="fas fa-magnifying-glass search-icon"></i>
            <input 
              type="text" 
              placeholder="Search stack (e.g. react, sql, compose)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="skills-search-input"
              aria-label="Filter skills by keyword"
            />
            {searchQuery && (
              <button className="clear-search-btn" onClick={() => setSearchQuery('')} aria-label="Clear search">×</button>
            )}
          </div>
        </div>

        {/* 3. INTERACTIVE 2-COLUMN SKILLS GRID */}
        <div className="skills-cards-grid">
          {filteredSkills.length === 0 ? (
            <div className="skills-empty-notice glass-panel">
              <i className="fas fa-filter-circle-xmark"></i>
              <p>No skills matched &quot;{searchQuery}&quot;. Try searching &quot;React&quot;, &quot;SQL&quot;, &quot;Kotlin&quot;, or &quot;DAX&quot;.</p>
              <button className="btn-secondary" onClick={() => setSearchQuery('')}>Reset Search</button>
            </div>
          ) : (
            filteredSkills.map((skill, idx) => (
              <div key={idx} className="skill-spec-card glass-panel">
                <div className="skill-card-top-row">
                  <div className="skill-title-cluster">
                    <div 
                      className="skill-tech-icon"
                      style={{ color: skill.iconColor }}
                    >
                      <i className={skill.icon}></i>
                    </div>
                    <div>
                      <h4 className="skill-title-text">{skill.name}</h4>
                      <span className="skill-detail-sub">{skill.detail}</span>
                    </div>
                  </div>
                  <div className="skill-tier-badge">
                    {skill.tier}
                  </div>
                </div>

                {/* Progress Level Bar */}
                <div className="skill-meter-wrap">
                  <div className="skill-meter-track">
                    <div 
                      className="skill-bar-fill"
                      data-width={`${skill.level}%`}
                      ref={(el) => (barsRef.current[idx] = el)}
                    ></div>
                  </div>
                  <span className="skill-pct-label">{skill.level}%</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* 4. BOTTOM ARCHITECTURE PILLARS SUMMARY */}
        <div className="skills-footer-strip glass-panel">
          <div className="strip-item">
            <i className="fas fa-bolt text-gradient-ember"></i>
            <span><strong>High Performance:</strong> Optimized runtime execution, lazy batch loading &amp; sub-second query speeds</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-item">
            <i className="fas fa-shield-halved text-gradient-cyan"></i>
            <span><strong>Resilient Architecture:</strong> Clean MVI, strict TypeScript typing, and secure Row-Level Security</span>
          </div>
          <div className="strip-divider"></div>
          <div className="strip-item">
            <i className="fas fa-chart-pie text-gradient-amber"></i>
            <span><strong>Analytical Precision:</strong> Star schema modeling &amp; verified DAX calculations for decision clarity</span>
          </div>
        </div>

        {/* 5. TOOLING & DEVOPS ECOSYSTEM CHIP CLOUD */}
        <div className="auxiliary-tools-strip glass-panel">
          <div className="aux-header">
            <span className="aux-tag"><i className="fas fa-toolbox"></i> Ecosystem &amp; Utilities</span>
            <h4 className="aux-title">Everyday Engineering Tooling, Platforms &amp; Protocols</h4>
          </div>
          <div className="aux-chips-grid">
            {[
              { name: 'Docker', icon: 'fab fa-docker' },
              { name: 'Git & GitHub', icon: 'fab fa-github' },
              { name: 'Postman REST API', icon: 'fas fa-paper-plane' },
              { name: 'Vite & Rolldown', icon: 'fas fa-bolt' },
              { name: 'Vercel Deployment', icon: 'fas fa-cloud-arrow-up' },
              { name: 'Supabase RLS & Auth', icon: 'fas fa-database' },
              { name: 'Linux Bash CLI', icon: 'fas fa-terminal' },
              { name: 'Android Studio', icon: 'fab fa-android' },
              { name: 'Figma UI/UX', icon: 'fab fa-figma' },
              { name: 'D-Pad Remote UI', icon: 'fas fa-tv' },
              { name: 'SponsorBlock API', icon: 'fas fa-ban' },
              { name: 'HLS / M3U8 Streams', icon: 'fas fa-tower-broadcast' },
              { name: 'Power Query M', icon: 'fas fa-table' },
              { name: 'DAX Studio', icon: 'fas fa-chart-line' }
            ].map((tool, i) => (
              <span key={i} className="aux-chip">
                <i className={tool.icon}></i>
                <span>{tool.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
