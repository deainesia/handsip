export const SkeletonCard = ({ loading }) => {
  return (
    <div
      className={`grid animate-pulse grid-cols-2 grid-rows-3 gap-4 transition-opacity duration-500 md:flex md:flex-row md:gap-3 lg:gap-4 ${loading ? "opacity-100" : "opacity-0"}`}
    >
      {[...Array(5)].map((_, i) => (
        <div className="flex-1" key={i}>
          <div className="mb-1 aspect-square w-full rounded-lg bg-gray"></div>
          <div className="mb-1 h-5 w-full rounded-lg bg-gray lg:h-6"></div>
          <div className="mb-1 h-5 w-8/12 rounded-lg bg-gray lg:h-6"></div>
          <div className="mb-1 h-5 w-5/12 rounded-lg bg-gray lg:h-6"></div>
        </div>
      ))}

      <div className="aspect-square w-full rounded-lg bg-gray md:hidden"></div>
    </div>
  );
};
