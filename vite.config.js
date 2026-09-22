import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Matches the original CRA build output directory
  },
  server: {
    port: 5173,      
    open: true,      // Automatically opens the app in the browser
  },
});
