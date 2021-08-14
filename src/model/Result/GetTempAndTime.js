var dataString = "";
module.exports = function (db, id,time,callback) {
  console.log(time);
  let sql = `SELECT
    temperature,
    DATE_FORMAT(createAtTime, '%H:%i:%s') TIMEONLY
FROM
    (
    SELECT
        *
    FROM
        result
    WHERE
        createAtTime LIKE '%${time}%'
) AS DMY
WHERE
    idUser = ${id} ORDER BY TIMEONLY ASC`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
