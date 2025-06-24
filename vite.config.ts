import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
          renderTarget: '#root',                              // where your React mounts
          prerenderScript: resolve(__dirname, 'src/prerender.tsx'),
          additionalPrerenderRoutes: [
            '/', '/thankyoupage.html', '/thankyoucall.html',
            '/bookacall.html', '/checkout.html',
          ],
        }),  ],
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        thankyou: resolve(__dirname, 'thankyoupage.html'),
        thankyouCall: resolve(__dirname, 'thankyoucall.html'),
        bookacall: resolve(__dirname, 'bookacall.html'),        
        checkout: resolve(__dirname, 'checkout.html'),        
      }
    }
  }
});
