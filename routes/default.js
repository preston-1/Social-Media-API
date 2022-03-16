const UserAccountRouter = require('./UserAccount')
const UserInterestsRouter = require('./UserInterests')
const UserGroupsRouter = require('./UserGroups')
//add more routes here ex const studentRouter = require('./student')
const route = require('koa-router')({
    //inject a prefix into a route
    prefix: '/api/v1'
    // can chain on top of it
    // what if we want new routes?
    //what route should we build from here?
    //we will build instructor route
});

route.get('/', (ctx) => {
    ctx.body = 'Default Route hit';
});

route.get('/hello', (ctx) => {
    ctx.body = 'hello bk at u'

});
route.use(
    UserAccountRouter.routes(), // add comma when you want to add more under
    UserInterestsRouter.routes(),
    UserGroupsRouter.routes()
    //put other routes here that you want to use ex; studentRouter.routes() with a comma ending routes on top 
);

module.exports = (server) => {
    server.use(route.routes());
};