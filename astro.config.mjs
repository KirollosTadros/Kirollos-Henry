import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Your GitHub Pages live URL:
  site: 'https://Kirollos-Henry.github.io',
  // If repository is named 'portfolio', set base to '/portfolio'.
  // If repository is named 'KirollosTadros.github.io', omit 'base' or leave it as '/'.
  base: '/',
  integrations: [tailwind()],
});