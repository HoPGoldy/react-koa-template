export type Response<T = any> = {
    code?: number;
    msg?: string;
    data?: T;
}
