const UserInterests = require('../controllers/UserInterests');
const route = require('koa-router')({
    prefix: '/UserInterests'
});

//call route here but when import instructor route it is going to be 
// imported with whatever we give it
//STEPS to make new API requests
//step 1 add new get request in the routes 
//step 2 once called the function in the instructor is executed with the 
//       paramater given as well as what function was passed in the get 
//       request.
//step 3
route.get('/', UserInterests.all);
route.get('/:username', UserInterests.getByUsername);
route.get('/get/:interest', UserInterests.getByInterest);

module.exports  = route;