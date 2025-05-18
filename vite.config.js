import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // IMPORTANT: You might need to change '/portfolio/'
    // to match the sub-path your site is deployed to on Cloudflare Pages.
    // For example, if your repo is 'my-cool-site' and it's deployed to
    // your-username.pages.dev/my-cool-site/, then base should be '/my-cool-site/'
    // If deployed to root (e.g., custom domain or your-username.pages.dev),
    // then you might not need 'base' or it should be '/'.
    base: command === 'build' ? '/portfolio/' : '/',
  };
});
