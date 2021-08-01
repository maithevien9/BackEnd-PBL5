var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');

const cors = require('cors');
const jwt = require('jsonwebtoken');
var fileUpload = require('express-fileupload');
const app = express();
var Router = require('./src/Controllers/Router');
const db = require('./src/Connect/Connect');

app.use(express.static('public'));
app.use(cors({ credentials: true, origin: true }));
app.use(fileUpload());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', function (req, res) {
  res.send('hello');
});
Router(app);

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});
