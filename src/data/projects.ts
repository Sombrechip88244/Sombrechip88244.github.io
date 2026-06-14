export interface Project {
  title: string
  description: string
  url: string
  tags: string[]
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'DevToolkit',
    description: 'A CLI toolkit for automating common development tasks — scaffolding, code generation, and deployment checks.',
    url: 'https://github.com/Sombrechip/devtoolkit',
    tags: ['Node.js', 'CLI', 'TypeScript'],
    repo: 'https://github.com/Sombrechip/devtoolkit',
  },
  {
    title: 'Portfolio Site',
    description: 'This site — built with Astro and Tailwind CSS, deployed via GitHub Pages.',
    url: 'https://sombrechip88244.github.io',
    tags: ['Astro', 'Tailwind', 'TypeScript'],
    repo: 'https://github.com/Sombrechip/Sombrechip88244.github.io',
  },
  {
    title: 'DataPipeline',
    description: 'Lightweight ETL pipeline for processing CSV and JSON datasets. Supports filtering, transformation, and export.',
    url: 'https://github.com/Sombrechip/data-pipeline',
    tags: ['Python', 'ETL', 'Data'],
  },
  {
    title: 'API Mock Server',
    description: 'Zero-config mock API server for development and testing. Define endpoints in a JSON file, get a running server instantly.',
    url: 'https://github.com/Sombrechip/api-mock-server',
    tags: ['Node.js', 'Express', 'Testing'],
    repo: 'https://github.com/Sombrechip/api-mock-server',
  },
]
