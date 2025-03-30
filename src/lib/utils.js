import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const formatDate = (isoString) => {
  const date = new Date(isoString);

  // Opsi untuk format tanggal
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  // Format tanggal menggunakan toLocaleString
  return date.toLocaleString("id-ID", options);
};

/**
 * Menghitung estimasi waktu baca berdasarkan teks.
 * @param {string} text - Teks artikel yang akan dihitung waktu bacanya.
 * @param {number} [wordsPerMinute=200] - Kecepatan membaca dalam kata per menit (default: 200).
 * @returns {string} - Estimasi waktu baca dalam format "X menit".
 */
export function calculateReadingTime(text, wordsPerMinute = 200) {
  if (!text || typeof text !== "string") {
    return "0 menit";
  }

  const cleanText = text
    .replace(/<[^>]+>|[\*\#\-\[\]\(\)]/g, "") // Hapus tag HTML/Markdown
    .trim();
  const wordCount = cleanText
    .split(/\s+/)
    .filter((word) => word.length > 0).length;

  const minutes = wordCount / wordsPerMinute;
  const readingTime = Math.ceil(minutes);

  return `${readingTime} menit`;
}

/**
 * Menghitung waktu baca dari data artikel (description + blocks).
 * @param {object} article - Objek artikel dari Strapi.
 * @param {number} [wordsPerMinute=200] - Kecepatan membaca.
 * @returns {string} - Waktu baca total.
 */
export function calculateArticleReadingTime(article, wordsPerMinute = 200) {
  const { description, blocks } = article || {};

  let fullText = description || "";
  if (blocks && Array.isArray(blocks)) {
    blocks.forEach((block) => {
      if (block.__component === "shared.rich-text" && block.body) {
        fullText += " " + block.body;
      } else if (block.__component === "shared.quote" && block.body) {
        fullText += " " + block.body;
      }
    });
  }

  return calculateReadingTime(fullText, wordsPerMinute);
}
