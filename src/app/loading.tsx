const LoadingPage = () => {
  return (
    <div className="min-h-screen bg-[#F7FAF7] px-4 py-8 animate-pulse">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        <div className="mb-8">
          <div className="h-8 w-56 rounded-lg bg-gray-200" />
          <div className="mt-3 h-4 w-80 max-w-full rounded-md bg-gray-100" />
        </div>

        {/* Category Skeleton */}
        <div className="mb-8 flex flex-wrap gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="h-11 w-28 rounded-xl border border-gray-200 bg-white"
            />
          ))}
        </div>

        {/* Section Heading */}
        <div className="mb-5 flex items-center justify-between">
          <div className="h-6 w-40 rounded-md bg-gray-200" />
          <div className="h-4 w-20 rounded-md bg-gray-100" />
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              {/* Product Image and Name */}
              <div className="flex gap-5">
                <div className="h-[50px] w-[50px] shrink-0 rounded-xl bg-gray-200" />

                <div className="flex flex-1 flex-col justify-center gap-2">
                  <div className="h-4 w-3/4 rounded-md bg-gray-200" />
                  <div className="h-3 w-1/3 rounded-md bg-gray-100" />
                </div>
              </div>

              {/* Price */}
              <div className="mt-5">
                <div className="mb-3 h-4 w-24 rounded-md bg-gray-200" />

                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-16 rounded-md bg-gray-200" />
                    <div className="h-4 w-8 rounded-md bg-gray-100" />
                  </div>

                  {/* Price Change */}
                  <div className="flex items-center gap-2 rounded-xl bg-gray-100 px-3 py-1.5">
                    <div className="h-6 w-5 rounded-md bg-gray-200" />
                    <div className="h-4 w-10 rounded-md bg-gray-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
