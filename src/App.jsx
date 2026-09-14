import React, { useState, useEffect, Suspense, lazy } from 'react';
import CursorGlow from './components/CursorGlow';
import FloatingBackToTop from './components/FloatingBackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Dynamic Code Splitting for Three.js and Heavy Overlays
const GlobalBackground3D = lazy(() => import('./components/GlobalBackground3D'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('.fade-up-element').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-container">
      {/* Keyboard Accessibility Skip Link */}
      <a href="#hero" className="skip-to-content">
        Skip to main content
      </a>

      {/* Dynamic Three.js 3D Background with Graceful Fallback */}
      <Suspense fallback={<div className="bg-fallback-mesh" />}>
        <GlobalBackground3D />
      </Suspense>

      {/* Hardware-Accelerated Ambient Cursor Spotlight */}
      <CursorGlow />

      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <SectionDivider index="01" label="ABOUT & PHILOSOPHY" accent="ember" />
        <About />
        <SectionDivider index="02" label="CORE STACK & EXPERTISE" accent="cyan" />
        <Skills />
        <SectionDivider index="03" label="PRODUCTION ARCHITECTURE" accent="amber" />
        <Projects />
        <SectionDivider index="04" label="EXPERIENCE & CREDENTIALS" accent="sports" />
        <Experience />
        <SectionDivider index="05" label="DIRECT TRANSMISSION" accent="cyan" />
        <Contact />
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      <FloatingBackToTop />

      {/* In-Browser Curriculum Vitae Viewer Modal (Code Split) */}
      <Suspense fallback={null}>
        <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      </Suspense>
    </div>
  );
}

export default App;

