/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Instagram, Mail, Linkedin } from 'lucide-react';

const PROJECTS = [
  { 
    id: 'social', 
    title: 'Social Media', 
    color: '#006c3f', 
    textColor: '#FFFFFF', 
    rotation: -8, 
    x: -520, 
    y: -140,
    content: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1TJVyXUGLELZKdzdoGMaDtXO2MNu53LPq' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1hSsqhXPbRLSNc76FSiY5o7axZ4E9pXDV' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1l0JWKxqFhwxbBorkF6A83UwBbLQoAXi6' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Vv4TJyQ84ezSYP_aEsvib7J4WzE745RA' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1nnW7RwIW5i4C4j_rsO8zBJCWPsW5WbE7' }
    ]
  },
  { 
    id: 'packaging', 
    title: 'Packaging', 
    color: 'var(--color-packaging)', 
    textColor: '#FFFFFF', 
    rotation: -3, 
    x: -260, 
    y: 100,
    content: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1R5Hvaj_R9yrfDCdFcCK6mZ-wz8HJavEo' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1YZ-46oU_G-wFgj_qwBA5QPhSnhEw1NF-' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/12d7vSu7ZBjt68vpFzrabkHpMj_FO_--C' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1lzfkV5lzJe4RaPmz4OBCHnZdvSGUiD4x' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1YxGMdWyxX2UXvutWXiYZ_NQV_EIGmGGs' }
    ]
  },
  { 
    id: 'branding', 
    title: 'Branding', 
    color: 'var(--color-branding)', 
    textColor: '#1A1A1A', 
    rotation: 0, 
    x: 0, 
    y: -220,
    content: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1EzKxe-J1xEcEPKCteHz81slBXijB7Hqm' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1IDJ3IPlqueudcf6J3m-doqx7Ao_lmzFb' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1eDNhVPIEtv4crf-_Qnj07UuybMhV8sFw' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1k2rOBMSO2L0KSv7MP4ZYeJxnobUQjH4A' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1NeaJQuWmXxUHthJu80e0SLG1YaSINA5y' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1eekYe5cPhQjQNGrXoqCNWEjOmr2jnLzI' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1oIbY8RXHE1pKoiIsX_YVEDnE2O-OLPyv' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/14RAxLIRjQvrPKVxhP2FKFgU4Y6-qefaG' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1jO4kVg4oWVWGrr6LdbUhPLS0fgXH_VMH' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1YF1qxOw1vxtYvBNvhe7TGgaBTGImQXk0' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1BfiRScm_-R4D_WHQz_ZQWMvVPYabfjbA' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/15TcoUKAdj3baRKXBDmZACCpJD8w7YrEP' }
    ]
  },
  { 
    id: 'uiux', 
    title: 'UI/UX Design', 
    color: '#39225d', 
    textColor: '#FFFFFF', 
    rotation: 5, 
    x: 260, 
    y: 120,
    content: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1xqznHFdiBh2LRliOThLZ6Bax2J0LmuWQ' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1Dg16MX_mgCX3ZlOdNXTd0jYqJWS5zNco' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1yA1inNcLcGSQyd9lggasbimSamoeqUdu' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1qO776bVEs8803jAOBd6DBg97MdSUblKE' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1vsLeG1RWAlHsGqVzwrRZ87z8QtLM_zvH' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1pwCp6kv4CryZ0BMWcU7lFo1gimlwW8Gy' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1ublH8X9oeTPq_3bd7_zL7wm7IH9bJ6jW' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1j1KdCwmxIuHHtV9D-dBMC6KRndaQ71_k' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1AT1lJy8ibnKaZHC6G8wri5uqz3KsjmZx' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1dUPeA-RJ1Da6unlYGlCquMUeIryo3j5p' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1lEKKXh_ixoXRwrKqSiTFvzLrjUt18Lcz' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1yMWkGGh3tJxZTPgP9-xj0w_JjaF543e6' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1JXV_zEGIdanO69p04zVHBp8hUdOqOPY8' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/17t54KCeKSo0HCmdLzQO3CZi5Nrr5htq5' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1RrxOvjZsICankpaInlgUU2EQh0tkN5D7' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1CRZjGITGPC0PqyljZchHou862VfQ6Ek3' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1m3HrIe9s7JbGu5rr2HHohMiIw9xUvvZ1' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1dS9-F12eaijHbVaBw9BxrRJTxm7pS0iZ' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1OpJxN684b8omKc3ZCnr304oClLaYrOx5' }
    ]
  },
  { 
    id: 'illustration', 
    title: 'Illustration', 
    color: '#C87092', 
    textColor: '#1A1A1A', 
    rotation: 9, 
    x: 520, 
    y: -120,
    content: [
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1bjF_Qxlp_96d-EalTA5-PivS7U74Jq7P' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1mvNp1OW7hD8UpLs3sxCdueXwBB-vMqvB' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1CVqRTwJfuVWrNk5CR3TY6PxWkO30ytBx' },
      { type: 'image', url: 'https://lh3.googleusercontent.com/d/1vCo_g8W_MsiOFFPZz-9H5SdaXpivtVJP' }
    ]
  },
];

