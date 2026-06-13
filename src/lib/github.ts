const GITHUB_USERNAME = 'Sombrechip'
const TOKEN = import.meta.env.PUBLIC_GITHUB_TOKEN

export interface GitHubRepo {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  stargazers_count: number
  language: string | null
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const headers: HeadersInit = {
    'Accept': 'application/vnd.github.v3+json',
  }
  if (TOKEN) {
    headers['Authorization'] = `Bearer ${TOKEN}`
  }

  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=100`,
    { headers }
  )

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }

  const repos: GitHubRepo[] = await res.json()

  // Filter to non-forks, sort by stars
  return repos
    .filter((r) => !r.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
}