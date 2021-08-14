var dataString = "";
module.exports = function (
  db,
  idStudent,
  name,
  age,
  sex,
  studentID,
  address,
  callback
) {
  var sql = `UPDATE user SET name='${name}', age='${age}', sex='${sex}',address = '${address}' WHERE id ='${idStudent}'`;
  sql;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    dataString = "Success";
    callback(dataString);
  });
};
