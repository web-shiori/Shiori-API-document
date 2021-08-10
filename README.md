# Shiori-API-document
- APIドキュメント: https://web-shiori-api-document.herokuapp.com/docs/
- Herokuのダッシュボード: https://dashboard.heroku.com/apps/web-shiori-api-document
- API設計v1: https://web-shiori.kibe.la/notes/2

## デプロイ手順
- swagger editorで編集
- Swagger Editor 上で、 Generate Server > nodejs-server を選択
- サーバーサイドコードのzip ファイルでダウンロードできるので、ダウンロード後に解凍する
- 修正
```diff
- var serverPort = 8080;
+ var serverPort = process.env.PORT || 8080;
```

- package.jsonをルートに配置
- mainブランチにプッシュすると自動でデプロイされます。


# 参考
https://qiita.com/tanabee/items/e6cedfcc75a4e50e3ad2
