var mysql = require('mysql');

//connect to database
let options = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'elmanartravel'
}
if (process.env.NODE_ENV === 'production') {
    console.log(process.env.SQL_DATABASE)
    options = {
        host: process.env.SQL_HOST,
        user: process.env.SQL_USER,
        password: process.env.SQL_PASSWORD,
        database: process.env.SQL_DATABASE,
    }
}
var con = mysql.createConnection(options);
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
