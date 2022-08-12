const express = require('express');
const cookiParser = require("cookie-parser");
const session = require("express-session");
const app = express();

app.set("view engine", "ejs");
app.use(cookiParser('1234'));
app.use(session({
    secret: 'secret key', // 필수값
    // resave : false, // 계속 덮어쓸지 말지 고름
    // saveUninitialized: true // 초기값을 미리 설정하지 않아도 미리 세션을 만들어 놓는다.
}));

// const cookieConfig = {
//     maxAge: 30000,
//     path: '/get', // 많이 사용하지 않음, 쿠키에 접속 할 수 있는 경로 // /get/a /get/a/b
//     // httpOnly: true, // 웹서버만 접속이 가능. 클라이언트로는 접속 불가, 즉 document. ~~ 사용 불가 (속성)
//     signed: true, // 쿠키를 암호와해서 사용하고 싶으면 signed 속성을 추가해주면 됨
// };

// app.get("/index", (req,res) => {
//     req.session.key = "value";
//     res.cookie('key', 'value', 'cookieConfig');
//     res.cookie('key2', 'value2', 'cookieConfig');
//     res.render("index");
// });

// app.get("/get", (req,res) => {
//     console.log( req.session );
//     // console.log( req );
//     console.log( req.cookies );
//     res.send( req.cookies );
// });

// app.get("/cookie", (req,res) => {
//     res.render("cookie");
// });

// app.get("/destroy", (req,res) => {
//     // res.render("cookie");
//     // req.session.destroy(function(err){
//     //     res.send("삭제");
//     // }) // 전부다 삭제
//     req.session.name = "";
//     res.send("123");
// });

app.get("/login", (req,res) => {
    res.render("login"); // 로그인 화면 보여주는 경로
});

app.post("/login", (req,res) => {
    var flag = true;
    if ( flag ) {
    res.redirect.id = req.body.id;
    res.redirect("/profile"); // redirect 는 이동
    } else res.redirect("/login");
});

app.get("/profile", (req,res) => {
    if ( req.session.id == undefined || req.session.id == "" ){
        res.redirect("/login");
        return false;
    }

    req.session.id = "";
    res.render("profile");    
});

app.get("main", (req,res) => {

});

app.listen(8000, ()=>{
    console.log( "Server Port : ", 8000 );
});