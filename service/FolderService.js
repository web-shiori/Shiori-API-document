'use strict';


/**
 * フォルダからコンテンツを削除するAPI
 * 
 *
 * folder_id Integer 
 * content_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * no response value expected for this operation
 **/
exports.v1FolderFolder_idContentContent_idDELETE = function(folder_id,content_id,accessToken,client,uid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * フォルダにコンテンツを追加するAPI
 * 
 *
 * folder_id Integer 
 * content_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * no response value expected for this operation
 **/
exports.v1FolderFolder_idContentContent_idPOST = function(folder_id,content_id,accessToken,client,uid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * フォルダ内コンテンツ一覧取得API
 * 
 *
 * folder_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * q String 検索クエリ (optional)
 * limit Long 取得数。デフォルトは50 (optional)
 * offset Long 取得位置。デフォルトは0 (optional)
 * returns FolderContentGetResponse
 **/
exports.v1FolderFolder_idContentGET = function(folder_id,accessToken,client,uid,q,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * フォルダ削除API
 * 
 *
 * folder_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * no response value expected for this operation
 **/
exports.v1FolderFolder_idDELETE = function(folder_id,accessToken,client,uid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * フォルダ情報更新API
 * 
 *
 * folder_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * body FolderUpdateRequest Request Body
 * returns FolderUpdateResponse
 **/
exports.v1FolderFolder_idPUT = function(folder_id,accessToken,client,uid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * フォルダ一覧取得API
 * 
 *
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * returns FolderListResponse
 **/
exports.v1FolderGET = function(accessToken,client,uid) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * フォルダ作成API
 * 
 *
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * body FolderCreateRequest Request Body
 * returns FolderCreateResponse
 **/
exports.v1FolderPOST = function(accessToken,client,uid,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

