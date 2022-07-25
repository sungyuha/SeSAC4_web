const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 9999;
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index_4");
});

app.get("/receive4", function(req,res){
    console.log( req.query );
    res.render("receive4", req.query);
});

app.post("/receive4", function(req,res){
    console.log("receive4-post");
    res.render("receive4", req.body);
    const i = `${req.body.name}//${req.body.id}//${req.body.pw}`;
    fs.writeFile("./public/info.txt", i);
    console.log(i);
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
});