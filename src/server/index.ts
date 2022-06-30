import Koa from "koa";
import router from "./app/router";
import historyApiFallback from 'koa2-connect-history-api-fallback';
import logger from "koa-logger";
import bodyParser from "koa-body";
import serve from 'koa-static';
import { START_PORT } from "./config";

const app = new Koa();

app.use(logger())
    .use(bodyParser({ multipart: true }))
    .use(router.routes())
    .use(router.allowedMethods())
    .use(serve('dist/client'))
    .use(historyApiFallback({ whiteList: ['/api'] }))
    .listen(START_PORT, () => {
        console.log(`server is running at http://localhost:${START_PORT}`);
    });