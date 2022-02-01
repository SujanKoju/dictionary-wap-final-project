let express = require('express');
let path = require('path');
let constants = require('./constants/constants')
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

app.listen(constants.PORT, () => {
    console.log('--- Server Running at port : ' + constants.PORT+" ---")
});
