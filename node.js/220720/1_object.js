let obj = {
    key1: "value1",
    key2: "value2",
    key3: function(){
        console.log( "a" );
    }
};
// 객체 구조를 분해 시켜서 값을 가져올 수 있음
const { key1:key00, key2, key3, key4="a" } = obj;
key3();
console.log( key00 );

let obj2 = { a:1, b:2, c:3, d:4 };
const { a, b, ...rest } = obj2; // ...를 쓰면 나머지를 가져올 수 있다.

console.log( rest );