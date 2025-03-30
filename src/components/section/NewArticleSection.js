"use client";

import MainLayout from "../layout/MainLayout";
import { BlogCard } from "../ui/BlogCard";
import { useFetchArticles } from "@/hooks/useFetchArticles";
import { BlogCardSkeleton } from "../ui/BlogCardSkeleton";

const NewArticleSection = ({ count }) => {
  const { data, isFetching, isPending } = useFetchArticles({ max: count });

  return (
    <div className="base-color relative">
      <MainLayout className="h-full text-white py-10">
        <h1 className="text-4xl mb-4 md:text-5xl font-title font-bold">
          BACAAN TERBARU
        </h1>
        <div className="flex justify-center md:justify-start items-center flex-wrap md:flex-nowrap gap-5">
          {!isFetching && !isPending ? (
            <BlogCard data={data} />
          ) : (
            <BlogCardSkeleton />
          )}
        </div>
      </MainLayout>
    </div>
  );
};

export default NewArticleSection;
