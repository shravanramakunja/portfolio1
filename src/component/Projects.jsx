import React from 'react';

const Projects = ({ isDarkMode }) => {
  const projects = [
    {
      title: 'ZenAI - Medical RAG Chatbot',
      description: 'A domain-specific medical chatbot using Retrieval-Augmented Generation (RAG) to provide accurate, document-grounded answers from a custom medical reference PDF.',
      tech: ['Python', 'Streamlit', 'ChromaDB', 'Gemini API', 'LangChain'],
      github: 'https://github.com/shravanramakunja/ZenAI'
    },
    {
      title: 'AlgoSphere - ML Projects',
      description: 'Comprehensive machine learning implementations featuring Linear & Logistic Regression with complete EDA, preprocessing, and evaluation using real-world datasets.',
      tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'Matplotlib'],
      github: 'https://github.com/shravanramakunja/AlgoSphere'
    },
    {
      title: 'BriefBot - Website Summarizer',
      description: 'AI-powered tool that automatically extracts and summarizes website content using Beautiful Soup for web scraping and Google Gemini AI for intelligent summarization.',
      tech: ['Python', 'Beautiful Soup', 'Gemini API', 'Streamlit'],
      github: 'https://github.com/shravanramakunja/BreifBot'
    }
  ];

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      padding: '8rem 2rem 4rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <h2 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          fontWeight: 'bold',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Selected Projects
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
              border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
              borderRadius: '12px',
              padding: '2rem',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-5px)';
              e.target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
            }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: isDarkMode ? '#fff' : '#000'
              }}>
                {project.title}
              </h3>
              
              <p style={{
                color: isDarkMode ? '#ccc' : '#666',
                lineHeight: '1.6',
                marginBottom: '1.5rem'
              }}>
                {project.description}
              </p>
              
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '1.5rem'
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} style={{
                    padding: '0.25rem 0.75rem',
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    color: isDarkMode ? '#fff' : '#000'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                  color: isDarkMode ? '#888' : '#666',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = isDarkMode ? '#fff' : '#000'}
                onMouseLeave={(e) => e.target.style.color = isDarkMode ? '#888' : '#666'}
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
