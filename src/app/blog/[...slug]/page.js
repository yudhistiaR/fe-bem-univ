"use client";

import { cn, formatDate } from "@/lib/utils";
import { TracingBeam } from "@/components/ui/TrackingBeam";
import { useFetchArticles } from "@/hooks/useFetchArticles";
import { useParams } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import MainLayout from "@/components/layout/MainLayout";
import Image from "next/image";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import NewArticleSection from "@/components/section/NewArticleSection";
import SingleBlogSkeleton from "@/components/ui/SingleBlogSkeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Fungsi untuk menangani URL gambar
const getImageUrl = (url) => {
  if (!url) return "/img/fallback-image.png";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `${process.env.NEXT_PUBLIC_API_URL}${url}`;
};

// Komponen untuk slider menggunakan Swiper modern
const Slider = ({ files }) => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="my-4 rounded-lg"
    >
      {files.map((file) => (
        <SwiperSlide key={file.id}>
          <Image
            src={getImageUrl(file.url)}
            width={file.formats.medium.width}
            height={file.formats.medium.height}
            alt={file.alternativeText}
            className="rounded-lg object-cover w-full"
          />
          {file.caption && (
            <p className="text-md text-gray-400 mt-2 text-center">
              {file.caption}
            </p>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const SingleBlog = () => {
  const param = useParams();
  const [slug, id] = param.slug;

  const { data, isPending, isFetching } = useFetchArticles({
    max: 1,
    id: id,
    slug: slug,
  });

  // Fungsi untuk merender setiap blok
  const renderBlock = (block) => {
    switch (block.__component) {
      case "shared.rich-text":
        return (
          <div className="prose prose-sm max-w-none text-lg md:text-xl">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ src, alt }) => (
                  <Image
                    src={getImageUrl(src)}
                    width={1000}
                    height={600}
                    alt={alt}
                    className="rounded-lg mb-4 object-cover w-full"
                  />
                ),
              }}
            >
              {block.body}
            </Markdown>
          </div>
        );

      case "shared.quote":
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
            <p>{block.body}</p>
            <footer className="text-sm mt-2">— {block.title}</footer>
          </blockquote>
        );

      case "shared.media":
        return (
          <div className="my-4">
            <Image
              src={getImageUrl(block.file.url)}
              width={block.file.formats.medium.width}
              height={block.file.formats.medium.height}
              alt={block.file.alternativeText}
              className="rounded-lg mb-4 object-cover w-full"
            />
            {block.file.caption && (
              <p className="text-sm text-gray-400 mt-2">{block.file.caption}</p>
            )}
          </div>
        );

      case "shared.slider":
        return <Slider files={block.files} />;

      default:
        return null;
    }
  };

  // Ambil artikel pertama dari data (karena max: 1)
  const article = data?.data?.[0];

  return (
    <>
      <MainLayout className="mt-24 md:mt-44 relative">
        {isPending || isFetching ? (
          <SingleBlogSkeleton /> // Gunakan komponen skeleton terpisah
        ) : article ? (
          <TracingBeam className="h-full">
            <div className="w-full max-w-xl md:max-w-5xl mx-auto antialiased pt-4">
              <div className="mb-10">
                {/* Detail Kategori */}
                {article.category && (
                  <div className="mb-4 flex justify-between items-center">
                    <h2 className="bg-black uppercase font-title text-white rounded-full text-sm w-fit px-4 py-1 inline-block">
                      {article.category.name}
                    </h2>
                    <p>{formatDate(article.publishedAt)}</p>
                  </div>
                )}

                {/* Judul Artikel */}
                <p
                  className={cn(
                    "text-3xl font-title md:text-5xl font-bold mb-4",
                  )}
                >
                  {article.title}
                </p>

                {/* Detail Author */}
                {article.author && (
                  <div className="flex items-center gap-4 mb-6">
                    {article.author.avatar && (
                      <Image
                        src={getImageUrl(article.author.avatar.url)}
                        width={50}
                        height={50}
                        alt={article.author.name}
                        className="rounded-full object-cover"
                      />
                    )}
                    <div>
                      <p className="text-sm font-semibold">
                        {article.author.name}
                      </p>
                      <p className="text-sm text-gray-400">
                        {article.author.email}
                      </p>
                    </div>
                  </div>
                )}

                {/* Konten Artikel (blocks) */}
                <div className="text-sm">
                  {/* Gambar Cover */}
                  {article.cover && (
                    <Image
                      src={getImageUrl(article.cover.url)}
                      alt="blog thumbnail"
                      width={article.cover.width}
                      height={article.cover.height}
                      className="rounded-lg mb-10 object-cover w-full"
                    />
                  )}

                  {/* Render Blocks */}
                  {article.blocks && article.blocks.length > 0 ? (
                    article.blocks.map((block, index) => (
                      <div key={`block-${index}`}>{renderBlock(block)}</div>
                    ))
                  ) : (
                    <p className="font-body">{article.description}</p>
                  )}
                </div>
              </div>
            </div>
          </TracingBeam>
        ) : (
          <div className="w-full max-w-xl md:max-w-5xl mx-auto antialiased pt-4">
            Article not found.
          </div>
        )}
      </MainLayout>
      <NewArticleSection count={4} />
    </>
  );
};

export default SingleBlog;
