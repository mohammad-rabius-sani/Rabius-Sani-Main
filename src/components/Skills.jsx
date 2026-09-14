import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inspectedSkill, setInspectedSkill] = useState(null);
  const barsRef = useRef([]);

  const skillCategories = [
    { id: 'all', label: 'All Disciplines', icon: 'fas fa-layer-group' },
    { id: 'web', label: 'Full-Stack & Web', icon: 'fas fa-code' },
    { id: 'data', label: 'Data & Analytics', icon: 'fas fa-chart-pie' },
    { id: 'mobile', label: 'Mobile & Android TV', icon: 'fab fa-android' },
    { id: 'cloud', label: 'Databases & IT Ops', icon: 'fas fa-server' },
    { id: 'ai', label: 'AI & Velocity Tooling', icon: 'fas fa-brain' }
  ];

  const pillarCards = [
    {
      title: 'Full-Stack Web',
      subtitle: 'Frontend & APIs',
      icon: 'fab fa-react',
      color: 'cyan',
      tech: 'React 18 · TypeScript · Tailwind CSS · Vite',
      level: '92%'
    },
    {
      title: 'Data & Analytics',
      subtitle: 'Intelligence & Modeling',
      icon: 'fas fa-chart-line',
      color: 'amber',
      tech: 'Power BI · DAX · PostgreSQL · Excel Models',
      level: '95%'
    },
    {
      title: 'Mobile & Android',
      subtitle: 'Native TV & Media',
      icon: 'fab fa-android',
      color: 'green',
      tech: 'Kotlin · Jetpack Compose · Media3 ExoPlayer',
      level: '90%'
    },
    {
      title: 'IT & Cloud Ops',
      subtitle: 'Systems & Reliability',
      icon: 'fas fa-shield-halved',
      color: 'ember',
      tech: 'PostgreSQL · Supabase RLS · IT Systems · LAN',
      level: '94%'
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
      detail: 'Modular component architecture, strict typing, custom hooks, and state management.',
      snippet: 'const [state, dispatch] = useReducer(appReducer, initialAppState);'
    },
    { 
      name: 'HTML5, Modern CSS & Tailwind', 
      category: 'web', 
      level: 95, 
      tier: 'Mastery', 
      icon: 'fab fa-css3-alt', 
      iconColor: '#38bdf8',
      detail: 'Responsive layouts, glassmorphism, 3D CSS perspective transforms, and micro-animations.',
      snippet: 'backdrop-filter: blur(16px); transform: perspective(1200px) rotateX(4deg);'
    },
    { 
      name: 'JavaScript (ES6+) & Web APIs', 
      category: 'web', 
      level: 92, 
      tier: 'Advanced', 
      icon: 'fab fa-js', 
      iconColor: '#f7df1e',
      detail: 'Async/await, DOM optimization, Intersection Observer, Canvas, and Fetch pipelines.',
      snippet: 'const observer = new IntersectionObserver((entries) => { ... }, { threshold: 0.1 });'
    },
    { 
      name: 'WordPress CMS & Web Deployments', 
      category: 'web', 
      level: 95, 
      tier: 'Solo Lead', 
      icon: 'fab fa-wordpress', 
      iconColor: '#21759b',
      detail: 'Custom themes, plugin optimization, end-to-end site architecture and international client deployments.',
      snippet: 'add_action("init", function() { register_custom_portfolio_post_type(); });'
    },

    // Data Analytics & BI
    { 
      name: 'Power BI & Advanced DAX', 
      category: 'data', 
      level: 95, 
      tier: 'Flagship', 
      icon: 'fas fa-chart-line', 
      iconColor: '#f2c811',
      detail: 'Star-schema relational modeling, time intelligence, profit margin forecasting, and dynamic KPI alert dials.',
      snippet: 'YoY_Growth = DIVIDE([Total_Sales] - [Sales_LY], [Sales_LY], 0)'
    },
    { 
      name: 'Microsoft Excel (Pivots, Slicers, VBA)', 
      category: 'data', 
      level: 96, 
      tier: 'Mastery', 
      icon: 'fas fa-file-excel', 
      iconColor: '#107c41',
      detail: 'Multi-sheet data cleaning, dynamic pivot dashboards, nested lookup formulas, and interactive slicers.',
      snippet: '=XLOOKUP(A2, Clean_Data[Customer_ID], Clean_Data[Lifetime_Revenue], "N/A")'
    },
    { 
      name: 'SQL & PostgreSQL Relational Analytics', 
      category: 'data', 
      level: 94, 
      tier: 'Production', 
      icon: 'fas fa-database', 
      iconColor: '#336791',
      detail: 'Window ranking functions (DENSE_RANK), recursive CTEs, subqueries, and relational schema normalization.',
      snippet: 'WITH CustomerRevenue AS (SELECT id, SUM(total) as rev FROM orders GROUP BY 1) ...'
    },
    { 
      name: 'Data Pipeline Engineering & ETL', 
      category: 'data', 
      level: 88, 
      tier: 'Advanced', 
      icon: 'fas fa-arrow-progress', 
      iconColor: '#ff6a1a',
      detail: 'Extract, Transform & Load workflows, data cleaning pipelines, and business metric standardization.',
      snippet: 'ETL_Pipeline.ingest(rawCsv).normalize().validateTypes().writeToPostgres();'
    },

    // Mobile & Android TV
    { 
      name: 'Android TV & Google Media3 ExoPlayer', 
      category: 'mobile', 
      level: 95, 
      tier: 'Flagship', 
      icon: 'fab fa-android', 
      iconColor: '#3ddc84',
      detail: 'Adaptive HLS bitrate engine, D-pad remote key focus navigation, and 0ms in-session cache for 25k+ titles.',
      snippet: 'val mediaItem = MediaItem.Builder().setUri(streamUri).setMimeType(MimeTypes.APPLICATION_M3U8).build()'
    },
    { 
      name: 'Kotlin & Jetpack Compose', 
      category: 'mobile', 
      level: 92, 
      tier: 'Production', 
      icon: 'fas fa-mobile-screen', 
      iconColor: '#7f52ff',
      detail: 'Declarative modern Android UI, Kotlin Coroutines, StateFlow, and Picture-in-Picture windowing.',
      snippet: 'val uiState by viewModel.uiState.collectAsStateWithLifecycle()'
    },
    { 
      name: 'Clean Architecture & MVI Pattern', 
      category: 'mobile', 
      level: 92, 
      tier: 'Architecture', 
      icon: 'fas fa-cubes', 
      iconColor: '#00f5d4',
      detail: 'Unidirectional data flow, immutable intent-to-state reducers, and 100% offline-first local Room SQLite.',
      snippet: 'data class PlayerState(val isBuffering: Boolean = false, val currentTitle: String = "")'
    },

    // Databases, IT Ops & Systems
    { 
      name: 'PostgreSQL & Supabase BaaS', 
      category: 'cloud', 
      level: 90, 
      tier: 'Production', 
      icon: 'fas fa-server', 
      iconColor: '#3ecf8e',
      detail: 'Row-Level Security (RLS) policies, automated database triggers, realtime websocket subscriptions, and indexes.',
      snippet: 'CREATE POLICY "Users access own records" ON orders FOR ALL USING (auth.uid() = user_id);'
    },
    { 
      name: 'Git, GitHub & Version Control', 
      category: 'cloud', 
      level: 92, 
      tier: 'Workflow', 
      icon: 'fab fa-git-alt', 
      iconColor: '#f05032',
      detail: 'Git branch workflows, release tagging, automated lint checks, and markdown system architecture documentation.',
      snippet: 'git commit -m "feat(stream): implement custom HLS adaptive bitrate listener"'
    },
    { 
      name: 'IT Infrastructure & Network Diagnostics', 
      category: 'cloud', 
      level: 92, 
      tier: 'Field Lead', 
      icon: 'fas fa-network-wired', 
      iconColor: '#38bdf8',
      detail: 'Local LAN routing, DNS troubleshooting, workstation setup, hardware diagnostics, and zero downtime assurance.',
      snippet: 'netstat -tulnp | grep LISTEN; ping -c 4 gateway.internal;'
    },
    { 
      name: 'Institutional Database Admin', 
      category: 'cloud', 
      level: 94, 
      tier: 'Enterprise', 
      icon: 'fas fa-users-gear', 
      iconColor: '#f59e0b',
      detail: 'Overhauled administrative database and payroll records for 500+ users, accelerating turnaround by ~30%.',
      snippet: 'UPDATE payroll_ledger SET status = "PROCESSED" WHERE cycle_month = current_date;'
    },

    // AI & Velocity Tooling
    { 
      name: 'AI-Augmented Code Engineering', 
      category: 'ai', 
      level: 95, 
      tier: 'AI-Powered', 
      icon: 'fas fa-microchip', 
      iconColor: '#00f5d4',
      detail: 'Harnessing Claude, ChatGPT, and Copilot for rapid scaffolding, algorithmic problem solving, and instant refactoring.',
      snippet: 'AI_CoPilot.scaffoldModule({ spec: "ExoPlayer bitstream listener", lang: "Kotlin" });'
    },
    { 
      name: 'AI Query & Pipeline Optimization', 
      category: 'ai', 
      level: 94, 
      tier: 'AI-Powered', 
      icon: 'fas fa-wand-magic-sparkles', 
      iconColor: '#ff6a1a',
      detail: 'Using AI LLMs to analyze SQL query plans, uncover indexing bottlenecks, and optimize complex DAX formulas.',
      snippet: 'EXPLAIN ANALYZE -> AI_Engine.suggestIndex({ costThreshold: 120ms });'
    },
    { 
      name: 'Automated Testing & Documentation Scaffolding', 
      category: 'ai', 
      level: 90, 
      tier: 'AI-Powered', 
      icon: 'fas fa-robot', 
      iconColor: '#f2c811',
      detail: 'Scaffolding unit test suites, edge-case mocks, and architectural documentation at 3x normal development velocity.',
      snippet: 'generateTestCases({ suite: "CheckoutOrderFlow", mocks: ["SupabaseClient"] });'
    }
  ];

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
        if (entry.isIntersecting && entry.target.classList.contains('telemetry-bar-fill')) {
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
            <span>Engineering &amp; Analytics Matrix</span>
          </div>
          <h2 className="section-main-title">
            Core Competencies &amp; <span className="text-gradient-cyan">Technical Depth</span>
          </h2>
          <p className="section-main-subtitle">
            A high-performance technical stack bridging full-stack web engineering, native Android TV systems, enterprise business intelligence, and AI-augmented development velocity.
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

        {/* 2. 3D CYBER TELEMETRY COMMAND BAR */}
        <div className="skills-telemetry-matrix-bar">
          <div className="telemetry-hud-left">
            <span className="telemetry-live-dot"></span>
            <span className="telemetry-console-label">TELEMETRY DECK v3.0</span>
            <span className="telemetry-sep">|</span>
            <span className="telemetry-query-status">
              ACTIVE SECTOR: <strong>{activeCategory.toUpperCase()}</strong> ({filteredSkills.length} MODULES LOADED)
            </span>
          </div>
          <div className="telemetry-hud-right">
            <span className="telemetry-ai-tag">
              <i className="fas fa-brain"></i> AI-AUGMENTED WORKFLOW ACTIVE
            </span>
          </div>
        </div>

        {/* 3. CATEGORY SWITCHER & LIVE FILTER SEARCH */}
        <div className="skills-nav-row">
          <div className="skills-filter-nav">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                className={`skills-cat-btn ${cat.id === 'ai' ? 'btn-cat-ai' : ''} ${activeCategory === cat.id ? 'active' : ''}`}
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
              placeholder="Search stack (e.g. react, sql, ai, kotlin)..." 
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

        {/* 4. 3D ISOMETRIC TELEMETRY CARDS MATRIX */}
        <div className="telemetry-matrix-grid">
          {filteredSkills.length === 0 ? (
            <div className="skills-empty-notice glass-panel">
              <i className="fas fa-filter-circle-xmark"></i>
              <p>No competencies matched &quot;{searchQuery}&quot;. Try searching &quot;React&quot;, &quot;SQL&quot;, &quot;Kotlin&quot;, or &quot;AI&quot;.</p>
              <button className="btn-secondary" onClick={() => setSearchQuery('')}>Reset Filter</button>
            </div>
          ) : (
            filteredSkills.map((skill, idx) => (
              <div 
                key={idx} 
                className={`telemetry-card ${skill.category === 'ai' ? 'ai-glow-card' : ''}`}
                onClick={() => setInspectedSkill(inspectedSkill?.name === skill.name ? null : skill)}
              >
                {/* 3D Isometric Card Inner */}
                <div className="telemetry-card-inner glass-panel">
                  
                  {/* Cyber Top Scanline & Sector Tag */}
                  <div className="telemetry-card-top">
                    <div className="telemetry-badge-group">
                      <span className="telemetry-cat-tag">
                        SECTOR // {skill.category.toUpperCase()}
                      </span>
                      <span className={`telemetry-tier-tag tier-${skill.tier.toLowerCase().replace(/[^a-z]/g, '')}`}>
                        {skill.tier}
                      </span>
                    </div>

                    <span className="telemetry-pct">{skill.level}%</span>
                  </div>

                  {/* Main Title Cluster */}
                  <div className="telemetry-title-cluster">
                    <div 
                      className="telemetry-icon-box"
                      style={{ color: skill.iconColor }}
                    >
                      <i className={skill.icon}></i>
                    </div>
                    <div>
                      <h4 className="telemetry-skill-name">{skill.name}</h4>
                      <p className="telemetry-skill-detail">{skill.detail}</p>
                    </div>
                  </div>

                  {/* Progress Telemetry Meter */}
                  <div className="telemetry-meter-row">
                    <div 
                      className="telemetry-meter-track"
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-label={`${skill.name} proficiency level ${skill.level}%`}
                    >
                      <div 
                        className="telemetry-bar-fill"
                        data-width={`${skill.level}%`}
                        ref={(el) => (barsRef.current[idx] = el)}
                      ></div>
                    </div>
                    <button 
                      className="btn-inspect-spec" 
                      title="Inspect Architecture Spec / Snippet"
                      onClick={(e) => {
                        e.stopPropagation();
                        setInspectedSkill(inspectedSkill?.name === skill.name ? null : skill);
                      }}
                    >
                      <i className="fas fa-terminal"></i>
                      <span>{inspectedSkill?.name === skill.name ? 'Hide Spec' : 'Inspect'}</span>
                    </button>
                  </div>

                  {/* Collapsible Architecture Spec Micro-Terminal */}
                  {inspectedSkill?.name === skill.name && (
                    <div className="telemetry-snippet-drawer">
                      <div className="snippet-header">
                        <span className="snippet-dot"></span>
                        <span className="snippet-title">spec_preview.{skill.category === 'web' ? 'ts' : skill.category === 'data' ? 'sql' : skill.category === 'mobile' ? 'kt' : 'sh'}</span>
                      </div>
                      <pre className="snippet-code"><code>{skill.snippet}</code></pre>
                    </div>
                  )}

                </div>
              </div>
            ))
          )}
        </div>

        {/* 5. BOTTOM ARCHITECTURE PILLARS SUMMARY */}
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
            <i className="fas fa-brain text-gradient-amber"></i>
            <span><strong>AI-Augmented Velocity:</strong> Supercharged development speed, algorithmic precision, and query optimization</span>
          </div>
        </div>

        {/* 6. TOOLING & DEVOPS ECOSYSTEM CHIP CLOUD */}
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
              { name: 'Claude & Copilot AI', icon: 'fas fa-brain' },
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
