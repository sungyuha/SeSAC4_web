const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index");
})
app.post("/receive", function(req,res){
    console.log( req.body );
    res.send( req.body.name + "안녕" );
})

app.listen(port, ()=> {
    console.log("Server Port :", port);
})