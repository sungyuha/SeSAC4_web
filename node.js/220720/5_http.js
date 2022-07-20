const http = require("http");

console.log( http );
const server = http.createServer( function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</h1>");
    res.end("<p>안녕</p>");
});

server.listen(9999, function(){
    console.log( "9999 포트" );
});

// const server = http.createServer( function( req, res ){
//     res.end("hi");
// });

// server.listen(9999, function(){
//     console.log( "9999 port" );
// });