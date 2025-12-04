import React, { useRef, useEffect } from 'react';

const MagneticButton = ({ children, className = "", href, target, onClick, ...props }) => {
    const btnRef = useRef(null);

    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const handleMouseMove = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        };

        const handleMouseLeave = () => {
            btn.style.transform = 'translate(0px, 0px)';
        };

        btn.addEventListener('mousemove', handleMouseMove);
        btn.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            btn.removeEventListener('mousemove', handleMouseMove);
            btn.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const Component = href ? 'a' : 'button';

    return (
        <Component
            ref={btnRef}
            href={href}
            target={target}
            onClick={onClick}
            className={`magnetic-btn inline-block transition-transform duration-200 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
};

export default MagneticButton;
