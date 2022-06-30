/**
 * 后端接口返回的数据格式
 */
export type AppResponse<T = any> = {
    code?: number;
    msg?: string;
    data?: T;
}

export interface AppKoaContext {
    request: { body: Record<string, any> };
}