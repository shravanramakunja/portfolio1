import React, { useEffect, useState } from 'react';
import './index.css';

// Import components
import Navigation from './component/Navigation';
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';
import Rewards from './component/Rewards';
import Connect from './component/Connect';
import { injectGlobalStyles } from './component/GlobalStyles';
import { scrollToSection, phrases } from './component/utils';

// Inject global styles
injectGlobalStyles();

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'rewards', 'connect'];
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
      <Navigation 
        activeSection={activeSection}
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />
      
      <Hero 
        displayText={displayText}
        isDarkMode={isDarkMode}
      />
      
      <About 
        isDarkMode={isDarkMode}
        scrollToSection={scrollToSection}
      />
      
      <Experience 
        isDarkMode={isDarkMode}
      />
      
      <Projects 
        isDarkMode={isDarkMode}
      />
      
      <Rewards 
        isDarkMode={isDarkMode}
      />
      
      <Connect 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
    </div>
  );
}

export default App;
