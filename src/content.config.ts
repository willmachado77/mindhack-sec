import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';

const sourceSchema = z.object({
  label: z.string(),
  url: z.url()
});

const dicas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/dicas' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    readingTime: z.number().int().positive(),
    level: z.enum(['Iniciante', 'Intermediário']),
    tags: z.array(z.string()).min(1),
    source: sourceSchema
  })
});

const editorialTimeSchema = z.string().regex(
  /^([01]\d|2[0-3]):[0-5]\d$/,
  'Use o formato HH:MM, por exemplo 19:30.'
);

const noticias = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/noticias' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    publishedTime: editorialTimeSchema.optional(),
    sourcePublishedAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).min(1),
    source: sourceSchema.optional()
  })
});

const cursos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cursos' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    level: z.enum(['Iniciante', 'Intermediário', 'Avançado']),
    status: z.enum(['Planejado', 'Publicado']),
    youtubeUrl: z.url().optional(),
    tags: z.array(z.string()).min(1)
  })
});

export const collections = { dicas, noticias, cursos };
