// requiring paths
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// configure express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }))
 
// parse application/json
app.use(bodyParser.json())
var PORT = process.env.PORT || 8080;



require ("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// Listening on port
app.listen(PORT, function(){
    console.log("Friend Finder is listening on Port: " + PORT);
});




