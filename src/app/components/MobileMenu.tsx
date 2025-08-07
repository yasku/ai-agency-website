'use client'

import React, { useEffect, useRef } from 'react';
import { NavigationItem } from '@/lib/types';
import HamburgerIcon from './HamburgerIcon';
import MobileMenuItem from './MobileMenuItem';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed inset-0 z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Backdrop Overlay */}
      {isOpen && (
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={menuRef}
        className="absolute right-0 top-0 h-full w-64 bg-background shadow-lg p-6 flex flex-col space-y-6 border-l border-black/[.08] dark:border-white/[.145]"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex justify-end">
          <HamburgerIcon isOpen={isOpen} onClick={onClose} />
        </div>
        <nav className="flex flex-col space-y-4">
          {items.map((item) => (
            <MobileMenuItem key={item.id} item={item} onClose={onClose} />
          ))}
        </nav>
      </div>
    </div>
  );
}
