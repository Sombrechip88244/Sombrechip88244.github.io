// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import remarkAlert from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
	site: "https://oliverfildes.com",
	base: "/",
	vite: {
		plugins: [tailwindcss()],
	},
	compressHTML: true,
	integrations: [sitemap()],
	markdown: {
		remarkPlugins: [remarkAlert],
	},
});
