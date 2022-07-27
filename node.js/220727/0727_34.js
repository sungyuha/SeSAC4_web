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
    fs.readFile("./public/info.txt")
    .then((data) => {
        let arr = data.toString().split("//");
        if ( arr[0] == req.body.id && arr[1] == req.body.pw ){
           res.rander("로그인이 되었습니다.");
        } else {
            res.rander("로그인이 실패하였습니다.");
        }
});

    // arr = { "sesac", "sesac1234" };

//     app.post("/receive3", function(req,res){
//         if (err) throw err;
//         data = 
//         console.log(data);
        
//         console.log(data.toString().split("//")); 
//         if ( arr[0] == req.body.id && arr[1] == req.body.pw ){
//             res.rander("로그인이 되었습니다.");
//          } else {
//              res.rander("로그인이 실패하였습니다.");
//          }    
//         //callback 함수 
});

app.listen(port, ()=>{
    console.log( "Server Port :", port );
});