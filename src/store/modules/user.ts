import { login } from '@/api/user'
import { defineStore } from 'pinia'
import type { LoginParams, loginResponseData } from '@/api/user/type'
import type { UserState } from './types'
const useUserStore = defineStore('User', {
  state: (): UserState => ({
    token: localStorage.getItem('token') || '',
    userInfo: {
      name: '',
      age: 0,
    },
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
  },
})

export default useUserStore
