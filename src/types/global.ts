import Joi from 'joi'

/**
 * 后端接口返回的数据格式
 */
export type AppResponse<T = unknown> = {
    code?: number
    msg?: string | Joi.ValidationErrorItem[]
    data?: T
}

export interface AppKoaContext {
    request: { body: Record<string, unknown> }
}