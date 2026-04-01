import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://ppeck.me',
  integrations: [mdx()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
