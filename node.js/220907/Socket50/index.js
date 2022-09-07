var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    console.log("client");
    res.sendFile( __dirname + "/index.html");
});

io.on("connection", function(socket){
    console.log( "server Socket connected" );
    socket.on("btnclick_study", function(data){
        console.log( "clinet : ", data );
        socket.emit("responese", "study : 공부합시다~" );
    });

    // socket.on("btnclick_hello", function(data){
    //     console.log( "clinet : ", data );
    //     socket.emit("responese", "hello : 안녕하세요?" );
    // });
    socket.on("btnclick_study", function(data){
        console.log( "clinet : ", data );
        socket.emit("responese", "study : 공부합시다~" );
    });
});

http.listen( 8000, function(){
    console.log( "Server port: ", 8000 );
});