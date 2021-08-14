const db = require("../../Connect/Connect");
const jwt = require("jsonwebtoken");
const Login = require("../../model/User/Login.model");
module.exports = function (app) {
  app.post("/Login", function (req, res) {
    Login(
      db,
      req.body.username,
      req.body.password,
      function (dataString, token) {
        res.json({
          dataString: dataString,
          token: token,
        });
      }
    );
  });
};
