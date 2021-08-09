'use strict';


/**
 * ユーザ情報作成API
 * ユーザ情報を作成します。  ユーザの名前情報をリクエストで受け取り、ユーザIDと認証用のトークンを生成しデータベースへ保存します。
 *
 * body UserCreateRequest Request Body
 * returns UserCreateResponse
 **/
exports.userCreatePOST = function(body) {
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
 * ユーザ情報取得API
 * ユーザ情報を取得します。  ユーザの認証と特定の処理はリクエストヘッダのx-tokenを読み取ってデータベースに照会をします。
 *
 * xToken String 認証トークン
 * returns UserGetResponse
 **/
exports.userGetGET = function(xToken) {
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
 * ユーザ情報更新API
 * ユーザ情報の更新をします。  初期実装では名前の更新を行います。
 *
 * xToken String 認証トークン
 * body UserUpdateRequest Request Body
 * no response value expected for this operation
 **/
exports.userUpdatePUT = function(xToken,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

