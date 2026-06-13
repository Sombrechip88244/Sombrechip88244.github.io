---
title: "Getting Started with Astro Content Collections"
date: 2025-01-15
description: "A walkthrough of Astro's content collections API — how to define schemas, query content, and render markdown posts with full type safety."
tags: ["Astro", "TypeScript", "Web"]
---

Content collections are one of Astro's most powerful features. They give you a type-safe way to work with local content — markdown files living in `src/content/blog/`.

## Defining a schema

In `src/content/config.ts`, you define a collection with a Zod schema:

```ts
import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
})

export const collections = { blog }
```

Astro validates every file against this schema at build time. If a post is missing a required field, the build fails — no more production errors from frontmatter typos.

## Querying content

Use `getCollection` to fetch all entries, or `getEntry` for a single one:

```ts
import { getCollection } from 'astro:content'

const posts = await getCollection('blog')
// posts are sorted by date, newest first
const sorted = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
```

## Rendering a post

In a dynamic route like `src/pages/blog/[...slug].astro`:

```astro
---
import { getCollection } from 'astro:content'
const { slug } = Astro.params
const entry = await getEntry('blog', slug as string)
const { Content } = await entry.render()
---

<Content />
```

The `render()` method returns the compiled component — drop it in with `<Content />` and you're done.

## Why it matters

Before content collections, you'd manage markdown files manually — reading the filesystem, parsing frontmatter, hoping nothing was malformed. Now Astro owns that contract. The schema is the contract.

If you're starting a blog or docs site with Astro, content collections are the way to go.