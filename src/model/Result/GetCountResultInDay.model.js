var dataString = "";
module.exports = function (db, callback) {
  let ts = Date.now();
  let date_ob = new Date(ts);
  let year = date_ob.getFullYear();
  let month = date_ob.getMonth() + 1;

  let sql = `SELECT DAY(createAtTime) as Day,COUNT(*) as  Counted from Result WHERE MONTH(createAtTime) = ${month} GROUP BY DAY(createAtTime)`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
