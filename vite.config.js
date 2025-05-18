import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set base to '/' for root deployments.
  // If your site is deployed to a sub-path (e.g., your-username.pages.dev/my-repo/),
  // then base should be '/my-repo/'.
  base: '/',
});
