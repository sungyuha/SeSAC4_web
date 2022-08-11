const user = require("../model/user");

exports.get_user = async (req,res) => {
    user.get_users(function( result ){
        console.log( "result :", result);
        console.log("index");
        res.render("index", { data: result });
    });
}

exports.post_user = (req,res) => {
    console.log( req.body );

    user.insert( req.body.id, req.body.name, function( result ){
        res.send( {id: result });
    });
}

exports.post_user = (req,res) => {
    user.post_user( req.query.id, function(result){
        console.log( "result :", result);
        res.send( {data: result[0] });
    })
}

exports.edit_user = (req,res) => {
    Visitor.update( req.body, function(result){
        console.log( result );
        res.send( "수정 성공" );
    });
}

exports.delete_user = (req,res) => {
    Visitor.delete( req.body.id, function(result){
        console.log( result );
        res.send("삭제 성공");
    });
}