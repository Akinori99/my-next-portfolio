'use client';

import React from 'react';
import BUTTON from '@/app/components/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-8">404 | This page could not be found.</h1>
        <p className="mb-12 text-2xl">お探しのページは見つかりませんでした。</p>
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-6">
          <div className="w-full md:w-auto flex justify-center">
            <BUTTON href="/works" txt="作品を見る" />
          </div>
          <div className="w-full md:w-auto flex justify-center">
            <BUTTON href="/about" txt="自己紹介へ" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
