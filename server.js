var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');
require('dotenv').config();

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

console.log()


app.listen(process.env.PORT || 5000,function () {
  console.log('server is running ' + process.env.PORT || 5000);
});
