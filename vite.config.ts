import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    ssr({ prerender: true })
  ],
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
