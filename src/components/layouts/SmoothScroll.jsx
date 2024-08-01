// SmoothScroll.jsx
import React, { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: true,
    });

    const animate = (time) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      cancelAnimationFrame(animate);
    };
  }, []);

  return <div>{children}</div>;
};

export default SmoothScroll;
