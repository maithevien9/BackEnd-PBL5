const db = require("../../Connect/Connect");
const GetResultInYear = require("../../model/Result/GetResultInYear.model");
module.exports = function (app) {
  app.get("/ResultInYear", function (req, res) {
    GetResultInYear(db, function (dataString, token) {
      res.json({
        dataString: dataString,
        token: token,
      });
    });
  });
};
