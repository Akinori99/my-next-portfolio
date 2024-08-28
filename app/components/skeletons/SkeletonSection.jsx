import { memo } from 'react';

const shimmer = `
  before:absolute before:inset-0 before:-translate-x-full
  before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r
  before:from-transparent before:via-white/60 before:to-transparent
`;

const SkeletonSection = () => (
  <div
    className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 shadow-md p-6 mt-6`}
  >
    <div className="flex flex-col items-start">
      <div className="w-1/4 h-8 bg-gray-200 rounded-md mb-4"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
      <div className="w-full h-4 bg-gray-200 rounded-md mb-2"></div>
      <div className="w-3/4 h-4 bg-gray-200 rounded-md mb-2"></div>
      <div className="w-1/2 h-4 bg-gray-200 rounded-md"></div>
    </div>
  </div>
);

export default memo(SkeletonSection);
