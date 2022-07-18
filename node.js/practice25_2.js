function call(name) {
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
        console.log( name );
        resolve( name );
        }, 1000);
    })
}


function back( txt ){
    return new Promise( function ( resolve, reject ) {
        setTimeout( function() {
            console.log("back");
            resolve("back");
        }, 1000);
    })
}
function hell(message) {
    return new Promise( function( resolve, reject ) {
        setTimeout(function() {
            console.log("callback hell");
            resolve( "callback hell" );
        }, 1000);
    })
}
call( 'kim' )
.then( function(name) {
    console.log( name + '반가워');
    return back();
})
.then( function(txt) {
    console.log( txt + "을 실행을 했구나");
    return hell();
    
})
.then( function(message) {
    console.log( "여기는" + message );
});