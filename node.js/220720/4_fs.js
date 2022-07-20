const fs = require("fs").promises;

// console.log(fs);

// fs.readFile("./test.txt", function(err, data) {
//     if (err) throw err;
    
//     console.log(data);

//     console.log(data.toString());
    
// });

fs.writeFile('./write.txt', '안녕')
    .then(() => {
        console.log( "작성 완료" );
    })
    .catch((err) => {
        console.log(err);
    });