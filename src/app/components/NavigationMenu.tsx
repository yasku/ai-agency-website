import Link from 'next/link';
import { NavigationItem } from '@/lib/types';

interface NavigationMenuProps {
  items: NavigationItem[];
}

export default function NavigationMenu({ items }: NavigationMenuProps) {
  return (
    <nav>
      <ul className="flex space-x-8">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="relative text-foreground hover:text-foreground/80 transition-colors duration-200 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-foreground to-foreground/70 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out origin-left"></span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
