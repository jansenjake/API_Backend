const mysql = require("mysql");
require("dotenv").config();

var con = mysql.createConnection({
  host: process.env.dbHost,
  user: process.env.dbUser,
  password: process.env.dbPwd,
  database: process.env.dbName,
  port: process.env.dbPort,
  multipleStatements: true,
});
module.exports = con;
