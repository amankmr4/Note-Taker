let dbData = require("../db/db.json");
const fs = require("fs")

module.exports = (app) => {



    app.get("/api/notes", function (req, res) {
        res.json(dbData);
    });
}