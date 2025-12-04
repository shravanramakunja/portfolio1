import React from 'react';
import Navigation from './component/Navigation';
import Hero from './component/Hero';
import Marquee from './component/Marquee';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Rewards from './component/Rewards';
import MagneticButton from './component/MagneticButton';
import ScrollReveal from './component/ScrollReveal';
import CustomCursor from './component/CustomCursor';

function App() {
  return (
    <div className="bg-page text-secondary font-sans selection:bg-primary selection:text-page overflow-x-hidden">
      <CustomCursor />

      <Navigation />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Rewards />
      </main>

      {/* Footer */}
      <footer className="py-24 relative overflow-hidden bg-page border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-6xl md:text-8xl font-bold text-primary mb-12 tracking-tighter">
              LET'S TALK
            </h2>
            <MagneticButton href="mailto:shravanramakunja@gmail.com" className="inline-block px-12 py-6 bg-primary text-page font-display font-bold text-xl uppercase tracking-widest hover:opacity-90 transition-opacity hover-trigger" data-cursor="link">
              Get in Touch
            </MagneticButton>

            <div className="mt-24 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-secondary uppercase tracking-widest">
              <p>&copy; 2025 Shravan Ramakunja.</p>
              <div className="flex space-x-8 mt-4 md:mt-0">
                <a href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="https://github.com/shravanramakunja" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  );
}

export default App;
