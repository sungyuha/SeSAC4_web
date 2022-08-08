const mysql = require("mysql");
const cnn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234', // Sesac1234*
    database: 'sesac'
});

exports.post_user = (cb) => {
    cnn.query( 'SELECT * FROM memberjoin', (err, rows) => {
        if ( err ) throw err;
        console.log( rows);
        cb(rows);
    });
}
exports.insert = (id, name, pw , email, cb ) => {
    var sql = "INSERT INTO memberjoin(id, pw, name, email, phone) VALUES('" + id + "', '" + pw + "', '" + name + "', '" + email + "', '" + phone + "')";
    cnn.query( sql, (err, rows) => {
        if( err ) throw err;

        console.log( rows );
        cb( rows.insertId );
    });
}

exports.post_user = ( id, cb ) => {
    cnn.query( `select * from memberjoin where id = ${id};`, (err, rows) => {
       if ( err ) throw err;

       cb(rows);
    });
}

exports.update = ( data, cb ) => {
    let sql = `UPDATE memberjoin SET id='${data.id}', comment='${data.pw}' WHERE id=${data.id}`;
    cnn.query( sql, (err, rows) => {
        if ( err ) throw err;
        cb ( rows );
    });
}

exports.delete = ( id, cb ) => {
    cnn.query( `DELETE FROM memberjoin WHERE id=${id}`, (err, rows) => {
        if ( err ) throw err;
        cb ( rows );
    });
}