exports.index = (req,res) => {
    res.render("index");
}
exports.register = (req,res) => {
    res.render("register");
}

exports.post_register = (req,res) => {
    res.send( req.body );
}