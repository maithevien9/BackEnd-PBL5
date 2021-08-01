var dataString = "";
module.exports = function (db, callback) {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let year = date_ob.getFullYear();

  let sql = `SELECT MONTH(createAtTime),COUNT(*) from Result WHERE YEAR(createAtTime) = ${year} GROUP BY MONTH(createAtTime)`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
