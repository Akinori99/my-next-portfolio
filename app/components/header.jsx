'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// コンテンツ名とナビゲーション項目の定義
const CONTENT_NAME = `Akinori's Portfolio`;
const NAV_ITEMS = [
  { href: '/', label: 'TOP' },
  { href: '/works', label: 'WORKS' },
  { href: '/about', label: 'ABOUT' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // メニューの開閉状態を管理
  const menuRef = useRef(null); // メニューのDOM要素への参照
  const buttonRef = useRef(null); // メニューボタンのDOM要素への参照

  // メニュー開閉を切り替える関数
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  // メニューを閉じる関数
  const closeMenu = () => setIsMenuOpen(false);

  // メニュー外をクリックしたときにメニューを閉じる処理を設定
  useEffect(() => {
    const handleClickOutside = (event) => {
      // クリックがメニューおよびメニューボタン外かチェック
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

  // メニューアイコン
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

  // クローズアイコン
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
              src="/my-logo.jpg"
              width={0}
              height={0}
              alt="my-logo"
              style={{ width: '35px', height: '35px' }}
              priority
            />
            <span className="ml-2">{CONTENT_NAME}</span>
          </Link>
        </div>

        <nav className="ml-auto mr-3">
          <div className="relative">
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
                className="absolute mt-1.5 right-1 w-31 origin-top-right bg-black bg-opacity-90 border border-white divide-y divide-white rounded-md shadow-lg"
              >
                <div className="py-1">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-center px-5 py-3 text-white cursor-pointer hover:bg-white hover:text-black"
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
