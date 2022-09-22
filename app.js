const bodyParser = require("body-parser");
const express = require("express");
const ejs = require("ejs");


const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public/css"));
app.use(express.static(__dirname + "/public/images"));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/");
});




























app.listen(3000, function(){
    console.log("Server started on port 3000");
})