'use client';

// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/

import { useCallback, useEffect } from 'react';

export function Viewport() {
  const updateVh = useCallback(() => {
    requestAnimationFrame(() => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateVh);
    window.addEventListener('scroll', updateVh);
    updateVh();

    return () => {
      window.removeEventListener('resize', updateVh);
      window.removeEventListener('scroll', updateVh);
    };
  }, [updateVh]);

  return null;
}
