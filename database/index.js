const config = require('../config.js')
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : config.USERNAME_mysql_server,
  password : config.PASSWORD_mysql_server,
  database : 'airbnbClone'
});

connection.connect();

module.exports = connection;