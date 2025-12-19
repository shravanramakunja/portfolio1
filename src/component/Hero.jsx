import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [age, setAge] = useState(20.000000000);

  useEffect(() => {
    const birthDate = new Date('2005-06-25'); // Approximate birth date, adjust if known
    const interval = setInterval(() => {
      const now = new Date();
      const diffTime = Math.abs(now - birthDate);
      const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); 
      setAge(diffYears.toFixed(9));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='pt-24 pb-8'>
      <div className='flex items-start justify-between'>
        <div>
            <h1 className='text-2xl font-bold mb-1'>hi, shravan here</h1>
            <p className='text-secondary text-sm font-mono'>been here for {age} years</p>
        </div>
        <div className='w-12 h-12 bg-white rounded-full overflow-hidden'>
            {/* Placeholder for image if needed, or just remove */}
            <img src='https://github.com/shravanramakunja.png' alt='Shravan' className='w-full h-full object-cover grayscale' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
