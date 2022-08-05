const mysql = require("mysql");
const cnn = mysql.createConnection({ // createConnection 는 DB를 연결해주는 함수
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'sesac'
});

// ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '1234'; 권한을 가져오는 ALTER문

exports.get_visitors = (cb) => {
    cnn.query( 'SELECT * FROM visitor', (err, rows) => { // callback함수 사용해야 함
        if ( err ) throw err;
        console.log( rows );
        cb(rows);
    });
}
exports.insert = ( name, comment, cb ) => {
    var sql = "INSERT INTO visitor(name, comment) VALUES('" + name + "', '" + comment + "')";
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;

        console.log( rows );
        cb( rows.insertId );
    });
}