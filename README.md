# Shiori-API-document
- APIドキュメントリンク: https://web-shiori-api-document.herokuapp.com/
- Swagger Editor: https://editor.swagger.io/
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
- herokuにプッシュ

```sh
% heroku login
% heroku git:remote -a web-shiori-api-document //初回のみ
% git checkout heroku-deploy
% git add .
% git commit -m "Update"
% git push heroku heroku-deploy:master
```

### 備考
mainブランチだとなぜかうまく行かない

