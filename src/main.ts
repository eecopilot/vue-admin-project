import { createApp } from 'vue'
import '@/style.scss'
import App from '@/App.vue'
// Element Plus 配置
import { setupElementPlus } from '@/plugins/element-plus'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
// 引入全局组件
import GlobalComponents from '@/components/index'
import router from '@/router'
// 引入pinia
import store from '@/store'

//获取应用实例对象
const app = createApp(App)

//注册element-plus
setupElementPlus(app)
//挂载自定义组件
app.use(GlobalComponents)
app.use(router)
import './permisstion'
//挂载pinia
app.use(store)

app.mount('#app')
