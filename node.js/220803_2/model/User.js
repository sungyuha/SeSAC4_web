const fs = require("fs").promises;

exports.post_user = function( data ){
    const { id, pw, name, age } = data;
    fs.appendFile("./info.txt", `${id}//${pw}//${name}//${age}\n`);
}

exports.get_user = async function(){
    var Buffer = await fs.readFile("./info.txt");
    return Buffer.toString(); // Buffer로 받아오는데 우리는 Buffer를 읽을 수 없으니 toString 문자열로 바꾸어서 리턴
}