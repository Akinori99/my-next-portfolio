const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export default function SkeletonContactSection() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-lg bg-gray-100 shadow-md p-6 mt-6`}
    >
      <div className="flex flex-col items-center">
        <div className="w-3/4 h-8 bg-gray-200 rounded-md mb-4"></div>
        <div className="flex justify-center mt-4">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-gray-200 rounded-full mx-2"
            ></div>
          ))}
        </div>
        <div className="w-3/4 h-4 bg-gray-200 rounded-md mt-4"></div>
        <div className="w-1/2 h-4 bg-gray-200 rounded-md mt-2"></div>
      </div>
    </div>
  );
}
