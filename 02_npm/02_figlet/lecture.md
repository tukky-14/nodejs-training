### 外部 npm パッケージの利用

-   `npm install` (省略形 `npm i`)コマンドを使用することで、世界中の開発者が作成したパッケージを自分のプロジェクトにインストールすることができる。
-   [npm](https://www.npmjs.com/) のサイトから検索可能。
-   似たパッケージは[npm trends](https://npmtrends.com/)で比較できる。
-   外部のパッケージを使用するときは以下の項目に注意する。
    -   `npm install [パッケージ名]` のパッケージ名は打ち間違えないこと。なるべく npm のサイトからコピペで実行する。（1 文字間違えることで悪意のあるパッケージをインストールしてしまう恐れがある）
    -   使用して問題のないライセンスか確認する。
        参考：[とほほのライセンス入門](https://www.tohoho-web.com/ex/license.html)
    -   週間ダウンロード数や最終更新日を確認し、使用実績とメンテナンス頻度が問題ないか確認する。

<br/>

### [figlet](https://www.npmjs.com/package/figlet)

-   概要: テキストを ASCII アートに変換するライブラリ。ターミナルでのデバッグやメッセージに面白さを加える。
-   使い方: ターミナルのログやメッセージにスタイリッシュなフォントを使用する。
-   インストール: `npm install figlet`

##### サンプルソース

```javascript
// figletモジュールを読み込む
const figlet = require('figlet');

// 文字をアートに変換する関数
figlet('Hello World!', (err, data) => {
    if (err) {
        console.log('エラーが発生しました:', err);
        return;
    }
    // アートをコンソールに表示する
    console.log(data);
});
```
