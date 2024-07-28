### [date-fns](https://www.npmjs.com/package/date-fns)

-   概要: 日付や時間の操作が簡単になるライブラリ。日付をフォーマットしたり、計算したりできる。
-   使い方: 日付を整形したり、日付の差を計算したりする時に便利。
-   インストール: `npm install date-fns`

<br/>

##### サンプルソース

```javascript
// date-fnsモジュールを読み込む
const { format, differenceInDays } = require('date-fns');

// 現在の日付をフォーマットする関数
const today = new Date();
const formattedDate = format(today, 'yyyy-MM-dd');
console.log('今日の日付:', formattedDate);

// 2つの日付の差を計算する関数
const pastDate = new Date(2023, 0, 1); // 2023年1月1日
const daysDifference = differenceInDays(today, pastDate);
console.log('過去の日付からの日数:', daysDifference);
```
