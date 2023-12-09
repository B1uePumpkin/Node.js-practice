const express = require('express');
const app = express();
const port = 8088;

//[module][2]引入router/books.js
const booksRouter = require('./router/books.js'); // . -> 目前目錄


// 路由設定 / end-point setting / API 設計
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// /books/page
// /books/data
// /about/page
// /about/hihi

// [module][3]將/books 的 request 導向 booksRouter
app.use('/books', booksRouter); // /books/page

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});