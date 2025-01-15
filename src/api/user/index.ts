import service from '@/utils/request'
import type {
  LoginParams,
  loginResponseData,
  userInfoReponseData,
} from './type'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const login = (data: LoginParams) => {
  return service.post<any, loginResponseData>(API.LOGIN_URL, data)
}

export const getUserInfo = () => {
  return service.get<any, userInfoReponseData>(API.USERINFO_URL)
}
