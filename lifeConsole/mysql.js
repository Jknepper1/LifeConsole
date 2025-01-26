var mysql = require('mysql2');
require('dotenv').config();

var con = mysql.createConnection({
    host: "localhost",
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PASSWORD,
});

con.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
});

// Exports the connected database to be utilized in controller files
module.exports = con;