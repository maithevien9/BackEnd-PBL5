var mysql = require("mysql");
var connection = mysql.createConnection({
  //  host: "localhost",
  //  user: "root",
  //  password: "",
  //  database: "pbl5",

  host: 'damelagi.org',
  user: 'intern',
  password: 'In@21tern',
  database: 'projectexample_tue',
  port: 8505,
});

connection.connect(function (err) {
  if (err) {
    console.log("error when connecting to db:", err);
  }
});

module.exports = connection;