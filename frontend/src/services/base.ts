import qs from 'qs'

// 后端地址
const baseURL = 'https://api.realworld.io/api/'

let token = localStorage.getItem('token')

/**
 * 设置请求中携带的用户 token
 */
export const setToken = (newToken: string) => {
    token = newToken
    if (!newToken) localStorage.removeItem('token')
    else localStorage.setItem('token', newToken)
}

/**
 * 基础请求器
 *
 * @param url 请求 url
 * @param requestInit 请求初始化配置
 */
const fetcher = async <T = Response>(url: string, requestInit: RequestInit = {}): Promise<T> => {
    const init: RequestInit = {
        ...requestInit,
        headers: { ...requestInit.headers, token: token as string },
    }

    const pureUrl = url.startsWith('/') ? url.substring(1) : url

    const resp = await fetch(baseURL + pureUrl, init)
    if (resp.status === 401) {
        const navigate = useNavigate()
        navigate("/login", { replace: true })
    }

    return resp.json()
}

/**
 * 使用 GET 发起请求
 *
 * @param url 请求路由
 * @param query 请求的参数，会拼接到 url 后面
 */
export const sendGet = async function <T>(url: string, query = {}): Promise<T> {
    const requestUrl = url + qs.stringify(query, { addQueryPrefix: true })
    const config: RequestInit = { method: 'GET' }

    return fetcher<T>(requestUrl, config)
}

/**
 * 使用 POST 发起请求
 *
 * @param url 请求路由
 * @param body 请求参数，会放在 body 里
 */
 export const sendPost = async function <T>(url: string, body = {}): Promise<T> {
    const config: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body)
    }

    return fetcher<T>(url, config)
}

/**
 * 使用 PUT 发起请求
 *
 * @param url 请求路由
 * @param body 请求参数，会放在 body 里
 */
 export const sendPut = async function <T>(url: string, body = {}): Promise<T> {
    const config: RequestInit = {
        method: 'PUT',
        body: JSON.stringify(body)
    }

    return fetcher<T>(url, config)
}

/**
 * 使用 DELETE 发起请求
 *
 * @param url 请求路由
 * @param body 请求参数，会放在 body 里
 */
 export const sendDelete = async function <T>(url: string, body = {}): Promise<T> {
    const config: RequestInit = {
        method: 'DELETE',
        body: JSON.stringify(body)
    }

    return fetcher<T>(url, config)
}
