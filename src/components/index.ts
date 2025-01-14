import SvgIcon from './SvgIcon/Index.vue'
import type { App } from 'vue' // 导入 App 类型

export default {
  install(app: App) {
    app.component('SvgIcon', SvgIcon)
  },
}
