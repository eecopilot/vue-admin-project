import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
//引入svg需要用到插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
//mock插件提供方法
import { viteMockServe } from 'vite-plugin-mock'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  //获取各种环境下的对应的变量
  const env = loadEnv(mode, process.cwd())
  console.log(env, 'env')
  console.log(command, 'command')
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'icon-[dir]-[name]',
      }),
      viteMockServe({
        mockPath: './mock',
        enable: true,
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // 将 Vue 相关库打包在一起
            'vue-vendor': ['vue', 'vue-router', 'pinia'],
            // 将 UI 库单独打包
            'element-plus': ['element-plus'],
            // 将其他第三方库打包在一起
            vendor: [
              'axios',
              // ... 其他第三方库
            ],
          },
        },
      },
      chunkSizeWarningLimit: 1000, // 设置警告阈值为 1000kb
    },
  }
})
// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, 'src'),
//     },
//   },
// })
