'use strict';

var utils = require('../utils/writer.js');
var Gacha = require('../service/GachaService');

module.exports.gachaDrawPOST = function gachaDrawPOST (req, res, next) {
  var xToken = req.swagger.params['x-token'].value;
  var body = req.swagger.params['body'].value;
  Gacha.gachaDrawPOST(xToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
