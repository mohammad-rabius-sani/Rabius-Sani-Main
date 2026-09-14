import React, { useEffect } from 'react';
import GlobalBackground3D from './components/GlobalBackground3D';
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

function App() {
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
      {/* Unified 2026 Three.js 3D Background Spanning All Sections */}
      <GlobalBackground3D />

      {/* Hardware-Accelerated Ambient Cursor Spotlight */}
      <CursorGlow />

      <Navbar />

      <main>
        <Hero />
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
    </div>
  );
}

export default App;

