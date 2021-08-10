'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.v1AuthPOST = function v1AuthPOST (req, res, next) {
  Auth.v1AuthPOST()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
