import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@iconify-icons/simple-icons': 'node_modules/@iconify-icons/simple-icons',
    },
  },
});