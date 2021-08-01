const db = require('../../Connect/Connect');
const GetResultByUser = require('../../model/Result/getResultByUser.modal');
module.exports = function (app) {
  app.get('/GetResultByUser/:name', function (req, res) {
    const name = req.params.name;
    GetResultByUser(db, name, function (dataString, data) {
      res.json({
        dataString: dataString,
        data: data,
      });
    });
  });
};
