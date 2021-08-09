'use strict';

var utils = require('../utils/writer.js');
var Character = require('../service/CharacterService');

module.exports.characterListGET = function characterListGET (req, res, next) {
  var xToken = req.swagger.params['x-token'].value;
  Character.characterListGET(xToken)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
