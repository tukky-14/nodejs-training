// ### 問題2；モジュールのインポート
const calc = require('./export');

console.log(calc.add(1, 2)); // 3
console.log(calc.sub(1, 2)); // -1
console.log(calc.mul(1, 2)); // 2
console.log(calc.div(1, 2)); // 0.5
console.log(calc.mod(1, 2)); // 1
