const mysql = require('mysql2');

// TODO: Correct these credentials
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'kellytso',
  database: 'cowList'
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL! 🐠')
  }
});

// Your Database Queries Here!!





// Don't forget to export your functions!
module.exports.db = db;