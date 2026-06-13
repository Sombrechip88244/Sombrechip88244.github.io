# Sombrechip88244.github.io

Personal developer portfolio built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type-check
npm run astro check
```

## Deployment

Pushing to `main` triggers a GitHub Actions workflow that builds and deploys to GitHub Pages automatically. Make sure the repo's Pages settings have the source set to **GitHub Actions**.

## Content

- **Blog posts** — Add `.md` files to `src/content/blog/` with frontmatter: `title`, `date`, `description`, `tags` (optional).
- **Projects** — Edit `src/data/projects.ts`.
- **Resume** — Place your PDF at `public/resume.pdf`, then link it from `src/pages/resume.astro`.