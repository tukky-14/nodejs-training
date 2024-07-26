### モジュールの読み込み方法 【require】

-   require は、Node.js が最初に登場したときから使われている
-   require はその頃からモジュールを読み込むための方法
-   require の特徴

    -   同期的：すぐに読み込むため、読み込み中にコードの実行が止まることがある
    -   CommonJS という仕組みを使っており、サーバーサイドの JavaScript でよく使われている

<br/>

##### モジュールを公開する（単一の値）

```javascript
// myModule.js
function sayHello() {
    console.log('Hello, world!');
}
module.exports = sayHello; // この関数をエクスポート
```

<br/>

##### モジュールを公開する（複数の値）

````javascript
// myModule.js
const sayHello = () => {
    console.log('Hello, world!');
};

const sayGoodbye = () => {
    console.log('Goodbye, world!');
};

module.exports = { sayHello, sayGoodbye }; // 複数のものをエクスポート```
````

<br/>

##### モジュールを読み込む

```javascript
const myModule = require('./myModule');

myModule.sayHello(); // 'Hello, world!'
myModule.sayGoodbye(); // 'Goodbye, world!'
```

<br/>
