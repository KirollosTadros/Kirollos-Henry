import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kirollos-henry.com',
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});