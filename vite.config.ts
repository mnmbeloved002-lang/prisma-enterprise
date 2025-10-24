import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico','favicon.png','apple-touch-icon.png'],
      manifest: {
        name: 'Prisma Enterprise',
        short_name: 'Prisma',
        start_url: '/',
        display: 'standalone',
        background_color: '#0e0e0f',
        theme_color: '#0e0e0f',
        icons: [
          { src: '/favicon.png', sizes: '192x192', type: 'image/png' },
          { src: '/favicon.png', sizes: '512x512', type: 'image/png' }
        ]
      },
      workbox: {
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,png}'],
        runtimeCaching: [
          {
            // кэшируем /news.json по стратегии SWR
            urlPattern: ({url}) => url.pathname.endsWith('/news.json'),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'news-cache',
              expiration: { maxEntries: 20, maxAgeSeconds: 24 * 60 * 60 }
            }
          },
          {
            // картинки — тоже SWR
            urlPattern: ({request}) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'img-cache',
              expiration: { maxEntries: 60, maxAgeSeconds: 24 * 60 * 60 }
            }
          }
        ]
      }
    })
  ]
})
