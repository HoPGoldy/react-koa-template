import Koa from "koa";
import router from "./app/router";
import logger from "koa-logger";
import cors from 'koa2-cors';
import bodyParser from "koa-body";
import serve from 'koa-static';
import { START_PORT } from "./config";

const app = new Koa();

app.use(logger())
    .use(cors())
    .use(bodyParser({ multipart: true }))
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(START_PORT, () => {
        console.log(`server is running at http://localhost:${START_PORT}`);
    });

app.use(serve('dist/client'))