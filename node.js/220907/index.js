var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile( __dirname + "/index.html" );
});

io.on("connection", function(socket){   // io는 socket 그 자체
    console.log( "connected" );     // 클라이언트가 보낸 코드, 연결 코드
    socket.emit("hello", "server hello");   // 
    socket.on("click", function(data){
        console.log( "click click" );
        socket.emit("clickResponse", 'hello');
        io.emit("clickResponse", '안녕!!.'); // io는 연결 된 모든 클라이언트에게 전체 연결
    })
});

http.listen( 8000, function(){
    console.log( "Server port: ", 8000 );
});