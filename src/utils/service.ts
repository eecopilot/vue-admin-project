// 导入axios和用户状态管理模块
import axios from 'axios'
import useUserStore from '@/store/modules/user'

// 创建axios实例并配置基础参数
const service = axios.create({
  // 从环境变量中获取基础请求路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 请求超时时间：5秒
  timeout: 5000,
})

// 请求拦截器：在请求发送前处理请求配置
service.interceptors.request.use(
  (config) => {
    // 获取用户状态管理模块实例
    const userStore = useUserStore()
    // 如果存在token，将其添加到请求头中
    if (userStore.token) {
      config.headers.token = userStore.token
    }
    return config
  },
  (error) => {
    // 请求错误处理
    return Promise.reject(error)
  },
)

// 响应拦截器：在接收到响应后处理响应数据
service.interceptors.response.use(
  (response) => {
    // 直接返回响应中的data数据
    return response.data
  },
  (error) => {
    // 响应错误处理
    return Promise.reject(error)
  },
)

// 导出axios实例
export default service
