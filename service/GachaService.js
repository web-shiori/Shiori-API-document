'use strict';


/**
 * ガチャ実行API
 * ガチャを引いてキャラクターを取得する処理を実装します。  獲得したキャラクターはユーザ所持キャラクターテーブルへ保存します。  同じ種類のキャラクターでもユーザは複数所持することができます。    キャラクターの確率は等倍ではなく、任意に変更できるようテーブルを設計しましょう。
 *
 * xToken String 認証トークン
 * body GachaDrawRequest Request Body
 * returns GachaDrawResponse
 **/
exports.gachaDrawPOST = function(xToken,body) {
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

