import React from 'react';

const About = ({ isDarkMode, scrollToSection }) => {
  const techCategories = [
    {
      title: 'AI/ML & Data Science',
      items: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter']
    },
    {
      title: 'AI & LLM Technologies',
      items: ['LangChain', 'ChromaDB', 'Gemini API', 'RAG Systems', 'Vector Embeddings']
    },
    {
      title: 'Web Development & UI',
      items: ['JavaScript', 'React', 'Streamlit', 'Beautiful Soup','']
    },
    {
      title: 'Data Visualization',
      items: ['Matplotlib', 'Seaborn', 'Plotly']
    },
    {
      title: 'Cloud, DevOps & Tools',
      items: ['Docker', 'Linux', 'Git', 'Bash']
    },
    {
      title: 'Databases & Storage',
      items: ['MySQL', 'Vector Databases']
    },
    {
      title: 'Styling & Design',
      items: ['Tailwind CSS', 'CSS3']
    }
  ];

  return (
    <section id="about" style={{
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
          About Me
        </h2>
        
        <div 
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}
        >
          <div>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#ccc' : '#555',
              lineHeight: '1.8',
              marginBottom: '2rem'
            }}>
              I'm a passionate Machine Learning enthusiast with a focus on LLMs and Gen AI tools. 
              I love exploring the intersection of AI and practical applications while building automation scripts and diving deep into DSA.
            </p>
            <p style={{
              fontSize: '1.2rem',
              color: isDarkMode ? '#ccc' : '#555',
              lineHeight: '1.8'
            }}>
              With expertise in Python, ML algorithms, and DevOps practices, I create data-driven solutions 
              and intelligent systems. I also bring a creative touch through graphic design to make technology more accessible.
            </p>
          </div>
          
          {/* Tech Stack */}
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '2rem',
              color: isDarkMode ? '#fff' : '#000'
            }}>
              My Dev Gear
            </h3>
            
            {/* Categories */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {techCategories.map((category, index) => (
                <div key={index}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: isDarkMode ? '#888' : '#666',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em'
                  }}>
                    {category.title}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} style={{
                        padding: '0.25rem 0.75rem',
                        backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                        borderRadius: '12px',
                        fontSize: '0.875rem',
                        color: isDarkMode ? '#fff' : '#000'
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll to Experience Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4rem'
        }}>
          <button
            onClick={() => scrollToSection('experience')}
            style={{
              padding: '12px 24px',
              backgroundColor: 'transparent',
              border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'}`,
              borderRadius: '8px',
              color: isDarkMode ? '#fff' : '#000',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: 'pointer',
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
            View Experience
            <span style={{ fontSize: '1.2rem', marginLeft: '0.25rem' }}>↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
