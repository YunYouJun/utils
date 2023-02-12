import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  clean: true,
  outDir: 'dist',
  format: ['cjs', 'esm'],
  minify: true,
  dts: true,
})
