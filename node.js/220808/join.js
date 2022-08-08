const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 9999;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use(express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index");
});

app.get("/join2", function(req,res){
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + '님 회원가입 완료되었습니다.';
    res.send({name: name, message: msg});
})

app.post("/join2", function(req,res){
    console.log( req.body );
    res.send("join2", req.body);
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
});