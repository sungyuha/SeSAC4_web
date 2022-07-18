const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%8C%94%EC%8B%B9"
const naver = new URL(string);

// console.log( url.format(naver) );
console.log( url.parse(string) );

console.log( naver.searchParams );