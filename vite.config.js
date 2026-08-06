import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // base './' để các asset dùng đường dẫn tương đối, deploy đúng trên GitHub Pages subpath
  base: './',
  plugins: [react()],
})
