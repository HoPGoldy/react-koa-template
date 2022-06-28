import { sendGet, sendPost, sendPut, sendDelete } from './base'
import { LoginInfo, SelfUserInfo, RegisterInfo, UpdateSelfUserInfo } from './types'

/** 登录 */
export const login = async function (user: LoginInfo): Promise<SelfUserInfo> {
    const data: { user: SelfUserInfo } = await sendPost('/users/login', { user })
    return data.user
}

/** 注册 */
export const register = async function (user: RegisterInfo): Promise<SelfUserInfo> {
    const data: { user: SelfUserInfo } = await sendPost('/users', { user })
    return data.user
}

/** 获取自己的用户信息 */
export const fetchSelfUserInfo = async function (): Promise<SelfUserInfo> {
    const data: { user: SelfUserInfo } = await sendGet('/user')
    return data.user
}

/** 更新用户信息 */
export const updateSelfUserInfo = async function (user: UpdateSelfUserInfo): Promise<SelfUserInfo> {
    const data: { user: SelfUserInfo } = await sendPut('/user', { user })
    return data.user
}
