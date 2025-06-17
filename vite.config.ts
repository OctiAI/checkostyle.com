import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main:    resolve(__dirname, 'index.html'),
        thankyou: resolve(__dirname, 'ThankYouPage.html'),
        thankyouCall: resolve(__dirname, 'ThankYouCall.html'),
      }
    }
  }
});
