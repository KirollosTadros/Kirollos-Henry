import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://KirollosTadros.github.io',
  base: '/Kirollos-Henry',
  vite: {
    plugins: [tailwindcss()],
  },
});