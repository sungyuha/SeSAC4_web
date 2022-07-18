const { Console } = require("console");
const url = require("url");
const { URL } = url;
const string = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=sesac&oquery=sesac&tqi=hWg%2F8sprvmZss6uZF3GssssssfV-461107"
const naver = new URL(string);

const params = new URLSearchParams('foo=bar&foo=baz');
for (const name of params.keys()) {
  console.log(name);
}

console.log(url.getAll(key));

console.log( naver.searchParams );