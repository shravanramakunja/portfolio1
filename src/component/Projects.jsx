import React from 'react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'ZenAI',
      subtitle: 'Medical RAG Chatbot',
      description: 'A domain-specific medical chatbot using Retrieval-Augmented Generation (RAG) to provide accurate, document-grounded answers from a custom medical reference PDF.',
      tech: ['Python', 'Streamlit', 'ChromaDB', 'LangChain'],
      github: 'https://github.com/shravanramakunja/ZenAI',
      id: '01 // MEDICAL AI',
      visual: 'rag'
    },
    {
      title: 'AlgoSphere',
      subtitle: 'ML Implementation Suite',
      description: 'Comprehensive machine learning implementations featuring Linear & Logistic Regression with complete EDA, preprocessing, and evaluation using real-world datasets.',
      tech: ['Pandas', 'Scikit-learn', 'Seaborn'],
      github: 'https://github.com/shravanramakunja/AlgoSphere',
      id: '02 // MACHINE LEARNING',
      visual: 'data',
      reverse: true
    },
    {
      title: 'BriefBot',
      subtitle: 'Website Summarizer',
      description: 'AI-powered tool that automatically extracts and summarizes website content using Beautiful Soup for web scraping and Google Gemini AI for intelligent summarization.',
      tech: ['Python', 'Beautiful Soup', 'Gemini API'],
      github: 'https://github.com/shravanramakunja/BreifBot',
      id: '03 // AI TOOL',
      visual: 'summary'
    }
  ];

  return (
    <section id="projects" className="py-16 bg-page text-primary">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex justify-between items-end mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase">Selected Work</h2>
            <span className="text-secondary hidden md:block text-sm font-mono">03 // PROJECTS</span>
          </div>
        </ScrollReveal>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className={`group relative flex flex-col ${project.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>

                {/* Visual Side */}
                <div className="w-full md:w-3/5 relative h-[500px] overflow-hidden bg-[var(--abstract-bg)] border border-border group-hover:border-border-hover transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center bg-[var(--abstract-bg)] overflow-hidden">
                    {project.visual === 'rag' && (
                      <>
                        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors duration-700"></div>
                        <div className="relative w-full h-full flex items-center justify-center">
                          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
                          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-secondary to-transparent absolute"></div>
                          <div className="absolute border border-border w-48 h-48 rounded-full flex items-center justify-center">
                            <span className="font-display text-xs tracking-widest text-secondary opacity-50">RAG</span>
                          </div>
                        </div>
                      </>
                    )}

                    {project.visual === 'data' && (
                      <>
                        <div className="absolute inset-0 bg-grid-pattern transform perspective-1000 rotate-x-60 scale-150 origin-bottom group-hover:rotate-x-45 transition-transform duration-1000 opacity-20"></div>
                        <div className="w-32 h-32 bg-purple-500/10 blur-3xl rounded-full absolute"></div>
                        <span className="font-display text-8xl font-bold text-secondary opacity-10 absolute select-none">DATA</span>
                      </>
                    )}

                    {project.visual === 'summary' && (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-48 h-1 bg-secondary opacity-20 rounded-full group-hover:w-32 transition-all duration-500"></div>
                        <div className="w-32 h-1 bg-secondary opacity-20 rounded-full group-hover:w-48 transition-all duration-500"></div>
                        <div className="w-40 h-1 bg-secondary opacity-20 rounded-full"></div>
                        <div className="w-24 h-1 bg-secondary opacity-20 rounded-full group-hover:w-12 transition-all duration-500"></div>
                      </div>
                    )}
                  </div>

                  <div className="absolute top-6 left-6 text-xs font-mono text-secondary">{project.id}</div>
                  <div className="absolute bottom-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <i className="fas fa-arrow-right -rotate-45 text-primary text-2xl"></i>
                  </div>
                </div>

                {/* Content Side */}
                <div className={`w-full md:w-2/5 ${project.reverse ? 'text-right md:text-left' : ''}`}>
                  <div className={project.reverse ? 'md:text-right' : ''}>
                    <h3 className="text-3xl font-display font-bold mb-4 text-primary group-hover:text-secondary transition-colors">{project.title}</h3>
                    <p className="text-lg text-secondary mb-2">{project.subtitle}</p>
                    <p className="text-secondary mb-8 leading-relaxed font-light opacity-80">
                      {project.description}
                    </p>
                    <ul className={`flex flex-wrap gap-2 mb-8 text-[10px] font-mono uppercase tracking-wider text-secondary ${project.reverse ? 'md:justify-end' : ''}`}>
                      {project.tech.map((t, i) => (
                        <li key={i} className="border border-border px-3 py-1 bg-card">{t}</li>
                      ))}
                    </ul>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors text-primary">
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
