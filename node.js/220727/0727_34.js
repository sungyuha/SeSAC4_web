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
    res.render("index3");
});

app.get("/receive3", function(req,res){
    console.log( req.query );
    res.render("receive3", req.query);
});

app.post("/receive3", function(req,res){
    console.log("receive3-post");
    res.render("page", req.body);
    const i = `${req.body.id}//${req.body.pw}`;
    fs.readFile("./public/info.txt", i);

    data = sesac//sesac1234

    let arr = data.split("//");
    if ( arr[0] == req.body.id && arr[1] == req.body.pw ){
        res.render("성공했을 때 나올 view")
    } else {
        res.render("실패했을 때")
    }
    // arr = { "sesac", "sesac1234" };
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
});