const db = require("../../Connect/Connect");
const GetResult = require("../../model/Result/GetResult.model");
module.exports = function (app) {
  app.get("/Result", function (req, res) {
    GetResult(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
