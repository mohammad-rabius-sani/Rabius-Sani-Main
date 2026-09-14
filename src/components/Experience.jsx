import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Program Officer — IT & Technical Support',
      organization: 'National Anti-Tuberculosis Association of Bangladesh (NATAB)',
      location: 'Dhaka, Bangladesh',
      period: 'Dec 2023 – May 2024',
      badge: 'Full-Time Lead',
      badgeColor: 'badge-ember',
      highlights: [
        'Solely designed, architected, and deployed the organisation’s full official website using WordPress—managing UI layout, content architecture, custom plugins, and performance optimisation with zero external developer support.',
        'Supervised all institutional IT support including hardware diagnostics, operating systems, software licenses, and local LAN network troubleshooting to ensure 100% operational uptime.',
        'Coordinated inter-departmental operations, field missions, and stakeholder engagements; authored formal administrative documentation and executive reporting.'
      ]
    },
    {
      role: 'Administrative & Academic Support Officer',
      organization: 'Newcastle International School',
      location: 'Dhaka, Bangladesh',
      period: 'Aug 2025 – Oct 2025',
      badge: 'Institutional Ops',
      badgeColor: 'badge-cyan',
      highlights: [
        'Administered academic, attendance, and leave records for 500+ students and 80+ teaching personnel with strict confidentiality and database integrity.',
        'Assisted in monthly payroll compilation and remuneration documentation; overhauled administrative reporting workflows, reducing manual turnaround time by ~30%.',
        'Facilitated the end-to-end recruitment cycle: candidate CV screening, shortlisting criteria, panel interview scheduling, and staff onboarding coordination.'
      ]
    },
    {
      role: 'Teaching & Academic Support Specialist',
      organization: 'Various Academic Institutions',
      location: 'Dhaka, Bangladesh',
      period: '2020 – 2023',
      badge: 'STEM Mentorship',
      badgeColor: 'badge-amber',
      highlights: [
        'Instructed Mathematics, Science, and Information & Communication Technology (ICT) to Class 5–12 students across both Bangla and English medium curricula.',
        'Mentored students who achieved 1st position in the Class 5 Government Scholarship Examination (Kadamtali & Shyampur Thana) through rigorous progress tracking and problem-solving pedagogy.',
        'Designed custom curriculum roadmaps, diagnostic model tests, and continuous evaluation rubrics.'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Data Analytics Career Bootcamp',
      issuer: 'Human Development Network Bangladesh (HDNB)',
      icon: 'fas fa-chart-pie',
      tag: 'BI & Analytics'
    },
    {
      title: 'SQL & PostgreSQL for Beginners',
      issuer: 'Udemy Specialization',
      icon: 'fas fa-database',
      tag: 'Relational DBs'
    },
    {
      title: 'UI / UX Design Professional',
      issuer: 'Pencilbox Training Institute',
      icon: 'fas fa-pen-nib',
      tag: 'Interface Design'
    },
    {
      title: 'WordPress, Web Design & E-Commerce Master',
      issuer: 'Mexemy Academy',
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
            <span>Field Notes & Chronology</span>
          </div>
          <h2 className="section-main-title">
            Career Journey & <span className="text-gradient-ember">Operational Impact</span>
          </h2>
          <p className="section-main-subtitle">
            Demonstrated track record across institutional IT administration, independent web deployment, and STEM mentorship.
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
              <span className="impact-label">NATAB Web Platform Architecture</span>
            </div>
          </div>

          <div className="impact-box glass-panel">
            <div className="impact-icon sports-icon">
              <i className="fas fa-database"></i>
            </div>
            <div className="impact-content">
              <span className="impact-number">500+ Staff</span>
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
