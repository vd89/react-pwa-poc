import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

let faviconURL = '/vite.svg';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      includeAssets: [faviconURL],
      registerType: 'prompt',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: 'index.html',
      },
      manifest: {
        theme_color: '#ffffff',
        icons: [
          {
            src: faviconURL,
            sizes: '512x512',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
          {
            src: faviconURL,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});
