// ##### 問題1：パッケージを使用しない現在時刻の取得
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const day = now.getDate();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
console.log(`${year}/${month}/${day} ${hours}:${minutes}:${seconds}`);

// ##### 問題2：date-fnsの使用
import { format } from 'date-fns';

const dateFnsNow = new Date();
const formatted = format(dateFnsNow, 'yyyy/M/d HH:mm:ss');
console.log(formatted);

// ##### 問題3：経過日数
import { differenceInDays } from 'date-fns';

const startDate = new Date(2024, 0, 1);
const today = new Date();
const days = differenceInDays(today, startDate);
console.log(days);
