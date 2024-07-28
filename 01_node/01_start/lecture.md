### Node.js とは

-   Node.js はサーバーサイドの JavaScript を実行するための環境
-   ブラウザ上という制限された環境でしか動けなかった JavaScript を、Python や Ruby のようにパソコン上で動かせるようにしてくれる
    [Node.js とはなにか？なぜみんな使っているのか？](https://qiita.com/non_cal/items/a8fee0b7ad96e67713eb)

<br/>

### Node.js のインストール

-   以下の公式サイトから環境に合わせた Node.js をインストール
    [Node.js 公式サイト](https://nodejs.org/en/)
-   Windows の場合、必要に応じて環境変数を設定する

<br/>

### Node.js を使用したファイルの実行

-   Node.js をインストールすると以下のコマンドで js・mjs ファイルを実行できる。

    ```
    node sample.js
    ```

-   Node.js はサーバーサイドの実行環境のため、ブラウザ上で使用できる window オブジェクトは使用できない。

<br/>

### Node.js のモジュールシステム

-   モジュールとは：JavaScript のコードを分割して、再利用できるようにしたもの。
-   ファイルごとのスコープ：各ファイルは独立したモジュールとして扱われ、変数や関数は他のファイルと共有されない。
-   相対パス：ローカルモジュールを読み込むときは、相対パスを使う（例：./myModule）。
-   モジュールの読み込み："require"と"import"の 2 種類の方法でモジュールを読み込むことができる。