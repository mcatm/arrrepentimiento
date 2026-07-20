import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import path from 'node:path';

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  ssr: {
    // dayjs is CJS; keep it external-safe for the SSG render
    noExternal: ['@vanilla-extract/css'],
  },
});
