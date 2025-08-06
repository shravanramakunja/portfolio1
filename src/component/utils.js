// Navigation scroll function
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

// Typewriter animation phrases
export const phrases = [
  "ML & AI Explorer", 
  "DevOps Learner",
  "Automation Scripts Builder"
];
