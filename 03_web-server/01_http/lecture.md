### Node.js のコアモジュール「http」とは

-   「http」を使用すると簡単に Web サーバーを作成することができる（リクエスト（要求）を受け取って、レスポンス（応答）を返す処理を作成できる）
-   ブラウザでしか使用できない JavaScript であったが、Node.js という環境によりサーバーの処理を記述可能となった例の 1 つ

<br/>

##### サンプルソース

```javascript
const http = require('http'); // httpモジュールを読み込む

const server = http.createServer((req, res) => {
    // サーバーを作成
    res.statusCode = 200; // 成功のステータスコード
    res.setHeader('Content-Type', 'text/html'); // 返すデータのタイプを指定
    res.end('<div style="color: blue;">Hello World!</div>'); // クライアントに「Hello, World!」と返す
});

server.listen(3000, '127.0.0.1', () => {
    // サーバーを指定のポートで待機させる
    console.log('Server running at http://127.0.0.1:3000/'); // 起動したときのメッセージ
});
```
