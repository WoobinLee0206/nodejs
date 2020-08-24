const mysql = require('mysql2/promise');


module.exports = mysql.createPool({
  host: 'mysql-freetier.c3le9xhbtvbt.ap-northeast-2.rds.amazonaws.com',
  port: '3306',
  user: 'admin',
  password: 'admin1234',
  database: 'express_board',
  connectionLimit: 10
})