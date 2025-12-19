import React from 'react';

const About = () => {
  return (
    <section id='about'>
      <h2 className='section-title'>about</h2>
      
      <div className='text-secondary space-y-4 text-sm'>
        <p><span className='text-primary font-bold'>tldr;</span> learnt by googling around on the internet.</p>
        
        <p>
          i like technology and deep science. they make a dent in the universe.
        </p>
        
        <p>
          i don't just write code; i construct systems. bridging the gap between raw machine learning logic and fluid, responsive user interfaces.
        </p>

        <p>
          if you want to know more about me, check out my <a href='https://github.com/shravanramakunja'>github</a>.
        </p>
      </div>
    </section>
  );
};

export default About;
