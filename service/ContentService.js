'use strict';


/**
 * コンテンツ削除API
 * 
 *
 * content_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * no response value expected for this operation
 **/
exports.v1ContentContent_idDELETE = function(content_id,accessToken,client,uid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * お気に入り解除API
 * 
 *
 * content_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * no response value expected for this operation
 **/
exports.v1ContentContent_idLikeDELETE = function(content_id,accessToken,client,uid) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * お気に入り登録API
 * 
 *
 * content_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * returns LikedResponse
 **/
exports.v1ContentContent_idLikePOST = function(content_id,accessToken,client,uid) {
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
 * コンテンツ情報更新API
 * 
 *
 * content_id Integer 
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * body ContentUpdateRequest Request Body
 * returns ContentUpdateResponse
 **/
exports.v1ContentContent_idPUT = function(content_id,accessToken,client,uid,body) {
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
 * コンテンツ一覧取得API
 * コンテンツ一覧を取得します。
 *
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * q String 検索クエリ (optional)
 * limit Long 取得数。デフォルトは50 (optional)
 * offset Long 取得位置。デフォルトは0 (optional)
 * returns ContentListResponse
 **/
exports.v1ContentGET = function(accessToken,client,uid,q,limit,offset) {
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
 * コンテンツ保存API
 * コンテンツ保存API
 *
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * body ContentCreateRequest Request Body
 * returns ContentCreateResponse
 **/
exports.v1ContentPOST = function(accessToken,client,uid,body) {
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
 * お気に入りコンテンツ一覧取得API
 * 
 *
 * accessToken String アクセストークン
 * client String client
 * uid String uid
 * q String 検索クエリ (optional)
 * limit Long 取得数。デフォルトは50 (optional)
 * offset Long 取得位置。デフォルトは0 (optional)
 * returns LikedContentListResponse
 **/
exports.v1LikesGET = function(accessToken,client,uid,q,limit,offset) {
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

