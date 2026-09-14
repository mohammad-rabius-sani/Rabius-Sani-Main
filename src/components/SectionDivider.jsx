import React from 'react';
import './SectionDivider.css';

const SectionDivider = ({ label, index, accent = 'ember' }) => {
  return (
    <div className={`section-divider-wrap divider-${accent}`} aria-hidden="true">
      <div className="divider-line left-line" />
      <div className="divider-pill">
        <span className="divider-dot" />
        <span className="divider-index">{index}</span>
        <span className="divider-sep">//</span>
        <span className="divider-label">{label}</span>
      </div>
      <div className="divider-line right-line" />
      <div className="divider-ambient-glow" />
    </div>
  );
};

export default SectionDivider;
