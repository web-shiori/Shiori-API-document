'use strict';


/**
 * Githubの認証が終わった際にリダイレクトされてくるAPI
 * クライアントが直接叩くことはない
 *
 * no response value expected for this operation
 **/
exports.v1AuthCallbackGithubGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Googleの認証が終わった際にリダイレクトされてくるAPI
 * クライアントが直接叩くことはない
 *
 * no response value expected for this operation
 **/
exports.v1AuthCallbackGoogleGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Twitterの認証が終わった際にリダイレクトされてくるAPI
 * クライアントが直接叩くことはない
 *
 * no response value expected for this operation
 **/
exports.v1AuthCallbackTwitterGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Githubログイン用API
 * 
 *
 * no response value expected for this operation
 **/
exports.v1AuthLoginGithubGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Googleログイン用API
 * 
 *
 * no response value expected for this operation
 **/
exports.v1AuthLoginGoogleGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * ログイン用API
 * ログインします。  email, passwordをリクエストで受け取り、ユーザと認証用のトークンを生成します。
 *
 * body LoginRequest Request Body
 * returns LoginResponse
 **/
exports.v1AuthLoginPOST = function(body) {
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
 * Twitterログイン用API
 * 
 *
 * no response value expected for this operation
 **/
exports.v1AuthLoginTwitterGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * 会員登録用API
 * 会員登録します。  email, password, password_confirmationをリクエストで受け取り、ユーザと認証用のトークンを生成します。
 *
 * body AuthRequest Request Body
 * returns AuthResponse
 **/
exports.v1AuthPOST = function(body) {
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

