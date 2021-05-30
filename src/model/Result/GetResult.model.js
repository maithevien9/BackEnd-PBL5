var dataString = "";
module.exports = function (db, callback) {
  let sql = `select result.id, result.createAtTime ,result.temperature, result.isQualified, user.NAME, user.age from result inner JOIN user on result.idUser = user.id ORDER BY result.createAtTime DESC`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
