import React from 'react';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold uppercase tracking-wider text-primary hover-trigger" data-cursor="link">
          SR<span className="text-secondary">.</span>
        </a>
        <div className="hidden md:flex items-center space-x-12">
          <a href="#about" className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors hover-trigger" data-cursor="link">About</a>
          <a href="#experience" className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors hover-trigger" data-cursor="link">Experience</a>
          <a href="#projects" className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors hover-trigger" data-cursor="link">Projects</a>
          <a href="#awards" className="text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors hover-trigger" data-cursor="link">Awards</a>

          <ThemeToggle />
        </div>
        <MagneticButton href="mailto:contact@shravan.dev" className="hidden md:inline-flex items-center justify-center px-6 py-3 text-xs font-bold uppercase tracking-widest text-page bg-primary hover:opacity-90 transition-opacity hover-trigger" data-cursor="link">
          Contact
        </MagneticButton>
      </div>
    </nav>
  );
};

export default Navigation;
