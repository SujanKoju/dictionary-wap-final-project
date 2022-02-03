const mySql = require("mysql");
const constants = require("./constants/constants")

function getWords(req, res) {
    let conn = mySql.createConnection({
        host: constants.HOST,
        user: constants.USER,
        password: constants.PASSWORD,
        database: constants.DATABASE,
        options: {trustServerCertificate: true}
    });
    let searchedWord = req.body.word;
    //2 sec delay for demonstrating ajax user feed back [ no needed ]
    setTimeout(function () {
        conn.connect(function (err) {
            if (err) throw err;
            conn.query("SELECT * FROM entries WHERE word = " + mySql.escape(searchedWord), function (err, result) {
                if (err) throw err;
                res.send(result);
            });
        })
    }, 500);

}


exports.getWords = getWords;

