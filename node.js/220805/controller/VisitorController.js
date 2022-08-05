const Visitor = require("../model/Visitor");

exports.index = (req,res) => {
    res.render("index");
}
exports.register = (req,res) => {
    res.render("register");
}

exports.post_register = (req,res) => {
    User.post_Visitor( req.body );
    res.send( req.body );
}

exports.Visitor = (req,res) => {
    res.render("Visitor");
}

exports.post_Visitor = async (req,res) => {
    var data = await Visitor.get_Visitor();
    "1//1//1//1\n2//2//2//2\n"

    var infos = data.split("\n");
    
    var flag = false;
    for ( let i = 0; i < infos.length; i++ ){
        var info = infos[i].split("//");
        if ( info[0] == req.body.id && info[1] == req.body.Visitor ) flag = true;
    }

    if ( flag ) res.send("성공");
    else res.send("실패");
}