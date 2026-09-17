import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const poetry = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poetry' }),
  schema: z.object({
    title: z.string(),
    chapter: z.string().default('in the feels'),
    date: z.date().optional(),
    note: z.string().optional(),
    isNew: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.date(),
    isNew: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const vlog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/vlog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    videoUrl: z.string().optional(),
    date: z.date(),
    isNew: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { poetry, blog, vlog };
