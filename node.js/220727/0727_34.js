const express = require("express");
const app = express();
const port = 9999;
const bodyParser = require("body-parser");
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.use( express.static( "public" ));
app.use( express.urlencoded({extended: true}));
app.use( bodyParser.json() );

app.get("/", function(req,res){
    res.render("index4");
});

app.get("/receive4", function(req,res){
    console.log( req.query );
    res.send("receive4", req.query);
});

app.post("/receive4", function(req,res){
        fs.readFile("./public/info.txt")
        .then((data) => {
            let arr = data.toString().split("//");
            if ( arr[0] == req.body.id && arr[1] == req.body.pw ){
               res.send("로그인이 되었습니다.");
            } else {
                res.send("아이디와 비밀번호를 확인해주세요.");
            }
    });
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
});