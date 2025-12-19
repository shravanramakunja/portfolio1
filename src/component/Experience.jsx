import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Nova Innovative Compskey (NIC)',
      date: '2025 - Present',
      role: 'President',
      description: 'leading nova innovative compskey as president, driving innovation and fostering a collaborative environment for engineering students.',
      link: '#'
    },
    {
      company: 'GirlScript Summer Of Code',
      date: '2025',
      role: 'Open Source Contributor',
      description: 'contributed to various open-source projects, collaborated with developers worldwide.',
      link: 'https://gssoc.girlscript.tech/'
    },
    {
      company: 'Nova Innovative Compskey',
      date: 'Nov 2024 - Present',
      role: 'Design Sub Lead',
      description: 'guide and supervise the club\'s design team in developing engineering project concepts.',
      link: '#'
    }
  ];

  return (
    <section id='experience'>
      <h2 className='section-title'>cool places i have experience at</h2>
      
      <div className='space-y-6'>
        {experiences.map((exp, index) => (
          <div key={index} className='group'>
            <a href={exp.link} className='block hover:opacity-80 transition-opacity no-underline'>
              <div className='flex flex-col sm:flex-row sm:items-baseline justify-between mb-1'>
                <h3 className='font-bold text-primary group-hover:underline decoration-secondary/50 underline-offset-4'>{exp.company}</h3>
                <span className='text-xs text-secondary font-mono'>{exp.date}</span>
              </div>
              <div className='text-sm text-secondary'>
                <span className='text-primary'>{exp.role}</span>
                <span className='mx-2'>|</span>
                <span>{exp.description}</span>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
