const db = require("../../Connect/Connect");
const GetStudent = require("../../model/User/GetUserByIDRoll.model");
module.exports = function (app) {
  app.get("/GetUser/:id", function (req, res) {
    GetStudent(db, req.params.id, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
