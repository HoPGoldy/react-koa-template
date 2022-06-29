import { sendGet, sendPost, sendPut, sendDelete } from './base'

export interface TodoTask {
    id: number
    done: boolean
    content: string
}

/** 获取代办列表 */
export const demoGet = async () => {
    return sendGet<TodoTask[]>('/demo')
}

/** 新增代办 */
export const demoPost = async (task: string) => {
    return sendPost<TodoTask[]>('/demo', { task })
}

/** 完成代办 */
export const demoPut = async function (taskId: string, done: boolean) {
    return sendPut(`/demo/${taskId}`, { done })
}

/** 删除代办 */
export const demoDelete = async function (taskId: string) {
    return sendDelete(`/demo/${taskId}`)
}
