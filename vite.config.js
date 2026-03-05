import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // CSS ko fixed style.css me v1/assets me
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'v1/assets/style.css'
          }
          // Baaki assets (images, fonts, index.html) student-fe me
          return 'student-fe/[name]-[hash][extname]'
        },
        // JS chunks aur entry files student-fe me
        chunkFileNames: 'student-fe/[name]-[hash].js',
        entryFileNames: 'student-fe/[name]-[hash].js',
      },
    },
  },
})