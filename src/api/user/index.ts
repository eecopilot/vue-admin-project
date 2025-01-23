import service from '@/utils/service'
import type {
  LoginParams,
  loginResponseData,
  userInfoReponseData,
} from './type'

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
}

export const login = (data: LoginParams) => {
  return service.post<any, loginResponseData>(API.LOGIN_URL, data)
}

export const getUserInfo = () => {
  return service.get<any, userInfoReponseData>(API.USERINFO_URL)
}

export const logout = () => service.post<any, any>(API.LOGOUT_URL)
