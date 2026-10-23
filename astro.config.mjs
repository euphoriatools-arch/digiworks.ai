import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://digiworksai.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        if (
          page.includes('custom-app-development-meta') ||
          page.includes('/404') ||
          page.endsWith('/404.html')
        ) {
          return false;
        }
        let pathname = page;
        try {
          pathname = new URL(page).pathname;
        } catch {
          /* keep raw */
        }
        const p = pathname.replace(/\/$/, '').replace(/\.html$/, '');
        if (p === '/team') return false;
        if (p.startsWith('/blog/')) return false;
        if (p.startsWith('/case-studies/') && p !== '/case-studies/checkmate') return false;
        return true;
      },
      serialize(item) {
        const base = 'https://digiworksai.com';
        let url = item.url.replace(/\/$/, '');
        const lastmod = '2026-10-01';
        if (url === base) {
          return { ...item, url: `${base}/`, lastmod };
        }
        if (!url.endsWith('.html')) {
          url = `${url}.html`;
        }
        return { ...item, url, lastmod };
      },
    }),
  ],
  vite: {
    server: {
      watch: {
        ignored: ['**/_html_source/**', '**/migration/**'],
      },
    },
  },
});
