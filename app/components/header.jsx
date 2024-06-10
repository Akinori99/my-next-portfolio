'use client';

import { useState } from 'react';
import Link from 'next/link';

const CONTENT_NAME = `Akinori's Portfolio`;
const NAV_ITEMS = [
  { href: '/', label: 'TOP' },
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
      <div className="flex items-center h-12">
        <div className="flex items-center ml-4">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl text-azure text-shadow cursor-pointer">
                {CONTENT_NAME}
              </span>
            </Link>
          </div>
        </div>
        <nav className="ml-auto mr-4">
          <div className="relative">
            <button
              className="flex items-center justify-center h-16 w-16 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                className="h-6 w-6 fill-current text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3h14v2H3V3zm0 6h14v2H3V9zm0 6h14v2H3v-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute right-0 w-21 origin-top-right bg-black bg-opacity-90 border border-white divide-y divide-white rounded-md shadow-lg">
                <div className="py-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-white cursor-pointer hover:bg-white hover:text-black"
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
