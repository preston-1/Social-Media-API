const mysql = require('mysql');

const config = {
    debug: false,
    host: '127.0.0.1',
    port: 3306,
    database: 'pglenn_cs355fl20',
    user: 'pglenn_cs355fl20',
    password: 'gl7047463'
};

const dbConnection = mysql.createConnection(config);

module.exports = dbConnection;