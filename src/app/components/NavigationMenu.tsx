import { NavigationItem } from '@/lib/types';
import NavigationMenuItem from './NavigationMenuItem';

interface NavigationMenuProps {
  items: NavigationItem[];
}

export default function NavigationMenu({ items }: NavigationMenuProps) {
  return (
    <nav>
      <ul className="flex space-x-8">
        {items.map((item) => (
          <NavigationMenuItem key={item.id} item={item} />
        ))}
      </ul>
    </nav>
  );
}
