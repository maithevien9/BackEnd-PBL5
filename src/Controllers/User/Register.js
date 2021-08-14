const db = require("../../Connect/Connect");
const Register = require("../../model/User/Register.model");
module.exports = function (app) {
  app.post("/Register", function (req, res) {
    Register(db, req.body.username, req.body.password, function (dataString) {
      res.json({
        dataString: dataString,
      });
    });
  });
};
