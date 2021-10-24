const mysql = require('mysql2');
const mysqlConfig = require('../../config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kellytso'
});

connection.connect();

module.exports.connection = connection;