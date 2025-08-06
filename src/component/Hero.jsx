import React from 'react';
import LinkedInIcon from '../assets/linkedin-app-white-icon.svg';
import GitHubIcon from '../assets/github-white-icon.svg';
import ResumeFile from '../assets/Resume-Shravan.pdf';

const Hero = ({ displayText, isDarkMode }) => {
  return (
    <section 
      id="home" 
      className="hero-section"
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '0 2rem'
      }}
    >
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
        <div 
          className="hero-social-links"
          style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
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
  );
};

export default Hero;
