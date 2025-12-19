import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'ZenAI',
      description: 'medical rag chatbot using retrieval-augmented generation to provide accurate answers.',
      link: 'https://github.com/shravanramakunja/ZenAI'
    },
    {
      title: 'AlgoSphere',
      description: 'comprehensive machine learning implementations featuring linear & logistic regression.',
      link: 'https://github.com/shravanramakunja/AlgoSphere'
    },
    {
      title: 'BriefBot',
      description: 'ai-powered tool that automatically extracts and summarizes website content.',
      link: 'https://github.com/shravanramakunja/BreifBot'
    }
  ];

  return (
    <section id='projects'>
      <h2 className='section-title'>projects</h2>
      
      <div className='space-y-4'>
        {projects.map((project, index) => (
          <div key={index}>
            <a href={project.link} className='group block no-underline'>
              <h3 className='inline font-bold text-primary group-hover:underline decoration-secondary/50 underline-offset-4'>{project.title}</h3>
              <span className='text-secondary text-sm ml-2'>- {project.description}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
