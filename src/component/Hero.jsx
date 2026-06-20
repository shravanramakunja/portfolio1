import React, { useState, useEffect } from 'react';
import NowPlaying from './NowPlaying';

const Hero = () => {
  const [age, setAge] = useState(20.000000000);

  useEffect(() => {
    const birthDate = new Date('2005-06-25');
    const interval = setInterval(() => {
      const now = new Date();
      const diffTime = Math.abs(now - birthDate);
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
      setAge(diffYears.toFixed(9));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero">
      {/* Flex row: Image left, Name right */}
      <div className="flex items-start gap-5">
        {/* Profile Image */}
        <div className="size-16 sm:size-20 shrink-0 rounded-full overflow-hidden bg-blue-300 dark:bg-yellow-300 border-2 border-border">
          <img
            src="/profile.png"
            alt="Shravan"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name area */}
        <div className="flex flex-col gap-0.5 pt-1">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
            Shravan
          </h1>
          <p className="text-secondary text-sm sm:text-base font-medium leading-relaxed">Engineer · Polymath · Build with Scripts</p>
          <span className="mt-1 font-mono text-xs text-[#909092]">been here for {age} years</span>
        </div>
      </div>

      {/* Spotify — right below the image+name row */}
      <div className="mt-6">
        <NowPlaying />
      </div>

      {/* Social Links — right below Spotify */}
      <div className="mt-5 flex flex-wrap gap-2.5">
        <a
          href="https://github.com/shravanramakunja"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card text-foreground px-3 py-1.5 text-sm font-medium no-underline transition-all hover:bg-accent hover:border-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card text-foreground px-3 py-1.5 text-sm font-medium no-underline transition-all hover:bg-accent hover:border-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          LinkedIn
        </a>
        <a
          href="mailto:shravanramakunja@gmail.com"
          className="inline-flex items-center gap-2 rounded-md border border-border bg-card text-foreground px-3 py-1.5 text-sm font-medium no-underline transition-all hover:bg-accent hover:border-accent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          Email
        </a>
      </div>
    </section>
  );
};

export default Hero;
