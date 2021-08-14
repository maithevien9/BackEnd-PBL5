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
var GetUser = require("./User/GetUsers");
var GetUserID = require("./User/GetUserByID");
var GetRecentResult = require("./Result/GetRecentResult");
var GetTempAndTime = require("./Result/GetTempAndTime");
var GetResultCountByDay = require ("./Result/GetResultCountByDay");

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
  GetTempAndTime(app);
  GetResultCountByDay(app);
  GetRecentResult(app);
  GetUserID(app);
  GetUser(app);




};
