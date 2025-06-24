// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      // 1) Where does your React app mount?
      renderTarget: '#root',

      // 2) The script that will render your <App /> to HTML:
      prerenderScript: resolve(__dirname, 'src/prerender.tsx'),

      // 3) List every HTML entry you want prerendered:
      additionalPrerenderRoutes: [
        '/index',
        '/thankyoupage',
        '/thankyoucall',
        '/bookacall',
        '/checkout',
      ],
    }),
  ],
  build: {
    rollupOptions: {
      // your multiple HTML entrypoints
      input: {
        main:         resolve(__dirname, 'index.html'),
        thankyou:     resolve(__dirname, 'thankyoupage.html'),
        thankyouCall: resolve(__dirname, 'thankyoucall.html'),
        bookacall:    resolve(__dirname, 'bookacall.html'),
        checkout:     resolve(__dirname, 'checkout.html'),
      },
      output: {
        // pull all 3rd-party deps into a single vendor chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
});
