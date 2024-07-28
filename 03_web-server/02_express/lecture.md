### Express

-   Express（エクスプレス）は、Node.js で Web アプリケーションや API サーバーを作成するためのフレームワーク
-   Node.js だけでも Web サーバーを作れるが、Express を使うともっと簡単に、そして便利に Web アプリを作成可能
-   ルーティングやミドルウェアなど、いろんな便利な機能が最初から用意されている

 <br/>

##### サンプルソース

```javascript
const express = require('express'); // expressモジュールを読み込む
const app = express(); // Expressアプリを作成

// ルート（トップページ）のリクエストに応答
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Home Page!</h1>');
});

// サーバーを指定のポートで待機させる
app.listen(3000, () => {
    console.log('Server running at http://127.0.0.1:3000/');
});
```
