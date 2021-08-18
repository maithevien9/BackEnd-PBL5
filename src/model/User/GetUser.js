var dataString = "";
module.exports = function (db, callback) {
  let sql = `
SELECT user.NAME, user.id, faculty.description,CASE WHEN user.sex = 1 THEN 'Nam' WHEN user.sex = 0 THEN 'Nữ' END as Gender, user.address,user.age from user inner join faculty on user.idFaculty = faculty.id  where user.idRole = '1'`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    
    dataString = "Success";
    callback(dataString, data);
  });
};