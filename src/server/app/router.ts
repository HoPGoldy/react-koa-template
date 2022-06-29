import Router from "koa-router"
import { AppKoaContext } from "../types"
import { response } from "../utils"

const router = new Router<any, AppKoaContext>()

let newIndex = 2
const dataSet = new Map<number, string>([
    [0, "第一条待办"],
    [1, "第二条待办"],
])

const getData = () => {
    return Array.from(dataSet).map(([id, content]) => {
        return { id, content }
    })
}

router.get('/api/demo', async ctx => {
    response(ctx, { code: 200, data: getData() })
})

router.post('/api/demo', async ctx => {
    dataSet.set(newIndex, ctx.request.body.task)
    newIndex += 1
    response(ctx, { code: 200, msg: '新增成功', data: getData() })
})

router.put('/api/demo/:taskId', async ctx => {
    // dataSet.set(newIndex, ctx.request.body.task)
    console.log('ctx.request', ctx.request)
    // newIndex += 1
    response(ctx, { code: 200, msg: '修改成功' })
})

export default router;