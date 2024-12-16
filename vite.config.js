import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    react(), // React support
    mdx(),   // MDX support
  ],
  server: {
    hmr: {
      overlay: false, // Optional: Disable error overlay if it becomes disruptive
    },
  },
});

