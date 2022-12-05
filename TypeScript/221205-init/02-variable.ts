// : 타입 표기 ( Tpye Annotation )
let str: string = 'h1';
let num: number = 1;
let flag: boolean = true;
let age: number | string; // 넘버 타입도 들어 갈 수 있고, 스트링타입도 들어갈 수 있음
age = 10;
age = 'a';
let any: any; // 모든 타입의 변수를 허용

// Array
let arr1: number[] = [1,2,3,4,5];
let arr2: string[] = ['a','b','c','d'];
let arr3: Array<number> = [1,2,3,4,5];

// Tuple : 각 타입이 지정되어 있는 형식
let arr4: [string, number] = ['str', 1];
// arr4[1].concat() // concat은 문자를 연결해줌 -> 에러발생

// Enum : 특정한 값들의 집합을 만들어놓고, 그 집합중에서 선택 할 수 있게 해줌
enum Names {홍길동, 코딩온, 새싹};
let name1: Names = Names.홍길동;
name1 = Names.홍길동;

// void
// 함수 : 반환값이 없는 친구 / 변수 nudefined 와 null만 들어갈 수 있음
let void1: void = undefined; // 변수에서는 거의 사용하지 않음
function void2(): void {
    console.log('11');
}

// never
// 함수에 사용. 함수의 끝에 절대 도달하지 않음
// function neverEnd(): never { // 반환값이 never
//     while(true){

//     }
// }

let test: any; // 모든 타입 허용 -> 오류를 방지하려고 사용하는데 되도록이면 사용 하지 말아야 함
test = 1;
test = [1,2,3];

// let test2: object; // 기본타입을 제외한 나머지 모두 (array, tuple 등)
// test2 = 1;
// test2 = [1,2,3];
