import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    github: z.string().optional(),
    // GitHub repo shorthand (`ppeck1/<name>`) linking this entry to a repo for
    // build-time metadata sync; when absent, derived from the `github` URL.
    repo: z.string().optional(),
    // Owner-set flag: pinned entries render as full cards in the
    // "Pinned – Chief Concerns" section of the Diagnosis tab.
    pinned: z.boolean().default(false),
    demo: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    priority: z.number().default(100),
    links: z.array(z.object({
      label: z.string(),
      url: z.string(),
    })).default([]),
    status: z.enum(['active', 'completed', 'archived']).default('active'),
  }),
});

export const collections = { blog, projects };
