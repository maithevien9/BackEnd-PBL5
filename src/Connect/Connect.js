var mysql = require('mysql');
var connection = mysql.createConnection({
  // host: 'g84t6zfpijzwx08q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  // user: 'jycjlj1jpxj60lqo',
  // password: 'jmr55v3b1g4m6f6e',
  // database: 'bd7e5627afs1fk77',
  host: 'damelagi.org',
  user: 'intern',
  password: 'In@21tern',
  database: 'projectexample_tue',
  port: 8505,
});

connection.connect(function (err) {
  if (err) {
    console.log('error when connecting to db:', err);
  }
});

module.exports = connection;
