import React from 'react';
import ScrollReveal from './ScrollReveal';

const Experience = () => {
  const experiences = [
    {
      year: '2025 - Present',
      title: 'President',
      role: 'Nova Innovative Compskey (NIC) • Bangalore',
      description: 'Leading Nova Innovative Compskey as President, driving innovation and fostering a collaborative environment for engineering students. Overseeing club operations, coordinating technical events, and mentoring teams to build impactful projects.',
      skills: ['Leadership', 'Event Planning', 'Mentorship'],
      side: 'right'
    },
    {
      year: '2025',
      title: 'GirlScript Summer Of Code 2025',
      role: 'Open Source Contributor',
      description: 'Contributed to various open-source projects, collaborated with developers worldwide, and enhanced coding skills through real-world project experience.',
      certificateLink: 'https://img.playbook.com/fck94N93juKpzrBQEm9YGqQQ0RnomJ4d_SN9lxrDZlY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA1ZmY2YjZi/LTFjODYtNDEyNC1h/ZTkzLTEzZjRhZTdj/NWUyOA',
      side: 'left'
    },
    {
      year: 'Nov 2024 - Present',
      title: 'Design Sub Lead',
      role: 'Nova Innovative Compskey • Bangalore',
      description: 'Guide and supervise the club\'s design team in developing engineering project concepts and visual elements. Coordinate with fellow mates and the core leadership team.',
      skills: ['Team Management', 'Canva', 'Design'],
      side: 'right'
    }
  ];

  return (
    <section id="experience" className="py-16 bg-page text-primary relative">
      <div className="container mx-auto px-6 mb-20">
        <ScrollReveal>
          <div className="flex justify-between items-end">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">Experience</h2>
            <span className="text-secondary hidden md:block text-sm font-mono">02 // CAREER</span>
          </div>
        </ScrollReveal>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Vertical Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2"></div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`relative flex flex-col ${exp.side === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-page border-2 border-primary rounded-full md:-translate-x-1/2 -translate-x-1/2 z-10"></div>

                {/* Spacer */}
                <div className="hidden md:block w-1/2"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-12 ${exp.side === 'left' ? 'md:pr-16 md:pl-0 md:text-right' : 'md:pl-16'}`}>
                  <div className="bento-card p-8 rounded-2xl hover-trigger" data-cursor="link">
                    <span className="inline-block px-3 py-1 bg-page rounded-full text-xs font-mono text-secondary mb-4 border border-border">
                      {exp.year}
                    </span>
                    <h3 className="font-display text-xl font-bold text-primary mb-1">{exp.title}</h3>
                    <p className="text-sm font-medium text-secondary mb-4">{exp.role}</p>
                    <p className="text-secondary text-sm leading-relaxed font-light mb-4">
                      {exp.description}
                    </p>

                    {exp.skills && (
                      <div className={`flex flex-wrap gap-2 ${exp.side === 'left' ? 'md:justify-end' : ''}`}>
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-2 py-1 bg-page rounded text-[10px] text-secondary border border-border uppercase tracking-wide">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}

                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold uppercase tracking-widest border-b border-primary pb-1 inline-block hover:text-secondary hover:border-secondary transition-colors text-primary"
                      >
                        View Certificate ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="flex justify-center mt-20">
            <a
              href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn px-8 py-3 bg-transparent border border-border rounded-full text-xs font-bold uppercase tracking-widest text-primary hover:bg-primary hover:text-page transition-colors hover-trigger"
              data-cursor="link"
            >
              View Full Profile on LinkedIn ↗
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Experience;
