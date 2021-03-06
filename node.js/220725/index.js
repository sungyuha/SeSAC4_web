const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 9999;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    // console.log( req.body );
    res.render("index");
});

app.get("/receive", function(req,res){
    // console.log("receive-get");
    console.log( req.query );
    res.render("receive", req.query);
});

app.post("/receive", function(req,res){
    // console.log("receive-post");
    console.log( req.body );
    res.render("receive", req.body);

    // res.render("receive", {a:1, b:2});inde
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
})