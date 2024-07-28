### [axios](https://www.npmjs.com/package/axios)

-   概要: Web からデータを取得したり、データを送信したりするためのライブラリ。簡単に HTTP リクエストを送ることができる。
-   使い方: Web API からデータを取得したり、フォームデータをサーバーに送信したりする時に使う。
-   インストール: `npm install axios`

<br/>

##### サンプルソース

```javascript
// axiosモジュールを読み込む
const axios = require('axios');

// APIからデータを取得する関数
axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => {
        // 取得したデータを表示する
        console.log(response.data);
    })
    .catch((error) => {
        // エラーがあった場合に表示する
        console.error('エラーが発生しました:', error);
    });
```
