import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Software Engineering / Data Analytics Role',
    message: ''
  });

  const [copiedField, setCopiedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const dataToSend = new FormData();
      dataToSend.append('access_key', '206cd94f-f880-4381-b8fe-c69056048d72');
      dataToSend.append('name', formData.name);
      dataToSend.append('email', formData.email);
      dataToSend.append('subject', formData.subject);
      dataToSend.append('message', formData.message);

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: dataToSend
      });

      const result = await res.json();

      if (result.success) {
        setIsSubmitted(true);
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#ff6a1a', '#ffb238', '#00f5d4', '#ffffff']
        });
        setFormData({
          name: '',
          email: '',
          subject: 'Software Engineering / Data Analytics Role',
          message: ''
        });
      } else {
        setSubmitError(result.message || 'Submission error. Please email directly.');
      }
    } catch {
      setSubmitError('Network failure. Please contact directly via email or phone.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCvDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6a1a', '#ffb238', '#00f5d4']
    });
  };

  return (
    <section id="contact" className="section contact-section fade-up-element">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-wrap">
          <div className="section-pill-tag">
            <i className="fas fa-satellite-dish"></i>
            <span>Initiate Transmission</span>
          </div>
          <h2 className="section-main-title">
            Let's Build Something <span className="text-gradient-ember">Exceptional</span>
          </h2>
          <p className="section-main-subtitle">
            Open for full-time software engineering roles, enterprise data analytics opportunities, or visionary collaborative projects.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* ================= LEFT COLUMN: CONTACT TELEMETRY ================= */}
          <div className="contact-info-panel glass-panel">
            
            <div className="contact-status-box">
              <span className="live-pulse-indicator"></span>
              <div>
                <div className="status-heading">Status: Readily Available</div>
                <div className="status-sub">Open to On-site (Dhaka), Hybrid & Global Remote</div>
              </div>
            </div>

            <h3 className="contact-info-title">
              Direct Contact & Channels
            </h3>
            <p className="contact-info-desc">
              Feel free to reach out directly via email, phone, or schedule an exploratory discussion.
            </p>

            <div className="contact-cards-stack">
              
              {/* Email Card */}
              <div 
                className="contact-card-item"
                onClick={() => copyToClipboard('mohammad.rabius.sanii@gmail.com', 'email')}
                title="Click to copy email address"
              >
                <div className="contact-card-icon ember-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Official Email</span>
                  <span className="card-value">mohammad.rabius.sanii@gmail.com</span>
                </div>
                <span className="card-action-btn">
                  {copiedField === 'email' ? '✓ Copied' : 'Copy'}
                </span>
              </div>

              {/* Phone Card */}
              <div 
                className="contact-card-item"
                onClick={() => copyToClipboard('+8801774745666', 'phone')}
                title="Click to copy phone number"
              >
                <div className="contact-card-icon amber-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Direct Phone / WhatsApp</span>
                  <span className="card-value">+880 1774-745666</span>
                </div>
                <span className="card-action-btn">
                  {copiedField === 'phone' ? '✓ Copied' : 'Copy'}
                </span>
              </div>

              {/* Location Card */}
              <div className="contact-card-item no-copy">
                <div className="contact-card-icon cyan-icon">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="contact-card-text">
                  <span className="card-label">Geographic Base</span>
                  <span className="card-value">Dhaka-1236, Bangladesh</span>
                </div>
                <span className="card-action-tag">GMT+6</span>
              </div>

            </div>

            {/* Social Profile Buttons */}
            <div className="contact-social-row">
              <a 
                href="https://github.com/mohammad-rabius-sani" 
                target="_blank" 
                rel="noreferrer" 
                className="social-profile-btn"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
                <span>GitHub</span>
              </a>

              <a 
                href="https://linkedin.com/in/mohammad-rabius-sani" 
                target="_blank" 
                rel="noreferrer" 
                className="social-profile-btn"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>

              <a 
                href="/Mohammad_Rabius_Sani_CV.pdf" 
                download="Mohammad_Rabius_Sani_CV.pdf"
                className="social-profile-btn cv-download-pill"
                onClick={handleCvDownload}
                title="Download Official CV"
              >
                <i className="fas fa-file-pdf"></i>
                <span>Download CV</span>
              </a>
            </div>

          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE FORM ================= */}
          <div className="contact-form-panel glass-panel">
            
            {isSubmitted ? (
              <div className="submission-success-view">
                {/* Cute Floating Robot / Courier Drone Mascot */}
                <div className="cute-bot-stage">
                  <div className="radar-ping-ring ring-1"></div>
                  <div className="radar-ping-ring ring-2"></div>
                  <div className="radar-ping-ring ring-3"></div>

                  <div className="cute-bot-mascot">
                    <div className="bot-antenna">
                      <span className="antenna-sparkle"></span>
                      <span className="antenna-stalk"></span>
                    </div>
                    <div className="bot-head">
                      <div className="bot-visor">
                        <span className="bot-eye left"></span>
                        <span className="bot-eye right"></span>
                        <span className="bot-smile"></span>
                      </div>
                    </div>
                    <div className="bot-body">
                      <div className="bot-chest-core">
                        <i className="fas fa-heart"></i>
                      </div>
                    </div>
                    <div className="bot-thruster">
                      <span className="thruster-flame"></span>
                    </div>
                  </div>
                </div>

                {/* Status Pill */}
                <div className="success-status-pill">
                  <span className="pulse-dot-cyan"></span>
                  <span>ENCRYPTED DISPATCH · 200 OK</span>
                </div>

                <h3 className="success-title">
                  Beep Boop! Packet Captured! 🎉
                </h3>
                <p className="success-desc">
                  Your message has safely docked on Rabius Sani's personal dashboard in Dhaka! A direct notification ping was routed straight to his phone and email.
                </p>

                {/* Verified Telemetry Pipeline Checklist */}
                <div className="success-telemetry-box">
                  <div className="telemetry-item">
                    <i className="fas fa-circle-check text-cyan"></i>
                    <span><strong>Handshake:</strong> TLS encrypted transmission verified</span>
                  </div>
                  <div className="telemetry-item">
                    <i className="fas fa-circle-check text-ember"></i>
                    <span><strong>Routing:</strong> Direct notification ping sent to Rabius</span>
                  </div>
                  <div className="telemetry-item">
                    <i className="fas fa-bolt text-amber"></i>
                    <span><strong>Guaranteed ETA:</strong> Fast reply within 24 hours</span>
                  </div>
                </div>

                <button 
                  type="button"
                  className="btn-primary success-reset-btn"
                  onClick={() => setIsSubmitted(false)}
                >
                  <i className="fas fa-paper-plane"></i>
                  <span>Send Another Message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="transmission-form">
                
                <div className="form-header">
                  <h3 className="form-title">Send a Message</h3>
                  <p className="form-sub">Direct inbox delivery</p>
                </div>

                {/* 1-Click Message Presets */}
                <div className="topic-presets-row">
                  <span className="topic-presets-label">
                    <i className="fas fa-wand-magic-sparkles"></i> 1-Click Presets:
                  </span>
                  <div className="topic-preset-pills">
                    <button
                      type="button"
                      className="topic-preset-pill"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          subject: 'Software Engineering Role',
                          message: "Hi Rabius, we came across your software engineering portfolio and would like to connect regarding an engineering role with our team."
                        });
                      }}
                    >
                      💼 Software Role
                    </button>
                    <button
                      type="button"
                      className="topic-preset-pill"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          subject: 'Data Analytics & BI Project',
                          message: "Hi Rabius, we have a data analytics project involving Power BI dashboards, SQL modeling, and reporting pipelines."
                        });
                      }}
                    >
                      📊 Data Project
                    </button>
                    <button
                      type="button"
                      className="topic-preset-pill"
                      onClick={() => {
                        setFormData({
                          ...formData,
                          subject: 'General Collaboration / Hello',
                          message: "Hi Rabius, saw your work on PichiTV & PichiTube and would love to connect for an exploratory chat / freelance project."
                        });
                      }}
                    >
                      ☕ Freelance / Chat
                    </button>
                  </div>
                </div>

                {submitError && (
                  <div className="form-error-banner">
                    <i className="fas fa-exclamation-triangle"></i>
                    <span>{submitError}</span>
                  </div>
                )}

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject / Opportunity Type</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="Software Engineering Role">Software Engineering Opportunity</option>
                    <option value="Data Analytics & BI Project">Data Analytics & Power BI Project</option>
                    <option value="Android / IPTV App Consulting">Android / IPTV App Consulting</option>
                    <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                    <option value="General Collaboration / Hello">General Collaboration / Inquiries</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5"
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary form-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
