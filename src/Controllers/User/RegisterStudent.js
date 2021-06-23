const db = require("../../Connect/Connect");
const Register = require("../../model/User/RegisterStudent.model");
module.exports = function (app) {
  app.post("/RegisterStudent", function (req, res) {
    Register(
      db,
      req.body.name,
      req.body.age,
      req.body.sex,
      req.body.studentID,
      req.body.address,
      req.body.idFaculty,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
