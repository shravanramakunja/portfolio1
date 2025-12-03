import React from 'react';

const Navigation = ({ activeSection, isDarkMode, scrollToSection }) => {
  return (
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
  );
};

export default Navigation;
