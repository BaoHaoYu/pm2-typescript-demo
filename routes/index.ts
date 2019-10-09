import KoaRouter from 'koa-router'

const router = new KoaRouter()

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json',
  }
})

export default router
