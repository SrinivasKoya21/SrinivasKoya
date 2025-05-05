import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
// vite.config.js
export default defineConfig({
  base: '/NewReact/', // Make sure this is correct
  plugins: [react(), tailwindcss()],
  server: { port: 3000 },
})

