module.exports = function (
  db,
  name,
  age,
  sex,
  studentID,
  address,
  idFaculty,
  callback
) {
  var dataString = "";
  var ID = "";
  var sql = `insert into Account values (null,null,null)`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    } else {
      let sql2 = `SELECT * FROM Account ORDER BY id DESC LIMIT 1`;
      db.query(sql2, function (err, results, fields) {
        if (err) {
          throw err;
        } else {
          IDs = JSON.parse(JSON.stringify(results));
          ID = IDs[0].id;
          var sql2 = `INSERT into user VALUES (${ID}, '${name}',${age},'${sex}','${studentID}','${address}',${idFaculty},1,null)`;
          db.query(sql2, function (err, results, fields) {
            if (err) {
              throw err;
            } else {
              sql3 = `select ID from user where name = '${name}'`;
              db.query(sql3, function (err, results, fields) {
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
    }
  });
};
