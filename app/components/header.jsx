'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'TOP' },
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const MenuIcon = () => (
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
  );

  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      className="h-6 w-6 fill-current text-white"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    <header className="fixed top-0 w-full bg-black bg-opacity-90 z-50">
      <div className="flex items-center h-11">
        <div className="flex items-center ml-4">
          <Link
            href="/"
            className="flex items-center text-2xl text-azure text-shadow cursor-pointer"
          >
            <Image
              src="/img/my-logo.png"
              width={40}
              height={40}
              alt="my-logo"
              priority
              style={{ width: '40px', height: '40px' }}
            />
            <span className="ml-2 text-white">Akinori&apos;s Portfolio</span>
          </Link>
        </div>

        <nav className="ml-auto mr-3">
          <div className="hidden md:flex items-center space-x-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-white hover:text-azure transition-opacity duration-300 ${pathname === item.href ? 'opacity-50' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="md:hidden relative">
            <button
              ref={buttonRef}
              className="flex items-center justify-center h-9 w-9 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
            {isMenuOpen && (
              <div
                ref={menuRef}
                className="absolute mt-1 right-1 w-[125px] origin-top-right bg-black bg-opacity-90 border border-white divide-y divide-white rounded-md shadow-lg"
              >
                <div className="py-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-center px-5 py-3 text-white cursor-pointer hover:bg-white hover:text-black transition-opacity duration-300 ${pathname === item.href ? 'opacity-50' : ''}`}
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
