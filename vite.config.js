import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                background: resolve(__dirname, 'src/background.js'),
                content: resolve(__dirname, 'src/content.js')
            },
            output: {
                entryFileNames: (chunkInfo) => {
                    if (chunkInfo.name === 'background') {
                        return 'background.js';
                    } else if (chunkInfo.name === 'content') {
                        return 'content.js';
                    }
                    return 'assets/[name].js';
                },
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    }
});