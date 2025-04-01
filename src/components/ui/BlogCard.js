"use client";

import { cn, calculateArticleReadingTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function BlogCard({ data }) {
  return (
    <>
      {data?.data.map((article, i) => (
        <Link
          key={i}
          href={`/blog/${article.slug}/${article.documentId}`}
          className="max-w-xl w-full group/card bg-background rounded-lg shadow-xl"
        >
          <div
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96  mx-auto backgroundImage flex flex-col justify-between p-4 rounded-lg",
            )}
          >
            <Image
              src={
                process.env.NEXT_PUBLIC_API_URL + article.cover.url ??
                "/img/main_logo.png"
              }
              fill
              quality={10}
              alt="cover-img"
            />
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <Image
                height="100"
                width="100"
                alt="Avatar"
                src={
                  process.env.NEXT_PUBLIC_API_URL + article.author.avatar.url ??
                  "/img/main_logo.png"
                }
                className="h-10 w-10 rounded-full border-2 object-cover"
              />
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {article.author.name ?? "Kazumi"}
                  </p>
                  <p className="text-sm text-gray-400">
                    {calculateArticleReadingTime(article)}
                  </p>
                </div>
                <div className="base-color py-1 px-4 font-bold">
                  <p>{article.category.name.toUpperCase() ?? "Kazumi"}</p>
                </div>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                {article.title ?? "Kazumi"}
              </h1>
              <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                {article.description ?? "Kazumi"}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
