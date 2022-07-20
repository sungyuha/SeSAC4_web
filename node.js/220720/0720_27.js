const fs = require("fs").promises;

fs.mkdir("Sesac", (err) => {
    if (err) throw err;
}); // 현재 위치에서 Sesac 폴더 만들기

async function exec(){
    await fs.writeFile("./Sesac/sesac.txt", '반갑습니다'); // Sesac 폴더 안에서 fs 모듈 이용해 "sesac.txt 만들고 반갑습니다. 적기"
    await fs.copyFile("./Sesac/sesac.txt", "./Sesac/sesac2.txt"); // Sesac 폴더 안에 fs 모듈 이용해 "seeac.txt"를 복사해 "sesac2.txt" 만들기
    await fs.rename("./Sesac/sesac2.txt", "./Sesac/new.txt"); // Sesac 폴더 안의 "sesac2.txt"를 "new.txt"로 이름 바꾸기
}
exec();
