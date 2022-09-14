var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile( __dirname + "/chat.html" );
});

// io -> 클라이언트와의 모든 연결을 갖고 있는 친구
// socket -> 클라이언트 한 명. socket.id 클라이언트를 구분하는 식별자
// connection는 정해져있는 것
var list = {};
io.on("connection", function(socket){   
    console.log( "connected : ", socket.id ); // socket.id로 누가 누구인지 구분 가능
    socket.on("info2", function(data){
        list[socket.id] = data.nickname;
        io.emit("notice", data.nickname + "님이 입장하셨습니다.");
    });
    // socket.emit("info", socket.id); // info로 socket.id가 저장 됨
    // io.emit("notice", socket.id + "님이 입장하셨습니다.");
    socket.on("send", function(data){
        // 넘어온 data = {id: ~~~, msg: ~~~};
        console.log( "client message : ", data.msg ); // 내가 console.log를 찍을 때 client message
        data["nickname"] = list[socket.id];
        io.emit("newMessage", data );
    });

    socket.on("disconnent", function(){ // disconnent은 연결이 끊겼을 때 실행 됨
        io.emit("notice", socket.id + "님이 퇴장하셨습니다." );
    });
});

http.listen( 8000, function(){
    console.log( "Server port: ", 8000 );
});