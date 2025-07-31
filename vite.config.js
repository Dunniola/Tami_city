import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Tami_city/', // Make sure this matches your GitHub repo name

  plugins: [react()],

  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },

  assetsInclude: ['**/*.JPG', '**/*.PNG']
})
