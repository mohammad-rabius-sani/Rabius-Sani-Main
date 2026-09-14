import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './ResumeModal.css';

const ResumeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.3 },
      colors: ['#ff6a1a', '#ffb238', '#00f5d4', '#ffffff']
    });
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-container glass-panel" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="resume-modal-header">
          <div className="resume-modal-title-cluster">
            <div className="resume-pdf-icon">
              <i className="fas fa-file-pdf"></i>
            </div>
            <div>
              <h3 className="resume-doc-title">Rabius Sani — Official Curriculum Vitae</h3>
              <span className="resume-doc-sub">Software Engineer · Data Analyst · IT &amp; Systems</span>
            </div>
          </div>

          <div className="resume-modal-actions">
            <a 
              href="/Mohammad_Rabius_Sani_CV.pdf" 
              download="Mohammad_Rabius_Sani_CV.pdf"
              className="btn-resume-download"
              onClick={handleDownload}
              title="Download PDF to Computer"
            >
              <i className="fas fa-arrow-down-to-line"></i>
              <span>Download PDF</span>
            </a>

            <a 
              href="/Mohammad_Rabius_Sani_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-resume-external"
              title="Open PDF in Full Tab"
            >
              <i className="fas fa-arrow-up-right-from-square"></i>
            </a>

            <button 
              type="button" 
              className="btn-resume-close" 
              onClick={onClose}
              aria-label="Close CV preview"
            >
              <i className="fas fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* PDF Viewer Iframe */}
        <div className="resume-viewer-frame">
          <iframe 
            src="/Mohammad_Rabius_Sani_CV.pdf#toolbar=1&navpanes=0&scrollbar=1" 
            title="Rabius Sani Resume Preview"
            className="resume-iframe"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="resume-modal-footer">
          <span className="resume-footer-tag">
            <i className="fas fa-shield-check"></i> Verified Production Credentials &amp; Certifications
          </span>
          <span className="resume-footer-location">Dhaka, Bangladesh · Open to Remote &amp; On-Site</span>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
