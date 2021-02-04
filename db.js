var mysql = require('mysql');

//connect to database
let options={
    host:  'localhost',
    user:  'root',
    password:  '',
    database: 'elmanartravel'
}
if(process.env.NODE_ENV==='production'){
    options={
        socketPath : '/cloudsql/manartravel-1510421787193:us-central1:manar-travel-sql-1',
        user:  'root',
        password:  'manartravel',
        database: 'elmanartravel',
    }
}
var con = mysql.createConnection(options);
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = con;
