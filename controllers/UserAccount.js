const db = require('../database/connection');

class UserAccountController {
    
    static async all(ctx) {  //returns a promise so it is async
        try{
            return new Promise((resolve,reject) => { //get every user account
                const query = 'SELECT * FROM P1_UserAccount;'
                db.query(query, (err, res) => {
                    if(err){
                        reject(err);
                    }
                    //assuming all went right
                    ctx.body = res; //the result is stuffed into the body 
                    ctx.status = 200; //means everything went ok
                    resolve();
                });
            });
        } catch(error){
            console.error(`UserAccount.all: ${error}`);
        }

    }

    static async getByUsername(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const _username = ctx.params.username; //this is how you acess the paramaters that were 
                                                    // passed in from the request to build query\
                const query = `SELECT * FROM P1_UserAccount WHERE username = ?`;
                
                db.query({
                    sql: query,
                    values: [_username] //the values are what plug into thre question marks
                }, (err, res)  => {
                    if(err){
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        }catch(error){
            console.error(`UserAccount.getByUsername: ${error}`);
        }
    }

    static async update(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const _username = ctx.params.username; //this is how you acess the paramaters that were 
                // passed in from the request to build query
                console.log(_username);
                const user = ctx.request.body; //assume a instructor is being pased
                console.log(user);
                const query = `
                    UPDATE P1_UserAccount
                    SET password = ?,
                        name = ?,
                        about = ?,
                        email = ?
                    WHERE username = ?;
                `;
                db.query({
                    sql: query,
                    values: [user.password, user.name, user.about, user.email, _username] //how do we send back a body of info that can be used to update this
                               // build a body parces
                }, (err, res)  => {
                    if(err){
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        }catch(error){
            console.error(`UserAccount.update: ${error}`);
        }
    }

    static async forgotpassword(ctx) { //procedure
        try{
            return new Promise((resolve, reject) => {
                const _username = ctx.params.username; //this is how you acess the paramaters that were 
                                                    // passed in from the request to build query\
                const query = `CALL forgotpassword(?)`;
                
                db.query({
                    sql: query,
                    values: [_username] //the values are what plug into thre question marks
                }, (err, res)  => {
                    if(err){
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        }catch(error){
            console.error(`UserAccount.forgotpassword: ${error}`);
        }
    }

    static async postCount(ctx) { //view
        try{
            return new Promise((resolve, reject) => {
                const _username = ctx.params.username; //this is how you acess the paramaters that were 
                                                    // passed in from the request to build query\
                const query = `SELECT * FROM PostCountPerUser WHERE user_ID = ?`; //select the view where username matches
                
                db.query({
                    sql: query,
                    values: [_username] //the values are what plug into thre question marks
                }, (err, res)  => {
                    if(err){
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        }catch(error){
            console.error(`UserAccount.postCount: ${error}`);
        }
    }
}

module.exports = UserAccountController;