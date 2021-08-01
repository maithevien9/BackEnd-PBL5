module.exports = function (db, username, password, callback) {
  var dataString = "";
  var ID = "";

  if (username == null && password == null) {
    dataString = "input null";
    callback(dataString);
  } else {
    var sql = `select ID from Account where username = '${username}'`;
    db.query(sql, function (err, results, fields) {
      if (err) {
        throw err;
      } else {
        if (results.length == 0) {
          var sql2 = `INSERT into Account VALUES (null, '${username}',md5('${password}'))`;
          db.query(sql2, function (err, results, fields) {
            if (err) {
              throw err;
            } else {
              sql3 = `select ID from Account where username = '${username}'`;
              db.query(sql3, function (err, results, fields) {
                if (err) {
                  throw err;
                } else {
                  IDs = JSON.parse(JSON.stringify(results));
                  ID = IDs[0].ID;
                  ID;

                  sql4 = `insert into user value (${ID} , null,null,null,null,null,null, 2, null)`;

                  db.query(sql4, function (err, results, fields) {
                    if (err) {
                      throw err;
                    } else {
                      dataString = "Success";
                      callback(dataString);
                    }
                  });
                }
              });
            }
          });
        } else {
          dataString = "Error";
          callback(dataString);
        }
      }
    });
  }
};
