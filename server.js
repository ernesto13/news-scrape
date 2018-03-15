// Dependencies
var express = require("express");
var mongojs = require("mongojs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var request = require("request");
var logger = require("morgan");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");
var cheerio = require("cheerio");

// Require all models
var db = require("./models");

var PORT = process.env.PORT || 8080;


var app = express();
// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));
// Set up a static folder (public) for our web app
// app.use(express.static("public"));
// Static directory
app.use(express.static(__dirname + "/public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: 'main' }));
app.set("view engine", "handlebars");





// Routes
// =============================================================
require("./routes/index.js")(app);

//10 mongojs f.e.
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
// mongoose.Promise = Promise;
// mongoose.connect("mongodb://localhost/newsScraper", {
//     useMongoClient: true
// });








// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});