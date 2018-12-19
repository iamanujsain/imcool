const express = require('express');
const app = express();

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.end("This is the default response.");
});

app.get('/cool', (req, res) => {
    res.sendFile("cool.html", {root: __dirname});
});

app.get('/xmas', (req, res) => {
    res.sendFile("xmas.html", {root: __dirname});
});

app.listen(port);