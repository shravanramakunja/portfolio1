import React from 'react';

const Marquee = () => {
    return (
        <div className="py-8 border-y border-border bg-page overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee items-center">
                <span className="text-6xl md:text-8xl font-display font-bold stroke-text px-12">INNOVATION</span>
                <i className="fas fa-star text-2xl text-border"></i>
                <span className="text-6xl md:text-8xl font-display font-bold stroke-text px-12">INTELLIGENCE</span>
                <i className="fas fa-star text-2xl text-border"></i>
                <span className="text-6xl md:text-8xl font-display font-bold stroke-text px-12">DESIGN</span>
                <i className="fas fa-star text-2xl text-border"></i>
                <span className="text-6xl md:text-8xl font-display font-bold stroke-text px-12">INNOVATION</span>
                <i className="fas fa-star text-2xl text-border"></i>
                <span className="text-6xl md:text-8xl font-display font-bold stroke-text px-12">INTELLIGENCE</span>
            </div>
        </div>
    );
};

export default Marquee;
