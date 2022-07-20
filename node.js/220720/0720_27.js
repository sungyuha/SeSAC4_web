const fs = require("fs").promises;

fs.mkdir("Sesac", (err) => {
    if (err) throw err;
});

async function exec(){
    await fs.writeFile("./Sesac/sesac.txt", '반갑습니다');
    await fs.copyFile("./Sesac/sesac.txt", "./Sesac/sesac2.txt");
    await fs.rename("./Sesac/sesac2.txt", "./Sesac/new.txt");
}
exec();