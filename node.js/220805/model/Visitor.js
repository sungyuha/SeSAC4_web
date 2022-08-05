const fs = require("fs").promises;

exports.post_Visitor = function( data ){
    const { id, name, comment } = data;
    fs.appendFile("./info.txt", `${id}//${name}//${comment}\n`);
}

exports.get_Visitor = async function(){
    var Buffer = await fs.readFile("./info.txt");
    return Buffer.toString();
}