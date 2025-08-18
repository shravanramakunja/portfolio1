import React from 'react';

const Connect = ({ isDarkMode, toggleTheme }) => {
  const socialLinks = [
    {
      name: 'Github',
      url: 'https://github.com/shravanramakunja'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/sniperkraken007'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/shravan-ramakunja'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/_shravaan'
    }
  ];

  return (
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
        
        <div 
          className="connect-links"
          style={{ 
            display: 'flex', 
            gap: '20px',
            marginBottom: '40px',
            flexWrap: 'wrap'
          }}
        >
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="connect-link"
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
              {link.name} ↗
            </a>
          ))}
        </div>

        {/* Footer with Theme Toggle */}
        <div 
          className="footer-content"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '40px',
            borderTop: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
          }}
        >
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
  );
};

export default Connect;
