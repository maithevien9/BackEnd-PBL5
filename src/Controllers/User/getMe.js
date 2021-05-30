const db = require("../../Connect/Connect");
const getMe = require("../../model/User/getMe.model");
const jwt = require("jsonwebtoken");
module.exports = function (app) {
  app.get("/getMe", function (req, res) {
    var ID;
    var token = req.headers.authorization.split(" ")[1];
    // console.log(token);
    jwt.verify(token, "key", (err, data) => {
      if (err) {
        throw err;
      } else {
        ID = data.ID;
      }
    });
    getMe(db, ID, function (dataString, user) {
      res.json({
        dataString: dataString,
        data: user,
      });
    });
  });
};
