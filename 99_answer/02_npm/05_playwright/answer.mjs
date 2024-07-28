// playwrightモジュールを読み込む
import { chromium } from 'playwright';

// ブラウザを起動する関数
(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // Webページを開く
    await page.goto('https://google.com');

    // ページタイトルを取得して表示する
    const title = await page.title();
    console.log('ページタイトル:', title);

    // スクリーンショットを撮影する
    await page.screenshot({ path: 'img/google.png' });

    // ブラウザを閉じる
    await browser.close();
})();
