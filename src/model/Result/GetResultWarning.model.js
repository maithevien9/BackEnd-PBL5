var dataString = "";
module.exports = function (db, callback) {
  let sql = `Select * from result where isQualified = true and temperature > 36`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
