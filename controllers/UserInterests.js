const db = require('../database/connection');

class UserInterestController {
    
    static async all(ctx) {  //returns a promise so it is async
        try{
            return new Promise((resolve,reject) => { //get every user account
                const query = 'SELECT * FROM P1_UserInterests;'
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
            console.error(`UserInterests.all: ${error}`);
        }

    }

    static async getByUsername(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const _username = ctx.params.username; //this is how you acess the paramaters that were 
                                                    // passed in from the request to build query\
                const query = `SELECT * FROM P1_UserInterests WHERE user_ID = ?`;
                
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
            console.error(`UserInterests.getByUsername: ${error}`);
        }
    }

    static async getByInterest(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const _interest = ctx.params.interest; //this is how you acess the paramaters that were 
                // passed in from the request to build query
                const query = `SELECT * FROM P1_UserInterests WHERE interest = ?`;
                db.query({
                    sql: query,
                    values: [_interest] //how do we send back a body of info that can be used to update this
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
            console.error(`UserInterests.getByInterests: ${error}`);
        }
    }
}

module.exports = UserInterestController;