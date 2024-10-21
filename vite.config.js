import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, "src")
      },
      {
        find: "@assets",
        replacement: path.resolve(__dirname, "src/assets")
      },
      {
        find: "@comments",
        replacement: path.resolve(__dirname, "src/components")
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/pages")
      },
      {
        find: "@utils",
        replacement: path.resolve(__dirname, "src/utils")

      }
    ]
  },
  server: {
    port: 3000,
    host: true,
    proxy: {
      // 当遇到 /api 前缀的请求时会触发代理
      '/api': {
        target: 'https://ojs.cdwuhu.com/', // 目标服务器
        changeOrigin: true, // 是否改变请求源，这是跨域的关键
        // rewrite: path => path.replace(/^\/api/, 'api/'), // 将路径中的 `/api` 去掉
      }
    }
  }
})
