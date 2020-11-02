var path = require("path");

// routing

module.exports = function (app) {
    // open notes.html upon click on the start button
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};