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
      detail: 'Custom Themes, Plugin Optimization, Full Site Architecture (NATAB)'
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
      level: 92, 
      tier: 'Advanced', 
      icon: 'fas fa-database', 
      iconColor: '#336791',
      detail: 'CTEs, Window Functions (DENSE_RANK), Complex Multi-Table Aggregations'
    },
    { 
      name: 'Google Sheets & Looker Studio', 
      category: 'data', 
      level: 88, 
      tier: 'Proficient', 
      icon: 'fas fa-table', 
      iconColor: '#0f9d58',
      detail: 'Automated Stakeholder Reporting, Executive Metric Visualizations'
    },

    // Mobile & Android
    { 
      name: 'Android SDK & Kotlin', 
      category: 'mobile', 
      level: 90, 
      tier: 'Production', 
      icon: 'fab fa-android', 
      iconColor: '#3ddc84',
      detail: 'Leanback UI, Jetpack Compose, Lifecycle Management, Clean Architecture'
    },
    { 
      name: 'Google Media3 & ExoPlayer', 
      category: 'mobile', 
      level: 92, 
      tier: 'Advanced', 
      icon: 'fas fa-play-circle', 
      iconColor: '#ff6a1a',
      detail: 'Adaptive HLS/M3U8 Streaming, MergingMediaSource, 0ms In-Memory Caching'
    },
    { 
      name: 'Clean MVI & Local Room DB', 
      category: 'mobile', 
      level: 88, 
      tier: 'Architect', 
      icon: 'fas fa-layer-group', 
      iconColor: '#a855f7',
      detail: 'Reactive Unidirectional Data Flow, SQLite Storage, SponsorBlock Integration'
    },

    // Databases, Cloud & IT Ops
    { 
      name: 'Supabase & PostgreSQL Cloud', 
      category: 'cloud', 
      level: 88, 
      tier: 'Full-Stack', 
      icon: 'fas fa-cloud', 
      iconColor: '#3ecf8e',
      detail: 'Row-Level Security (RLS), Trigger Functions, Realtime Subscriptions'
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

  const filteredSkills = activeCategory === 'all'
    ? skillItems
    : skillItems.filter(s => s.category === activeCategory);

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

        {/* 2. CATEGORY FILTER NAVIGATION BAR */}
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

        {/* 3. INTERACTIVE 2-COLUMN SKILLS GRID */}
        <div className="skills-cards-grid">
          {filteredSkills.map((skill, idx) => (
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
          ))}
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

      </div>
    </section>
  );
};

export default Skills;
