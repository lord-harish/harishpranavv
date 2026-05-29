import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1];
const base = process.env.VITE_BASE_PATH || (repositoryName ? `/${repositoryName}/` : '/Porfolio/');

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    sourcemap: false,
    assetsDir: 'assets',
  },
});
