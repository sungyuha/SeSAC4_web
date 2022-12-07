// 변수에 타입을 줄 때 -> :number
//var a: number = 1;
//console.log(a);

// 변수
// 키워드 변수이름: 타입 = 값;
var str1:string = '문자열';
var num1:number  = 1;
var flag:boolean = true;
var any: any; // 어떤 타입이든 다 담을 수 있음 / 예측을 하기 위해 타입스크립트 사용하는 건데, 되도록이면 사용하지 말기
any = 1;
any = '문자';
any = 'false';
any = [];

var arr1: number[] =[1,2,3,4,5];
var arr2:string[] = ['a', 'b'];
// 튜플 : 배열의 길이가 고정되어 있고 타입도 지정
var arr3:[string, number] = ['1', 2];
var arr4:object = [1, 'a'];

// eunm Values {값1, 값2};
// var v1:Values;
// v1 = Values.값1;


var v2: string|number;
v2 = 1;
v2 = 'a';
// 함수
/* 
function 함수이름(매개변수: 타입) : 반환값타입 {
    빈환값
}
*/

/*function sum1(a, b) {
    return a + b;
}
console.log(sum1(1, 'a'));
function sum2(a: number, b:number): number {
    return a + b;
}
console.log(sum2(1,2));
console.log(sum2(3, NaN));
function sum3(a: number, b?:number): number {
    return a;
}
console.log(sum3(1));

const func1 = (a:string) : void => {
    console.log("func1");
}
function func2() {
    console.log("func2");
}
// 인터페이스
interface Student {
    name: string,
    age: number,
    nickname?: string;
};
var stu1: Student = {
    name: '이름',
    age: 10
}
var stu2: Student = {
    name: '이름2',
    age: 20,
    nickname: 'student2'
}

interface Shape { 
    width: number;
    getLength(): number;
}
class Square implements Shape { // 규칙
    width: number;
    constructor(w:number){
        this.width = w;
    }
    heigth: number;
    getLength(): number {
        return 0;
    }
    // 규칙을 지킨다면 그 외의 속성이나 함수가 추가 되더라도 문제 없음
}*/


// 클래스
/*
class 클래스이름 {
    변수명1: 타입; // this.타입에 대한 변수를 정의
    constructor(변수명:타입, 변수명:타입) { // 매개변수로 받는 변수
        this.변수명1 = 변수명;
    }
}
*/
interface Developer {
    name: string;
    getName():string;
}
class Developer1 implements Developer{
    readonly name: string; // readonly : 값 변경 불가능
    constructor(name: string){
        this.name = name;
    }
    getName():string {
        return this.name;
    }
}
var dev1 = new Developer1("새싹");
// dev1.name = "SeSAC";
console.log(dev1.getName());

class Developer2 {
    constructor(readonly name: string) {} // 매개변수로 
    getName():string {
        return this.name;
    }
}

var dev2 = new Developer2("코딩온");
console.log(dev2.getName());

var abc = 1;
console.log(typeof(abc)); // typeof 는 dev2에 사용하면 오류 발생

// 타입 검사
// primitive type => typeof
// object type => instanceof
if (dev2 instanceof Developer2) { // instanceof는 기본 타입에 대한 검사 불가능
    
}

// 제네릭 (Generics)
// 재사용성을 높이기 위해서
// Array<number>
// Array<> -> 어떤 타입이든 담을 수 있음
// const [age, setAge] = useState<number>(0)

function getText<S>(text:S) : S { // 타입 지정은 함수를 불러올 때
    return text;
}
getText<number>(1); // 타입 예측 가능
getText<string>('a');
getText(1);
