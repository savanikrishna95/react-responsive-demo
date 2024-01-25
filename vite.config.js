import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/react-responsive-demo/',
  plugins: [react()],
  build: {
    // ... other build options

    define: {
      'process.env.VITE_TIMESTAMP': process.env.VITE_TIMESTAMP,
    },
  },
  
})
