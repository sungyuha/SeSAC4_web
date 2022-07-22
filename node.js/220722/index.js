const express = require('express');
const app = express();
const port = 9999;

// public
// app.use( express.static( 'public' )); // 정적 파일의 경로가 public(퍼블릭)이다.
// public에 정적 파일을 관리하는 것. public의 폴더 안에 파일을 찾음

app.use( '/abc', express.static( 'public' )); // 앞에 /이름을 붙이면 가상 경로 생성

/* app.get('/', (req, res) => {
    res.send( 'Hello Express!' );
}); // 경로에 따라서 처리 가능 */

// EJS
app.set( 'view engine', 'ejs' );

app.get('/', (req, res) => {
    res.render( "test" );
});

app.listen(port, () => {
    console.log( 'Server port : ', port );
});