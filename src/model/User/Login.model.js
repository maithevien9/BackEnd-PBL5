const jwt = require("jsonwebtoken");
module.exports = async function (db, username, password, callback) {
  var dataString = "";
  var token = "";
  var data = [];
  var id = 0;
  if (username == null && password == null) {
    dataString = "invalid";

    callback(dataString, token);
  } else {
    var sql = `SELECT  * FROM Account where  username = '${username}' and password = md5('${password}')`;
    await db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      }

      if (results.length != 0) {
        data = JSON.parse(JSON.stringify(results));
        dataString = "success";
        jwt.sign({ ID: data[0].id }, "key", (err, token) => {
          token;
          callback(dataString, token);
        });
      } else {
        dataString = "invalid";
        callback(dataString, token);
      }
    });
  }
};
