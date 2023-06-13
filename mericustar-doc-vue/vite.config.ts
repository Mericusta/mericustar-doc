import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { serverHost6666, serverHost6666BasicURL, serverHost7777, serverHost7777BasicURL } from './src/api/client'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      // TODO: 这里设置属性的时候无法直接使用字符串变量的值
      // TODO: /api 会和 /api* 相冲，建议按照正则表达式的写法
      // serverHost6666BasicURL: {
      '^/api-6666/.*': {
        target: serverHost6666,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-6666/, ''),
      },
      '^/api-7777/.*': {
        target: serverHost7777,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-7777/, ''),
      }
    }
  }
})
