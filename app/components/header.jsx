'use client';
import Link from 'next/link';

const NAV_ITEMS = [
  { href: '/', label: 'TOP' },
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
];

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            {NAV_ITEMS.map((item) => {
              return (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </li>
        </ul>
      </nav>
    </header>
  );
}
