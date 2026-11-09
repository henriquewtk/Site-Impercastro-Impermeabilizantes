// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TROCAR: coloque aqui o domínio final do site (ex.: https://www.impercastro.com.br).
// Ele é usado no canonical, nas tags de compartilhamento, no sitemap e no robots.txt.
const SITE_URL = 'https://impercastro.vercel.app';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
});
