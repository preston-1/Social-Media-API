const Koa = require('./node_modules/koa');
const defaultRouter = require('./routes/default');

const server = new Koa();
const bodypaser = require('koa-bodyparser');
const koajson = require('koa-json');

const API_PORT = 8112

server.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get(`X-Response-Time`);
    console.log(`Type:${ctx.method} Path: ${ctx.url} Time: ${rt}`);
});

server.use(async (ctx, next) => {
    const start = Date.now();
    await next(); //call body-parser
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

server.use(async (ctx,next) =>{
    await next().catch(err => {
        ctx.body = err;
        ctx.status = 500;
    });
});

server.use(bodypaser());
server.use(koajson());

defaultRouter(server);

server.listen(API_PORT, () => { 
    console.log(`Running on port: ${API_PORT}`);
});