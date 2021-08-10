'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.v1AuthPOST = function v1AuthPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.v1AuthPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
