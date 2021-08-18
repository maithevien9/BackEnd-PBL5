const db = require('../../Connect/Connect');
const GetResultWarning = require('../../model/Result/GetResultWarning.model');
module.exports = function (app) {
  app.get('/ResultWarning-secondary', function (req, res) {
    GetResultWarning(db, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
