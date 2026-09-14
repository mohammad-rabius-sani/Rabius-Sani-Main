import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTag, setSelectedTag] = useState(null);
  const [selectedModalProject, setSelectedModalProject] = useState(null);

  const projectsData = [
    {
      id: 'pichitv',
      category: 'mobile',
      badge: '📺 Streaming Systems · Android TV & Mobile',
      badgeClass: 'badge-ember',
      title: 'PichiTV — Ultimate Entertainment Hub',
      subtitle: 'Native Android TV Leanback & Mobile IPTV Streaming Engine',
      architectureSpec: 'ARCH: Leanback MVI · Google Media3 ExoPlayer · 0ms In-Session Cache · HLS Adaptive',
      description: 'A landscape-first, high-speed streaming application engineered natively for Android TV set-top boxes, TV sticks, and Android mobile devices. Delivers 1,500+ live satellite channels, 6 live sports hubs (EPL, UCL, CricHD, SonyLiv), and 25,000+ cinema vault movies with 0ms in-session instant caching and hardware-accelerated Google Media3 ExoPlayer streaming.',
      isFeatured: true,
      metrics: [
        { label: 'Live Channels', val: '1,500+' },
        { label: 'Cinema Vault', val: '25,000+' },
        { label: 'Sports Arenas', val: '6 Hubs' },
        { label: 'TV Stick FPS', val: '60fps Lazy' }
      ],
      techStack: ['Android TV', 'Kotlin', 'Google Media3 ExoPlayer', 'HLS / M3U8', 'Leanback UI', 'APK Release'],
      githubLink: 'https://github.com/mohammad-rabius-sani/PichiTv',
      secondaryGithub: 'https://github.com/mohammad-rabius-sani/PichiPie_Tv_Apk-Only',
      apkDownload: 'https://github.com/mohammad-rabius-sani/PichiPie_Tv_Apk-Only',
      highlights: [
        'Integrated Google Media3 ExoPlayer supporting adaptive HLS/M3U8 bitrate switching for buffering-free playback.',
        'Engineered D-pad friendly Android TV Leanback UI with focus scale states and TV remote key event listeners.',
        '0ms in-session instant caching eliminates screen reload latency across 25,000+ movie and channel catalogs.',
        '60fps lazy batch pagination (120 initial + 80 chunked scroll) guarantees smooth navigation on 1GB/2GB TV sticks.',
        '6 Dedicated sports hubs providing live streams for EPL, UEFA Champions League, CricHD, Willow, and SonyLiv.'
      ]
    },
    {
      id: 'pichitube',
      category: 'mobile',
      badge: '⚡ Mobile Engineering · Jetpack Compose & MVI',
      badgeClass: 'badge-sports',
      title: 'PichiTube — Ad-Free YouTube Client',
      subtitle: 'Lightweight & Privacy-Focused Android Video Streaming Engine',
      architectureSpec: 'ARCH: Jetpack Compose · MergingMediaSource · Local Room SQLite · SponsorBlock API',
      description: 'A modern, lightweight YouTube client built with Jetpack Compose and Clean + MVI architecture. Features 100% ad-free video playback, SponsorBlock auto-skip, Ultra HD 4K streaming via MergingMediaSource, background lock-screen audio playback, fluid Picture-in-Picture (PiP), and zero telemetry with 100% local SQLite Room database storage.',
      isFeatured: true,
      metrics: [
        { label: 'Ad-Free Streams', val: '100%' },
        { label: 'Max Resolution', val: '4K 2160p' },
        { label: 'Release APK', val: '5.8 MB' },
        { label: 'Privacy Mode', val: 'Zero Telemetry' }
      ],
      techStack: ['Jetpack Compose', 'Kotlin', 'Clean Architecture', 'MVI', 'Room DB', 'SponsorBlock', 'PiP Windowing'],
      githubLink: 'https://github.com/mohammad-rabius-sani/PichiTube',
      apkDownload: 'https://github.com/mohammad-rabius-sani/PichiTube',
      highlights: [
        'Integrated SponsorBlock to automatically skip sponsored segments, intro animations, and subscribe nags.',
        'Ultra HD & 4K playback (2160p, 1440p, 1080p60) powered by custom MergingMediaSource audio/video multiplexing.',
        'Background audio playback with media notification controls and Picture-in-Picture (PiP) mini-player.',
        'Dedicated Shorts player with full-screen vertical swipe gestures (VerticalPager) and instant sound controls.',
        'Privacy-first architecture: no Google login required; all history and bookmarks saved exclusively in local Room DB.'
      ]
    },
    {
      id: 'ecommerce',
      category: 'web',
      badge: '🛍️ Full-Stack Web · React 18 & Supabase PostgreSQL',
      badgeClass: 'badge-cyan',
      title: 'Modern E-Commerce & Inventory Management Platform',
      subtitle: 'React 18, TypeScript, Tailwind CSS v4 & Supabase Cloud PostgreSQL',
      architectureSpec: 'ARCH: React 18 + TS · Supabase RLS · Automated PostgreSQL Triggers · Realtime Telemetry',
      description: 'A production-ready e-commerce platform built with React 18, TypeScript, and Supabase PostgreSQL. Includes full SKU variant management with automatic default variants via PostgreSQL triggers, Row Level Security (RLS) policies, customer cart/checkout pipelines, and real-time inventory telemetry for store administrators.',
      isFeatured: true,
      metrics: [
        { label: 'Frontend Stack', val: 'React 18 + TS' },
        { label: 'Cloud Backend', val: 'Supabase RLS' },
        { label: 'Database Schema', val: '5 Relational Tables' },
        { label: 'Stock Telemetry', val: 'Live Sync' }
      ],
      techStack: ['React 18', 'TypeScript', 'Tailwind CSS v4', 'Supabase', 'PostgreSQL', 'Vite', 'Lucide Icons'],
      githubLink: 'https://github.com/mohammad-rabius-sani/E-Commerce-Website',
      highlights: [
        'Multi-variant product catalog with automated default SKU creation via custom PostgreSQL trigger functions.',
        'Robust Row-Level Security (RLS) policies securing user transactions, order items, and admin-only dashboards.',
        'Live inventory tracking and instant out-of-stock guardrails during customer checkout sessions.',
        'Clean modular TypeScript structure with strict type-safety across catalog, cart, and admin endpoints.'
      ]
    },
    {
      id: 'superstore',
      category: 'data',
      badge: '📊 Business Intelligence · Power BI & Advanced DAX',
      badgeClass: 'badge-amber',
      title: 'SuperStore Enterprise Sales Analytics & Forecasting',
      subtitle: 'Executive Revenue, Regional Margins & Retention Suite',
      architectureSpec: 'MODEL: Star Schema Architecture · 24+ Custom DAX Measures · Time-Series Forecasting',
      description: 'Deep analytical modeling of 5,902 global transaction records. Architected interactive multi-page Power BI dashboards utilizing 24+ calculated DAX measures, time-series revenue forecasting, customer segment profitability analysis, and return rate anomaly detection.',
      isFeatured: true,
      metrics: [
        { label: 'Dataset Records', val: '5,902' },
        { label: 'DAX Measures', val: '24+ Custom' },
        { label: 'Data Model', val: 'Star Schema' },
        { label: 'Forecasting', val: 'Time-Series' }
      ],
      techStack: ['Power BI', 'DAX Measures', 'Microsoft Excel', 'Data Modeling', 'Star Schema', 'Time-Series BI'],
      githubLink: 'https://github.com/mohammad-rabius-sani/SuperStore-Sales-Data',
      highlights: [
        'Calculated Year-over-Year (YoY) revenue velocity and regional profit margins using advanced DAX time intelligence.',
        'Engineered dynamic KPI cards with conditional alert thresholds for immediate return rate anomaly detection.',
        'Discovered that Corporate customer segments drove 35% of total revenue at the lowest return frequency.',
        'Modeled star-schema database architecture connecting Customers, Orders, Returns, and Regional Managers.'
      ]
    },
    {
      id: 'music-store',
      category: 'data',
      badge: '🗄️ SQL & PostgreSQL Relational Analytics',
      badgeClass: 'badge-cyan',
      title: 'Music Store Relational Database Analytics',
      subtitle: 'Complex Relational Joins, Window Functions & CTE Modeling',
      architectureSpec: 'PIPELINE: Normalized 3NF Relational DB · Recursive CTEs · Window Functions (DENSE_RANK)',
      description: 'Executed 11 structured SQL queries across a normalized relational database schema in PostgreSQL. Utilized Common Table Expressions (CTEs), Subqueries, Window Ranking Functions (DENSE_RANK, ROW_NUMBER), and multi-table aggregations to uncover top customer lifetime values and genre profitability across countries.',
      isFeatured: false,
      metrics: [
        { label: 'SQL Queries', val: '11 Complex' },
        { label: 'Engine', val: 'PostgreSQL' },
        { label: 'Techniques', val: 'CTEs & Windows' }
      ],
      techStack: ['PostgreSQL', 'Complex SQL', 'CTEs', 'Window Functions', 'Relational Joins'],
      githubLink: 'https://github.com/mohammad-rabius-sani/Music-Store-Data-Analysis',
      highlights: [
        'Wrote multi-level CTEs to calculate track-to-album revenue contribution pipelines.',
        'Used DENSE_RANK() window functions to isolate top spending customers per country.',
        'Identified highest-earning music genres by geographic market to optimize catalog licensing.'
      ]
    },
    {
      id: 'bike-sales',
      category: 'data',
      badge: '📈 Advanced Excel Analytics & Slicers',
      badgeClass: 'badge-amber',
      title: 'Global Bike Sales Dynamics & Modeling',
      subtitle: 'Multi-Sheet Data Cleaning, Dynamic Pivot Tables & Multi-Slicers',
      architectureSpec: 'PIPELINE: Multi-Slicer Relational Pivot Model · Cross-Table Index Aggregations · Data Clean',
      description: 'End-to-end data cleaning, normalization, and visualization of an extensive consumer purchase dataset in Microsoft Excel. Built dynamic dashboards with cross-filtering slicers, nested logical formulas, and demographic segmentation.',
      isFeatured: false,
      metrics: [
        { label: 'Data Cleaning', val: 'Multi-Sheet' },
        { label: 'Visuals', val: 'Pivot Charts' },
        { label: 'Slicers', val: 'Multi-Demographic' }
      ],
      techStack: ['Microsoft Excel', 'Pivot Tables', 'Dynamic Slicers', 'Data Normalization', 'Nested Formulas'],
      githubLink: 'https://github.com/mohammad-rabius-sani/Bike-Sales-Analysis',
      highlights: [
        'Cleaned raw dataset, removed duplicates, standardized currency fields, and resolved null discrepancies.',
        'Created custom age brackets (Youth, Middle Age, Senior) and commute distance tiers.',
        'Connected interactive multi-slicers allowing cross-filtering across education, occupation, and vehicle ownership.'
      ]
    }
  ];

  const filteredProjects = projectsData.filter(p => {
    const matchesCat = activeFilter === 'all' || p.category === activeFilter;
    const matchesTag = !selectedTag || p.techStack.includes(selectedTag);
    return matchesCat && matchesTag;
  });

  return (
    <section id="projects" className="section projects-section fade-up-element">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-header-left">
            <div className="section-pill-tag">
              <i className="fas fa-layer-group"></i>
              <span>Engineering Showcase</span>
            </div>
            <h2 className="section-main-title">
              Featured Works &amp; <span className="text-gradient-ember">Flagship Products</span>
            </h2>
            <p className="section-main-subtitle">
              From low-latency Android TV IPTV engines to production web applications and enterprise forecasting suites.
            </p>
          </div>

          {/* Quick External GitHub Archive Jump (New Tab) */}
          <div className="section-header-action">
            <a 
              href="https://github.com/mohammad-rabius-sani?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-github-header-pill"
              title="Open GitHub Repositories in a New Tab"
            >
              <i className="fab fa-github"></i>
              <span>Explore All 18+ Repositories</span>
              <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="projects-filter-nav">
          <button 
            className={`filter-btn ${activeFilter === 'all' && !selectedTag ? 'active' : ''}`}
            onClick={() => { setActiveFilter('all'); setSelectedTag(null); }}
          >
            All Works ({projectsData.length})
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`}
            onClick={() => setActiveFilter('mobile')}
          >
            <i className="fab fa-android"></i> Streaming &amp; Mobile
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            <i className="fas fa-globe"></i> Full-Stack Web
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'data' ? 'active' : ''}`}
            onClick={() => setActiveFilter('data')}
          >
            <i className="fas fa-chart-pie"></i> Data &amp; Analytics
          </button>
        </div>

        {/* Active Tag Filter Indicator */}
        {selectedTag && (
          <div className="active-tag-filter-bar glass-panel">
            <span className="tag-filter-text">
              <i className="fas fa-filter"></i> Filtering by technology: <strong>{selectedTag}</strong> ({filteredProjects.length} matched)
            </span>
            <button className="btn-clear-tag" onClick={() => setSelectedTag(null)}>
              Reset Filter ×
            </button>
          </div>
        )}

        {/* Projects Spatial 3D Hardware Viewports Grid */}
        <div className="projects-grid">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id} 
              className={`project-card-wrap ${proj.id === 'pichitv' ? 'flagship-card' : ''}`}
            >
              {/* Spatial 3D Hardware Viewport Frame */}
              <div className={`project-card glass-panel device-shell device-${proj.id}`}>

                {/* Hardware Shell Top Chrome */}
                <div className="device-hardware-bar">
                  {proj.id === 'pichitv' && (
                    <>
                      <div className="tv-hardware-indicators">
                        <span className="tv-power-led"></span>
                        <span className="tv-ir-sensor"></span>
                        <span className="tv-os-label"><i className="fas fa-tv"></i> ANDROID TV LEANBACK OS · 60FPS</span>
                      </div>
                      <span className="tv-res-badge">4K ULTRA HD</span>
                    </>
                  )}

                  {proj.id === 'pichitube' && (
                    <>
                      <div className="mobile-island-pill">
                        <span className="island-camera"></span>
                        <span className="island-speaker"></span>
                      </div>
                      <div className="mobile-status-row">
                        <span><i className="fas fa-shield-halved"></i> 0 TELEMETRY</span>
                        <span><i className="fas fa-wifi"></i> 5G</span>
                      </div>
                    </>
                  )}

                  {proj.id === 'ecommerce' && (
                    <>
                      <div className="browser-traffic-lights">
                        <span className="light light-red"></span>
                        <span className="light light-yellow"></span>
                        <span className="light light-green"></span>
                      </div>
                      <div className="browser-url-pill">
                        <i className="fas fa-lock"></i>
                        <span>https://ecommerce.local/admin/inventory</span>
                      </div>
                      <span className="browser-env-tag">REACT 18 + RLS</span>
                    </>
                  )}

                  {proj.id === 'superstore' && (
                    <>
                      <div className="bi-hardware-header">
                        <span className="bi-station-dot"></span>
                        <span className="bi-station-title"><i className="fas fa-chart-pie"></i> BI WORKSTATION · 5,902 RECORDS</span>
                      </div>
                      <span className="bi-model-tag">STAR SCHEMA</span>
                    </>
                  )}

                  {proj.id === 'music-store' && (
                    <>
                      <div className="sql-hardware-header">
                        <span className="term-dot green"></span>
                        <span className="sql-station-title"><i className="fas fa-terminal"></i> POSTGRESQL RELATIONAL ENGINE</span>
                      </div>
                      <span className="sql-schema-tag">3NF NORMALIZED</span>
                    </>
                  )}

                  {proj.id === 'bike-sales' && (
                    <>
                      <div className="excel-hardware-header">
                        <span className="term-dot yellow"></span>
                        <span className="excel-station-title"><i className="fas fa-table"></i> EXCEL SLICER RELATIONAL MODEL</span>
                      </div>
                      <span className="excel-clean-tag">CLEANED DATASET</span>
                    </>
                  )}
                </div>

                {/* Card Visual Banner */}
                <div className="project-visual-header">
                  {proj.id === 'pichitv' && (
                    <div className="pichitv-hero-banner">
                      <img 
                        src="/Images/pichitv/pichitv-main-logo.webp" 
                        alt="PichiTV — Android TV &amp; Mobile IPTV Streaming Logo" 
                        className="pichitv-main-logo-art"
                        loading="lazy"
                        decoding="async"
                        width="240"
                        height="75"
                      />
                      <div className="pichitv-badges-overlay">
                        <span className="live-network-badge">
                          <span className="live-pulse-indicator"></span> 1,500+ LIVE CHANNELS
                        </span>
                        <span className="tv-tech-badge">GOOGLE MEDIA3 EXOPLAYER</span>
                      </div>
                    </div>
                  )}

                  {proj.id === 'pichitube' && (
                    <div className="project-custom-banner pichitube-banner">
                      <div className="banner-logo-row">
                        <div className="pichitube-icon-box">
                          <i className="fab fa-youtube"></i>
                        </div>
                        <span className="pichitube-brand-text">PichiTube</span>
                      </div>
                      <div className="banner-features-strip">
                        <span>⚡ 100% Ad-Free</span>
                        <span>🔒 0 Telemetry</span>
                        <span>📱 4K UHD &amp; PiP</span>
                      </div>
                    </div>
                  )}

                  {proj.id === 'ecommerce' && (
                    <div className="project-custom-banner ecommerce-banner">
                      <div className="banner-logo-row">
                        <div className="ecommerce-icon-box">
                          <i className="fas fa-store"></i>
                        </div>
                        <span className="ecommerce-brand-text">E-Commerce Platform</span>
                      </div>
                      <div className="banner-features-strip">
                        <span>⚡ React 18</span>
                        <span>🗄️ Supabase RLS</span>
                        <span>📦 Live Stock</span>
                      </div>
                    </div>
                  )}

                  {proj.id === 'superstore' && (
                    <div className="project-custom-banner superstore-banner">
                      <div className="banner-logo-row">
                        <div className="superstore-icon-box">
                          <i className="fas fa-chart-line"></i>
                        </div>
                        <span className="superstore-brand-text">SuperStore BI Suite</span>
                      </div>
                      <div className="banner-features-strip">
                        <span>📊 5,902 Records</span>
                        <span>📈 24+ DAX</span>
                        <span>🔮 Forecasting</span>
                      </div>
                    </div>
                  )}

                  {proj.id === 'music-store' && (
                    <div className="project-custom-banner generic-banner sql-banner">
                      <div className="banner-logo-row">
                        <div className="generic-icon-box cyan-box">
                          <i className="fas fa-database"></i>
                        </div>
                        <span className="generic-brand-text">Music Store SQL</span>
                      </div>
                    </div>
                  )}

                  {proj.id === 'bike-sales' && (
                    <div className="project-custom-banner generic-banner excel-banner">
                      <div className="banner-logo-row">
                        <div className="generic-icon-box amber-box">
                          <i className="fas fa-file-excel"></i>
                        </div>
                        <span className="generic-brand-text">Bike Sales Analysis</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Body: Content & Specs */}
                <div className="project-card-body">
                  
                  {/* Category Badge */}
                  <div className="project-badge-wrap">
                    <span className={`project-pill ${proj.badgeClass}`}>
                      {proj.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-subtitle">{proj.subtitle}</p>

                  {/* Engineering Architecture Spec Tag */}
                  {proj.architectureSpec && (
                    <div className="project-arch-tag">
                      <i className="fas fa-terminal"></i>
                      <span>{proj.architectureSpec}</span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="project-desc">{proj.description}</p>

                  {/* Telemetry Metrics Grid */}
                  <div className="project-metrics-grid">
                    {proj.metrics.map((m, idx) => (
                      <div key={idx} className="metric-box">
                        <span className="metric-val">{m.val}</span>
                        <span className="metric-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills (Clickable for Tag Filtering) */}
                  <div className="project-tech-tags">
                    {proj.techStack.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className={`tech-tag ${selectedTag === tech ? 'tag-selected' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedTag(selectedTag === tech ? null : tech);
                        }}
                        title={`Filter projects by ${tech}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions Footer */}
                  <div className="project-card-footer">
                    <button 
                      className="btn-details"
                      onClick={() => setSelectedModalProject(proj)}
                    >
                      <i className="fas fa-circle-info"></i> Architecture
                    </button>

                    <div className="footer-links-group">
                      {proj.apkDownload && (
                        <a 
                          href={proj.apkDownload} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-card-apk"
                          title="Direct APK Download Release (New Tab)"
                        >
                          <i className="fab fa-android"></i>
                          <span>Get APK</span>
                        </a>
                      )}

                      {proj.githubLink && (
                        <a 
                          href={proj.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="action-icon-link"
                          title="View Repository on GitHub (New Tab)"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Minimal, High-End GitHub Jump Footer */}
        <div className="projects-bottom-hint">
          <p>
            Looking for more code?{' '}
            <a 
              href="https://github.com/mohammad-rabius-sani?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="projects-github-link"
            >
              Explore all 18+ public repositories on GitHub <i className="fas fa-arrow-up-right-from-square"></i>
            </a>
          </p>
        </div>

      </div>

      {/* ================= ARCHITECTURAL MODAL ================= */}
      {selectedModalProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedModalProject(null)}>
          <div className="project-modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            
            <button 
              className="modal-close-btn"
              onClick={() => setSelectedModalProject(null)}
              aria-label="Close Modal"
            >
              <i className="fas fa-times"></i>
            </button>

            <div className="modal-header">
              <span className={`project-pill ${selectedModalProject.badgeClass}`}>
                {selectedModalProject.badge}
              </span>
              <h3 className="modal-title">{selectedModalProject.title}</h3>
              <p className="modal-sub">{selectedModalProject.subtitle}</p>
              {selectedModalProject.architectureSpec && (
                <div className="project-arch-tag modal-arch-tag">
                  <i className="fas fa-terminal"></i>
                  <span>{selectedModalProject.architectureSpec}</span>
                </div>
              )}
            </div>

            <div className="modal-body">
              <h4 className="modal-section-heading">Key Technical Highlights & Decisions:</h4>
              <ul className="modal-highlights-list">
                {selectedModalProject.highlights.map((h, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <h4 className="modal-section-heading">Tech Stack & Dependencies:</h4>
              <div className="project-tech-tags">
                {selectedModalProject.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag modal-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              {selectedModalProject.githubLink && (
                <a 
                  href={selectedModalProject.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary"
                >
                  <i className="fab fa-github"></i> View on GitHub (New Tab)
                </a>
              )}
              {selectedModalProject.apkDownload && (
                <a 
                  href={selectedModalProject.apkDownload} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary"
                >
                  <i className="fab fa-android"></i> Download APK Release
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
