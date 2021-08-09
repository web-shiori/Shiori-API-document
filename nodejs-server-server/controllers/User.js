'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.userCreatePOST = function userCreatePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  User.userCreatePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userGetGET = function userGetGET (req, res, next) {
  var xToken = req.swagger.params['x-token'].value;
  User.userGetGET(xToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUpdatePUT = function userUpdatePUT (req, res, next) {
  var xToken = req.swagger.params['x-token'].value;
  var body = req.swagger.params['body'].value;
  User.userUpdatePUT(xToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
