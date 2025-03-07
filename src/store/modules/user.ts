import { login, logout, getUserInfo } from '@/api/user'
import { defineStore } from 'pinia'
import type {
  LoginParams,
  loginResponseData,
  userInfoReponseData,
} from '@/api/user/type'
import type { UserState } from './types'
import { routes } from '@/router/routes'

const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
    menuRoutes: routes, // 菜单路由
    username: '',
    avatar: '',
  }),
  actions: {
    async login(state: LoginParams) {
      const res: loginResponseData = await login(state)
      if (res.code === 200) {
        this.token = res.data.token
        localStorage.setItem('token', res.data.token)
      }
      return res
    },
    async userInfo() {
      const res: userInfoReponseData = await getUserInfo()
      if (res.code === 200) {
        // console.log(res.data)
        this.username = res.data.username
        this.avatar = res.data.avatar
      }
    },
    async userLogout() {
      const res = await logout()
      this.token = ''
      this.username = ''
      this.avatar = ''
      localStorage.removeItem('token')
      return res
    },
  },
})

export default useUserStore
