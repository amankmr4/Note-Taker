let dbData = require("../db/db.json");
const fs = require("fs")

module.exports = (app) => {



    app.get("/api/notes", function (req, res) {
        res.json(dbData);
    });

    app.post("/api/notes", function (req, res) {

        if (dbData.length == 0) {
            req.body.id = "0";
        } else {
            req.body.id = JSON.stringify(JSON.parse(dbData.length + 1));
        }

        dbData.push(req.body)
        writeDB(dbData)
        res.json(req.body);
    });

    function writeDB(dbData) {
        dbData = JSON.stringify(dbData)
        fs.writeFileSync("./db/db.json", dbData, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    };
}