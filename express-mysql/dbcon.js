var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : '192.168.1.28',
  user            : 'student',
  password        : 'default',
  database        : 'student'
});

module.exports.pool = pool;