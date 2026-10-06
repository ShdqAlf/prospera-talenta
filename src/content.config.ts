import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const artikel = defineCollection({
  loader: glob({ base: "./src/content/artikel", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("Tim Editorial PT Prospera Talenta"),
    category: z.string().default("Manajemen Sales"),
    readingTime: z.string().default("4 menit baca"),
  }),
});

export const collections = { artikel };
