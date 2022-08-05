const Visitor = require("../model/Visitor");

exports.index = async (req,res) => {
    Visitor.get_visitors();
    res.render("index");
}