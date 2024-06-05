import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'manifest.json',
                    dest: ''
                }
            ]
        })],
    build: {
        rollupOptions: {
            input: {
                popup: resolve(__dirname, 'index.html')
            },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        }
    }
});
