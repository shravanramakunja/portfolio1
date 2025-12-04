import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section id="about" className="py-16 relative bg-page">
      <div className="container mx-auto px-6 mb-20">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-4xl font-bold text-primary uppercase tracking-tight">Capabilities</h2>
            <span className="text-secondary hidden md:block text-sm font-mono">01 // SKILLS</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[minmax(200px,auto)]">

          {/* Main Bio */}
          <ScrollReveal className="md:col-span-2 lg:col-span-2 row-span-2">
            <div className="bento-card p-10 flex flex-col justify-between h-full">
              <div>
                <i className="fas fa-cube text-4xl text-primary mb-8"></i>
                <h3 className="font-display text-3xl font-bold text-primary mb-6 uppercase">The Intersection</h3>
                <p className="text-secondary leading-relaxed text-lg font-light">
                  I don't just write code; I construct systems. Bridging the gap between raw machine learning logic and fluid, responsive user interfaces. My work is defined by precision and scalability.
                </p>
              </div>
              <div className="mt-8 pt-8 border-t border-border flex justify-between items-end">
                <span className="text-xs uppercase tracking-widest text-secondary">Based in India</span>
                <i className="fas fa-arrow-right -rotate-45 text-primary"></i>
              </div>
            </div>
          </ScrollReveal>

          {/* Frontend */}
          <ScrollReveal delay={100}>
            <div className="bento-card p-8 flex flex-col justify-center h-full hover-trigger" data-cursor="link">
              <h4 className="font-display font-bold text-primary text-xl mb-2">FRONTEND</h4>
              <ul className="text-secondary text-sm space-y-2 font-mono mt-4">
                <li>React.js</li>
                <li>Framer</li>
                <li>Tailwind CSS</li>
                <li>Figma</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* AI / ML */}
          <ScrollReveal delay={200}>
            <div className="bento-card p-8 flex flex-col justify-center h-full hover-trigger" data-cursor="link">
              <h4 className="font-display font-bold text-primary text-xl mb-2">AI / ML</h4>
              <ul className="text-secondary text-sm space-y-2 font-mono mt-4">
                <li>Python</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>OpenCV</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Stats */}
          <ScrollReveal delay={300} className="md:col-span-2">
            <div className="bento-card bg-primary text-primary p-10 flex items-center justify-between h-full border-border">
              <div className="text-page">
                <h3 className="text-6xl font-display font-bold mb-2">03<span className="text-xl align-top">+</span></h3>
                <p className="text-page/60 text-xs uppercase tracking-widest font-bold">Years Exp</p>
              </div>
              <div className="h-16 w-px bg-page/20"></div>
              <div className="text-page">
                <h3 className="text-6xl font-display font-bold mb-2">20<span className="text-xl align-top">+</span></h3>
                <p className="text-page/60 text-xs uppercase tracking-widest font-bold">Projects</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Backend */}
          <ScrollReveal delay={400}>
            <div className="bento-card p-8 flex flex-col justify-center h-full hover-trigger" data-cursor="link">
              <h4 className="font-display font-bold text-primary text-xl mb-2">BACKEND</h4>
              <ul className="text-secondary text-sm space-y-2 font-mono mt-4">
                <li>Node.js</li>
                <li>PostgreSQL</li>
                <li>Docker / K8s</li>
                <li>AWS</li>
              </ul>
            </div>
          </ScrollReveal>

          {/* GitHub Link */}
          <ScrollReveal delay={500}>
            <a href="https://github.com/shravanramakunja" target="_blank" rel="noopener noreferrer" className="bento-card bg-page p-8 flex flex-col items-center justify-center text-center group hover:bg-primary hover:text-page transition-colors h-full">
              <i className="fab fa-github text-5xl mb-6 group-hover:scale-110 transition-transform text-primary group-hover:text-page"></i>
              <span className="font-display font-bold text-sm uppercase tracking-widest text-primary group-hover:text-page">View Code</span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