export default function App() {
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorType, setCursorType] = useState<'default' | 'open' | 'view' | 'dot' | 'pill'>('default');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const cursorRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);

  // Handle responsive scaling
  useEffect(() => {
    const handleResize = () => {
      const targetWidth = 1920;
      const targetHeight = 1080;
      const widthScale = window.innerWidth / targetWidth;
      const heightScale = window.innerHeight / targetHeight;
      setScale(Math.min(widthScale, heightScale, 1));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth cursor lag (lerp)
  useEffect(() => {
    const animateCursor = () => {
      setCursorPos(prev => ({
        x: prev.x + (mousePos.x - prev.x) * 0.15,
        y: prev.y + (mousePos.y - prev.y) * 0.15,
      }));
      requestRef.current = requestAnimationFrame(animateCursor);
    };
    requestRef.current = requestAnimationFrame(animateCursor);
    return () => cancelAnimationFrame(requestRef.current!);
  }, [mousePos]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoaded(true), 100);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFolderClick = () => {
    if (!isFolderOpen) setIsFolderOpen(true);
  };

  const handleCloseFolder = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFolderOpen(false);
  };

  const handleProjectClick = (projectId: string) => {
    setActiveProject(projectId);
  };

  const handleBack = () => {
    setActiveProject(null);
  };

  const currentProject = useMemo(() => PROJECTS.find(p => p.id === activeProject), [activeProject]);

  return (
    <div 
      className="relative w-screen h-screen bg-desk overflow-hidden select-none flex items-center justify-center"
      onClick={() => {
        if (isFolderOpen && !activeProject) setIsFolderOpen(false);
      }}
    >
      {/* Custom Cursor (Moved outside scaled container for correct positioning) */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] flex items-center justify-center transition-[width,height,border-radius,background-color] duration-200 ease-out ${
          cursorType === 'default' ? 'w-3 h-3 bg-primary rounded-full' :
          cursorType === 'open' ? 'w-14 h-14 bg-primary rounded-full' :
          cursorType === 'view' ? 'w-14 h-14 bg-primary rounded-full' :
          cursorType === 'dot' ? 'w-2 h-2 bg-primary rounded-full' :
          'w-10 h-4 bg-primary rounded-full'
        }`}
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {(cursorType === 'open' || cursorType === 'view') && (
          <span className="text-desk text-[11px] font-medium uppercase tracking-wider">
            {cursorType}
          </span>
        )}
      </div>

      {/* Top Navigation */}
      <nav className={`fixed top-0 left-0 w-full h-[64px] px-12 z-[100] flex justify-between items-center border-b border-black/[0.08] transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'} ${activeProject ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <span className="font-sans text-[14px] font-bold uppercase tracking-[3px]">HARSHITA TANWAR</span>
        </div>
        <div className="flex gap-14">
          {['Work', 'About', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === 'About') setIsAboutOpen(true);
              }}
              onMouseEnter={() => setCursorType('pill')}
              onMouseLeave={() => setCursorType('default')}
              className="font-sans text-[14px] font-medium uppercase tracking-[3px] hover:opacity-50 transition-opacity"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {/* Scaled Content Container */}
      <div 
        className="relative w-[1920px] h-[1080px] shrink-0 origin-center transition-transform duration-500 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        {/* Left Panel */}
        <div 
          className={`absolute left-0 top-0 w-[38%] h-full flex flex-col justify-center pl-[37px] pt-[25px] z-10 transition-transform duration-700 ease-in-out ${
            activeProject ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="font-serif text-[128px] leading-[0.85] font-black tracking-[-4px] mb-6 pb-[10px]">
              Harshita<br />Tanwar
            </h1>
            
            <div className="w-16 h-[2px] bg-primary mb-4" />
            <p className="font-sans text-[18px] font-normal uppercase tracking-[4px] mb-6 pt-[7px]">
              Graphic & Visual Designer
            </p>
            
            <p className="font-sans text-[19px] text-primary/60 max-w-[500px] mb-10 leading-[1.6]">
              Crafting digital experiences that bridge the gap between physical tactility and digital precision.
            </p>

            <div className="flex gap-8 mb-12">
              <button 
                onMouseEnter={() => setCursorType('pill')}
                onMouseLeave={() => setCursorType('default')}
                onClick={handleFolderClick}
                className="font-sans text-[16px] font-medium uppercase tracking-[2px] border-b-2 border-primary pb-1 hover:opacity-60 transition-opacity"
              >
                View Work
              </button>
              <button 
                onMouseEnter={() => setCursorType('pill')}
                onMouseLeave={() => setCursorType('default')}
                onClick={() => setIsAboutOpen(true)}
                className="font-sans text-[16px] font-medium uppercase tracking-[2px] border-b-2 border-primary pb-1 hover:opacity-60 transition-opacity"
              >
                About Me
              </button>
            </div>

            <div className="flex gap-10">
              {[
                { name: 'Instagram', url: 'https://www.instagram.com/harshitatanwarr/' },
                { name: 'Behance', url: 'https://www.behance.net/harshitatanwar' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/harshita-tanwar-8b2878280/' }
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorType('pill')}
                  onMouseLeave={() => setCursorType('default')}
                  className="font-sans text-[14px] text-primary/40 uppercase tracking-[2px] hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Panel / Desktop Area */}
        <div className="absolute right-0 top-0 w-[62%] h-full flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full flex items-center justify-center">
            
            {/* Folder Container */}
            <div 
              className={`relative transition-all duration-1000 ease-out pointer-events-auto ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${activeProject ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}
              style={{ transform: `rotate(${isFolderOpen ? 0 : -3}deg)` }}
            >
              {/* The Folder */}
              <div 
                className="relative w-[680px] h-[480px] perspective-1200"
                onMouseEnter={() => !isFolderOpen && setCursorType('open')}
                onMouseLeave={() => setCursorType('default')}
                onClick={handleFolderClick}
              >
                {/* Peeking Tabs (visible when closed) */}
                {!isFolderOpen && (
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 flex gap-3 z-0">
                    {PROJECTS.map((p, i) => (
                      <div 
                        key={p.id}
                        className="w-24 h-9 rounded-t-md transition-transform duration-500"
                        style={{ 
                          backgroundColor: p.color,
                          transform: `translateY(${isFolderOpen ? -20 : 0}px)`,
                          transitionDelay: `${i * 50}ms`
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Folder Body */}
                <div className="absolute inset-0 bg-folder rounded-sm shadow-xl z-10 flex flex-col items-center justify-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-folder w-[140px] h-10 flex items-center justify-center rounded-t-lg">
                    <span className="font-sans text-[13px] font-bold uppercase tracking-[4px]">
                      {isFolderOpen ? 'Choose ↓' : 'Projects'}
                    </span>
                  </div>
                  
                  <h2 className="font-serif text-[72px] font-bold text-primary/20">Portfolio</h2>
                </div>

                {/* Folder Flap */}
                <div 
                  className={`absolute inset-0 bg-flap rounded-sm z-30 origin-bottom transition-all duration-500 ease-in-out preserve-3d ${isFolderOpen ? 'pointer-events-none' : ''}`}
                  style={{ transform: isFolderOpen ? 'rotateX(-110deg)' : 'rotateX(0deg)' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center backface-hidden">
                     <div className="w-48 h-[1px] bg-primary/10" />
                  </div>
                </div>

                {/* Project Cards (Inside/Spread) */}
                {PROJECTS.map((p, i) => (
                  <div
                    key={p.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(p.id);
                    }}
                    onMouseEnter={() => setCursorType('view')}
                    onMouseLeave={() => setCursorType('default')}
                    className={`absolute left-1/2 top-1/2 w-[240px] h-[300px] shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer group ${
                      isFolderOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{
                      backgroundColor: p.color,
                      transform: isFolderOpen 
                        ? `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px)) rotate(${p.rotation}deg)` 
                        : `translate(-50%, -50%) rotate(0deg)`,
                      zIndex: isFolderOpen ? 20 + i : 5,
                      transitionDelay: isFolderOpen ? `${i * 80}ms` : '0ms'
                    }}
                  >
                    <div className="absolute inset-0 border border-black/5" />
                    <div className="absolute top-4 right-4 text-2xl transition-transform duration-300 group-hover:translate-x-2" style={{ color: p.textColor }}>
                      →
                    </div>
                    <div className="absolute bottom-6 left-6 pr-4" style={{ color: p.textColor }}>
                      <p className="font-sans text-[10px] uppercase tracking-widest opacity-60 mb-1">Project 0{i+1}</p>
                      <h3 className="font-serif text-[28px] font-bold leading-tight">{p.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hint Text */}
              <div className={`absolute left-1/2 -translate-x-1/2 bottom-[-24px] transition-opacity duration-500 ${isFolderOpen ? 'opacity-0' : 'opacity-100'}`}>
                <p className="font-sans text-[13px] italic text-primary/30 tracking-wider">click to open</p>
              </div>

              {/* Close Link */}
              <div 
                className={`absolute left-1/2 -translate-x-1/2 bottom-[-120px] transition-all duration-500 ${isFolderOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
              >
                <button 
                  onClick={handleCloseFolder}
                  onMouseEnter={() => setCursorType('pill')}
                  onMouseLeave={() => setCursorType('default')}
                  className="font-sans text-[11px] font-medium uppercase tracking-[3px] text-primary/40 hover:text-primary transition-colors"
                >
                  Close Folder
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Project View */}
      <div 
        className={`fixed inset-0 z-[200] transition-all duration-500 ease-in-out ${
          activeProject ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: currentProject?.color || 'transparent' }}
      >
        {activeProject && (
          <div className="w-full h-full flex flex-col py-0 px-[150px]" style={{ color: currentProject?.textColor }}>
            {/* Top Bar */}
            <div className="flex items-center justify-between mb-12">
              <button 
                onClick={handleBack}
                onMouseEnter={() => setCursorType('dot')}
                onMouseLeave={() => setCursorType('default')}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-8 bg-desk/20 rounded-sm flex items-center justify-center group-hover:bg-desk/40 transition-colors">
                  <div className="w-4 h-3 border border-current opacity-60" />
                </div>
                <span className="font-sans text-[12px] uppercase tracking-[3px]">Back</span>
              </button>

              <h2 className="font-serif text-[32px] font-bold">{currentProject?.title}</h2>

              <button 
                onClick={handleBack}
                onMouseEnter={() => setCursorType('dot')}
                onMouseLeave={() => setCursorType('default')}
                className="w-12 h-12 flex items-center justify-center hover:rotate-90 transition-transform duration-300"
              >
                <div className="relative w-6 h-6">
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current rotate-45" />
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -rotate-45" />
                </div>
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="w-full flex flex-col items-center">
                {currentProject?.content ? (
                  <div className="w-full flex flex-col">
                    {currentProject.content.map((item, idx) => (
                      <div key={idx} className="w-full bg-black/5 min-h-[400px] flex items-center justify-center relative">
                        <img 
                          src={item.url}
                          alt={`${currentProject.title} content ${idx}`}
                          className="w-full h-auto block relative z-10"
                          referrerPolicy="no-referrer"
                          onLoad={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.parentElement?.classList.remove('bg-black/5');
                          }}
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            console.error(`Failed to load image: ${item.url}`);
                            target.style.display = 'none';
                            const errorMsg = document.createElement('p');
                            errorMsg.className = 'text-xs opacity-40 uppercase tracking-widest';
                            errorMsg.innerText = 'Image failed to load - check sharing settings';
                            target.parentElement?.appendChild(errorMsg);
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div 
                    className="w-[600px] h-[800px] border-2 border-dashed flex items-center justify-center transition-all duration-700 delay-300"
                    style={{ 
                      borderColor: currentProject?.textColor + '44',
                      opacity: activeProject ? 1 : 0,
                      transform: activeProject ? 'translateY(0)' : 'translateY(40px)'
                    }}
                  >
                    <p className="font-sans text-[14px] italic opacity-40 tracking-widest uppercase">
                      your work goes here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* About Section */}
      <div 
        className={`fixed inset-0 z-[300] transition-all duration-500 ease-in-out ${
          isAboutOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ backgroundColor: '#F7F5F0' }}
      >
        <div className="w-full h-full flex flex-col py-0 px-[80px] text-primary">
          {/* Top Bar */}
          <div className="flex items-center justify-between h-[120px] shrink-0">
            <button 
              onClick={() => setIsAboutOpen(false)}
              onMouseEnter={() => setCursorType('dot')}
              onMouseLeave={() => setCursorType('default')}
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-8 bg-black/5 rounded-sm flex items-center justify-center group-hover:bg-black/10 transition-colors">
                <div className="w-4 h-3 border border-current opacity-60" />
              </div>
              <span className="font-sans text-[12px] uppercase tracking-[3px]">Back</span>
            </button>

            <h2 className="font-serif text-[32px] font-bold">About Me</h2>

            <button 
              onClick={() => setIsAboutOpen(false)}
              onMouseEnter={() => setCursorType('dot')}
              onMouseLeave={() => setCursorType('default')}
              className="w-12 h-12 flex items-center justify-center hover:rotate-90 transition-transform duration-300"
            >
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current rotate-45" />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-current -rotate-45" />
              </div>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto custom-scrollbar pb-20">
             <div className="flex gap-10 pt-8 items-start mx-auto" style={{ width: '1350px' }}>
                {/* Left: Image */}
                <div className="shrink-0" style={{ width: '395px' }}>
                   <div className="w-full aspect-[4/5] bg-black/5 overflow-hidden rounded-sm shadow-2xl">
                      <img 
                        src="https://lh3.googleusercontent.com/d/1OqHvcwZsMLvuKj-4MBHukL5Aj-SRL3FO" 
                        alt="Harshita Tanwar" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        style={{ width: '394.675px', height: '506.588px' }}
                      />
                   </div>
                </div>

                {/* Right: Info Grid */}
                <div className="flex-1 grid grid-cols-3 gap-10">
                   {/* Column 1: About */}
                   <div style={{ width: '300px' }}>
                      <h3 className="font-sans text-[12px] uppercase tracking-[4px] opacity-40 mb-10">About</h3>
                      <div className="flex items-center gap-4 mb-8">
                         <span className="font-serif text-[80px] font-black leading-none">2+</span>
                         <span className="font-sans text-[14px] leading-tight uppercase tracking-[2px] opacity-60">Years of<br/>experience</span>
                      </div>
                      <p className="font-sans text-[15px] leading-[1.7] opacity-80" style={{ width: '282px' }}>
                        I’m just a girl with creative ideas and a serious relationship with good design. As a graphic designer, I turn random thoughts, tiny details, and last-minute sparks of inspiration into visuals that actually speak. Somewhere between color palettes, typography, and creative chaos, I found my thing — making ideas look beautiful, smart, and a little unforgettable.
                      </p>
                   </div>

                   {/* Column 2: Software & Contact */}
                   <div style={{ width: '236px' }}>
                      <div className="mb-12">
                        <h3 className="font-sans text-[12px] uppercase tracking-[4px] opacity-40 mb-10">Software</h3>
                        <div className="flex flex-col gap-3 items-start">
                           {['Adobe Illustrator', 'Photoshop', 'Figma', 'Adobe InDesign', 'Filmora'].map(software => (
                             <div key={software} className="px-5 py-2 bg-black/5 rounded-full font-sans text-[13px] uppercase tracking-[1px] whitespace-nowrap">
                               {software}
                             </div>
                           ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-sans text-[12px] uppercase tracking-[4px] opacity-40 mb-10">Contact</h3>
                        <div className="flex gap-6">
                           <a 
                             href="https://www.instagram.com/harshitatanwarr/" 
                             target="_blank"
                             rel="noopener noreferrer"
                             className="opacity-60 hover:opacity-100 transition-opacity" 
                             onMouseEnter={() => setCursorType('dot')} 
                             onMouseLeave={() => setCursorType('default')}
                           >
                              <Instagram size={20} />
                           </a>
                           <a 
                             href="https://www.behance.net/harshitatanwar" 
                             target="_blank"
                             rel="noopener noreferrer"
                             className="opacity-60 hover:opacity-100 transition-opacity" 
                             onMouseEnter={() => setCursorType('dot')} 
                             onMouseLeave={() => setCursorType('default')}
                           >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 12h2a2.1 2.1 0 1 1 0 4H9V8h2a2 2 0 1 1 0 4H9zm0 0h2"/><path d="M15 13h6"/><path d="M15 17h6a3 3 0 0 0 0-6h-6v6z"/>
                              </svg>
                           </a>
                           <a 
                             href="https://www.linkedin.com/in/harshita-tanwar-8b2878280/" 
                             target="_blank"
                             rel="noopener noreferrer"
                             className="opacity-60 hover:opacity-100 transition-opacity" 
                             onMouseEnter={() => setCursorType('dot')} 
                             onMouseLeave={() => setCursorType('default')}
                           >
                              <Linkedin size={20} />
                           </a>
                        </div>
                      </div>
                   </div>

                   {/* Column 3: Experience */}
                   <div>
                      <h3 className="font-sans text-[12px] uppercase tracking-[4px] opacity-40 mb-10">Experience</h3>
                      <div className="flex flex-col gap-8">
                         {[
                           { role: 'Graphic Designer', company: 'Opacity Studio' },
                           { role: 'Graphic Designer', company: 'Social Theory Media Inc' },
                           { role: 'GD Intern', company: 'Amity University Rajasthan' },
                           { role: 'Graphic Designer', company: 'Devwings' },
                           { role: 'GD Intern', company: 'Nimantran Digital Designs' },
                           { role: 'GD Intern', company: 'The Digital Company' },
                         ].map((exp, i) => (
                           <div key={i} className="flex gap-4">
                              <div className="w-1.5 h-1.5 bg-[#C77DFF] rounded-full mt-[8px] shrink-0" />
                              <div>
                                 <h4 className="font-sans text-[16px] font-bold leading-tight">{exp.role}</h4>
                                 <p className="font-sans text-[14px] opacity-60 mt-1">{exp.company}</p>
                              </div>
                           </div>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
