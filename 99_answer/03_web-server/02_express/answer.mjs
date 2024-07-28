// expressモジュールを読み込む
import express from 'express';

// expressアプリケーションを作成する
const app = express();

// ポート番号
const port = 3000;

// ルートパスにアクセスした場合の処理
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// /about にアクセスした場合の処理
app.get('/about', (req, res) => {
    res.send('About Us');
});

// /products にアクセスした場合の処理
app.get('/products', (req, res) => {
    res.send('Products');
});

// /contact にアクセスした場合の処理
app.get('/contact', (req, res) => {
    res.send('Contact Us');
});

// サーバーを起動する
app.listen(port, () => {
    console.log('サーバー起動中です。');
});
