const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root',
//     database: 'test_books',
//     port: 8889
// })

const pool = mysql.createPool({
    host: 'eu-cdbr-west-01.cleardb.com',
    user: 'b26f0e1dbfdb83',
    password: '063fd974',
    database: 'heroku_f9af167a16ff730',
    port: 3306
})
global.db = pool;
