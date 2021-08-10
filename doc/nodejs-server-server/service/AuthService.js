'use strict';


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

