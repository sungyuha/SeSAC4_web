const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 9999;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index_2");
});

app.get("/receive2", function(req,res){
    console.log( req.query );
    res.render("receive2", req.query);
});

app.post("/receive2", function(req,res){
    console.log( req.body );
    res.render("receive2", req.body);
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
});