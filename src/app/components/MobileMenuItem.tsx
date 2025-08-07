'use client'

import Link from 'next/link';
import { NavigationItem } from '@/lib/types';
import { useActiveRoute } from './hooks/useActiveRoute';

interface MobileMenuItemProps {
  item: NavigationItem;
  onClose: () => void;
}

export default function MobileMenuItem({ item, onClose }: MobileMenuItemProps) {
  const isActive = useActiveRoute(item.href);

  return (
    <Link
      key={item.id}
      href={item.href}
      onClick={onClose} // Close menu on link click
      className={`relative text-foreground text-lg font-medium hover:text-foreground/80 transition-colors duration-200 group ${
        isActive ? 'font-semibold' : ''
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {item.label}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-foreground to-foreground/70 transition-transform duration-200 ease-out origin-left ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      ></span>
    </Link>
  );
}