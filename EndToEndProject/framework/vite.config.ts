import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // предлагается, но по какй-то причине не распознается средой

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: 'src/pages/login.html'
            }
        }
    },
    server: {
        open: 'src/pages/login.html',
        port: 3000,
        host: true
    }
})