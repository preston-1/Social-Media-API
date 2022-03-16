const db = require('../database/connection');

class UserGroupsController {
    
    static async all(ctx) {  //returns a promise so it is async
        try{
            return new Promise((resolve,reject) => { //get every user account
                const query = 'SELECT * FROM P1_UserGroups;'
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
            console.error(`UserGroups.all: ${error}`);
        }

    }

    static async getByUsername(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const _username = ctx.params.username; //this is how you acess the paramaters that were 
                                                    // passed in from the request to build query\
                const query = `SELECT * FROM P1_UserGroups WHERE user_ID = ?`;
                
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
            console.error(`UserGroups.getByUsername: ${error}`);
        }
    }

    static async getByID(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const _id = ctx.params.id; //this is how you acess the paramaters that were 
                // passed in from the request to build query
                const query = `SELECT * FROM P1_UserGroups WHERE group_ID = ?`;
                db.query({
                    sql: query,
                    values: [_id] //how do we send back a body of info that can be used to update this
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

module.exports = UserGroupsController;