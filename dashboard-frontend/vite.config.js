// vite.config.js
import { defineConfig } from 'vite';
import ssr from 'vite-plugin-ssr';

export default defineConfig({
  plugins: [ssr()],
});
