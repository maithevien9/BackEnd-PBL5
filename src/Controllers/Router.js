var Login = require("./User/Login");
var Register = require("./User/Register");
var RegisterStudent = require("./User/RegisterStudent");
var ChangeInformationStudent = require("./User/ChangeInformationStudent");
var GetResult = require("./Result/GetResult");
var GetStudent = require("./User/GetUserByIDRoll");
var GetResultWarning = require("./Result/GetResultWarning");
var GetResultInday = require("./Result/GetResultInday");
var GetCountResultInDay = require("./Result/GetCountResultInDay");
var getMe = require("./User/getMe");
var GetResultByUser = require("./Result/getResultByUser");

module.exports = function (app) {
  Login(app);
  Register(app);
  RegisterStudent(app);
  ChangeInformationStudent(app);
  GetResult(app);
  GetStudent(app);
  GetResultWarning(app);
  GetResultInday(app);
  getMe(app);
  GetCountResultInDay(app);
  GetResultByUser(app);
};
