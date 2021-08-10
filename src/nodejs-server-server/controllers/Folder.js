'use strict';

var utils = require('../utils/writer.js');
var Folder = require('../service/FolderService');

module.exports.v1FolderFolder_idContentContent_idDELETE = function v1FolderFolder_idContentContent_idDELETE (req, res, next) {
  var folder_id = req.swagger.params['folder_id'].value;
  var content_id = req.swagger.params['content_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Folder.v1FolderFolder_idContentContent_idDELETE(folder_id,content_id,accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FolderFolder_idContentContent_idPOST = function v1FolderFolder_idContentContent_idPOST (req, res, next) {
  var folder_id = req.swagger.params['folder_id'].value;
  var content_id = req.swagger.params['content_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Folder.v1FolderFolder_idContentContent_idPOST(folder_id,content_id,accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FolderFolder_idContentGET = function v1FolderFolder_idContentGET (req, res, next) {
  var folder_id = req.swagger.params['folder_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var q = req.swagger.params['q'].value;
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Folder.v1FolderFolder_idContentGET(folder_id,accessToken,client,uid,q,limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FolderFolder_idDELETE = function v1FolderFolder_idDELETE (req, res, next) {
  var folder_id = req.swagger.params['folder_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Folder.v1FolderFolder_idDELETE(folder_id,accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FolderFolder_idPUT = function v1FolderFolder_idPUT (req, res, next) {
  var folder_id = req.swagger.params['folder_id'].value;
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var body = req.swagger.params['body'].value;
  Folder.v1FolderFolder_idPUT(folder_id,accessToken,client,uid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FolderGET = function v1FolderGET (req, res, next) {
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  Folder.v1FolderGET(accessToken,client,uid)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.v1FolderPOST = function v1FolderPOST (req, res, next) {
  var accessToken = req.swagger.params['access-token'].value;
  var client = req.swagger.params['client'].value;
  var uid = req.swagger.params['uid'].value;
  var body = req.swagger.params['body'].value;
  Folder.v1FolderPOST(accessToken,client,uid,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
