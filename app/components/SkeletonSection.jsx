const SkeletonSection = () => (
  <div className="p-4 bg-gray-200 animate-pulse rounded-lg">
    <div className="h-6 bg-gray-300 mb-4 rounded"></div>
    <div className="space-y-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="h-4 bg-gray-300 rounded"></div>
      ))}
    </div>
  </div>
);

export default SkeletonSection;
