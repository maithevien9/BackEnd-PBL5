var dataString = "";
module.exports = function (db, id, callback) {
  let sql = `SELECT User.id, User.idRole, User.NAME, User.age, User.sex,  User.address,  User.id,User.image, faculty.description from User inner join faculty on User.idFaculty = faculty.id  where User.idRole = ${id}`;
  db.query(sql, function (err, results, fields) {
    if (err) {
      throw err;
    }
    data = JSON.parse(JSON.stringify(results));
    dataString = "Success";
    callback(dataString, data);
  });
};
