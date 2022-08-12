const express = require('express');
const cookiParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.use(cookiParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    path: '/get', // 많이 사용하지 않음, 쿠키에 접속 할 수 있는 경로
    // httpOnly: true, // 웹서버만 접속이 가능. 클라이언트로는 접속 불가, 즉 document. ~~ 사용 불가 (속성)
    signed: true, // 쿠키를 암호와해서 사용하고 싶으면 signed 속성을 추가해주면 됨
};

app.get("/", (req,res) => {
    res.cookie('key', 'value', 'cookieConfig');
    res.cookie('key2', 'value2', 'cookieConfig');
    res.render("index");
});

app.get("/get", (req,res) => {
    console.log( req );
    console.log( req.cookies );
    res.send( req.cookies );
});

app.get("/cookie", (req,res) => {
    res.render("cookie");
});

app.listen(8000, ()=>{
    console.log( "Server Port : ", 8000 );
});