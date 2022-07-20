/* function func1(callback){
    callback();
}
function func2(a){
    console.log( " 안녕 " );
}

func1(func2)
// 나눠서 작성
*/

function func1(callback){
    callback();
}

func1(function (){
    console.log( "안녕" );
});
// 합쳐서 작성