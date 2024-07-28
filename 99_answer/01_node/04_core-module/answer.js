// ### 問題1：コアモジュール`readline`の利用
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
    const name = await question('お名前を教えていただけますか。\n> ');
    if (!name) {
        console.log('名前を入力してください。');
        rl.close();
        return;
    }
    console.log(`${name}さん、こんにちは！`);

    const age = await question('年齢を教えていただけますか。\n> ');
    if (!age || isNaN(age)) {
        console.log('正しい年齢を入力してください。');
        rl.close();
        return;
    }
    console.log(`${age}歳ですね！`);

    // `close`メソッドを使って、プログラムを終了する
    rl.close();
};

main();

// ### 問題2：コアモジュール`exec`の利用
// execモジュールを読み込む
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

        process.exit(0); // 成功した場合に正常終了
    });
};

runCommand('touch sample.txt'); // Mac/Linux
