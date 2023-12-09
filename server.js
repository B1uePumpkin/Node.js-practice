const express = require('express');
const app = express();
const port = 8088;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});