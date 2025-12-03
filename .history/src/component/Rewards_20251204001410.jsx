import React from 'react';

const Rewards = ({ isDarkMode }) => {
  const achievements = [
    {
      category: 'Open Source Contributions',
      icon: '🏆',
      items: [
        {
          title: 'GirlScript Summer Of Code 2025',
          description: 'Successfully contributed to multiple open-source projects during GSSOC 2025',
          date: '2025',
          certificateLink: 'https://img.playbook.com/fck94N93juKpzrBQEm9YGqQQ0RnomJ4d_SN9lxrDZlY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA1ZmY2YjZi/LTFjODYtNDEyNC1h/ZTkzLTEzZjRhZTdj/NWUyOA'
        }
      ]
    },
    {
      category: 'Leadership & Community',
      icon: '🎨',
      items: [
        {
          title: 'Design Sub Lead - Nova Innovative Compskey',
          description: 'Leading the design team and coordinating with core leadership for engineering projects',
          date: 'Nov 2024 - Present',
          skills: ['Team Management', 'Canva', 'Leadership']
        }
      ]
    },
    {
      category: 'Technical Projects',
      icon: '💡',
      items: [
        {
          title: 'ZenAI - Medical RAG Chatbot',
          description: 'Built an AI-powered medical chatbot using RAG architecture and Gemini API',
          highlight: 'Featured Project'
        },
        {
          title: 'AlgoSphere - ML Projects',
          description: 'Comprehensive machine learning implementations with real-world datasets',
          highlight: 'ML Showcase'
        },
        {
          title: 'BriefBot - Website Summarizer',
          description: 'AI-powered web scraping and summarization tool',
          highlight: 'AI Innovation'
        }
      ]
    },
    {
      category: 'Skills & Expertise',
      icon: '⚡',
      items: [
        {
          title: 'AI/ML Specialization',
          description: 'Expertise in PyTorch, TensorFlow, LangChain, and RAG Systems',
          skills: ['Python', 'LLMs', 'Gen AI', 'Vector Databases']
        },
        {
          title: 'Full-Stack Development',
          description: 'Building end-to-end applications with modern tech stack',
          skills: ['React', 'Streamlit', 'Docker', 'Git']
        }
      ]
    }
  ];

  return (
    <section id="rewards" style={{
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
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          Achievements & Recognition
        </h2>
        
        <p style={{
          fontSize: '1.2rem',
          color: isDarkMode ? '#888' : '#666',
          textAlign: 'center',
          marginBottom: '4rem',
          maxWidth: '800px',
          margin: '0 auto 4rem'
        }}>
          Celebrating milestones, contributions, and continuous growth in technology and innovation
        </p>
        
        {/* Achievements Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                borderRadius: '16px',
                padding: '2rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.boxShadow = isDarkMode 
                  ? '0 10px 30px rgba(255, 255, 255, 0.1)' 
                  : '0 10px 30px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Category Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
              }}>
                <span style={{ fontSize: '2rem' }}>{achievement.icon}</span>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  color: isDarkMode ? '#fff' : '#000',
                  margin: 0
                }}>
                  {achievement.category}
                </h3>
              </div>
              
              {/* Items List */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {achievement.items.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '0.5rem'
                    }}>
                      <h4 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: isDarkMode ? '#fff' : '#000',
                        margin: 0,
                        flex: 1
                      }}>
                        {item.title}
                      </h4>
                      {item.highlight && (
                        <span style={{
                          padding: '0.25rem 0.5rem',
                          backgroundColor: isDarkMode ? 'rgba(100, 200, 255, 0.2)' : 'rgba(0, 100, 200, 0.2)',
                          color: isDarkMode ? '#6cf' : '#06c',
                          borderRadius: '6px',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          whiteSpace: 'nowrap',
                          marginLeft: '0.5rem'
                        }}>
                          {item.highlight}
                        </span>
                      )}
                    </div>
                    
                    {item.date && (
                      <p style={{
                        fontSize: '0.85rem',
                        color: isDarkMode ? '#888' : '#666',
                        margin: '0.25rem 0 0.5rem'
                      }}>
                        {item.date}
                      </p>
                    )}
                    
                    <p style={{
                      color: isDarkMode ? '#ccc' : '#666',
                      fontSize: '0.9rem',
                      lineHeight: '1.6',
                      margin: '0.5rem 0'
                    }}>
                      {item.description}
                    </p>
                    
                    {/* Skills Tags */}
                    {item.skills && (
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        marginTop: '0.75rem'
                      }}>
                        {item.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} style={{
                            padding: '0.25rem 0.75rem',
                            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            color: isDarkMode ? '#fff' : '#000'
                          }}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Certificate Link */}
                    {item.certificateLink && (
                      <a 
                        href={item.certificateLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          marginTop: '0.75rem',
                          padding: '0.5rem 1rem',
                          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                          borderRadius: '6px',
                          textDecoration: 'none',
                          color: isDarkMode ? '#fff' : '#000',
                          fontSize: '0.85rem',
                          fontWeight: '500',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                        }}
                      >
                        View Certificate
                        <span style={{ fontSize: '0.9rem' }}>↗</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '4rem',
          padding: '3rem 2rem',
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.03)',
          borderRadius: '16px',
          border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
        }}>
          <h3 style={{
            fontSize: '1.8rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            color: isDarkMode ? '#fff' : '#000'
          }}>
            Let's Build Something Amazing Together
          </h3>
          <p style={{
            fontSize: '1.1rem',
            color: isDarkMode ? '#888' : '#666',
            marginBottom: '2rem',
            textAlign: 'center',
            maxWidth: '600px'
          }}>
            Always open to collaborating on innovative projects and exploring new opportunities in AI/ML and software development
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a 
              href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/"
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                backgroundColor: isDarkMode ? '#fff' : '#000',
                color: isDarkMode ? '#000' : '#fff',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = isDarkMode 
                  ? '0 5px 20px rgba(255, 255, 255, 0.2)' 
                  : '0 5px 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Connect on LinkedIn
            </a>
            <a 
              href="https://github.com/shravanramakunja"
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                border: `2px solid ${isDarkMode ? '#fff' : '#000'}`,
                color: isDarkMode ? '#fff' : '#000',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rewards;
