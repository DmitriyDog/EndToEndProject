import { defineConfig } from 'vite'

export default defineConfig({
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