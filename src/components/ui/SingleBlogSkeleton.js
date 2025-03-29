const SingleBlogSkeleton = () => {
  return (
    <div className="w-full max-w-xl md:max-w-5xl mx-auto antialiased pt-4">
      <div className="mb-10">
        {/* Skeleton untuk Badge (Kategori) */}
        <div className="bg-gray-300 animate-pulse rounded-full text-sm w-24 h-6 mb-4"></div>

        {/* Skeleton untuk Judul */}
        <div className="bg-gray-300 animate-pulse h-8 w-3/4 mb-4 rounded"></div>

        {/* Skeleton untuk Detail Author */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="bg-gray-300 animate-pulse rounded-full w-12 h-12"></div>
            {/* Efek ping pada avatar */}
            <div className="absolute inset-0 bg-gray-400 rounded-full w-12 h-12 animate-ping opacity-75"></div>
          </div>
          <div className="flex-1">
            <div className="bg-gray-300 animate-pulse h-4 w-32 mb-2 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-48 rounded"></div>
          </div>
        </div>

        {/* Skeleton untuk Gambar Cover */}
        <div className="bg-gray-300 animate-pulse rounded-lg mb-10 h-64 w-full"></div>

        {/* Skeleton untuk Konten (Blocks) */}
        <div className="text-sm prose prose-sm dark:prose-invert">
          {/* Skeleton untuk Rich Text */}
          <div className="space-y-2 mb-6">
            <div className="bg-gray-300 animate-pulse h-6 w-1/3 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-full rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-5/6 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-3/4 rounded"></div>
          </div>

          {/* Skeleton untuk Quote */}
          <div className="border-l-4 border-gray-300 pl-4 my-4">
            <div className="bg-gray-300 animate-pulse h-4 w-2/3 rounded mb-2"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-1/3 rounded"></div>
          </div>

          {/* Skeleton untuk Media */}
          <div className="my-4">
            <div className="bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-1/4 mt-2 rounded"></div>
          </div>

          {/* Skeleton untuk Rich Text (lagi) */}
          <div className="space-y-2 mb-6">
            <div className="bg-gray-300 animate-pulse h-6 w-1/3 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-full rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-5/6 rounded"></div>
            <div className="bg-gray-300 animate-pulse h-4 w-3/4 rounded"></div>
          </div>

          {/* Skeleton untuk Slider */}
          <div className="my-4">
            <div className="bg-gray-300 animate-pulse rounded-lg h-48 w-full"></div>
            <div className="flex justify-center gap-2 mt-2">
              <div className="relative">
                <div className="bg-gray-300 rounded-full w-3 h-3"></div>
                {/* Efek ping pada dot pagination */}
                <div className="absolute inset-0 bg-gray-400 rounded-full w-3 h-3 animate-ping opacity-75"></div>
              </div>
              <div className="relative">
                <div className="bg-gray-300 rounded-full w-3 h-3"></div>
                <div className="absolute inset-0 bg-gray-400 rounded-full w-3 h-3 animate-ping opacity-75"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogSkeleton;
