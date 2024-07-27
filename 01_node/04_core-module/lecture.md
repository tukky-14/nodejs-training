### コアモジュール

Node.js にはデフォルトで使用できるコアモジュールが存在する。

| コアモジュール | 説明                                                                                           |
| -------------- | ---------------------------------------------------------------------------------------------- |
| `fs`           | ファイルシステムを操作するためのモジュール。ファイルの読み書き、ディレクトリの作成などが可能。 |
| `http`         | HTTP サーバーを作成するためのモジュール。Web サーバーの作成が可能。                            |
| `path`         | ファイルパスを操作するためのモジュール。パスの結合や正規化などが可能。                         |
| `os`           | オペレーティングシステム関連のユーティリティを提供するモジュール。システムの情報取得が可能。   |
| `events`       | イベント駆動型プログラムを作成するためのモジュール。イベントエミッタを使用可能。               |
| `url`          | URL の解析やフォーマットを行うためのモジュール。URL 操作が可能。                               |
| `crypto`       | 暗号化やハッシュ生成を行うためのモジュール。セキュリティ関連の機能を提供。                     |
| `stream`       | ストリームを扱うためのモジュール。データのストリーミング処理が可能。                           |
| `readline`     | コンピュータが人の入力を受け取るためのモジュール。                                             |
| `exec`         | シンプルなコマンドの実行に使う。コマンドの実行結果をコールバックで受け取ることができる。       |

<br/>

##### `readline` を使用したユーザーの入力を受け付けるサンプルソース

```javascript
// readlineモジュールを読み込む
const readline = require('readline');

// readlineモジュールのインスタンスを作成する
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// プロミスを返す質問メソッドを作成する
const question = (query) => {
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            resolve(answer);
        });
    });
};

const main = async () => {
    // インスタンスの`question`メソッドを使って、ユーザーに質問を投げかける
    const name = await question('名前を入力してください。\n> ');
    console.log(`${name}さん、こんにちは！`);

    // `close`メソッドを使って、プログラムを終了する
    rl.close();
};

main();
```

<br/>

##### `exec` を使用したシェルコマンドをサンプルソース

```javascript
const { exec } = require('child_process');

// コマンドを実行する関数
const runCommand = (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`エラー: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`標準エラー: ${stderr}`);
            return;
        }
        console.log(`標準出力: ${stdout}`);
    });
};

// 使用例: Mac/Linux での `ls` コマンドや、Windows での `dir` コマンド
runCommand('ls'); // Mac/Linux
// runCommand('dir'); // Windows
```
