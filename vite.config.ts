import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     // 自动引入全局变量和 mixins (根据你的文件路径调整)
    //     additionalData: `@use "src/assets/styles/_variables.scss as *";
    //                      @use "src/assets/styles/_mixins.scss as *";`,
    //   },
    // },
  },
})
