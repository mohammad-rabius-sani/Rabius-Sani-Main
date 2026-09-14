import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './GlobalBackground3D.css';

const GlobalBackground3D = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect initial theme
    let isLight = document.documentElement.getAttribute('data-theme') === 'light';

    // 1. Renderer Setup
    let width = window.innerWidth;
    let height = window.innerHeight;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch (e) {
      console.warn('WebGL initialization failed:', e);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

    // 2. Scene & Fog Setup (Atmospheric & Soft, Never Overshadows Content)
    const scene = new THREE.Scene();
    const darkFogColor = 0x06070a;
    const lightFogColor = 0xf1f5f9;
    scene.fog = new THREE.FogExp2(isLight ? lightFogColor : darkFogColor, 0.016);

    // 3. Camera Setup
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 4, 38);

    // 4. Soft Ambient Lighting (Delicate Glows)
    const ambientLight = new THREE.AmbientLight(isLight ? 0xffffff : 0x8892b0, isLight ? 0.9 : 0.6);
    scene.add(ambientLight);

    const emberPointLight = new THREE.PointLight(isLight ? 0xea580c : 0xff6a1a, isLight ? 1.0 : 1.8, 80);
    emberPointLight.position.set(25, 20, 10);
    scene.add(emberPointLight);

    const cyanPointLight = new THREE.PointLight(isLight ? 0x0284c7 : 0x00f5d4, isLight ? 1.0 : 1.8, 80);
    cyanPointLight.position.set(-25, -15, 10);
    scene.add(cyanPointLight);

    // =========================================================================
    // ELEMENT 1: Fluid Undulating 3D Wave Ribbon Mesh
    // =========================================================================
    const waveCols = 64;
    const waveRows = 44;
    const waveWidth = 130;
    const waveHeight = 90;
    const waveGeometry = new THREE.PlaneGeometry(waveWidth, waveHeight, waveCols, waveRows);

    const waveMaterial = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.07 : 0.13,
      color: isLight ? 0x0284c7 : 0x00f5d4,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const waveMesh = new THREE.Mesh(waveGeometry, waveMaterial);
    waveMesh.rotation.x = -Math.PI / 2.6;
    waveMesh.position.set(0, -13, -8);
    scene.add(waveMesh);

    // Wave Peak Particles (Subtle Light Nodes)
    const wavePointsGeo = new THREE.BufferGeometry();
    const wavePosArray = new Float32Array(waveGeometry.attributes.position.array);
    wavePointsGeo.setAttribute('position', new THREE.BufferAttribute(wavePosArray, 3));

    const wavePointsMaterial = new THREE.PointsMaterial({
      size: 1.4,
      transparent: true,
      opacity: isLight ? 0.12 : 0.28,
      color: isLight ? 0xea580c : 0xffaa40,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const wavePoints = new THREE.Points(wavePointsGeo, wavePointsMaterial);
    wavePoints.rotation.x = waveMesh.rotation.x;
    wavePoints.position.copy(waveMesh.position);
    scene.add(wavePoints);

    // =========================================================================
    // ELEMENT 2: Floating 3D Geometric Orbitals (Soft Wireframe Sculptures)
    // =========================================================================
    // A. Icosahedron (Floating Left Depth)
    const icoGeo = new THREE.IcosahedronGeometry(6.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.08 : 0.16,
      color: isLight ? 0x0284c7 : 0x00f5d4,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });
    const icoMesh = new THREE.Mesh(icoGeo, icoMat);
    icoMesh.position.set(-28, 6, -18);
    scene.add(icoMesh);

    // B. Torus Orbital Ring (Floating Right Depth)
    const torusGeo = new THREE.TorusGeometry(8, 0.45, 16, 72);
    const torusMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.07 : 0.14,
      color: isLight ? 0xd97706 : 0xff9900,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.position.set(28, -5, -16);
    torusMesh.rotation.x = Math.PI / 4;
    scene.add(torusMesh);

    // C. Octahedron (Floating High Center Depth)
    const octGeo = new THREE.OctahedronGeometry(5, 0);
    const octMat = new THREE.MeshBasicMaterial({
      wireframe: true,
      transparent: true,
      opacity: isLight ? 0.06 : 0.12,
      color: isLight ? 0xea580c : 0xff5500,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });
    const octMesh = new THREE.Mesh(octGeo, octMat);
    octMesh.position.set(16, 18, -30);
    scene.add(octMesh);

    // =========================================================================
    // ELEMENT 3: 3D Ambient Depth Particle Stardust Field
    // =========================================================================
    const particleCount = 750;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const darkColorChoices = [
      new THREE.Color(0x00f5d4), // Cyan
      new THREE.Color(0xff6a1a), // Ember
      new THREE.Color(0xffb238), // Amber
      new THREE.Color(0x94a3b8)  // Silver
    ];

    const lightColorChoices = [
      new THREE.Color(0x0284c7), // Sky Blue
      new THREE.Color(0xea580c), // Warm Ember
      new THREE.Color(0xd97706), // Amber
      new THREE.Color(0x64748b)  // Slate
    ];

    const getColors = (light) => (light ? lightColorChoices : darkColorChoices);

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 130;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 80 - 10;

      const palette = getColors(isLight);
      const c = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: isLight ? 0.22 : 0.42,
      blending: isLight ? THREE.NormalBlending : THREE.AdditiveBlending
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    scene.add(starField);

    // =========================================================================
    // SCROLL & MOUSE INTERACTION STATE
    // =========================================================================
    let targetScrollPercent = 0;
    let currentScrollPercent = 0;

    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollPercent = docHeight > 0 ? window.scrollY / docHeight : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let targetMouse = { x: 0, y: 0 };
    let currentMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseLeave = () => {
      targetMouse.x = 0;
      targetMouse.y = 0;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    // Window Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    };
    window.addEventListener('resize', handleResize);

    // =========================================================================
    // THEME OBSERVER (DARK / LIGHT SYNCHRONIZATION)
    // =========================================================================
    const updateThemeStyles = (light) => {
      isLight = light;
      scene.fog.color.setHex(light ? lightFogColor : darkFogColor);

      // Wave Materials
      waveMaterial.opacity = light ? 0.07 : 0.13;
      waveMaterial.color.setHex(light ? 0x0284c7 : 0x00f5d4);
      waveMaterial.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      waveMaterial.needsUpdate = true;

      wavePointsMaterial.opacity = light ? 0.12 : 0.28;
      wavePointsMaterial.color.setHex(light ? 0xea580c : 0xffaa40);
      wavePointsMaterial.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      wavePointsMaterial.needsUpdate = true;

      // Orbitals
      icoMat.opacity = light ? 0.08 : 0.16;
      icoMat.color.setHex(light ? 0x0284c7 : 0x00f5d4);
      icoMat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      icoMat.needsUpdate = true;

      torusMat.opacity = light ? 0.07 : 0.14;
      torusMat.color.setHex(light ? 0xd97706 : 0xff9900);
      torusMat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      torusMat.needsUpdate = true;

      octMat.opacity = light ? 0.06 : 0.12;
      octMat.color.setHex(light ? 0xea580c : 0xff5500);
      octMat.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      octMat.needsUpdate = true;

      // Lights
      ambientLight.color.setHex(light ? 0xffffff : 0x8892b0);
      ambientLight.intensity = light ? 0.9 : 0.6;
      emberPointLight.color.setHex(light ? 0xea580c : 0xff6a1a);
      cyanPointLight.color.setHex(light ? 0x0284c7 : 0x00f5d4);

      // Starfield
      starMaterial.opacity = light ? 0.22 : 0.42;
      starMaterial.blending = light ? THREE.NormalBlending : THREE.AdditiveBlending;
      const palette = getColors(light);
      const colArr = starGeometry.attributes.color.array;
      for (let i = 0; i < particleCount; i++) {
        const c = palette[Math.floor(Math.random() * palette.length)];
        colArr[i * 3] = c.r;
        colArr[i * 3 + 1] = c.g;
        colArr[i * 3 + 2] = c.b;
      }
      starGeometry.attributes.color.needsUpdate = true;
      starMaterial.needsUpdate = true;
    };

    const themeObserver = new MutationObserver(() => {
      const currentLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (currentLight !== isLight) {
        updateThemeStyles(currentLight);
      }
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    // =========================================================================
    // ANIMATION RENDER LOOP (60FPS FLUID GLIDE)
    // =========================================================================
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth Lerp for Scroll & Mouse
      currentScrollPercent += (targetScrollPercent - currentScrollPercent) * 0.045;
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.035;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.035;

      // 1. Scroll-Driven Camera Flight & Parallax Navigation
      camera.position.y = 4 - currentScrollPercent * 18 + currentMouse.y * 1.5;
      camera.position.z = 38 + Math.sin(currentScrollPercent * Math.PI) * 8;
      camera.rotation.y = -currentMouse.x * 0.08 + currentScrollPercent * 0.4;
      camera.rotation.x = -currentMouse.y * 0.06 - currentScrollPercent * 0.15;

      // 2. Procedural Wave Undulation
      const pos = waveGeometry.attributes.position;
      const pointsPos = wavePointsGeo.attributes.position;
      const t = elapsedTime * 0.32;

      for (let i = 0; i < pos.count; i++) {
        const u = pos.getX(i);
        const v = pos.getY(i);
        // Harmonic trigonometric multi-wave
        const z =
          Math.sin(u * 0.07 + t) * 3.2 +
          Math.cos(v * 0.05 + t * 0.75) * 2.5 +
          Math.sin((u + v) * 0.04 + t * 0.5) * 1.8;

        pos.setZ(i, z);
        pointsPos.setZ(i, z);
      }
      pos.needsUpdate = true;
      pointsPos.needsUpdate = true;

      // Wave Parallax Translation
      waveMesh.position.y = -13 + currentScrollPercent * 6;
      wavePoints.position.y = waveMesh.position.y;

      // 3. Geometric Orbitals Gentle Rotation & Scroll Translation
      icoMesh.rotation.x += 0.0018;
      icoMesh.rotation.y += 0.0022;
      icoMesh.position.y = 6 - currentScrollPercent * 10;

      torusMesh.rotation.x += 0.0015;
      torusMesh.rotation.y += 0.002;
      torusMesh.position.y = -5 - currentScrollPercent * 8;

      octMesh.rotation.y -= 0.002;
      octMesh.rotation.z += 0.0015;
      octMesh.position.y = 18 - currentScrollPercent * 14;

      // 4. Subtle Starfield Drift
      starField.rotation.y = elapsedTime * 0.015 + currentScrollPercent * 0.2;
      starField.rotation.x = elapsedTime * 0.008;

      // Render
      renderer.render(scene, camera);
    };

    animate();

    // =========================================================================
    // CLEANUP ON UNMOUNT
    // =========================================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      themeObserver.disconnect();

      // Dispose Three.js Resources
      waveGeometry.dispose();
      waveMaterial.dispose();
      wavePointsGeo.dispose();
      wavePointsMaterial.dispose();
      icoGeo.dispose();
      icoMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      octGeo.dispose();
      octMat.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="global-3d-bg-wrapper" ref={containerRef} aria-hidden="true">
      {/* 3D WebGL Canvas Layer */}
      <canvas ref={canvasRef} className="canvas-3d-scene" />

      {/* Atmospheric Tech Matrix Grid Overlay */}
      <div className="bg-grid-overlay" />

      {/* Atmospheric Radial Vignette: Protects Content Clarity and Prevents Overshadowing */}
      <div className="ambient-vignette-overlay" />

      {/* Vertical Depth Gradient: Enhances Section Contrast & Navbar Depth */}
      <div className="vertical-depth-overlay" />
    </div>
  );
};

export default GlobalBackground3D;
