import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prosperatalenta.co.id',
  trailingSlash: 'never',
  integrations: [sitemap()],
  redirects: {
    '/layanan/spg-spb-event': '/layanan/jasa-spg-usher',
    '/layanan/direct-sales-canvassing': '/layanan/jasa-direct-sales',
    '/layanan/mystery-shopper-audit': '/layanan/jasa-mystery-shopper',
    '/layanan/buzzer-dan-kol-activation': '/layanan/jasa-kol-visit',
    '/layanan/aktivasi-komunitas-crowd': '/layanan/jasa-sebar-kuesioner',
    '/layanan/clipper-short-video': '/layanan',
    '/layanan/rating-review-google-marketplace': '/layanan',
    '/layanan/sales-aplikasi-fintech': '/layanan/jasa-direct-sales',
    '/layanan/host-live-streaming': '/layanan',
    '/layanan/crew-event-organizer': '/layanan/jasa-spg-usher',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
