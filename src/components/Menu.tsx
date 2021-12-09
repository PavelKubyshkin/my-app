import Link from 'next/link';
import React from 'react';

interface MenuProps {
  items: Item[];
  direction?: 'horizontal' | 'vertical';
}

interface MenuItemProps {
  item: Item;
}

interface Item {
  href: string;
  label: string;
}

export const Menu = ({ items, direction = 'horizontal' }: MenuProps) => {
  return (
    <ul
      className={`flex gap-1 ${
        direction === 'vertical' ? 'flex-col' : 'flex-row'
      }`}
    >
      {items.map((i, index) => (
        <MenuItem key={index} item={i} />
      ))}
    </ul>
  );
};

const MenuItem = ({ item }: MenuItemProps) => {
  return (
    <li>
      <Link href={item.href} passHref={true} shallow={true}>
        <a className="no-underline">
          <div className="px-2 whitespace-nowrap w-min py-1 bg-blue-100 hover:bg-blue-200 rounded">
            {item.label}
          </div>
        </a>
      </Link>
    </li>
  );
};
