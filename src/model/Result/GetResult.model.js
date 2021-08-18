var dataString = "";
module.exports = function (db, callback) {
  let sql = `SELECT
    user.id,
    user.NAME,
    temperature,
    CASE WHEN user.sex = 1 THEN 'Nam' WHEN user.sex = 0 THEN 'Nữ' END as 'Gender',
    DATE_FORMAT(createAtTime, '%M %d %Y %H:%i:%s') as 'Time' 

FROM
    result
INNER JOIN user ON user.id = result.idUser `;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";  
    callback(dataString, data);
  });
};