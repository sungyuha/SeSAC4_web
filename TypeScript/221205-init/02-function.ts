/*
    function 함수이름 ( 변수명: 타입 ) : 반환타입 {}
*/

// const testfunction = ():string => {
//     return 'test';
// }
// console.log(testfunction()); -> es2015 분법

// function sum1(a,b) {
//     return a + b;
// }
// console.log(sum1(1, 'a'));
// console.log(sum1(1,null));
// function sum2(a:number, b:number):number {
//     return a + b;
// }
// console.log(sum2(1,2));
// function sum3(a:number, b?:number) {
//     return a + b;
// }
// console.log("sum3 : ", sum3(1));

// 환경설정이 ES2015 이먄, ES6 문법인데 최신 문법이면 ES2015환경으로 자동으로 변경해줌
const tetfunction = () => {
    return 'test'; 
}
 
// ES6문법
// console.log( tetfunction() );
// function sum1(a,b) {
//     return a + b;
// }
// console.log( sum1(1,'a') );
// console.log( sum1(1, null) );
// function sum2( a:number, b:number ):number {
//     return a + b;
// }
// console.log( sum2(1,2) );
// function sum3( a:number, b?:number ) {
//     return a + b;
// }
// console.log( "sum3 : ", sum3(1 ) );


let person = {name: '코딩온', age:10 };
function getInfo(obj: {name: string, age: number}){

}
// 함수 파라미터 사용할 때 interface 많이 사용
interface PersonData {
    /*readonly*/ name: string; // readonly를 지정하면 값이 변경 불가능 -> 읽기 전용이 됨
    age: number;
    nickname?: string;
}
function getInfo2(obj: PersonData){
    
}
// getInfo(person);
let person2:PersonData = {name: '코딩온', age:10};
person2.age = person2.age + 1;

interface login {
    (id: string, pw:string):boolean
};
// 규칙을 지정했으므로 반환값은 boolean이어야 함
let loginUser:login = (id,pw) => {
    return true;
}
interface Book {
    title: string;
    getInfo(): void;
    changeTitle(newTitle: string):void;
}
// 변수랑 함수를 같이 가지고 있는 class
class MyBook implements Book {
    title: '책';
    data = '2022-1205';
    getInfo() {
        console.log("정보")
    }
    changeTitle(newTitle: string): void {
        
    }
}