var dataString = "";
module.exports = function (db, callback) {
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  let sql = `SELECT * FROM Result WHERE DAY(createAtTime)= ${date} and MONTH(createAtTime) = ${month} and YEAR(createAtTime) = ${year}`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
