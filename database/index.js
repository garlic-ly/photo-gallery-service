const config = require('../config.js')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : config.USERNAME_mysql_server,
  password : config.PASSWORD_mysql_server,
  database : 'airbnbClone'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

// connection.end();

module.exports = connection;