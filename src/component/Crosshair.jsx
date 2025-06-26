import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e, container) => {
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };
  }
  return { x: e.clientX, y: e.clientY };
};

const Crosshair = ({ color = "#ffffff", containerRef = null }) => {
  const cursorRef = useRef(null);
  const lineHorizontalRef = useRef(null);
  const lineVerticalRef = useRef(null);
  const filterXRef = useRef(null);
  const filterYRef = useRef(null);
  const centerDotRef = useRef(null);
  const [lockText, setLockText] = useState("AIM");

  let mouse = { x: 0, y: 0 };

  const handleClick = () => {
    // Directly redirect to LinkedIn
    window.open("https://www.linkedin.com/in/shravan-ramakunja-4b3a25291/", "_blank");
  };

  const handleMouseEnter = () => {
    setLockText("SHOOT");
  };

  const handleMouseLeave = () => {
    setLockText("AIM");
  };

  useEffect(() => {
    
    const handleMouseMove = (ev) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mouse = getMousePos(ev, containerRef?.current);

      if (containerRef?.current) {
        const bounds = containerRef.current.getBoundingClientRect();
        if (
          ev.clientX < bounds.left ||
          ev.clientX > bounds.right ||
          ev.clientY < bounds.top ||
          ev.clientY > bounds.bottom
        ) {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
            opacity: 0,
          });
        } else {
          gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
            opacity: 1,
          });
        }
      }
    };

    const target = containerRef?.current || window;
    target.addEventListener("mousemove", handleMouseMove);

    const renderedStyles = {
      tx: { previous: 0, current: 0, amt: 0.15 },
      ty: { previous: 0, current: 0, amt: 0.15 },
    };

    gsap.set([lineHorizontalRef.current, lineVerticalRef.current], {
      opacity: 0,
    });

    gsap.set(centerDotRef.current, {
      opacity: 0,
    });

    const onMouseMove = () => {
      renderedStyles.tx.previous = renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.previous = renderedStyles.ty.current = mouse.y;

      gsap.to([lineHorizontalRef.current, lineVerticalRef.current, centerDotRef.current], {
        duration: 0.9,
        ease: "Power3.easeOut",
        opacity: 1,
      });

      requestAnimationFrame(render);

      target.removeEventListener("mousemove", onMouseMove);
    };

    target.addEventListener("mousemove", onMouseMove);

    const primitiveValues = { turbulence: 0 };

    const tl = gsap
      .timeline({
        paused: true,
        onStart: () => {
          lineHorizontalRef.current.style.filter = `url(#filter-noise-x)`;
          lineVerticalRef.current.style.filter = `url(#filter-noise-y)`;
        },
        onUpdate: () => {
          filterXRef.current.setAttribute(
            "baseFrequency",
            primitiveValues.turbulence
          );
          filterYRef.current.setAttribute(
            "baseFrequency",
            primitiveValues.turbulence
          );
        },
        onComplete: () => {
          lineHorizontalRef.current.style.filter = lineVerticalRef.current.style.filter = "none";
        },
      })
      .to(primitiveValues, {
        duration: 0.5,
        ease: "power1",
        startAt: { turbulence: 1 },
        turbulence: 0,
      });

    const enter = () => tl.restart();
    const leave = () => tl.progress(1).kill();

    const render = () => {
      renderedStyles.tx.current = mouse.x;
      renderedStyles.ty.current = mouse.y;

      for (const key in renderedStyles) {
        renderedStyles[key].previous = lerp(
          renderedStyles[key].previous,
          renderedStyles[key].current,
          renderedStyles[key].amt
        );
      }

      gsap.set(lineVerticalRef.current, { x: renderedStyles.tx.previous });
      gsap.set(lineHorizontalRef.current, { y: renderedStyles.ty.previous });
      gsap.set(centerDotRef.current, { 
        x: renderedStyles.tx.previous - 2, 
        y: renderedStyles.ty.previous - 2 
      });

      requestAnimationFrame(render);
    };

    const links = containerRef?.current
      ? containerRef.current.querySelectorAll("a")
      : document.querySelectorAll("a");

    links.forEach((link) => {
      link.addEventListener("mouseenter", enter);
      link.addEventListener("mouseleave", leave);
    });

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      target.removeEventListener("mousemove", onMouseMove);
      
      links.forEach((link) => {
        link.removeEventListener("mouseenter", enter);
        link.removeEventListener("mouseleave", leave);
      });
    };
  }, [containerRef, color]);

  return (
    <div
      ref={cursorRef}
      className={`${
        containerRef ? "absolute" : "fixed"
      } top-0 left-0 w-full h-full pointer-events-none z-[10000]`}
    >
      {/* Status Text */}
      <div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-[10001] cursor-crosshair"
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="text-white font-bold text-6xl text-center hover:text-red-400 transition-colors duration-300">
          {lockText}
        </div>
      </div>

      <svg className="absolute top-0 left-0 w-full h-full">
        <defs>
          <filter id="filter-noise-x">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterXRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
          <filter id="filter-noise-y">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.000001"
              numOctaves="1"
              ref={filterYRef}
            />
            <feDisplacementMap in="SourceGraphic" scale="40" />
          </filter>
        </defs>
      </svg>
      
      {/* Horizontal Line */}
      <div
        ref={lineHorizontalRef}
        className={`absolute w-full h-px pointer-events-none opacity-0 transform translate-y-1/2`}
        style={{ background: color }}
      ></div>
      
      {/* Vertical Line */}
      <div
        ref={lineVerticalRef}
        className={`absolute h-full w-px pointer-events-none opacity-0 transform translate-x-1/2`}
        style={{ background: color }}
      ></div>
      
      {/* Center Dot */}
      <div
        ref={centerDotRef}
        className="absolute w-1 h-1 pointer-events-none opacity-0 rounded-full"
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default Crosshair;
