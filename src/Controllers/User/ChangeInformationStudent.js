const db = require("../../Connect/Connect");
var ChangInformation = require("../../model/User/ChangeInformationStudent.model");
module.exports = function (app) {
  app.put("/ChangInformationStudent", function (req, res) {
    ChangInformation(
      db,
      req.body.idStudent,
      req.body.name,
      req.body.age,
      req.body.sex,
      req.body.studentID,
      req.body.address,
      function (dataString) {
        res.json({
          dataString: dataString,
        });
      }
    );
  });
};
