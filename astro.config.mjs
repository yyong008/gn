import { defineConfig } from 'astro/config'

// integrations
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

export default defineConfig({
  integrations: [react(), tailwind(), mdx()],
  root: './docs',
  srcDir: './docs',
  base: './docs'
  // output: 'server'
})
