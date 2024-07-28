import { createServer } from 'http';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<strong style="color: red;">Goodbye World</strong>');
});

server.listen(3001, () => {
    console.log('サーバー起動中です');
});
