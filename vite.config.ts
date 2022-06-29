import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3500,
    proxy: {
      '/api/': {
        target: 'http://localhost:3600/',
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
  build: {
    outDir: 'dist/client',
  }
})
