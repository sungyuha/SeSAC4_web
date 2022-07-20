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
    callback("안녕");
}

func1(function (result){
    console.log( result );
});
// 합쳐서 작성

function func1(){
    return new Promise(function ( resolve, reject ) {
        resolve("안녕");
    })
}

func1()
    .then( function(result){
        console.log( result );
    });