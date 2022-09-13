import Koa from 'koa';
import { v4 as uuidv4 } from 'uuid';

const app = new Koa();

let i = 0;
const uid = uuidv4();

app.use(async ctx => {
  ctx.body = `Hello World\nThis is the ${i++}-th connection to:\n${uid}\n\n`;
  ctx.status = 200;
});

app.listen(3000);
