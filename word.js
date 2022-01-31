const mySql = require("mysql");

function getWords(req, res) {
    let conn = mySql.createConnection({
        host: 'localhost',
        user: 'wap',
        password: 'Wap@1995',
        database: 'entries',
        options: {trustServerCertificate: true}
    });
    let searchedWord = req.body.word;
    conn.connect(function (err) {
        if (err) throw err;
        console.log(' -- DB Connected --');
        conn.query("SELECT * FROM entries WHERE word = " + mySql.escape(searchedWord), function (err, result) {
            if (err) throw err;
            res.send(result);
        });
    });
}


exports.getWords = getWords;

