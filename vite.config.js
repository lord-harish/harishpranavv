import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const base = '/harishpranavv/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    sourcemap: false,
    assetsDir: 'assets',
  },
});
