import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://prosperaagency.co.id',
  trailingSlash: 'never',
  integrations: [sitemap()],
  redirects: {
    '/layanan/spg-spb-event': '/layanan/jasa-spg-usher',
    '/layanan/direct-sales-canvassing': '/layanan/jasa-direct-sales',
    '/layanan/mystery-shopper-audit': '/layanan/jasa-mystery-shopper',
    '/layanan/buzzer-dan-kol-activation': '/layanan/jasa-buzzer',
    '/layanan/aktivasi-komunitas-crowd': '/layanan/jasa-aktivasi-komunitas',
    '/layanan/clipper-short-video': '/layanan/jasa-clipper-video',
    '/layanan/rating-review-google-marketplace': '/layanan/jasa-buzzer',
    '/layanan/sales-aplikasi-fintech': '/layanan/jasa-direct-sales',
    '/layanan/host-live-streaming': '/layanan/jasa-clipper-video',
    '/layanan/crew-event-organizer': '/layanan/jasa-event-organizer',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
