import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (dot) {
                dot.style.left = `${posX}px`;
                dot.style.top = `${posY}px`;
            }

            if (outline) {
                outline.animate(
                    { left: `${posX}px`, top: `${posY}px` },
                    { duration: 500, fill: "forwards" }
                );
            }
        };

        window.addEventListener('mousemove', moveCursor);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" id="cursor-dot"></div>
            <div ref={outlineRef} className="cursor-outline" id="cursor-outline"></div>
        </>
    );
};

export default CustomCursor;
