// 定义登录接口参数类型
export interface LoginParams {
  username: string
  password: string
}
export interface ResponseData {
  code: number
  message: string
  ok: boolean
}
// 定义获取用户信息接口返回类型
export interface loginResponseData extends ResponseData {
  data: {
    token: string
  }
}
export interface userInfoReponseData extends ResponseData {
  data: {
    routes: string[]
    buttons: string[]
    roles: string[]
    name: string
    avatar: string
  }
}
