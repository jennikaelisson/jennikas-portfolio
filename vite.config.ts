import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: '/jennikas-portfolio/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});
