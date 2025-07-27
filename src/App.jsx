import React, { useEffect, useState } from 'react';
import './index.css';
import LinkedInIcon from './assets/linkedin-app-white-icon.svg';
import GitHubIcon from './assets/github-white-icon.svg';
import ResumeFile from './assets/Resume-Shravan.pdf';
import GirlScriptCertificate from './assets/girlscript-certificate.jpg';

// Add global styles for the portfolio
const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: #000;
    color: #fff;
    line-height: 1.6;
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  #root {
    overflow-x: hidden;
    overflow-y: auto;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes blink {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
  
  @media (max-width: 768px) {
    .about-grid {
      grid-template-columns: 1fr !important;
      gap: 2rem !important;
    }
    
    .timeline-container {
      padding: 0 1rem;
    }
    
    .timeline-line {
      left: 20px !important;
      transform: none !important;
    }
    
    .timeline-item {
      flex-direction: column !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    
    .timeline-dot {
      position: relative !important;
      left: auto !important;
      transform: none !important;
      margin-bottom: 1rem;
    }
    
    .timeline-card {
      width: 100% !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    
    nav {
      padding: 0.75rem 1rem !important;
    }
    
    .nav-links {
      gap: 1rem !important;
      flex-wrap: wrap !important;
      justify-content: center !important;
    }
    
    .nav-button {
      font-size: 0.9rem !important;
      padding: 0.25rem !important;
    }
  }
  
  @media (max-width: 480px) {
    .timeline-line {
      display: none !important;
    }
    
    .timeline-card {
      padding: 1.5rem !important;
    }
    
    .timeline-title {
      font-size: 1.1rem !important;
    }
    
    nav {
      padding: 0.5rem 0.75rem !important;
    }
    
    .nav-links {
      gap: 0.5rem !important;
    }
    
    .nav-button {
      font-size: 0.85rem !important;
      padding: 0.2rem !important;
    }
  }
`;

// Inject styles into document head
if (typeof document !== 'undefined') {
  const existingStyle = document.querySelector('#portfolio-styles');
  if (!existingStyle) {
    const styleElement = document.createElement('style');
    styleElement.id = 'portfolio-styles';
    styleElement.textContent = globalStyles;
    document.head.appendChild(styleElement);
  }
}

// Navigation scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Typewriter animation phrases
const phrases = [
  "ML & AI Explorer", 
  "DevOps Learner",
  "Automation Scripts Builder"
];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'connect'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex < currentPhrase.length) {
        setDisplayText(currentPhrase.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(currentPhrase.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div style={{ 
      backgroundColor: isDarkMode ? '#000' : '#fff', 
      color: isDarkMode ? '#fff' : '#000', 
      minHeight: '100vh',
      width: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      {/* Fixed Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(255, 255, 255, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '1rem 2rem',
        zIndex: 1000,
        borderBottom: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        transition: 'all 0.3s ease'
      }}>
        <div 
          className="nav-container"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          
          <div 
            className="nav-links" 
            style={{ display: 'flex', gap: '2rem' }}
          >
            {[
              { name: 'Home', id: 'home' },
              { name: 'About', id: 'about' },
              { name: 'Experience', id: 'experience' },
              { name: 'Projects', id: 'projects' },
              { name: 'Connect', id: 'connect' }
            ].map((item) => (
              <button
                key={item.id}
                className="nav-button"
                onClick={() => scrollToSection(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeSection === item.id 
                    ? (isDarkMode ? '#fff' : '#000') 
                    : (isDarkMode ? '#888' : '#666'),
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s ease',
                  fontWeight: activeSection === item.id ? '600' : '400'
                }}
                onMouseEnter={(e) => e.target.style.color = isDarkMode ? '#fff' : '#000'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item.id 
                  ? (isDarkMode ? '#fff' : '#000') 
                  : (isDarkMode ? '#888' : '#666')}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            marginBottom: '1rem',
            lineHeight: '1.1'
          }}>
            Shravan Ramakunja
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: isDarkMode ? '#888' : '#555',
            marginBottom: '3rem',
            lineHeight: '1.4',
            minHeight: '2.1rem'
          }}>
            {displayText}<span style={{ 
              opacity: displayText.length > 0 ? 1 : 0,
              animation: 'blink 1s infinite',
              marginLeft: '2px'
            }}>|</span>
          </p>
          
          {/* Social Links */}
          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <a 
              href="https://github.com/shravanramakunja" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <img 
                src={GitHubIcon} 
                alt="GitHub" 
                style={{ 
                  width: '24px', 
                  height: '24px',
                  filter: 'brightness(0) invert(1)'
                }} 
              />
            </a>
            
            <a 
              href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50px',
                height: '50px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '50%',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <img 
                src={LinkedInIcon} 
                alt="LinkedIn" 
                style={{ 
                  width: '24px', 
                  height: '24px',
                  filter: 'brightness(0) invert(1)'
                }} 
              />
            </a>

            <a 
              href={ResumeFile}
              download="Shravan-Ramakunja-Resume.pdf"
              style={{
                padding: '12px 24px',
                backgroundColor: 'transparent',
                border: '2px solid #fff',
                borderRadius: '8px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                marginLeft: '1rem'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#fff';
                e.target.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = '#fff';
              }}
            >
              Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                {[
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
                    items: ['JavaScript', 'React', 'Streamlit', 'Beautiful Soup']
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
                ].map((category, index) => (
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
          
          {/* Scroll to Projects Button */}
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

      {/* Experience Section */}
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
            {/* Timeline Line - Hidden on mobile */}
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
              
              {/* GirlScript Summer Of Code 2025 */}
              <div 
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
                    marginLeft: '55%',
                    marginRight: '0',
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
                    2025
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
                    GirlScript Summer Of Code 2025
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: isDarkMode ? '#888' : '#666',
                    marginBottom: '1rem'
                  }}>
                    Open Source Contributor
                  </p>
                  <p style={{
                    color: isDarkMode ? '#ccc' : '#666',
                    lineHeight: '1.6',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    Contributed to various open-source projects, collaborated with developers worldwide, and enhanced coding skills through real-world project experience.
                  </p>
                  <a 
                    href="https://img.playbook.com/fck94N93juKpzrBQEm9YGqQQ0RnomJ4d_SN9lxrDZlY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzA1ZmY2YjZi/LTFjODYtNDEyNC1h/ZTkzLTEzZjRhZTdj/NWUyOA"
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
                </div>
              </div>

              {/* Design Sub Lead at Nova Innovative Compskey */}
              <div 
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
                    marginRight: '55%',
                    marginLeft: '0',
                    backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  borderRadius: '12px',
                  padding: window.innerWidth <= 480 ? '1.5rem' : '2rem',
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
                    Nov 2024 - Present • 9 mos
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
                    Design Sub Lead
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: isDarkMode ? '#888' : '#666',
                    marginBottom: '1rem'
                  }}>
                    Nova Innovative Compskey • Banglore
                  </p>
                  <p style={{
                    color: isDarkMode ? '#ccc' : '#666',
                    lineHeight: '1.6',
                    fontSize: '0.9rem',
                    marginBottom: '1rem'
                  }}>
                    Guide and supervise the club's design team in developing engineering project concepts and visual elements. Coordinate with fellow mates and the core leadership team to ensure project designs align with club objectives and technical standards.
                  </p>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      color: isDarkMode ? '#fff' : '#000'
                    }}>
                      Team Management
                    </span>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      color: isDarkMode ? '#fff' : '#000'
                    }}>
                      Canva
                    </span>
                  </div>
                </div>
              </div>

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

      {/* Projects Section */}
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
            {[
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
              },
            ].map((project, index) => (
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

      {/* Connect Section */}
      <section 
        id="connect" 
        style={{ 
          padding: '100px 20px 60px',
          borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: isDarkMode ? '#fff' : '#000'
          }}>
            Connect
          </h2>
          
          <p style={{ 
            fontSize: '1.1rem',
            color: isDarkMode ? '#ccc' : '#555',
            marginBottom: '30px'
          }}>
            Feel free to contact me at <a 
              href="mailto:your@email.com" 
              style={{ 
                color: isDarkMode ? '#fff' : '#000',
                textDecoration: 'underline'
              }}
            >
              your@email.com
            </a>
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '20px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}>
            <a 
              href="https://github.com/shravan-ramakunja" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '8px 16px',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isDarkMode ? '#fff' : '#000',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              Github ↗
            </a>
            
            <a 
              href="https://twitter.com/shravan-ramakunja" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '8px 16px',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isDarkMode ? '#fff' : '#000',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              Twitter ↗
            </a>
            
            <a 
              href="https://linkedin.com/in/shravan-ramakunja" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '8px 16px',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isDarkMode ? '#fff' : '#000',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              LinkedIn ↗
            </a>
            
            <a 
              href="https://instagram.com/_shravaan" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                padding: '8px 16px',
                backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isDarkMode ? '#fff' : '#000',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.2s ease'
              }}
            >
              Instagram ↗
            </a>
          </div>

          {/* Footer with Theme Toggle */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '40px',
            borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
          }}>
            <p style={{
              fontSize: '14px',
              color: isDarkMode ? '#666' : '#888'
            }}>
              © 2025 Shravan Ramakunja.
            </p>
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <button 
                onClick={toggleTheme}
                style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: isDarkMode ? '#fff' : '#000'
                }}
              >
                ☀
              </button>
              
              <button 
                onClick={toggleTheme}
                style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: isDarkMode ? '#fff' : '#000'
                }}
              >
                🌙
              </button>
              
              <button 
                style={{ 
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'transparent',
                  border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.2)'}`,
                  borderRadius: '50%',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  color: isDarkMode ? '#fff' : '#000'
                }}
              >
                💬
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
