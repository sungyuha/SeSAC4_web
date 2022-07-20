const http = require('http');
const fs = require('fs').promises;

const server = http.createServer( async function(req, res){
    try {
        const data = await fs.readFile('./5_http.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf8'});
        res.end(data);
    } catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    } 
});

server.listen(9999, function(){
    console.log( "9999 포트" );
});