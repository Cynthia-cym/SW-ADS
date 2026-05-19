// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://swads.ai',
  integrations: [
    react(),
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: 'zh-CN',
        locales: {
          'zh-CN': 'zh-CN',
          en: 'en-US',
          ru: 'ru-RU',
          ar: 'ar-SA',
          pt: 'pt-BR',
          id: 'id-ID',
        },
      },
    }),
  ],

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN', 'en', 'ru', 'ar', 'pt', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});