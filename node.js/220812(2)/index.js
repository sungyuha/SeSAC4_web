const express = require('express');
const cookiParser = require("cookie-parser");
const app = express();

app.set("view engine", "ejs");
app.use(cookiParser('1234'));

const cookieConfig = {
    maxAge: 30000,
    path: '/get', 
    signed: true
};

app.get("/", (req,res) => {
    res.cookie('key', 'value', 'cookieConfig');
    res.render("index");
});

app.get("/get", (req,res) => {
    // res.send('index');
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