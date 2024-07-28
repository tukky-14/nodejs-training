### モジュールの読み込み方法 【import】

-   ECMAScript 2015（ES6）という JavaScript の新しいバージョンで導入された
-   import の特徴

    -   非同期的：コードの実行をブロックしないので、より効率的に読み込み
    -   モジュールの標準化：ES6 の標準仕様として、ブラウザや Node.js のどちらでも使えるから、コードが統一されやすい

-   React や Vue.js といった現代のフレームワークは、モジュールシステムを使ってコンポーネントやライブラリを管理している。import を使うことで、これらのフレームワークが提供する機能やライブラリを簡単に使えるようになった。これがフレームワークの発展に一役買うことになった
-   node.js のプロジェクトで使用する場合、以下のいずれかの方法で使用できる
    -   実行するファイルの拡張子を".mjs"に変換する
    -   package.json に以下の記述を追加する
        ```javascript
        {
            "type": "module"
        }
        ```

<br/>

##### 単一のエクスポート

```javascript
// myModule.js
export function sayHello() {
    console.log('Hello, world!');
}
```

<br/>

##### 複数のエクスポート

```javascript
// myModule.js
export const sayHello = () => {
    console.log('Hello, world!');
};

export const sayGoodbye = () => {
    console.log('Goodbye, world!');
};
```

<br/>

##### デフォルトエクスポート

```javascript
// myModule.js
export default function sayHello() {
    console.log('Hello, world!');
}
```

<br/>

##### 名前付きエクスポートの使用

```javascript
// app.js
import { sayHello, sayGoodbye } from './myModule';

sayHello(); // 'Hello, world!'
sayGoodbye(); // 'Goodbye, world!'
```

<br/>

##### デフォルトエクスポートの使用

```javascript
// app.js
import sayHello from './myModule';

sayHello(); // 'Hello, world!'
```
