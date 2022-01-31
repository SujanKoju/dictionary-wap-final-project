let express = require('express');
let path = require('path');
let wordService = require('./word');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/dict.html"))
});

app.post("/dictionary", express.json(), (req, res) => {
    wordService.getWords(req, res);
});

app.listen(8000);
