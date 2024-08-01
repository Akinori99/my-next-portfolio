const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function SkeletonWorkItem() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 shadow-md p-6 mt-6`}
    >
      <div className="flex items-center">
        <div className="h-16 w-16 bg-gray-200 rounded-md"></div>
        <div className="ml-4">
          <div className="h-4 w-24 bg-gray-200 rounded-md mb-2"></div>
          <div className="h-4 w-16 bg-gray-200 rounded-md"></div>
        </div>
      </div>
      <div className="mt-4 h-4 w-full bg-gray-200 rounded-md"></div>
      <div className="mt-2 h-4 w-3/4 bg-gray-200 rounded-md"></div>
      <div className="mt-2 h-4 w-1/2 bg-gray-200 rounded-md"></div>
    </div>
  );
}
