var dataString = "";
module.exports = function (db, callback) {
  let sql = `select result.id, result.createAtTime ,result.temperature, result.isQualified, user.NAME, user.age from result inner JOIN user on result.idUser = user.id ORDER BY result.createAtTime DESC`;
  var dataString = "";
  let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();

  var hour = date_ob.getHours();
  var min = date_ob.getMinutes();
  var sec = date_ob.getSeconds();

  year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  var dateTime =
    year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};