import Router from "koa-router"
import { response } from "../utils"

const router = new Router()

const dataSet = new Set()

router.get('/api/demo', (ctx, next) => {
    ctx.status = 200;

    response(ctx, { code: 200, data: Array.from(dataSet) })
})

router.post('/api/demo', (ctx, next) => {
    console.log('ctx', ctx.request)
    ctx.status = 200;
    response(ctx, { code: 200, msg: '新增成功' });
})

export default router;