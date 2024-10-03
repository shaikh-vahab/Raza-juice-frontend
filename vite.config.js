import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy : {
      '/Raza' : "https://raza-juice-api.onrender.com/"
    }
  },
  plugins: [react()],
})
