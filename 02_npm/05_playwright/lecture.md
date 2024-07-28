### [playwright](https://www.npmjs.com/package/playwright)

-   概要: Web ブラウザを自動で操作するためのライブラリ。テストやデータ収集に使えるよ。
-   使い方: Web ページの操作を自動化するためのテストやスクレイピングに使う。
-   インストール: `npm install playwright`

##### サンプルソース

```javascript
// playwrightモジュールを読み込む
const { chromium } = require('playwright');

// ブラウザを起動する関数
(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Webページを開く
    await page.goto('https://exmaple.com');

    // ページタイトルを取得して表示する
    const title = await page.title();
    console.log('ページタイトル:', title);

    // ブラウザを閉じる
    await browser.close();
})();
```
