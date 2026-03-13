import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise the warning threshold (Three.js is inherently large)
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split Three.js and R3F into their own chunk
          'three-vendor': ['three'],
          'r3f-vendor': [
            '@react-three/fiber',
            '@react-three/drei',
            '@react-three/postprocessing',
          ],
          // Split Framer Motion separately
          'framer-vendor': ['framer-motion'],
          // Split Zustand
          'store-vendor': ['zustand'],
        },
      },
    },
  },
})
