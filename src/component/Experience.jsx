import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      company: 'Nova Innovative Compskey (NIC)',
      date: '2025 - Present',
      role: 'President',
      description: 'leading nova innovative compskey as president, driving innovation and fostering a collaborative environment for engineering students.',
      link: 'http://nicclub.dev/'
    },
    {
      company: 'Nova Innovative Compskey',
      date: 'Nov 2024 - Present',
      role: 'Design Sub Lead',
      description: "guide and supervise the club's design team in developing engineering project concepts.",
      link: 'http://nicclub.dev/'
    }
  ];

  return (
    <section id="experience" className="mt-10">
      <div>
        <p className="text-sm text-[#909092]">experience</p>
        <h2 className="text-xl font-bold mt-1">cool places i've been</h2>
      </div>

      <div className="mt-6 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div key={index} className="group flex flex-col gap-4">
            {/* Company Header */}
            <div className="flex flex-col gap-2 md:flex-row md:justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 shrink-0 rounded-md overflow-hidden bg-accent flex items-center justify-center">
                  <img src="/assets/nic-logo.png" alt="NIC Logo" className="h-10 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold">{exp.company}</h3>
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visit NIC website"
                      className="inline-flex items-center justify-center rounded-md border border-border bg-card size-7 text-muted-foreground no-underline transition-all hover:bg-accent hover:border-accent hover:text-foreground group/exlink"
                    >
                      <FiExternalLink size={13} className="transition-transform duration-300 group-hover/exlink:rotate-12 group-hover/exlink:scale-110" />
                    </a>
                  </div>
                  <p className="text-muted-foreground">{exp.role}</p>
                </div>
              </div>
              <div className="flex flex-col text-[#909092] md:text-right">
                <p>{exp.date}</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col text-[#909092]">
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#909092] no-underline hover:text-foreground transition-colors"
              >
                <span className="text-foreground">•</span> {exp.description}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
