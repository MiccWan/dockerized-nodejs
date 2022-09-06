import Koa from 'koa';
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
  ctx.status = 200;
});

app.listen(3000);