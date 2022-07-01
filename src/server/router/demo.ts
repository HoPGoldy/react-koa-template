import Router from "koa-router"
import { AppKoaContext } from "@/types/global"
import { TodoTask } from '@/types/demo'
import { response } from "../utils"

const router = new Router<any, AppKoaContext>()

let newIndex = 2
const dataSet = new Map<number, TodoTask>([
    [0, { id: 0, content: '打开 F12 来查看网络请求', done: false }],
    [1, { id: 1, content: '请求会经过 vite 代理转发至后端', done: false }],
])

const getData = () => {
    return Array.from(dataSet).map(item => item[1])
}

router.get('/demo', async ctx => {
    response(ctx, { code: 200, data: getData() })
})

router.post('/demo', async ctx => {
    dataSet.set(newIndex, {
        id: newIndex,
        content: ctx.request.body.task,
        done: false
    })
    newIndex += 1
    response(ctx, { code: 200, msg: '新增成功', data: getData() })
})

router.put('/demo/:taskId', async ctx => {
    const id = Number(ctx.params.taskId)
    const oldData = dataSet.get(id)
    if (!oldData) {
        response(ctx, { code: 404, msg: '未找到该条待办' })
        return  
    }

    dataSet.set(id, {
        ...oldData,
        done: !!ctx.request.body.done
    })

    response(ctx, { code: 200, msg: '修改成功', data: getData() })
})

router.delete('/demo/:taskId', async ctx => {
    const id = Number(ctx.params.taskId)
    dataSet.delete(id)
    response(ctx, { code: 200, msg: '删除成功', data: getData() })
})

export default router;