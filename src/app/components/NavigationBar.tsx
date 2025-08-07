'use client'

import { useState } from 'react';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';
import MobileMenu from './MobileMenu';
import HamburgerIcon from './HamburgerIcon';
import { NavigationItem } from '@/lib/types';
import { useScrollEffect } from './hooks/useScrollEffect';

const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'services', label: 'Services', href: '/services' },
];

export default function NavigationBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isScrolled } = useScrollEffect();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'border-b border-black/[.08] dark:border-white/[.145] bg-background/80 shadow-sm nav-backdrop'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Logo size="sm" />
        <div className="hidden md:block">
          <NavigationMenu items={navigationItems} />
        </div>
        <div className="md:hidden">
          <HamburgerIcon isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} items={navigationItems} />
    </nav>
  );
}