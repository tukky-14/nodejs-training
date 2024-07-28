// figletモジュールを読み込む
const figlet = require('figlet');

// 文字をアートに変換する関数
figlet('Goodbye World!', (err, data) => {
    if (err) {
        console.log('エラーが発生しました:', err);
        return;
    }
    // アートをコンソールに表示する
    console.log(data);
});
