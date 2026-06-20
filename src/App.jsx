import React, { useState, useEffect, useRef } from 'react';
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Reveal from './component/Reveal';
import OnekoCat from './component/OnekoCat';
import useClickSound from './hooks/useClickSound';

import { FiSun, FiMoon } from 'react-icons/fi';

const SECTIONS = ['about', 'experience', 'projects'];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'dark';
    } catch {
      return 'dark';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    try {
      localStorage.setItem('theme', theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');

  return { theme, toggle };
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-50 w-full h-[2px]">
      <div
        className="h-full bg-foreground transition-[width] duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

function Navbar({ theme, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('');
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observers = SECTIONS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      className={`sticky top-2 z-20 rounded-md py-3 backdrop-blur-xl bg-background/60 mb-6 transition-all duration-300 flex items-center justify-between px-4 ${
        visible ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
      }`}
    >
      <div className="flex items-center justify-center flex-1">
        <div className="flex items-center justify-center gap-6">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`text-sm no-underline transition-all duration-200 ${
                activeSection === id
                  ? 'text-foreground font-semibold'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>

      <button
        onClick={onToggleTheme}
        className="flex items-center justify-center size-7 rounded-md border border-border bg-card text-muted-foreground hover:text-foreground hover:bg-accent hover:border-accent transition-all duration-200 cursor-pointer shrink-0"
        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <FiSun size={13} /> : <FiMoon size={13} />}
      </button>
    </nav>
  );
}

function App() {
  useClickSound();
  const { theme, toggle: toggleTheme } = useTheme();

  return (
    <div className="container mx-auto max-w-3xl px-4 min-h-screen py-8">
      <OnekoCat />
      <ScrollProgress />

      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Projects /></Reveal>

      {/* Footer */}

      <Reveal as="footer" className="mt-10">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">stay updated</p>
            <p className="text-sm text-[#909092] mb-3">subscribe to my email list</p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="email address"
                className="bg-card border border-border px-4 py-2 rounded-md text-sm w-full max-w-xs focus:outline-none focus:border-ring transition-colors text-foreground placeholder:text-muted-foreground"
              />
              <button className="btn-inner-shadow bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-bold">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">skills</p>
            <p className="text-sm text-[#909092] max-w-xs">
              react l python l node l mongo l agentic systems l staying weird l can do L sit
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex gap-6 text-sm">
            <a href="https://github.com/shravanramakunja" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors no-underline">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors no-underline">
              LinkedIn
            </a>
            <a href="mailto:shravanramakunja@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors no-underline">
              Email
            </a>
          </div>
          <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} shravan ramakunja</p>
        </div>
      </Reveal>
    </div>
  );
}

export default App;
