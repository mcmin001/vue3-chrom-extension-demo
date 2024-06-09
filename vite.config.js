import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import {resolve} from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    plugins: [vue(),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/js/*.js',
                    dest: 'src/js'
                }
            ]
        })],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                background: resolve(__dirname, 'src/background.js'),
                content: resolve(__dirname, 'src/content.js'),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.type === 'asset' && /\.(jpe?g|png|gif|svg)$/i.test(assetInfo.name)) {
                        return 'assets/img/[name].[ext]';
                    }
                    if (assetInfo.type === 'asset' && /\.(ttf|woff|woff2|eot)$/i.test(assetInfo.name)) {
                        return 'assets/fonts/[name].[ext]';
                    }
                    if (assetInfo.type === 'asset' && /\.(css)$/i.test(assetInfo.name)) {
                        return 'src/[name]/[name].[ext]';
                    }
                    return 'assets/[ext]/[name].[ext]';
                },
                entryFileNames: (chunkInfo) => {
                    return 'src/[name]/[name].js'
                },
            }
        }
    }
});