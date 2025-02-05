import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
  ElMessage,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
} from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-expect-error: element-plus locale import issue
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import type { App } from 'vue'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElMenu,
  ElMenuItem,
  ElSubMenu,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElIcon,
  ElContainer,
  ElHeader,
  ElAside,
  ElMain,
]

export function setupElementPlus(app: App) {
  components.forEach((component) => {
    app.use(component, {
      locale: zhCn,
    })
  })
  app.config.globalProperties.$message = ElMessage
}
