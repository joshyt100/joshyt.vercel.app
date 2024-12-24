import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    react(), // React support
    mdx(),   // MDX support
  ],
  build: {
    rollupOptions: {
      // Ensure MDX content is processed and bundled correctly
      input: 'index.html',
      output: {
        // Customize output if needed, otherwise Vite handles it by default
      },
    },
  },
  server: {
    hmr: {
      overlay: false, // Optional: Disable error overlay if it becomes disruptive
    },
  },
});

