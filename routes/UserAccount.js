const UserAccount = require('../controllers/UserAccount');
const route = require('koa-router')({
    prefix: '/UserAccount'
});

//call route here but when import instructor route it is going to be 
// imported with whatever we give it
//STEPS to make new API requests
//step 1 add new get request in the routes 
//step 2 once called the function in the instructor is executed with the 
//       paramater given as well as what function was passed in the get 
//       request.
//step 3
route.get('/', UserAccount.all);
route.get('/:username', UserAccount.getByUsername);
route.put('/:username', UserAccount.update);
route.get('/ForgotPassword/:username', UserAccount.forgotpassword); //PROCEDURE
route.get('/UserPostCount/:username',UserAccount.postCount); //VIEW

//route.get('/:username', UserAccount.getById); //id defines it as a paramater :defines it as a paramater
//route.put('/:username', UserAccount.update); //need -H for header and -d to input data for sql

module.exports  = route; 