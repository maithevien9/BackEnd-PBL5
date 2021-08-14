var dataString = '';
module.exports = function (db, id, callback) {
  let sql = `SELECT user.id, user.idRole, user.NAME, user.age, user.sex,  user.address,  user.id,user.image, faculty.description from user inner join faculty on user.idFaculty = faculty.id  where user.idRole = ${id}`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = 'Success';
    callback(dataString, data);
  });
};
