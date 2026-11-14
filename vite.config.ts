import tailwindcss from '@tailwindcss/vite';
import viteReact from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { URL, fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [viteReact(), tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        app: resolve(process.cwd(), 'app.html'),
        about: resolve(process.cwd(), 'about.html'),
      },
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    allowedHosts: ['janie-ethnographic-unlibellously.ngrok-free.dev'],
  },
});
