'use strict';


/**
 * 会員登録用API
 * 会員登録します。  email, password, password_confirmationをリクエストで受け取り、ユーザと認証用のトークンを生成します。
 *
 * returns Object
 **/
exports.v1AuthPOST = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "bytes": [
    123,
    125
  ],
  "empty": false
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

