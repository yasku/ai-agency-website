'use client'

import { useState } from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import { NavigationItem } from '@/lib/types';

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/services' },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/[.08] dark:border-white/[.145] bg-background/80 nav-backdrop">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo size="sm" />
        <div className="hidden md:block">
          <NavigationMenu items={navigationItems} />
        </div>
        {/* Mobile menu toggle (will be implemented in later tasks) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20"
            aria-label="Toggle mobile menu"
          >
            {/* Placeholder for HamburgerIcon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* MobileMenu component will be rendered here based on isMobileMenuOpen state in later tasks */}
    </nav>
  );
}