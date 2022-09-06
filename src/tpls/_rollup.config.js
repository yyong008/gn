import { defineConfig } from 'rollup'

export default defineConfig({
  input: {
    main: './src/index.js'
  },
  output: {
    dir: './dist'
  },
  plugins: []
})
