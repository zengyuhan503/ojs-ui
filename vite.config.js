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
    host: true
  }
})
