'use client'

import { useCallback } from 'react';

export function useSmoothScroll() {
  const scrollToId = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; // Adjust this value based on your fixed header's height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Optional: Focus the element after scrolling for accessibility
      element.focus({ preventScroll: true });
    }
  }, []);

  return scrollToId;
}
