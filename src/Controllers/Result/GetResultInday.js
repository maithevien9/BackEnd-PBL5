const db = require("../../Connect/Connect");
const GetResultInday = require("../../model/Result/GetResultInday.model");
module.exports = function (app) {
  app.get("/ResultInday", function (req, res) {
    GetResultInday(db, function (dataString, token) {
      res.json({
        dataString: dataString,
        token: token,
      });
    });
  });
};
