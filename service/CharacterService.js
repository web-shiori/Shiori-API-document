'use strict';


/**
 * ユーザ所持キャラクター一覧取得API
 * ユーザが所持しているキャラクター一覧情報を取得します。
 *
 * xToken String 認証トークン
 * returns CharacterListResponse
 **/
exports.characterListGET = function(xToken) {
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

