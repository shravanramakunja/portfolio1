import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'AutoBulkSender',
      description: 'automates certificate creation and email delivery.',
      link: 'https://github.com/shravanramakunja/AutoBulkSender'
    },
    {
      title: 'EventEase',
      description: 'seamless event registration and check-in platform with automated workflows and attendance management.',
      link: 'https://github.com/shravanramakunja/EventEase'
    },
    {
      title: 'Inquisit',
      description: 'rag-based ai application for generating questions and evaluating answers from documents.',
      link: 'https://github.com/shravanramakunja/Inquisit'
    },
    {
      title: 'ZenAI',
      description: 'medical rag chatbot using retrieval-augmented generation to provide accurate answers.',
      link: 'https://github.com/shravanramakunja/ZenAI'
    },
    {
      title: 'BriefBot',
      description: 'ai-powered tool that automatically extracts and summarizes website content.',
      link: 'https://github.com/shravanramakunja/BriefBot'
    },
    {
      title: 'TabZero',
      description: 'minimal browser-based interface built with clean html for lightweight usage (open source).',
      link: 'https://github.com/shravanramakunja/TabZero'
    },
    {
      title: 'CodeSage',
      description: 'ai-powered github code review system using gemini for automated pull request feedback.',
      link: 'https://github.com/shravanramakunja/CodeSage'
    },
    {
      title: 'CasualGPTx',
      description: 'lightweight conversational ai chatbot built using transformers.',
      link: 'https://github.com/shravanramakunja/CasualGPTx'
    },
    {
      title: 'Flow',
      description: 'intent-driven browser extension for managing tabs and boosting productivity (open source).',
      link: 'https://github.com/shravanramakunja/Flow'
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
