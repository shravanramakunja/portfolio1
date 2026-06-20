import React from 'react';

const About = () => {
  return (
    <section id="about" className="mt-10">
      <div>
        <p className="text-sm text-[#909092]">about</p>
        <h2 className="text-xl font-bold mt-1">me</h2>
      </div>

      <div className="mt-6 flex flex-col gap-6 md:flex-row">
        <div className="flex flex-col">
          <h3 className="text-xl font-bold">Shravan Ramakunja</h3>

          <div className="text-muted-foreground mt-3 space-y-2 text-sm leading-relaxed">
            <p>
              <span className="text-foreground font-bold">tldr;</span> learnt by googling and using ai tools around on the internet.
            </p>

            <p>
              i like technology and deep science. they make a dent in the universe.
            </p>

            <p>
              i don't just write code; i construct systems. bridging the gap between raw machine learning logic and fluid, responsive user interfaces.
            </p>

            <p>
              if you want to know more about me, check out my{' '}
              <a href="https://github.com/shravanramakunja" className="text-foreground font-medium">github</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
