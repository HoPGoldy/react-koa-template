export type Response<T = any> = {
    code?: number;
    msg?: string;
    data?: T;
}

export interface AppKoaContext {
    request: { body: string };
}