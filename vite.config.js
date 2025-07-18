import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '/svelte-about-chloe',    // right here! your repository name
  plugins: [svelte()],
})
