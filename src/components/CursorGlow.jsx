import React, { useEffect, useRef } from 'react';
import './CursorGlow.css';

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      el.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return <div className="cursor-spotlight-orb" ref={glowRef}></div>;
};

export default CursorGlow;
