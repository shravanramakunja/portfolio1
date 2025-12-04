import React from 'react';
import ScrollReveal from './ScrollReveal';
import MagneticButton from './MagneticButton';

const Rewards = () => {
  return (
    <section id="awards" className="py-16 bg-page text-primary relative">
      <div className="container mx-auto px-6 mb-20">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">Recognition</h2>
            <span className="text-secondary hidden md:block text-sm font-mono">04 // AWARDS</span>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto">
          {/* Section Intro */}
          <ScrollReveal>
            <div className="text-center mb-16">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">Achievements & Recognition</h3>
              <p className="text-secondary text-lg font-light">Contributions and continuous growth in technology.</p>
            </div>
          </ScrollReveal>

          {/* Awards Grid */}
          <ScrollReveal delay={200}>
            <div className="grid gap-8">
              {/* Award Card 1 */}
              <div className="bento-card p-8 rounded-2xl hover-trigger" data-cursor="link">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center border border-border">
                    <i className="fas fa-trophy text-primary text-sm"></i>
                  </div>
                  <h4 className="font-display text-lg font-bold uppercase tracking-wide text-primary">Competition Awards</h4>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <h5 className="text-xl md:text-2xl font-bold text-primary">2nd Place - Innovex Project Expo</h5>
                    <span className="px-3 py-1 border border-border text-primary rounded-full text-[10px] font-bold uppercase tracking-widest">
                      Runner-Up
                    </span>
                  </div>

                  <p className="text-secondary text-sm font-mono">November 22, 2025</p>

                  <p className="text-primary font-bold text-sm tracking-wide">Project: <span className="text-secondary">FinSightAI</span></p>

                  <p className="text-secondary leading-relaxed font-light">
                    Our team secured 2nd place at the Innovex Project Expo with FinSightAI - a platform that helps everyday investors understand why their mutual funds or ETFs go up or down.
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-card border border-border rounded-lg text-xs text-secondary font-mono">AI/ML</span>
                    <span className="px-3 py-1 bg-card border border-border rounded-lg text-xs text-secondary font-mono">FinTech</span>
                    <span className="px-3 py-1 bg-card border border-border rounded-lg text-xs text-secondary font-mono">Data Analysis</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Call to Action */}
          <ScrollReveal delay={400}>
            <div className="mt-16 p-10 md:p-14 bg-card border border-border rounded-2xl text-center">
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-primary">Let's Build Something Amazing Together</h3>
              <p className="text-secondary mb-10 max-w-lg mx-auto font-light">
                Always open to collaborating on innovative projects and exploring new opportunities in AI/ML and software development.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <MagneticButton href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/" target="_blank" className="px-8 py-4 bg-primary text-page font-display font-bold uppercase tracking-widest text-xs hover:opacity-90 transition-opacity hover-trigger" data-cursor="link">
                  Connect on LinkedIn
                </MagneticButton>
                <MagneticButton href="https://github.com/shravanramakunja" target="_blank" className="px-8 py-4 border border-border text-primary font-display font-bold uppercase tracking-widest text-xs hover:bg-page transition-colors hover-trigger" data-cursor="link">
                  View GitHub Profile
                </MagneticButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
