import Koa from "koa";
import router from "./app/router";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import { START_PORT } from "./config";

const app = new Koa();

app.use(logger())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods())
    .listen(START_PORT, () => {
        console.log(`server is running at http://localhost:${START_PORT}`);
    });
