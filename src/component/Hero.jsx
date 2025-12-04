import React from 'react';
import MagneticButton from './MagneticButton';
import ScrambleText from './ScrambleText';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center z-10">
        <div className="inline-block mb-8 px-4 py-2 border border-border bg-card reveal active">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">Status: Open for Work</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter mb-10 text-primary leading-none">
          <ScrambleText text="SHRAVAN" className="scramble-text block" /><br />
          <ScrambleText text="RAMAKUNJA" className="scramble-text block text-secondary" delay={200} />
        </h1>

        <ScrollReveal delay={200}>
          <p className="max-w-xl mx-auto text-lg text-secondary mb-16 font-light">
            Engineering the future with AI & Full Stack technologies. Minimalist code, maximalist impact.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <MagneticButton href="#projects" className="px-10 py-4 bg-primary text-page font-display font-bold uppercase tracking-wider hover:opacity-90 transition-opacity hover-trigger" data-cursor="link">
              Projects
            </MagneticButton>
            <MagneticButton href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/" target="_blank" className="px-10 py-4 border border-border text-primary font-display font-bold uppercase tracking-wider hover:bg-card transition-colors hover-trigger" data-cursor="link">
              LinkedIn
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Hero;
