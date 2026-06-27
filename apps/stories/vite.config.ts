import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: mode === 'development' ? {
        'react-color-picker': path.resolve(__dirname, '../../packages/color-picker/src/lib/index.ts'),
      } : {},
    },
    build: {
      outDir: 'dist',
    },
  }
})
