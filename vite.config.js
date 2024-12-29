import { defineConfig } from 'vite'
import Inspect from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Inspect()],
})
