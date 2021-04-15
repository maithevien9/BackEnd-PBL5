var dataString = "";
module.exports = function (
  db,
  idStudent,
  name,
  age,
  sex,
  studentID,
  idFaculty,
  address,
  callback
) {
  var sql = `UPDATE user SET name='${name}', age='${age}', sex='${sex}', studentID = '${studentID}' ,idFaculty = '${idFaculty}' ,address = '${address}' WHERE id ='${idStudent}'`;
  sql;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    dataString = "Success";
    callback(dataString);
  });
};
