import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Web Architect & Full-Stack Systems Engineer',
      organization: 'Independent & Freelance (Local & International Clients)',
      location: 'Dhaka, Bangladesh · Global Remote',
      period: '2023 – Present',
      badge: 'Freelance Lead',
      badgeColor: 'badge-ember',
      highlights: [
        'Solely designed, architected, and deployed robust web platforms and custom portals for local businesses and international clients—managing layout, content schema, custom plugins, and performance with 100% independent ownership.',
        'Consulted on end-to-end IT infrastructure, hardware diagnostics, database backup protocols, and local network troubleshooting to ensure maximum uptime.',
        'Architected modern client dashboards and responsive digital experiences, eliminating operational friction and automating repetitive client workflows.'
      ]
    },
    {
      role: 'Database & Operations Systems Specialist',
      organization: 'Institutional Systems & Records Modernization',
      location: 'Dhaka, Bangladesh',
      period: '2024 – 2025',
      badge: 'Institutional Ops',
      badgeColor: 'badge-cyan',
      highlights: [
        'Administered academic, attendance, and administrative records for 500+ users with strict confidentiality, data schema normalization, and database integrity.',
        'Overhauled internal payroll compilation and remuneration documentation; automated reporting pipelines, cutting manual turnaround time by ~30%.',
        'Facilitated candidate evaluations, recruitment data pipelines, panel scheduling, and staff digital onboarding workflows.'
      ]
    },
    {
      role: 'Teaching Specialist & STEM Mentor',
      organization: 'Academic Mentorship & Analytical Pedagogy',
      location: 'Dhaka, Bangladesh',
      period: '2020 – 2023',
      badge: 'STEM Mentorship',
      badgeColor: 'badge-amber',
      highlights: [
        'Instructed Mathematics, Science, and Information & Communication Technology (ICT) to secondary and higher-secondary students.',
        'Mentored students who achieved 1st position in the competitive Government Scholarship Examination through rigorous progress tracking and problem-solving pedagogy.',
        'Engineered custom diagnostic tests, algorithmic problem sets, and continuous performance evaluation rubrics.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Data Analytics Career Bootcamp',
      issuer: 'HDNB Analytics Certification',
      icon: 'fas fa-chart-pie',
      tag: 'BI & Analytics'
    },
    {
      title: 'SQL & PostgreSQL for Beginners',
      issuer: 'Relational Database Specialization',
      icon: 'fas fa-database',
      tag: 'Relational DBs'
    },
    {
      title: 'UI / UX Design Professional',
      issuer: 'Interface Architecture Program',
      icon: 'fas fa-pen-nib',
      tag: 'Interface Design'
    },
    {
      title: 'WordPress, Web Design & E-Commerce Master',
      issuer: 'Web Engineering Academy',
      icon: 'fab fa-wordpress',
      tag: 'Web Engineering'
    }
  ];

  return (
    <section id="experience" className="section experience-section fade-up-element">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-pill-tag">
            <i className="fas fa-briefcase"></i>
            <span>Field Notes &amp; Chronology</span>
          </div>
          <h2 className="section-main-title">
            Career Journey &amp; <span className="text-gradient-ember">Operational Impact</span>
          </h2>
          <p className="section-main-subtitle">
            Demonstrated track record across independent web deployment, freelance software engineering, institutional database systems, and STEM mentorship.
          </p>
        </div>

        {/* 1. TOP 4 KEY IMPACT CARDS */}
        <div className="impact-metrics-row">
          <div className="impact-box glass-panel">
            <div className="impact-icon amber-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="impact-content">
              <span className="impact-number text-gradient-ember">~30%</span>
              <span className="impact-label">Reporting Time Reduction</span>
            </div>
          </div>

          <div className="impact-box glass-panel">
            <div className="impact-icon cyan-icon">
              <i className="fas fa-globe"></i>
            </div>
            <div className="impact-content">
              <span className="impact-number text-gradient-cyan">100% Solo</span>
              <span className="impact-label">Full-Stack Web Deployments</span>
            </div>
          </div>

          <div className="impact-box glass-panel">
            <div className="impact-icon sports-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="impact-content">
              <span className="impact-number">500+ Users</span>
              <span className="impact-label">Institutional Records Managed</span>
            </div>
          </div>

          <div className="impact-box glass-panel">
            <div className="impact-icon violet-icon">
              <i className="fas fa-trophy"></i>
            </div>
            <div className="impact-content">
              <span className="impact-number text-gradient-ember">1st Rank</span>
              <span className="impact-label">Govt. Scholarship Student Mentored</span>
            </div>
          </div>
        </div>

        {/* 2. CHRONOLOGY TIMELINE */}
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-marker">
                <div className="marker-dot"></div>
                {idx < experiences.length - 1 && <div className="marker-line"></div>}
              </div>

              <div className="timeline-card glass-panel">
                <div className="timeline-card-header">
                  <div>
                    <span className={`exp-badge ${exp.badgeColor}`}>{exp.badge}</span>
                    <h3 className="exp-role">{exp.role}</h3>
                    <div className="exp-org-row">
                      <span className="exp-org">{exp.organization}</span>
                      <span className="exp-sep">·</span>
                      <span className="exp-loc">{exp.location}</span>
                    </div>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>

                <ul className="exp-bullets">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx}>
                      <i className="fas fa-chevron-right"></i>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* 3. CERTIFICATIONS & SPECIALIZED TRAINING */}
        <div className="certifications-block">
          <h3 className="certifications-heading">
            <i className="fas fa-certificate"></i> Verified Certifications & Professional Training
          </h3>
          <div className="certs-grid">
            {certifications.map((cert, cIdx) => (
              <div key={cIdx} className="cert-card glass-panel">
                <div className="cert-icon-wrap">
                  <i className={cert.icon}></i>
                </div>
                <div className="cert-info">
                  <span className="cert-tag">{cert.tag}</span>
                  <h4 className="cert-title">{cert.title}</h4>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
