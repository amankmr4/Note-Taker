var express = require("express");
var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/api")(app);
require("./routes/routes")(app);

app.listen(PORT, function () {
    console.log("App listning on PORT:" + PORT)
})