import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './src', // Set the root directory to src
  build: {
    outDir: '../dist', // Adjust the output directory path
  },
  publicDir: '../public', // Adjust the public assets path
});
