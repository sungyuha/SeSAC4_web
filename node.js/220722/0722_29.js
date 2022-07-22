const express = require('express');
const app = express();
const port = 8080;

app.use( '/', express.static( 'public' ));

app.set( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render( "220629.ejs" );
});

app.listen(port, function(){
    console.log( 'Server port : ', port );
});