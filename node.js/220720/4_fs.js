const fs = require("fs").promises;

// console.log(fs);

// fs.readFile("./test.txt", function(err, data) {
//     if (err) throw err;
    
//     console.log(data);

//     console.log(data.toString()); //callback 함수 
    
// });

// fs.writeFile('./write.txt', '안녕',)
//     .then(() => {
//         console.log( "작성 완료" );
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// 파일 만들기

// fs.copyFile("./write.txt", "./new.txt")
//     .then(() => {
//         console.log("복사완료");
//     })
//     .catch(() => {
//         console.log(err);
//     });

async function exec(){
    await fs.writeFile("./write.txt", "안녕");
    await fs.copyFile("./write.txt", "./new2.txt");
}
exec();