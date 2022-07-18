const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107"
const naver = new URL(string);

const params = new URLSearchParams(naver.search);
for (const name of params.keys()) {
  console.log(name);
} 
// 1) 위의 URL 에서 모든 키를 가져오기

console.log( params.values() );
// 2) 위의 URL에서 모든 값을 가져오기

params.delete('sm');
// 3) 위의 URL에서 sm 키를 삭제하고 1)을 이용해 모든 키 가져오기

console.log( params.keys() );