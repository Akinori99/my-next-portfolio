'use client';

import { memo } from 'react';

const shimmer = `
  before:absolute before:inset-0 before:-translate-x-full
  before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r
  before:from-transparent before:via-white/60 before:to-transparent
`;

const SkeletonWorkItem = () => (
  <div
    className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 shadow-md p-6 mt-6`}
  >
    <div className="flex flex-col items-center">
      <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
      <div className="w-3/4 h-6 bg-gray-200 rounded-md mb-2"></div>
      <div className="w-1/2 h-6 bg-gray-200 rounded-md"></div>
    </div>
    <div className="mt-4 w-full h-4 bg-gray-200 rounded-md"></div>
    <div className="mt-2 w-full h-4 bg-gray-200 rounded-md"></div>
    <div className="mt-2 w-3/4 h-4 bg-gray-200 rounded-md"></div>
    <div className="mt-2 w-1/2 h-4 bg-gray-200 rounded-md"></div>
  </div>
);

export default memo(SkeletonWorkItem);
