const express = require('express');
const router = express.Router(); // 建立router物件，並將此物件匯出

// 路由設定 / end-point setting / API 設計
router.get('/', (req, res) => {
    res.send('Hello /about root');
}); // /about

// /about/testqq?name=123
router.get('/testqq', (req, res) => {
    let name = req.query.name;
    res.send(`Hello ${name}`);
}); // /about/page

module.exports = router; // [module][1]匯出router物件，等待被引用