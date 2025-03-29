"use client";
import { cn } from "@/lib/utils";

export function BlogCardSkeleton({ count = 4 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="w-full group/card bg-background rounded-lg shadow-xl animate-pulse"
        >
          <div
            className={cn(
              "overflow-hidden relative card h-96 mx-auto flex flex-col justify-between p-4 rounded-lg",
            )}
          >
            {/* Skeleton for Image */}
            <div className="absolute inset-0 bg-gray-300 rounded-lg"></div>
            <div className="absolute w-full h-full top-0 left-0 bg-gray-400 opacity-60"></div>

            {/* Skeleton for Author Section */}
            <div className="flex flex-row items-center space-x-4 z-10">
              <div className="h-10 w-10 rounded-full bg-gray-300"></div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col space-y-2">
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                  <div className="h-3 w-16 bg-gray-300 rounded"></div>
                </div>
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
              </div>
            </div>

            {/* Skeleton for Content Section */}
            <div className="text content space-y-4">
              <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
