import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Correct plugin name is `@vitejs/plugin-react`

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Optional: suppress large chunk warning
  },
  assetsInclude: ['**/*.JPG', '**/*.PNG'],
  base: '/Tami_city/',
  plugins: [react()],
})
