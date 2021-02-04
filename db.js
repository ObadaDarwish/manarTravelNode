var mysql = require('mysql');

//connect to database
var con = mysql.createConnection({
    // host:  process.env.DB_HOST,
    // user:  process.env.DB_USER,
    // password:  process.env.DB_PASSWORD,
    // database: process.env.DB_NAME
    host:  'localhost',
    user:  'root',
    password:  '',
    database: 'elmanartravel'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
