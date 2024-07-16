// vite.config.js
import { defineConfig } from 'vite';
import gzipPlugin from 'rollup-plugin-gzip';

export default defineConfig({
  build: {
    target: 'esnext',
    outDir: 'dist', // Adjust output directory as needed
    assetsInlineLimit: 0,
    sourcemap: false,
    minify: 'terser', // Optionally minify with terser
    rollupOptions: {
      plugins: [
        gzipPlugin({
          // Options for gzip plugin
          additionalFiles: [], // Additional files to compress, if needed
          minSize: 1000, // Minimum size to compress (in bytes)
        }),
      ],
    },

  },
  assetsInclude: ['**/*.glb']
});
