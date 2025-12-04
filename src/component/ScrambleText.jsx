import React, { useEffect, useRef, useState } from 'react';

const ScrambleText = ({ text, className = "", delay = 0 }) => {
    const elementRef = useRef(null);
    const [displayText, setDisplayText] = useState(text);
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let frameRequest;
        let frame = 0;
        const queue = [];

        const oldText = displayText;
        const newText = text;
        const length = Math.max(oldText.length, newText.length);

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || '';
            const to = newText[i] || '';
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            queue.push({ from, to, start, end });
        }

        const update = () => {
            let output = '';
            let complete = 0;

            for (let i = 0, n = queue.length; i < n; i++) {
                let { from, to, start, end, char } = queue[i];

                if (frame >= end) {
                    complete++;
                    output += to;
                } else if (frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = chars[Math.floor(Math.random() * chars.length)];
                        queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }

            if (elementRef.current) {
                elementRef.current.innerHTML = output;
            }

            if (complete === queue.length) {
                // Done
            } else {
                frameRequest = requestAnimationFrame(update);
                frame++;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        update();
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            cancelAnimationFrame(frameRequest);
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [text, delay]);

    return (
        <span ref={elementRef} className={className}>
            {text}
        </span>
    );
};

export default ScrambleText;
