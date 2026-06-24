import { useEffect, useRef } from 'react';

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const spacing = 34;
    const dotSize = 1.5;

    function draw() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      ctx.clearRect(0, 0, rect.width, rect.height);

      const isDark = document.documentElement.classList.contains('dark');
      const alpha = isDark ? 0.35 : 0.25;
      const color = isDark ? '255,255,255' : '0,0,0';
      ctx.fillStyle = `rgba(${color},${alpha})`;

      for (let x = spacing / 2; x < rect.width; x += spacing) {
        for (let y = spacing / 2; y < rect.height; y += spacing) {
          ctx.fillRect(x - dotSize / 2, y - dotSize / 2, dotSize, dotSize);
        }
      }
    }

    draw();

    const observer = new MutationObserver(() => {
      draw();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    window.addEventListener('resize', draw);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', draw);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
      }}
    />
  );
}
