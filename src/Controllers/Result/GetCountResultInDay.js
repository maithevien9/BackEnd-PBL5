const db = require("../../Connect/Connect");
const GetResultInYear = require("../../model/Result/GetCountResultInDay.model");
module.exports = function (app) {
  app.get("/CountResultInDay", function (req, res) {
    GetResultInYear(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
