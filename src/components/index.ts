import SvgIcon from './SvgIcon/index.vue'
import type { App } from 'vue' // 导入 App 类型

//引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  install(app: App) {
    app.component('SvgIcon', SvgIcon)

    //将element-plus提供图标注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
