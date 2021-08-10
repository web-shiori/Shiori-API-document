'use strict';

var utils = require('../utils/writer.js');
var Auth = require('../service/AuthService');

module.exports.v1AuthCallbackGithubGET = function v1AuthCallbackGithubGET (req, res, next) {
  Auth.v1AuthCallbackGithubGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthCallbackGoogleGET = function v1AuthCallbackGoogleGET (req, res, next) {
  Auth.v1AuthCallbackGoogleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthCallbackTwitterGET = function v1AuthCallbackTwitterGET (req, res, next) {
  Auth.v1AuthCallbackTwitterGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthLoginGithubGET = function v1AuthLoginGithubGET (req, res, next) {
  Auth.v1AuthLoginGithubGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthLoginGoogleGET = function v1AuthLoginGoogleGET (req, res, next) {
  Auth.v1AuthLoginGoogleGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthLoginPOST = function v1AuthLoginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Auth.v1AuthLoginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1AuthLoginTwitterGET = function v1AuthLoginTwitterGET (req, res, next) {
  Auth.v1AuthLoginTwitterGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

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
