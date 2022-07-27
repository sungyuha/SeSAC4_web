const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index"); // res.render는 view를 불러온다. 즉, index.ejs를 불러옴
})

app.get("/test", function(req,res){
    res.send("test"); // 문답으로 send한다(==보낸다) 
})

app.get("/receive", function(req,res){
    console.log( req.query );
    let name = req.query.name;
    let msg = req.query.name + "GET 안녕";
    res.send({name: name, message: msg});
})
app.post("/receive", function(req,res){
    console.log( req.body );
    let name = req.body.name;
    let msg = req.body.name + "안녕"; 
    res.send( { name: name, message: msg} );
    // res.send( { name: "test2", message: 123} );
})

app.listen(port, ()=> {
    console.log("Server Port : ", port);
})