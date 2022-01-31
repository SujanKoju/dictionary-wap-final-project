let express = require('express');
let path = require('path')
let app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/views/dict.html"))
});

app.post("/dictionary", (req, res) => {
    let searchedWord = req.body.word;
    console.log(searchedWord)
    res.send(searchedWord);
    res.end();
});


app.listen(8080);
