'use strict';

var utils = require('../utils/writer.js');
var Content = require('../service/ContentService');

module.exports.v1ContentContent_idDELETE = function v1ContentContent_idDELETE (req, res, next) {
  var content_id = req.swagger.params['content_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Content.v1ContentContent_idDELETE(content_id,accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContentContent_idLikeDELETE = function v1ContentContent_idLikeDELETE (req, res, next) {
  var content_id = req.swagger.params['content_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Content.v1ContentContent_idLikeDELETE(content_id,accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContentContent_idLikePOST = function v1ContentContent_idLikePOST (req, res, next) {
  var content_id = req.swagger.params['content_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Content.v1ContentContent_idLikePOST(content_id,accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContentContent_idPUT = function v1ContentContent_idPUT (req, res, next) {
  var content_id = req.swagger.params['content_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var body = req.swagger.params['body'].value;
  Content.v1ContentContent_idPUT(content_id,accessToken,client,uid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContentGET = function v1ContentGET (req, res, next) {
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var q = req.swagger.params['q'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Content.v1ContentGET(accessToken,client,uid,q,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1ContentPOST = function v1ContentPOST (req, res, next) {
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var body = req.swagger.params['body'].value;
  Content.v1ContentPOST(accessToken,client,uid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1LikesGET = function v1LikesGET (req, res, next) {
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var q = req.swagger.params['q'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Content.v1LikesGET(accessToken,client,uid,q,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
