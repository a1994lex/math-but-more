var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());



app.use(express.static('public')); // this will host all files in the public folder





var server = app.listen(8080);
