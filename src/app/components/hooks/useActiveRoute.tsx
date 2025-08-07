'use client'

import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

export function useActiveRoute(href: string): boolean {
  const pathname = usePathname();

  const isActive = useMemo(() => {
    if (href === '/') {
      return pathname === '/';
    } else {
      return pathname.startsWith(href);
    }
  }, [pathname, href]);

  return isActive;
}
