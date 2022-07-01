import demoRouter from './demo'
import Router from 'koa-router'
import { AppKoaContext } from '@/types/global'

const apiRouter = new Router<unknown, AppKoaContext>()
apiRouter.use('/api', demoRouter.routes(), demoRouter.allowedMethods())

export default apiRouter