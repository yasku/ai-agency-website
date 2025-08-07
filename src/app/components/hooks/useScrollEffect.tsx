'use client'

import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrollState {
  isScrolled: boolean;
  scrollDirection: 'up' | 'down' | null;
  scrollY: number;
}

const THROTTLE_DELAY = 100; // ms

export function useScrollEffect(): ScrollState {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setScrollY(currentScrollY);
    setIsScrolled(currentScrollY > 0);

    if (currentScrollY > lastScrollY.current) {
      setScrollDirection('down');
    } else if (currentScrollY < lastScrollY.current) {
      setScrollDirection('up');
    } else {
      setScrollDirection(null);
    }
    lastScrollY.current = currentScrollY;
  }, []);

  // Throttle scroll event
  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null;

    const throttledHandleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(handleScroll, THROTTLE_DELAY);
    };

    window.addEventListener('scroll', throttledHandleScroll);

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll]);

  return { isScrolled, scrollDirection, scrollY };
}
