var dataString = "";
module.exports = function (db, name, callback) {
  let sql = `select result.id, result.createAtTime ,result.temperature, result.isQualified, user.NAME, user.age from result inner JOIN user on result.idUser = user.id where user.NAME LIKE '%${name}%' ORDER BY result.createAtTime DESC`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
