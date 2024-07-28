// axiosモジュールを読み込む
import axios from 'axios';

// APIからデータを取得する関数
const main = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const posts = response.data;
        for (const post of posts) {
            console.log(`title: ${post.title}`);
        }
    } catch (error) {
        console.error('エラーが発生しました:', error);
    }
};

main();
