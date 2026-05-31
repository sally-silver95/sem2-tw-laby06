import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/sem-2-tw-laby/',
  plugins: [tailwindcss()],
})