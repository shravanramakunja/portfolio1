import React from 'react';
import Hero from './component/Hero';
import About from './component/About';
import Experience from './component/Experience';
import Projects from './component/Projects';

function App() {
  return (
    <div className='min-h-screen'>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <footer className='mt-24 mb-12 text-sm text-secondary'>
        <h2 className='section-title'>stay updated</h2>
        <p className='mb-8'>subscribe to my email list</p>
        
        <div className='flex gap-4 mb-12'>
           <input type='email' placeholder='email address' className='bg-[#111] border border-[#333] px-4 py-2 rounded text-sm w-full max-w-xs focus:outline-none focus:border-white transition-colors' />
           <button className='bg-white text-black px-4 py-2 rounded text-sm font-bold hover:opacity-90'>Subscribe</button>
        </div>

        <h2 className='section-title'>skills</h2>
        <p className='mb-12'>react l python l node l mongo l agentic systems l staying weird l can do L sit </p>

        <div className='flex flex-col gap-4'>
            <div className='flex gap-6 text-sm'>
                <a href='https://github.com/shravanramakunja'>GitHub</a>
                <a href='https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/'>LinkedIn</a>
                <a href='mailto:shravanramakunja@gmail.com'>Email</a>
            </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
