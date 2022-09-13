import Koa from 'koa';
import { v4 as uuidv4 } from 'uuid';

const app = new Koa();

let i = 0;
const uid = uuidv4();

app.use(async ctx => {
  let arr = [];
  for (let j = 0; j < 100000; j++) {
    arr.push(Math.random());
  }
  ctx.body = `Hello World\nThis is the ${i++}-th connection to:\n${uid}\nrandom sum: ${arr.reduce((a, b) => a + b, 0)}\n\n`;
  ctx.status = 200;
});

app.listen(3000);
