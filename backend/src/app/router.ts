import Router from "koa-router";
import { response } from "./utils";
import mockjs from "mockjs";

const router = new Router();

router.get('/', (ctx, next) => {
    ctx.status = 200;
    response(ctx)
})

router.get('/user/list', (ctx, next) => {
    ctx.status = 200;
    const data = mockjs.mock({
        "list|20": [{ "name": "@name", "city": "@city", "province": "@province" }]
    });
    response(ctx, { code: 200, msg: '', data });
})

export default router;