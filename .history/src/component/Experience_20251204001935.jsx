import React from 'react';

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      year: '2024 - Present',
      title: 'President',
      role: 'Nova Innovative Compskey (NIC) • Bangalore',
      description: 'Leading Nova Innovative Compskey as President, driving innovation and fostering a collaborative environment for engineering students. Overseeing club operations, coordinating technical events, and mentoring teams to build impactful projects.',
      skills: ['Leadership', 'Team Management', 'Event Planning', 'Mentorship'],
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
      description: 'Guide and supervise the club\'s design team in developing engineering project concepts and visual elements. Coordinate with fellow mates and the core leadership team to ensure project designs align with club objectives and technical standards.',
      skills: ['Team Management', 'Canva', 'Design Leadership'],
      side: 'right'
    }
  ];

  return (
    <section id="experience" style={{
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
          Experience
        </h2>
        
        {/* Timeline Container */}
        <div 
          className="timeline-container"
          style={{
            position: 'relative',
            maxWidth: '800px',
            margin: '0 auto'
          }}
        >
          {/* Timeline Line */}
          <div 
            className="timeline-line"
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)',
              transform: 'translateX(-50%)'
            }} 
          />
          
          {/* Timeline Items */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '3rem'
          }}>
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="timeline-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  position: 'relative',
                  flexDirection: 'row'
                }}
              >
                {/* Timeline Dot */}
                <div 
                  className="timeline-dot"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    width: '16px',
                    height: '16px',
                    backgroundColor: isDarkMode ? '#fff' : '#000',
                    borderRadius: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 2
                  }} 
                />
                
                {/* Content Card */}
                <div 
                  className="timeline-card"
                  style={{
                    width: '45%',
                    marginLeft: exp.side === 'right' ? '55%' : '0',
                    marginRight: exp.side === 'left' ? '55%' : '0',
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
                  <div style={{
                    fontSize: '0.9rem',
                    color: isDarkMode ? '#888' : '#666',
                    marginBottom: '0.5rem'
                  }}>
                    {exp.year}
                  </div>
                  <h3 
                    className="timeline-title"
                    style={{
                      fontSize: '1.3rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem',
                      color: isDarkMode ? '#fff' : '#000'
                    }}
                  >
                    {exp.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: isDarkMode ? '#888' : '#666',
                    marginBottom: '1rem'
                  }}>
                    {exp.role}
                  </p>
                  <p style={{
                    color: isDarkMode ? '#ccc' : '#666',
                    lineHeight: '1.6',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    {exp.description}
                  </p>
                  
                  {/* Skills */}
                  {exp.skills && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1rem'
                    }}>
                      {exp.skills.map((skill, skillIndex) => (
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
                  {exp.certificateLink && (
                    <a 
                      href={exp.certificateLink}
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        color: isDarkMode ? '#fff' : '#000',
                        fontSize: '0.85rem',
                        fontWeight: '500',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      View Certificate →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* LinkedIn Profile Link */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3rem'
        }}>
          <a 
            href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/"
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
              borderRadius: '8px',
              color: isDarkMode ? '#fff' : '#000',
              textDecoration: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
              e.target.style.borderColor = isDarkMode ? '#fff' : '#000';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.borderColor = isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            View Full Profile on LinkedIn
            <span style={{ fontSize: '1rem' }}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
