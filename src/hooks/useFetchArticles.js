"use client";

import qs from "qs";
import { useQuery } from "@tanstack/react-query";

export const useFetchArticles = ({
  max = 4,
  id = null,
  slug = null,
  category = null,
  search = null,
}) => {
  const query = qs.stringify({
    sort: ["publishedAt:desc"],
    populate: {
      author: {
        populate: {
          avatar: {
            fields: ["id", "name", "url", "width", "height"],
          },
        },
      },
      category: {
        populate: "*",
      },
      cover: {
        fields: ["id", "name", "url", "width", "height"],
      },
      blocks: {
        populate: "*",
      },
    },
    pagination: {
      pageSize: max,
      page: 1,
    },
    status: "published",
    filters: {
      ...(id && {
        documentId: {
          $eq: id,
        },
      }),
      ...(slug && {
        slug: {
          $eq: slug,
        },
      }),
      ...(category && {
        category: {
          $eq: category,
        },
      }),
      ...(search && {
        title: {
          $containsi: search,
        },
      }),
    },
    encodeValuesOnly: true,
  });

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ["Articles", query, max, category, search],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/articles?` + query,
      );

      return await response.json();
    },
  });

  return {
    isPending,
    error,
    data,
    isFetching,
  };
};
