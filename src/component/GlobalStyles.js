// Global styles for the portfolio
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
      padding: 0.25rem 0.5rem !important;
      min-height: 44px;
    }
    
    .hero-section {
      padding: 0 1rem !important;
    }
    
    .hero-social-links {
      flex-direction: column !important;
      gap: 1rem !important;
    }
    
    .connect-links {
      gap: 0.75rem !important;
      justify-content: center !important;
    }
    
    .connect-link {
      padding: 0.75rem 1rem !important;
      font-size: 0.9rem !important;
    }
    
    .footer-content {
      flex-direction: column !important;
      gap: 1rem !important;
      text-align: center !important;
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
      font-size: 0.8rem !important;
      padding: 0.5rem 0.75rem !important;
      min-height: 40px;
    }
    
    .hero-section {
      padding: 0 0.75rem !important;
    }
    
    .connect-links {
      gap: 0.5rem !important;
    }
    
    .connect-link {
      padding: 0.5rem 0.75rem !important;
      font-size: 0.8rem !important;
    }
    
    .footer-content {
      flex-direction: column !important;
      gap: 0.75rem !important;
    }
  }
`;

// Inject styles into document head
export const injectGlobalStyles = () => {
  if (typeof document !== 'undefined') {
    const existingStyle = document.querySelector('#portfolio-styles');
    if (!existingStyle) {
      const styleElement = document.createElement('style');
      styleElement.id = 'portfolio-styles';
      styleElement.textContent = globalStyles;
      document.head.appendChild(styleElement);
    }
  }
};

export default globalStyles;
