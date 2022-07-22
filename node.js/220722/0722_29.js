const express = require('express');
const app = express();
const port = 9999;

app.use( '/', express.static( 'public' ));

app.set( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render( "220629.html" );
});

server.listen(8080, function(){
    console.log( "8080 포트" );
});