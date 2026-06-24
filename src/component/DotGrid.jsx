import { useEffect, useRef } from 'react';

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationId;
    let dots = [];
    const spacing = 26;
    let mouseX = -1000;
    let mouseY = -1000;

    function computeThemeColors() {
      const isDark = document.documentElement.classList.contains('dark');
      return {
        r: isDark ? 255 : 0,
        g: isDark ? 255 : 0,
        b: isDark ? 255 : 0,
        blinkMin: isDark ? 0.03 : 0.02,
        blinkMax: isDark ? 0.22 : 0.18,
        hoverAlpha: isDark ? 0.6 : 0.45,
        hoverRadius: 130,
      };
    }

    let colors = computeThemeColors();

    const observer = new MutationObserver(() => {
      colors = computeThemeColors();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initDots(rect.width, rect.height);
    }

    function initDots(w, h) {
      dots = [];
      for (let x = spacing / 2; x < w; x += spacing) {
        for (let y = spacing / 2; y < h; y += spacing) {
          dots.push({
            x,
            y,
            phase: Math.random() * Math.PI * 2,
            speed: 0.2 + Math.random() * 0.4,
          });
        }
      }
    }

    function draw(time) {
      const dpr = window.devicePixelRatio || 1;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      const t = time * 0.001;
      const { r, g, b, blinkMin, blinkMax, hoverAlpha, hoverRadius } = colors;

      for (const dot of dots) {
        // Visible blink: oscillate between blinkMin and blinkMax
        const blink = 0.5 + 0.5 * Math.sin(t * dot.speed + dot.phase);
        let alpha = blinkMin + blink * (blinkMax - blinkMin);

        // Hover glow: dots near cursor become much brighter
        const dx = dot.x - mouseX;
        const dy = dot.y - mouseY;
        const distSq = dx * dx + dy * dy;
        const hr2 = hoverRadius * hoverRadius;
        if (distSq < hr2) {
          const dist = Math.sqrt(distSq);
          const factor = 1 - dist / hoverRadius;
          // Ease the factor for a smoother glow falloff
          const eased = factor * factor * (3 - 2 * factor);
          alpha = alpha + (hoverAlpha - alpha) * eased;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${alpha})`;
        ctx.fill();
      }

      // Radial gradient vignette: fade dots at edges using destination-out
      ctx.save();
      ctx.globalCompositeOperation = 'destination-out';
      const cx = w / 2;
      const cy = h / 2;
      const maxDim = Math.max(w, h);
      const innerR = maxDim * 0.35;
      const outerR = maxDim * 0.7;
      const vignette = ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
      vignette.addColorStop(0, 'rgba(0,0,0,0)');
      vignette.addColorStop(1, 'rgba(0,0,0,1)');
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();

      animationId = requestAnimationFrame(draw);
    }

    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    }

    function onMouseLeave() {
      mouseX = -1000;
      mouseY = -1000;
    }

    resize();
    animationId = requestAnimationFrame(draw);

    // Listen on window so mouse events work even over content
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
